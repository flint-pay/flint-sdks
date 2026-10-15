<?php
declare(strict_types=1);
namespace Flint;
class SdkError extends \RuntimeException
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
    /** @param array{status?: int, requestId?: string|null, attempts?: int, durationMs?: float, ...}|null $meta */
    public static function create(
        string $kind,
        string $message,
        string $outcome = 'not_sent',
        bool $retryAllowed = false,
        ?array $meta = null,
        ?string $errorCode = null,
        mixed $details = null,
        ?\Throwable $previous = null,
        ?string $raw = null,
    ): self {
        $class = match ($kind) {
            'transport' => Errors\ConnectionError::class,
            'authentication' => Errors\AuthenticationError::class,
            'validation' => Errors\ValidationError::class,
            'rate_limit' => Errors\RateLimitError::class,
            'not_found' => Errors\NotFoundError::class,
            'conflict' => Errors\ConflictError::class,
            'server' => Errors\ServerError::class,
            'api' => Errors\ApiError::class,
            'protocol' => Errors\ProtocolError::class,
            'cancelled' => Errors\CancelledError::class,
            'deadline' => Errors\DeadlineError::class,
            'destination' => Errors\DestinationError::class,
            default => self::class,
        };
        // Standalone runtime use (without the generated Errors\ classes) keeps the base class.
        if (!class_exists($class)) {
            $class = self::class;
        }
        $error = new $class(
            $kind,
            $message,
            $outcome,
            $retryAllowed,
            $meta,
            $errorCode,
            $details,
            $previous,
            $raw,
        );
        // The factory's call frame identifies the original construction site.
        $caller = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2)[0];
        $error->file = $caller['file'] ?? $error->file;
        $error->line = $caller['line'] ?? $error->line;
        return $error;
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
