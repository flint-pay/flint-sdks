<?php
declare(strict_types=1);
namespace Flint;
final class RawNumber
{
    public function __construct(public readonly string $value) {}
}
