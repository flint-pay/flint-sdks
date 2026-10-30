<?php
declare(strict_types=1);
namespace Flint\Errors;
class ApiError extends \Flint\SdkError {
    public const RETRY_SAME_REQUEST = 'same_request';
    public const RETRY_AFTER_REFRESH = 'after_refresh';
    public const RETRY_NONE = 'none';
    /** @var list<array<string, mixed>> */
    public array $details = [];
    public ?string $type = null;
    public ?string $errorSource = null;
    public ?string $docUrl = null;
    public ?string $requestLogUrl = null;
    public ?array $remediation = null;
    public mixed $body = null;
}
