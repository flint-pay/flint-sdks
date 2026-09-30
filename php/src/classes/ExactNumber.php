<?php
declare(strict_types=1);
namespace Flint;
final class ExactNumber extends ParsedNumber
{
    public function __construct(string $value)
    {
        if (!preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/D', $value)) {
            Codec::fail('ExactNumber', 'expected a JSON number token');
        }
        parent::__construct($value);
    }
}
