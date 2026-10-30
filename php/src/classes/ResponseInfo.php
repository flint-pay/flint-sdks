<?php
declare(strict_types=1);
namespace Flint;
/** Complete response information; body is available only through explicit access. */
final class ResponseInfo
{
    public function __construct(
        public readonly int $status,
        public readonly array $headers,
        public readonly ?string $requestId,
        public readonly array $requestIds,
        public readonly ?string $idempotencyKey,
        public readonly int $attempts,
        public readonly float $durationMs,
        public readonly mixed $body,
    ) {}
    /** @internal */
    public static function from(array $meta, mixed $body): self
    {
        return new self(
            $meta['status'],
            $meta['headers'] ?? [],
            $meta['requestId'] ?? null,
            $meta['requestIds'] ?? [],
            $meta['idempotencyKey'] ?? null,
            $meta['attempts'],
            $meta['durationMs'],
            $body,
        );
    }
    public function __debugInfo(): array
    {
        return [
            'status' => $this->status,
            'requestId' => $this->requestId,
            'attempts' => $this->attempts,
            'durationMs' => $this->durationMs,
            'body' => '[Use body explicitly]',
        ];
    }
}
