<?php
declare(strict_types=1);
namespace Flint\Errors;
final class UnexpectedResponseError extends \Flint\SdkError {
    public ?array $event = null;
}
