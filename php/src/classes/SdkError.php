<?php
declare(strict_types=1);
namespace Flint;
class SdkError extends \RuntimeException implements \JsonSerializable
{
    public const KIND_TRANSPORT = 'transport';
    public const KIND_TIMEOUT = 'timeout';
    public const KIND_AUTHENTICATION = 'authentication';
    public const KIND_VALIDATION = 'validation';
    public const KIND_RATE_LIMIT = 'rate_limit';
    public const KIND_NOT_FOUND = 'not_found';
    public const KIND_CONFLICT = 'conflict';
    public const KIND_SERVER = 'server';
    public const KIND_API = 'api';
    public const KIND_PROTOCOL = 'protocol';
    public const KIND_CANCELLED = 'cancelled';
    public const KIND_DEADLINE = 'deadline';
    public const KIND_DESTINATION = 'destination';
    public const OUTCOME_NOT_SENT = 'not_sent';
    public const OUTCOME_RESPONSE = 'response';
    public const OUTCOME_UNKNOWN = 'unknown';
    public readonly ?int $status;
    public ?string $idempotencyKey = null;
    public int|float|null $retryAfterMs = null;

    /** @param array{status?: int|null, requestId?: string|null, attempts?: int, durationMs?: float, ...}|null $meta */
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
        if (isset($meta['status'])) {
            $context = ['HTTP ' . $meta['status']];
            if ($errorCode !== null) {
                $context[] = 'code ' . $errorCode;
            }
            if (isset($meta['requestId'])) {
                $context[] = 'requestId ' . $meta['requestId'];
            }
            $message .= ' [' . implode(', ', $context) . ']';
        }
        parent::__construct($message, $meta['status'] ?? 0, $previous);
        $this->status = $meta['status'] ?? null;
        $this->idempotencyKey = $meta['idempotencyKey'] ?? null;
    }
    /** @param array{status?: int|null, requestId?: string|null, attempts?: int, durationMs?: float, ...}|null $meta */
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
            'timeout' => Errors\TimeoutError::class,
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
    public function jsonSerialize(): array
    {
        return $this->__debugInfo();
    }
    public function __toString(): string
    {
        // Exception rendering otherwise includes previous exceptions and trace arguments.
        $frames = array_map(
            fn($frame) => ($frame['file'] ?? '[internal]') .
                ':' .
                ($frame['line'] ?? 0) .
                ' ' .
                ($frame['class'] ?? '') .
                ($frame['type'] ?? '') .
                $frame['function'],
            $this->getTrace(),
        );
        return static::class .
            ': ' .
            $this->message .
            ' in ' .
            $this->getFile() .
            ':' .
            $this->getLine() .
            "\nStack trace:\n" .
            implode("\n", $frames);
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
            'idempotencyKey' => $this->idempotencyKey,
            'retryAfterMs' => $this->retryAfterMs,
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
