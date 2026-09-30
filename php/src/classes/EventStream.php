<?php
declare(strict_types=1);
namespace Flint;
/** @implements \IteratorAggregate<int, ServerSentEvent> */
final class EventStream implements \IteratorAggregate
{
    private bool $closed = false;
    private bool $started = false;
    private float $created;
    public function __construct(
        private readonly ByteStream $source,
        public readonly array $meta,
        private readonly array $settings,
        private readonly \Closure $decode,
        private readonly \Closure $released,
    ) {
        $this->created = hrtime(true) / 1000000;
    }
    public function close(): void
    {
        if ($this->closed) {
            return;
        }
        $this->closed = true;
        $this->source->close();
        ($this->released)();
    }
    public function __debugInfo(): array
    {
        return [
            'meta' => array_intersect_key(
                $this->meta,
                array_flip(['status', 'requestId', 'attempts', 'durationMs']),
            ),
            'closed' => $this->closed,
        ];
    }
    public function getIterator(): \Traversable
    {
        if ($this->started) {
            throw new SdkError('validation', 'A stream can only be consumed once');
        }
        $this->started = true;
        $line = '';
        $data = '';
        $event = '';
        $id = '';
        $retry = null;
        $skipLF = false;
        $bytes = 0;
        $first = true;
        try {
            while (!$this->closed) {
                if (($this->settings['cancellation'] ?? null)?->isCancelled()) {
                    throw new SdkError(
                        'cancelled',
                        'Stream cancelled',
                        'response',
                        false,
                        $this->meta,
                    );
                }
                if (
                    isset($this->settings['lifetimeMs']) &&
                    hrtime(true) / 1000000 - $this->created >= $this->settings['lifetimeMs']
                ) {
                    throw new SdkError(
                        'deadline',
                        'Stream lifetime exceeded',
                        'response',
                        false,
                        $this->meta,
                    );
                }
                $wait = hrtime(true) / 1000000;
                $chunk = $this->source->read();
                if (($this->settings['cancellation'] ?? null)?->isCancelled()) {
                    throw new SdkError(
                        'cancelled',
                        'Stream cancelled',
                        'response',
                        false,
                        $this->meta,
                    );
                }
                if (hrtime(true) / 1000000 - $wait >= $this->settings['idleTimeoutMs']) {
                    throw new SdkError(
                        'deadline',
                        'Stream idle timeout exceeded',
                        'response',
                        false,
                        $this->meta,
                    );
                }
                if ($chunk === null) {
                    if (preg_match('//u', $line) !== 1) {
                        throw new SdkError(
                            'protocol',
                            'Invalid UTF-8 stream',
                            'response',
                            false,
                            $this->meta,
                        );
                    }
                    break;
                }
                for (
                    $index = 0, $length = strlen($chunk);
                    $index < $length && !$this->closed;
                    $index++
                ) {
                    if (($this->settings['cancellation'] ?? null)?->isCancelled()) {
                        throw new SdkError(
                            'cancelled',
                            'Stream cancelled',
                            'response',
                            false,
                            $this->meta,
                        );
                    }
                    if (
                        isset($this->settings['lifetimeMs']) &&
                        hrtime(true) / 1000000 - $this->created >= $this->settings['lifetimeMs']
                    ) {
                        throw new SdkError(
                            'deadline',
                            'Stream lifetime exceeded',
                            'response',
                            false,
                            $this->meta,
                        );
                    }
                    $character = $chunk[$index];
                    if ($skipLF) {
                        $skipLF = false;
                        if ($character === "\n") {
                            continue;
                        }
                    }
                    if (++$bytes > $this->settings['maxEventBytes']) {
                        throw new SdkError(
                            'protocol',
                            'SSE event exceeds configured size limit',
                            'response',
                            false,
                            $this->meta,
                        );
                    }
                    if ($character !== "\r" && $character !== "\n") {
                        $line .= $character;
                        continue;
                    }
                    $skipLF = $character === "\r";
                    if ($first) {
                        $first = false;
                        if (str_starts_with($line, "\xef\xbb\xbf")) {
                            $line = substr($line, 3);
                        }
                    }
                    if (preg_match('//u', $line) !== 1) {
                        throw new SdkError(
                            'protocol',
                            'Invalid UTF-8 stream',
                            'response',
                            false,
                            $this->meta,
                        );
                    }
                    if ($line === '') {
                        if ($data !== '') {
                            $raw = substr($data, 0, -1);
                            yield new ServerSentEvent(
                                $event === '' ? 'message' : $event,
                                $id,
                                ($this->decode)($event === '' ? 'message' : $event, $raw),
                                $raw,
                                $retry,
                            );
                        }
                        $data = '';
                        $event = '';
                        $bytes = 0;
                    } elseif ($line[0] !== ':') {
                        $parts = explode(':', $line, 2);
                        $field = $parts[0];
                        $value = $parts[1] ?? '';
                        if (str_starts_with($value, ' ')) {
                            $value = substr($value, 1);
                        }
                        if ($field === 'data') {
                            $data .= $value . "\n";
                        } elseif ($field === 'event') {
                            $event = $value;
                        } elseif ($field === 'id' && !str_contains($value, "\0")) {
                            $id = $value;
                        } elseif (
                            $field === 'retry' &&
                            preg_match('/^\d+$/D', $value) &&
                            (float) $value <= 9007199254740991
                        ) {
                            $retry = (int) $value;
                        }
                    }
                    $line = '';
                }
            }
        } catch (SdkError $error) {
            if ($error->kind !== 'validation') {
                throw $error;
            }
            throw new SdkError(
                'protocol',
                'Invalid SSE event payload',
                'response',
                false,
                $this->meta,
                previous: $error,
            );
        } catch (\Throwable $error) {
            throw new SdkError(
                'protocol',
                'Invalid or interrupted SSE stream',
                'response',
                false,
                $this->meta,
                previous: $error,
            );
        } finally {
            $this->close();
        }
    }
    public function __destruct()
    {
        $this->close();
    }
}
