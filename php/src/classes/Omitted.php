<?php
declare(strict_types=1);
namespace Flint;
/** @internal Default marker distinguishes omitted named arguments from explicit null. */
enum Omitted
{
    case Value;
}
