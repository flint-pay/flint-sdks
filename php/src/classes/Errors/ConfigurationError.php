<?php
declare(strict_types=1);
namespace Flint\Errors;
final class ConfigurationError extends \Flint\SdkError {
    public mixed $workloadIdentity = null;
}
