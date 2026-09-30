<?php
declare(strict_types=1);
namespace Flint;
final class SdkError extends \RuntimeException
{
    public readonly ?int $status;

    /** @param array{status?: int, requestId?: string|null, attempts?: int, durationMs?: float, ...}|null $meta */
    public function __construct(
        public readonly string $kind,
        string $message,
        public readonly string $outcome = 'not_sent',
        public readonly bool $retryAllowed = false,
        public readonly ?array $meta = null,
        public readonly ?string $errorCode = null,
        public readonly mixed $details = null,
        ?\Throwable $previous = null,
        public readonly ?string $raw = null,
    ) {
        parent::__construct($message, 0, $previous);
        $this->status = $meta['status'] ?? null;
    }
    public function __debugInfo(): array
    {
        return [
            'kind' => $this->kind,
            'message' => $this->message,
            'outcome' => $this->outcome,
            'requestId' => $this->meta['requestId'] ?? null,
            'status' => $this->status,
            'retryAllowed' => $this->retryAllowed,
            'errorCode' => $this->errorCode,
            'details' => $this->details,
            'file' => $this->getFile(),
            'line' => $this->getLine(),
            // Trace arguments can contain raw response bodies and credentials.
            'stack' => array_map(
                fn($frame) => array_intersect_key(
                    $frame,
                    array_flip(['file', 'line', 'class', 'type', 'function']),
                ),
                $this->getTrace(),
            ),
        ];
    }
}
