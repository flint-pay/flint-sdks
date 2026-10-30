<?php
declare(strict_types=1);
namespace Flint;
class SdkError extends \RuntimeException implements \JsonSerializable
{
    public const OUTCOME_NOT_SENT = 'not_sent';
    public const OUTCOME_RESPONSE = 'response';
    public const OUTCOME_UNKNOWN = 'unknown';
    /** @var string */
    public $code = '';
    /** @var \WeakMap<SdkError, string>|null */
    private static ?\WeakMap $kinds = null;
    /** @param list<string> $requestIds
     * @param array<string, string> $headers
     */
    public function __construct(
        string $message,
        string $code = '',
        public ?string $operation = null,
        public string $outcome = 'not_sent',
        public bool $retryAllowed = false,
        public ?int $status = null,
        public ?string $requestId = null,
        public array $requestIds = [],
        public ?string $idempotencyKey = null,
        public int $attempts = 0,
        public ?float $durationMs = null,
        public int|float|null $retryAfterMs = null,
        public array $headers = [],
        public readonly ?string $raw = null,
        ?\Throwable $previous = null,
        mixed $details = null,
        public ?string $param = null,
        ?string $type = null,
        ?string $errorSource = null,
        ?string $docUrl = null,
        ?string $requestLogUrl = null,
        ?array $remediation = null,
        mixed $body = null,
        mixed $nextPageToken = null,
        int $pages = 0,
    ) {
        parent::__construct($message, 0, $previous);
        $this->code =
            $code !== ''
                ? $code
                : ($this instanceof Errors\PaginationLimitError
                    ? 'pagination_limit_exceeded'
                    : '');
        if ($this instanceof Errors\ConfigurationError) {
            $this->param = null;
        }
        if ($this instanceof Errors\PaginationLimitError) {
            $this->nextPageToken = $nextPageToken;
            $this->pages = $pages;
        }
        if ($requestIds === [] && $requestId !== null) {
            $this->requestIds = [$requestId];
        }
        if ($this instanceof Errors\InvalidInputError) {
            $this->details = is_array($details) && array_is_list($details) ? $details : [];
        }
        if ($this instanceof Errors\ApiError) {
            $this->details = is_array($details) && array_is_list($details) ? $details : [];
            $this->type = $type;
            $this->errorSource = $errorSource;
            $this->docUrl = $docUrl;
            $this->requestLogUrl = $requestLogUrl;
            $this->remediation = $remediation;
            $this->body = $body;
        }
    }
    /** Internal migration adapter; removed when call sites migrate.
     * @param array<string, mixed>|null $meta
     */
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
        $status = $meta['status'] ?? null;
        $class =
            $status >= 400 &&
            $status < 600 &&
            !in_array($kind, ['transport', 'timeout', 'deadline', 'cancelled'], true)
                ? match (true) {
                    $status === 400 || $status === 422 => Errors\InvalidRequestError::class,
                    $status === 401 => Errors\AuthenticationError::class,
                    $status === 403 => Errors\PermissionError::class,
                    $status === 404 => Errors\NotFoundError::class,
                    $status === 409 || $status === 412 => Errors\ConflictError::class,
                    $status === 429 => Errors\RateLimitError::class,
                    $status >= 500 => Errors\ServerError::class,
                    default => Errors\ApiError::class,
                }
                : match (true) {
                    $kind === 'webhook' => Errors\WebhookVerificationError::class,
                    $kind === 'transport' => Errors\ConnectionError::class,
                    $kind === 'timeout' || $kind === 'deadline' => Errors\TimeoutError::class,
                    $kind === 'cancelled' => Errors\CancelledError::class,
                    $kind === 'protocol' ||
                        $kind === 'api' ||
                        ($kind === 'destination' && $meta !== null)
                        => Errors\UnexpectedResponseError::class,
                    $kind === 'authentication' ||
                        $kind === 'destination' ||
                        $kind === 'configuration'
                        => Errors\ConfigurationError::class,
                    default => Errors\InvalidInputError::class,
                };
        if (!class_exists($class)) {
            $class = self::class;
        }
        if (is_a($class, Errors\InvalidInputError::class, true)) {
            $errorCode = 'INVALID_REQUEST';
            if (!is_array($details) || !array_is_list($details) || !$details) {
                $details = [['code' => 'INVALID_VALUE', 'param' => 'body']];
            }
        }
        if (is_a($class, Errors\ConfigurationError::class, true) && $errorCode === null) {
            $errorCode = $kind === 'destination' ? 'invalid_destination' : 'credential_invalid';
        }
        $error = new $class(
            $message,
            code: $errorCode ?? '',
            outcome: $outcome,
            retryAllowed: $retryAllowed,
            status: $status,
            requestId: $meta['requestId'] ?? null,
            requestIds: $meta['requestIds'] ?? [],
            idempotencyKey: $meta['idempotencyKey'] ?? null,
            attempts: $meta['attempts'] ?? 0,
            durationMs: $meta['durationMs'] ?? null,
            headers: $meta['headers'] ?? [],
            details: $details,
            param: is_a($class, Errors\InvalidInputError::class, true)
                ? $details[0]['param'] ?? 'body'
                : null,
            previous: $previous,
            raw: $raw,
        );
        if ($error instanceof Errors\ConfigurationError && is_array($details)) {
            $identity = $details;
            if (array_key_exists('error_description', $identity)) {
                $identity['errorDescription'] = $identity['error_description'];
                unset($identity['error_description']);
            }
            $error->workloadIdentity = $identity;
        }
        if (
            $error instanceof Errors\UnexpectedResponseError &&
            is_array($details) &&
            isset($details['eventId'], $details['position'])
        ) {
            $error->event = ['id' => $details['eventId'], 'position' => $details['position']];
        }
        self::$kinds ??= new \WeakMap();
        self::$kinds[$error] = $kind;
        $caller = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 2)[0];
        $error->file = $caller['file'] ?? $error->file;
        $error->line = $caller['line'] ?? $error->line;
        return $error;
    }
    /** @internal */
    public static function internalKind(self $error): ?string
    {
        return self::$kinds[$error] ??
            ($error instanceof Errors\InvalidInputError ? 'validation' : null);
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
            ($this->status !== null
                ? ' [HTTP ' .
                    $this->status .
                    ', ' .
                    $this->code .
                    ($this->requestId !== null ? ', ' . $this->requestId : '') .
                    ']'
                : '') .
            ' in ' .
            $this->getFile() .
            ':' .
            $this->getLine() .
            "\nStack trace:\n" .
            implode("\n", $frames);
    }
    public function __debugInfo(): array
    {
        $previous = $this->getPrevious();
        return [
            'name' => substr(strrchr(static::class, '\\') ?: static::class, 1),
            'message' => $this->message,
            'code' => $this->code,
            ...$this->param !== null ? ['param' => $this->param] : [],
            'operation' => $this->operation,
            'outcome' => $this->outcome,
            'retryAllowed' => $this->retryAllowed,
            'status' => $this->status,
            'requestId' => $this->requestId,
            'requestIds' => $this->requestIds,
            'idempotencyKey' => $this->idempotencyKey,
            'attempts' => $this->attempts,
            'retryAfterMs' => $this->retryAfterMs,
            ...$this instanceof Errors\ApiError
                ? [
                    'type' => $this->type,
                    'param' => $this->param,
                    'errorSource' => $this->errorSource,
                    'docUrl' => $this->docUrl,
                    'remediation' => $this->remediation,
                    'details' => $this->details,
                ]
                : [],
            ...$this instanceof Errors\InvalidInputError ? ['details' => $this->details] : [],
            ...$this instanceof Errors\PaginationLimitError
                ? ['nextPageToken' => $this->nextPageToken, 'pages' => $this->pages]
                : [],
            'cause' =>
                $previous !== null
                    ? [
                        'name' => $previous instanceof \TypeError ? 'TypeError' : 'Error',
                        'code' => $previous->getCode(),
                    ]
                    : null,
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
