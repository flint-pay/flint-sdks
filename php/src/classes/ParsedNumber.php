<?php
declare(strict_types=1);
namespace Flint;
/** JSON numeric meaning, established by the parser or a positive codec declaration. */
class ParsedNumber
{
    public function __construct(public readonly string $value) {}
}
