<?php
declare(strict_types=1);
namespace Flint;
/** @internal A response value already normalized by the operation codec. */
final class DecodedResponseValue
{
    public function __construct(public readonly mixed $value) {}
}
