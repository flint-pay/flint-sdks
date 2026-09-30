<?php
declare(strict_types=1);
namespace Flint;
/** Owns one incremental connection; at most one cURL write chunk is queued. */
final class CurlByteStream implements ByteStream
{
    private ?\CurlHandle $handle = null;
    private ?\CurlMultiHandle $multi = null;
    private ?string $pending = null;
    private bool $paused = false;
    private bool $done = false;
    private bool $headersDone = false;
    private bool $streaming = false;
    private ?int $failure = null;
    public int $status = 0;
    public array $headers = [];
    private float $started;
    public function __construct(private readonly array $request)
    {
        $this->started = self::now();
        $this->handle = curl_init();
        $this->multi = curl_multi_init();
        curl_setopt_array($this->handle, [
            CURLOPT_URL => $request['url'],
            CURLOPT_CUSTOMREQUEST => $request['method'],
            CURLOPT_HTTPHEADER => array_map(
                fn($key, $value) => $value === '' ? "$key;" : "$key: $value",
                array_keys($request['headers']),
                $request['headers'],
            ),
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_ENCODING => '',
            CURLOPT_CONNECTTIMEOUT_MS => (int) $request['timeoutMs'],
            CURLOPT_PROTOCOLS => CURLPROTO_HTTP | CURLPROTO_HTTPS,
            CURLOPT_SUPPRESS_CONNECT_HEADERS => true,
            CURLOPT_HEADERFUNCTION => function ($handle, string $line): int {
                if (preg_match('/^HTTP\/\S+\s+(\d+)/', $line, $matches)) {
                    $this->status = (int) $matches[1];
                    $this->headers = [];
                } elseif (trim($line) === '' && $this->status >= 200) {
                    $this->headersDone = true;
                } elseif (str_contains($line, ':')) {
                    [$key, $value] = explode(':', $line, 2);
                    $this->headers[strtolower(trim($key))] = trim($value);
                }
                return strlen($line);
            },
            CURLOPT_WRITEFUNCTION => function ($handle, string $chunk): int {
                if ($this->pending !== null) {
                    $this->paused = true;
                    return CURL_WRITEFUNC_PAUSE;
                }
                $this->pending = $chunk;
                return strlen($chunk);
            },
        ]);
        if ($request['body'] !== null) {
            curl_setopt($this->handle, CURLOPT_POSTFIELDS, $request['body']);
        }
        curl_multi_add_handle($this->multi, $this->handle);
        try {
            while (!$this->headersDone && !$this->done) {
                $this->pump($this->started, (int) $request['timeoutMs']);
            }
            $this->checkFailure();
        } catch (\Throwable $error) {
            $this->close();
            throw $error;
        }
    }
    private static function now(): float
    {
        return hrtime(true) / 1000000;
    }
    private function checkFailure(): void
    {
        if ($this->failure !== null && $this->failure !== CURLE_OK) {
            if (!$this->streaming) {
                // Before delivery, Runtime owns retry classification.
                throw new \RuntimeException('Streaming connection failed');
            }
            throw new SdkError('transport', 'Streaming transport failed', 'unknown');
        }
    }
    private function checkRequestTimeout(): void
    {
        if (!$this->streaming && self::now() - $this->started >= $this->request['timeoutMs']) {
            // Let Runtime classify the exhausted overall/per-attempt budget and
            // retain its normal transport retry policy for buffered responses.
            throw new \RuntimeException('Response exceeded the request timeout');
        }
    }
    /** Transfer connection ownership only after Runtime accepts an SSE response. */
    public function startStream(): void
    {
        try {
            $this->checkRequestTimeout();
            $this->streaming = true;
            $this->started = self::now();
        } catch (\Throwable $error) {
            $this->close();
            throw $error;
        }
    }
    private function pump(float $waitStart, int $timeout): void
    {
        $this->checkRequestTimeout();
        if (($this->request['cancellation'] ?? null)?->isCancelled()) {
            throw new SdkError('cancelled', 'Stream cancelled', 'response');
        }
        if ($this->streaming && self::now() - $waitStart >= $timeout) {
            throw new SdkError(
                'deadline',
                'Stream idle or connection timeout exceeded',
                'response',
            );
        }
        if (
            $this->streaming &&
            isset($this->request['streamLifetimeMs']) &&
            self::now() - $this->started >= $this->request['streamLifetimeMs']
        ) {
            throw new SdkError('deadline', 'Stream lifetime exceeded', 'response');
        }
        if ($this->multi === null) {
            return;
        }
        $code = curl_multi_exec($this->multi, $running);
        if ($code !== CURLM_OK) {
            if (!$this->streaming) {
                // Before delivery, Runtime owns retry classification.
                throw new \RuntimeException('Streaming connection failed');
            }
            throw new SdkError('transport', 'Streaming transport failed', 'unknown');
        }
        while ($info = curl_multi_info_read($this->multi)) {
            $this->done = true;
            $this->failure = $info['result'];
        }
        if (!$this->done && $this->pending === null) {
            $wait = $this->streaming
                ? 0.05
                : min(
                    0.05,
                    max(0, ($this->request['timeoutMs'] - (self::now() - $this->started)) / 1000),
                );
            if (curl_multi_select($this->multi, $wait) === -1) {
                usleep(1000);
            }
        }
    }
    public function read(): ?string
    {
        try {
            $waitStart = self::now();
            while ($this->handle !== null) {
                $this->checkRequestTimeout();
                if (($this->request['cancellation'] ?? null)?->isCancelled()) {
                    throw new SdkError('cancelled', 'Stream cancelled', 'response');
                }
                if ($this->pending !== null) {
                    $chunk = $this->pending;
                    $this->pending = null;
                    return $chunk;
                }
                if ($this->done) {
                    $this->checkFailure();
                    $this->close();
                    return null;
                }
                if ($this->paused) {
                    $this->paused = false;
                    curl_pause($this->handle, CURLPAUSE_CONT);
                }
                $this->pump($waitStart, $this->request['streamIdleTimeoutMs'] ?? 30000);
            }
            return null;
        } catch (\Throwable $error) {
            $this->close();
            throw $error;
        }
    }
    public function close(): void
    {
        if ($this->handle !== null && $this->multi !== null) {
            curl_multi_remove_handle($this->multi, $this->handle);
        }
        $this->handle = null;
        $this->multi = null;
        $this->pending = null;
    }
    public function __destruct()
    {
        $this->close();
    }
    public function __debugInfo(): array
    {
        return ['status' => $this->status];
    }
}
