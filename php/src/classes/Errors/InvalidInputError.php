<?php
declare(strict_types=1);
namespace Flint\Errors;
final class InvalidInputError extends \Flint\SdkError {
    /** @var list<array{code: string, param: string}> */
    public array $details = [];
}
