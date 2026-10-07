<?php
declare(strict_types=1);
namespace Flint;
final class Codec
{
    private const ANY_CODEC = [
        'value' => ['kind' => 'dynamic'],
        'nullable' => true,
        'modelObjectInput' => false,
        'requiredInput' => [],
        'requiredOutput' => [],
        'rejectInput' => false,
        'hiddenOutput' => false,
        'sensitive' => false,
        'checks' => [],
    ];
    public static function assertPlan(mixed $value, string $path = 'codec', int $depth = 0): void
    {
        $invalid = static fn($reason) => throw new \InvalidArgumentException(
            "$path: invalid compiled codec ($reason)",
        );
        if ($depth > 256 || !is_array($value)) {
            $invalid('shape or nesting limit');
        }
        if (isset($value['numberInput']) && $value['numberInput'] !== 'explicit') {
            $invalid('number input representation');
        }
        if (
            isset($value['numberInput']) &&
            !in_array($value['value']['kind'] ?? null, ['decimal', 'exact-integer'], true)
        ) {
            $invalid('number input requires an exact numeric instruction');
        }
        if (!is_array($value['value'] ?? null)) {
            $invalid('missing value instruction');
        }
        if (
            ($value['value']['kind'] ?? null) === 'opaque' &&
            !is_string($value['value']['label'] ?? null)
        ) {
            $invalid('missing opaque label');
        }
        self::wireKind($value['value']);
        foreach (
            ['nullable', 'modelObjectInput', 'rejectInput', 'hiddenOutput', 'sensitive']
            as $key
        ) {
            if (!is_bool($value[$key] ?? null)) {
                $invalid('missing boolean ' . $key);
            }
        }
        foreach (['requiredInput', 'requiredOutput'] as $key) {
            if (!is_array($value[$key] ?? null)) {
                $invalid('invalid required keys');
            }
            foreach ($value[$key] as $name) {
                if (!is_string($name)) {
                    $invalid('invalid required key');
                }
            }
        }
        if (!is_array($value['checks'] ?? null)) {
            $invalid('missing checks');
        }
        foreach ($value['checks'] as $key => $item) {
            if ($key === 'uniqueItems') {
                if (!is_bool($item)) {
                    $invalid('invalid uniqueness constraint');
                }
                continue;
            }
            if ($key === 'multipleOf' && ((!is_int($item) && !is_float($item)) || $item <= 0)) {
                $invalid('invalid positive divisor');
            }
            if (
                in_array($key, ['minProperties', 'maxProperties'], true) &&
                (!is_int($item) || $item < 0 || $item > 9007199254740991)
            ) {
                $invalid('invalid property bound');
            }
            if (
                $key === 'pattern'
                    ? !is_string($item)
                    : !in_array(
                            $key,
                            [
                                'minimum',
                                'maximum',
                                'exclusiveMinimum',
                                'exclusiveMaximum',
                                'multipleOf',
                                'minLength',
                                'maxLength',
                                'minItems',
                                'maxItems',
                                'minProperties',
                                'maxProperties',
                            ],
                            true,
                        ) ||
                        (!is_int($item) && !is_float($item)) ||
                        !is_finite((float) $item)
            ) {
                $invalid('invalid constraint');
            }
        }
        foreach (['reference', 'tag', 'phpPattern'] as $key) {
            if (isset($value[$key]) && !is_string($value[$key])) {
                $invalid('invalid ' . $key);
            }
        }
        if (isset($value['literal'])) {
            if (!is_string($value['literal'])) {
                $invalid('invalid literal');
            }
            try {
                json_decode($value['literal'], false, 512, JSON_THROW_ON_ERROR);
            } catch (\JsonException) {
                $invalid('invalid literal JSON');
            }
        }
        if (isset($value['constraints']) && !is_bool($value['constraints'])) {
            $invalid('invalid policy');
        }
        if (isset($value['objectOnlyAlternative']) && !is_bool($value['objectOnlyAlternative'])) {
            $invalid('invalid alternative policy');
        }
        if (array_key_exists('nullableAlternative', $value)) {
            $branches = $value['exactlyOne'] ?? ($value['some'] ?? null);
            $index = $value['nullableAlternative'];
            if (
                !is_int($index) ||
                !in_array($index, [0, 1], true) ||
                !is_array($branches) ||
                count($branches) !== 2 ||
                isset($value['exactlyOne'], $value['some']) ||
                ($branches[1 - $index]['value']['kind'] ?? null) !== 'null'
            ) {
                $invalid('invalid nullable alternative policy');
            }
            $concrete = $branches[$index];
            if (
                !isset($concrete['reference']) &&
                (($concrete['nullable'] ?? null) !== false ||
                    in_array(
                        $concrete['value']['kind'] ?? null,
                        ['dynamic', 'null', 'null-array', 'opaque'],
                        true,
                    ) ||
                    isset($concrete['some']) ||
                    isset($concrete['exactlyOne']))
            ) {
                $invalid('invalid concrete nullable alternative');
            }
        }
        if (isset($value['range'])) {
            if (!is_array($value['range']) || count($value['range']) !== 2) {
                $invalid('invalid range');
            }
            foreach ($value['range'] as $bound) {
                if (!is_string($bound) || !preg_match('/^-?\d+$/', $bound)) {
                    $invalid('invalid range bound');
                }
            }
        }
        if (isset($value['members']) && !is_array($value['members'])) {
            $invalid('invalid members');
        }
        if (
            isset($value['tagValues']) &&
            (!is_array($value['tagValues']) ||
                array_filter($value['tagValues'], fn($tag) => !is_string($tag)))
        ) {
            $invalid('invalid discriminator values');
        }
        foreach (['fields', 'definitions', 'every', 'some', 'exactlyOne'] as $key) {
            if (!isset($value[$key])) {
                continue;
            }
            if (!is_array($value[$key])) {
                $invalid('invalid ' . $key);
            }
            foreach ($value[$key] as $name => $child) {
                self::assertPlan($child, "$path.$key.$name", $depth + 1);
            }
        }
        foreach (['element', 'exclude', 'includes'] as $key) {
            if (isset($value[$key])) {
                self::assertPlan($value[$key], "$path.$key", $depth + 1);
            }
        }
        if (isset($value['when'])) {
            if (!is_array($value['when'])) {
                $invalid('invalid conditional');
            }
            self::assertPlan($value['when']['test'] ?? null, "$path.when.test", $depth + 1);
            foreach (['then', 'else'] as $key) {
                if (isset($value['when'][$key])) {
                    self::assertPlan($value['when'][$key], "$path.when.$key", $depth + 1);
                }
            }
        }
        if (isset($value['extra']) && !is_bool($value['extra'])) {
            self::assertPlan($value['extra'], "$path.extra", $depth + 1);
        }
    }
    private static ?\WeakMap $validationFailures = null;

    /** @internal Only codec-authored diagnostics may be promoted into response errors. */
    public static function validationFailureMessage(\Throwable $error): ?string
    {
        return self::$validationFailures[$error] ?? null;
    }

    public static function fail(string $path, string $reason): never
    {
        $message = "$path: $reason";
        $error = new SdkError('validation', $message);
        self::$validationFailures ??= new \WeakMap();
        self::$validationFailures[$error] = $message;
        throw $error;
    }
    public static function parse(string $text, bool $preserveNumbers = false): mixed
    {
        // This tree supplies token kinds only; rounded values are never returned.
        $original = json_decode($text, false, 512, JSON_THROW_ON_ERROR);
        $encoded = '';
        $quoted = false;
        $escaped = false;
        $length = strlen($text);
        for ($i = 0; $i < $length; ) {
            $c = $text[$i];
            if ($quoted) {
                $encoded .= $c;
                $i++;
                if ($escaped) {
                    $escaped = false;
                } elseif ($c === '\\') {
                    $escaped = true;
                } elseif ($c === '"') {
                    $quoted = false;
                }
                continue;
            }
            if ($c === '"') {
                $quoted = true;
                $encoded .= $c;
                $i++;
                continue;
            }
            if ($c === '-' || ctype_digit($c)) {
                preg_match(
                    '/\G-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/',
                    $text,
                    $matches,
                    0,
                    $i,
                );
                $token = $matches[0];
                $safe =
                    preg_match('/^-?(?:0|[1-9]\d*)$/', $token) &&
                    abs((float) $token) <= 9007199254740991;
                $encoded .= $safe ? $token : json_encode($token, JSON_THROW_ON_ERROR);
                $i += strlen($token);
                continue;
            }
            $encoded .= $c;
            $i++;
        }
        $parsed = json_decode($encoded, false, 512, JSON_THROW_ON_ERROR | JSON_BIGINT_AS_STRING);
        return $preserveNumbers ? self::markNumbers($parsed, $original) : $parsed;
    }
    private static function markNumbers(mixed $value, mixed $original): mixed
    {
        if ((is_int($original) || is_float($original)) && is_string($value)) {
            return new ParsedNumber($value);
        }
        if (is_array($value)) {
            foreach ($value as $key => $child) {
                $value[$key] = self::markNumbers($child, $original[$key]);
            }
        } elseif (is_object($value)) {
            foreach ($value as $key => $child) {
                $value->{$key} = self::markNumbers($child, $original->{$key});
            }
        }
        return $value;
    }
    public static function plainNumbers(mixed $value): mixed
    {
        if ($value instanceof ParsedNumber) {
            return $value->value;
        }
        if (is_array($value)) {
            foreach ($value as $key => $child) {
                $value[$key] = self::plainNumbers($child);
            }
        } elseif (is_object($value)) {
            foreach ($value as $key => $child) {
                $value->{$key} = self::plainNumbers($child);
            }
        }
        return $value;
    }
    private static function integerToken(string $token, string $path): string
    {
        if (preg_match('/^-?(?:0|[1-9]\d*)$/', $token)) {
            return $token;
        }
        [$coefficient, $exponent] = array_pad(explode('e', strtolower($token)), 2, '0');
        $fraction = strlen(explode('.', $coefficient)[1] ?? '');
        $digits = ltrim(str_replace('.', '', ltrim($coefficient, '-')), '0');
        if ($digits === '') {
            return '0';
        }
        $shift = (float) $exponent - $fraction;
        if ($shift < 0) {
            if (
                -$shift >= strlen($digits) ||
                preg_match('/[1-9]/', substr($digits, (int) $shift))
            ) {
                self::fail($path, 'expected an integral JSON number');
            }
            $digits = substr($digits, 0, (int) $shift);
        } else {
            if ($shift > 10000) {
                self::fail($path, 'integer exponent expansion exceeds 10000 digits');
            }
            $digits .= str_repeat('0', (int) $shift);
        }
        return (str_starts_with($token, '-') ? '-' : '') . $digits;
    }
    private static function combine(mixed $left, mixed $right, string $path, mixed $source): mixed
    {
        if ($left instanceof ParsedNumber || $right instanceof ParsedNumber) {
            $token = $left instanceof ParsedNumber ? $left : $right;
            $other = $left instanceof ParsedNumber ? $right : $left;
            if (
                (is_int($other) || is_float($other)) &&
                is_finite((float) $other) &&
                (float) $other === (float) $token->value
            ) {
                return $other;
            }
            $text =
                $other instanceof ParsedNumber || $other instanceof RawNumber
                    ? $other->value
                    : (is_scalar($other)
                        ? (string) $other
                        : '');
            if (
                !preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/', $text) ||
                self::compareDecimal($token->value, $text) !== 0
            ) {
                self::fail($path, 'alternatives have incompatible numeric representations');
            }
            return $other instanceof RawNumber ? new RawNumber($token->value) : $other;
        }
        if ($left instanceof RawNumber || $right instanceof RawNumber) {
            $token = $left instanceof RawNumber ? $left : $right;
            $other = $left instanceof RawNumber ? $right : $left;
            if (
                $source instanceof ParsedNumber &&
                $token->value === $source->value &&
                (is_int($other) || is_float($other)) &&
                is_finite((float) $other) &&
                (float) $other === (float) $source->value
            ) {
                return $token;
            }
            $text =
                $other instanceof RawNumber
                    ? $other->value
                    : (is_scalar($other)
                        ? (string) $other
                        : '');
            if (
                !preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/', $text) ||
                self::compareDecimal($token->value, $text) !== 0
            ) {
                self::fail($path, 'alternatives have incompatible numeric representations');
            }
            return $token;
        }
        // The shared source view retains JSON numeric identity after branches
        // have decoded their tokens into public SDK strings.
        // Prefer the exact projection when both branches validated the same token.
        if ($source instanceof ParsedNumber) {
            $exact = is_string($left) ? $left : (is_string($right) ? $right : null);
            $native =
                is_int($left) || is_float($left)
                    ? $left
                    : (is_int($right) || is_float($right)
                        ? $right
                        : null);
            if (
                $exact !== null &&
                $native !== null &&
                is_finite((float) $native) &&
                preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/', $exact) &&
                self::compareDecimal($source->value, $exact) === 0 &&
                (float) $native === (float) $source->value
            ) {
                return $exact;
            }
        }
        if (
            $source instanceof ParsedNumber &&
            is_string($left) &&
            is_string($right) &&
            $left !== $right
        ) {
            $pattern = '/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/';
            if (
                !preg_match($pattern, $left) ||
                !preg_match($pattern, $right) ||
                self::compareDecimal($source->value, $left) !== 0 ||
                self::compareDecimal($source->value, $right) !== 0
            ) {
                self::fail($path, 'alternatives have incompatible numeric representations');
            }
            return $source->value;
        }
        if ((is_array($left) || is_object($left)) && (is_array($right) || is_object($right))) {
            $a = (array) $left;
            $b = (array) $right;
            $out = [];
            $original = is_array($source) || is_object($source) ? (array) $source : [];
            foreach (array_unique(array_merge(array_keys($a), array_keys($b))) as $key) {
                $out[$key] =
                    array_key_exists($key, $a) && array_key_exists($key, $b)
                        ? self::combine($a[$key], $b[$key], "$path.$key", $original[$key] ?? null)
                        : (array_key_exists($key, $a)
                            ? $a[$key]
                            : $b[$key]);
            }
            return is_object($left) || is_object($right) ? (object) $out : $out;
        }
        if ($left === $right) {
            return $right;
        }
        if (
            (is_int($left) || is_float($left)) &&
            (is_int($right) || is_float($right)) &&
            self::compareDecimal(self::numberText($left), self::numberText($right)) === 0
        ) {
            return is_float($left) ? $left : $right;
        }
        foreach ([[$left, $right], [$right, $left]] as [$number, $text]) {
            if (
                (is_int($number) || is_float($number)) &&
                is_string($text) &&
                preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/', $text) &&
                self::compareDecimal(self::numberText($number), $text) === 0
            ) {
                return $text;
            }
        }
        self::fail($path, 'alternatives have incompatible representations');
    }
    private static function compareDecimal(string $left, string $right): int
    {
        $parts = static function (string $value): array {
            $tokens = explode('e', strtolower($value));
            $negative = str_starts_with($tokens[0], '-');
            $unsigned = ltrim($tokens[0], '-');
            $fraction = strlen(explode('.', $unsigned)[1] ?? '');
            $digits = ltrim(str_replace('.', '', $unsigned), '0');
            $exponent = max(-1000000000, min(1000000000, (float) ($tokens[1] ?? '0')));
            return [
                $digits === '' ? 0 : ($negative ? -1 : 1),
                $digits,
                (int) $exponent - $fraction + strlen($digits),
            ];
        };
        [$as, $ad, $ap] = $parts($left);
        [$bs, $bd, $bp] = $parts($right);
        if ($as !== $bs) {
            return $as <=> $bs;
        }
        if ($as === 0) {
            return 0;
        }
        if ($ap !== $bp) {
            return $as * ($ap <=> $bp);
        }
        $size = max(strlen($ad), strlen($bd));
        return $as * (strcmp(str_pad($ad, $size, '0'), str_pad($bd, $size, '0')) <=> 0);
    }
    private static function shiftedExponent(string $exponent, int $offset): string
    {
        $negative = str_starts_with($exponent, '-');
        $digits = ltrim($exponent, '+-0');
        if (strlen($digits) < 15) {
            return (string) ((int) $exponent + $offset);
        }
        $carry = $negative ? -$offset : $offset;
        for ($i = strlen($digits) - 1; $i >= 0 && $carry !== 0; $i--) {
            $sum = (int) $digits[$i] + $carry;
            $digit = (($sum % 10) + 10) % 10;
            $digits[$i] = (string) $digit;
            $carry = intdiv($sum - $digit, 10);
        }
        if ($carry > 0) {
            $digits = (string) $carry . $digits;
        }
        return ($negative ? '-' : '') . ltrim($digits, '0');
    }
    private static function jsonIdentity(mixed $value, int $depth = 0): string
    {
        if ($depth > 256) {
            self::fail('value', 'JSON equality exceeds nesting limit or contains a cycle');
        }
        if (
            $value instanceof ParsedNumber ||
            $value instanceof RawNumber ||
            is_int($value) ||
            is_float($value)
        ) {
            $text = is_object($value) ? $value->value : json_encode($value, JSON_THROW_ON_ERROR);
            $parts = explode('e', strtolower($text));
            $coefficient = $parts[0];
            $fraction = strlen(explode('.', $coefficient)[1] ?? '');
            $digits = ltrim(str_replace(['-', '.'], '', $coefficient), '0');
            $trimmed = rtrim($digits, '0');
            if ($trimmed === '') {
                return '["number","0"]';
            }
            return json_encode(
                [
                    'number',
                    (str_starts_with($coefficient, '-') ? '-' : '') . $trimmed,
                    self::shiftedExponent(
                        $parts[1] ?? '0',
                        -$fraction + strlen($digits) - strlen($trimmed),
                    ),
                ],
                JSON_THROW_ON_ERROR,
            );
        }
        if (is_array($value) && array_is_list($value)) {
            return json_encode(
                ['array', array_map(fn($child) => self::jsonIdentity($child, $depth + 1), $value)],
                JSON_THROW_ON_ERROR,
            );
        }
        if (is_object($value) || is_array($value)) {
            $fields = (array) $value;
            ksort($fields, SORT_STRING);
            $entries = [];
            foreach ($fields as $key => $child) {
                $entries[] = [(string) $key, self::jsonIdentity($child, $depth + 1)];
            }
            return json_encode(['object', $entries], JSON_THROW_ON_ERROR);
        }
        return json_encode([gettype($value), $value], JSON_THROW_ON_ERROR);
    }
    private static function decimalMultiple(string $token, string $divisor, string $path): bool
    {
        $parts = static function (string $text): array {
            $pieces = explode('e', strtolower($text));
            $coefficient = $pieces[0];
            $fraction = strlen(explode('.', $coefficient)[1] ?? '');
            $digits = ltrim(str_replace(['-', '.'], '', $coefficient), '0');
            $trimmed = rtrim($digits, '0');
            $power = max(-1000000000, min(1000000000, (float) ($pieces[1] ?? '0')));
            return [$trimmed, (int) $power - $fraction + strlen($digits) - strlen($trimmed)];
        };
        [$a, $ap] = $parts($token);
        [$b, $bp] = $parts($divisor);
        if ($a === '') {
            return true;
        }
        $shift = $ap - $bp;
        if ($shift < 0) {
            return false;
        }
        if ($b === '1') {
            return true;
        }
        if ($shift > 10000) {
            self::fail($path, 'multipleOf exponent expansion exceeds 10000 digits');
        }
        // Decimal long division avoids float, platform integer limits and extensions.
        $remainder = '';
        $input = $a . str_repeat('0', $shift);
        for ($i = 0; $i < strlen($input); $i++) {
            $remainder = ltrim($remainder . $input[$i], '0');
            while (
                strlen($remainder) > strlen($b) ||
                (strlen($remainder) === strlen($b) && strcmp($remainder, $b) >= 0)
            ) {
                $borrow = 0;
                $result = '';
                $offset = strlen($remainder) - strlen($b);
                for ($j = strlen($remainder) - 1; $j >= 0; $j--) {
                    $digit =
                        (int) $remainder[$j] -
                        ($j >= $offset ? (int) $b[$j - $offset] : 0) -
                        $borrow;
                    $borrow = $digit < 0 ? 1 : 0;
                    $result = (string) ($digit + 10 * $borrow) . $result;
                }
                $remainder = ltrim($result, '0');
            }
        }
        return $remainder === '';
    }
    private static function numericConstraints(
        string $token,
        array $s,
        string $path,
        bool $full = true,
    ): void {
        $range = $s['range'] ?? null;
        if (
            $range &&
            (self::compareDecimal($token, $range[0]) < 0 ||
                self::compareDecimal($token, $range[1]) > 0)
        ) {
            self::fail($path, 'value is outside the declared integer format range');
        }
        if (!$full) {
            return;
        }
        if (
            isset($s['checks']['multipleOf']) &&
            !self::decimalMultiple(
                $token,
                json_encode($s['checks']['multipleOf'], JSON_THROW_ON_ERROR),
                $path,
            )
        ) {
            self::fail($path, 'value violates multipleOf');
        }
        foreach (['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'] as $keyword) {
            if (!isset($s['checks'][$keyword])) {
                continue;
            }
            $order = self::compareDecimal(
                $token,
                json_encode($s['checks'][$keyword], JSON_THROW_ON_ERROR),
            );
            if (
                ($keyword === 'minimum' && $order < 0) ||
                ($keyword === 'maximum' && $order > 0) ||
                ($keyword === 'exclusiveMinimum' && $order <= 0) ||
                ($keyword === 'exclusiveMaximum' && $order >= 0)
            ) {
                self::fail($path, 'value violates ' . $keyword);
            }
        }
    }
    public static function normalize(
        mixed $value,
        array $s,
        string $path = 'input',
        bool $response = false,
        bool $matching = false,
        array $definitions = [],
        int $depth = 0,
        bool $validateConstraints = true,
        bool $allowUnknownResponseFields = false,
    ): mixed {
        if ($definitions && !isset($s['x-sdk-definitions'])) {
            $s['x-sdk-definitions'] = $definitions;
        }
        return self::executeValue(
            $value,
            \Flint\Internal\SchemaAdapter::compile($s),
            $path,
            $response,
            $matching,
            [],
            $depth,
            $validateConstraints,
            $allowUnknownResponseFields,
        );
    }
    public static function execute(mixed $value, array $plan, array $context = []): mixed
    {
        $mode = $context['mode'] ?? 'request';
        if (!in_array($mode, ['request', 'response', 'match'], true)) {
            throw new \InvalidArgumentException('Unknown codec execution mode');
        }
        return self::executeValue(
            $value,
            $plan,
            $context['path'] ?? 'input',
            ($context['direction'] ?? $mode) === 'response',
            $mode === 'match',
            $context['definitions'] ?? [],
            $context['depth'] ?? 0,
            $context['validateConstraints'] ?? true,
            $context['allowUnknownResponseFields'] ?? false,
        );
    }
    public static function wireKind(array $instruction): ?string
    {
        return match ($instruction['kind'] ?? null) {
            'dynamic' => null,
            'null-array' => 'null',
            'null', 'boolean', 'string', 'object', 'array' => $instruction['kind'],
            'safe-integer', 'exact-integer' => 'integer',
            'decimal', 'native-number' => 'number',
            'date-time' => 'string',
            'opaque' => $instruction['label'],
            default => throw new \InvalidArgumentException('Unknown codec instruction'),
        };
    }
    private static function exactValue(array $instruction): bool
    {
        return in_array($instruction['kind'], ['exact-integer', 'decimal'], true);
    }
    /** Shared selection policy for numeric interpretation and validation. */
    private static function selectAlternatives(
        mixed $value,
        array $s,
        string $keyword,
        string $path,
        bool $response,
        bool $matching,
        bool $allowUnknownResponseFields,
        callable $matches,
    ): array {
        $tolerateUnknownFields = $allowUnknownResponseFields;
        if (isset($s['nullableAlternative']) && $response && !$matching) {
            $index = $value === null ? 1 - $s['nullableAlternative'] : $s['nullableAlternative'];
            return [[$index => $s[$keyword][$index]], true];
        }
        if ($keyword === 'exactlyOne' && isset($s['tag'])) {
            $tag = $s['tag'];
            $data = (array) $value;
            if (
                (!is_object($value) && !is_array($value)) ||
                !array_key_exists($tag, $data) ||
                !is_string($data[$tag])
            ) {
                self::fail($path, 'expected a string discriminator');
            }
            $selected = array_filter(
                $s[$keyword],
                fn($branch) => in_array(
                    $data[$tag],
                    $branch['tagValues'] ?? ($branch['fields'][$tag]['members'] ?? []),
                    true,
                ),
            );
        } else {
            // The closed anyOf set would be discarded by compatible selection.
            $selected =
                $keyword === 'some' && $response && (!$matching || $allowUnknownResponseFields)
                    ? []
                    : array_filter(
                        $s[$keyword],
                        fn($branch, $index) => $matches($branch, false, $index),
                        ARRAY_FILTER_USE_BOTH,
                    );
            // Prefer exact closed exactlyOne alternatives, then a unique
            // compatible branch. some retains every compatible branch.
            if (
                ($keyword === 'some' || !$selected) &&
                $response &&
                (!$matching || $allowUnknownResponseFields)
            ) {
                $compatible = array_filter(
                    $s[$keyword],
                    fn($branch, $index) => $matches($branch, true, $index),
                    ARRAY_FILTER_USE_BOTH,
                );
                if ($keyword === 'some' || count($compatible) === 1) {
                    $selected = $compatible;
                    $tolerateUnknownFields = true;
                }
            }
        }
        if (!$selected && $response && !$matching) {
            if (
                count(
                    array_filter(
                        $s[$keyword],
                        fn($branch) => $branch['objectOnlyAlternative'] ?? false,
                    ),
                ) === count($s[$keyword]) &&
                !is_object($value)
            ) {
                self::fail($path, 'expected an object response alternative');
            }
        } elseif (!$selected || ($keyword === 'exactlyOne' && count($selected) !== 1)) {
            self::fail(
                $path,
                $keyword === 'exactlyOne'
                    ? 'value must match exactly one alternative'
                    : 'value must match at least one alternative',
            );
        }
        return [$selected, $tolerateUnknownFields];
    }
    /** Search jointly only after independent union selection stalls. Numeric
     * declarations must belong to branches selected by the original unions.
     */
    private static function jointNumericView(
        mixed $value,
        array $unions,
        string $path,
        bool $response,
        bool $matching,
        int $depth,
        bool $allowUnknownResponseFields,
        \stdClass $budget,
    ): ?array {
        if (count($unions) < 2) {
            return null;
        }
        $convertible = function (mixed $child, int $level = 0) use (&$convertible, $path): bool {
            if ($level > 256) {
                self::fail($path, 'value exceeds supported nesting depth or contains a cycle');
            }
            if (is_string($child)) {
                return preg_match('/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/D', $child) === 1;
            }
            if ($child instanceof ParsedNumber || $child instanceof RawNumber) {
                return false;
            }
            if ($child instanceof Model) {
                $child = $child->toInputValue();
            }
            if (is_array($child) || is_object($child)) {
                foreach ((array) $child as $value) {
                    if ($convertible($value, $level + 1)) {
                        return true;
                    }
                }
            }
            return false;
        };
        if (!$convertible($value)) {
            return null;
        }
        // String-valued fields cannot change under a numeric hypothesis.
        $choices = [];
        foreach ($unions as [$codec, $definitions, $keyword]) {
            $choices[] = array_filter($codec[$keyword], function (array $branch) use (
                $value,
                $codec,
                $keyword,
                $definitions,
                $path,
                $response,
                $depth,
            ): bool {
                if (
                    ($keyword === 'exactlyOne' && isset($codec['tag'])) ||
                    (!is_object($value) && !is_array($value))
                ) {
                    return true;
                }
                $data = (array) $value;
                try {
                    foreach ($branch['fields'] ?? [] as $key => $field) {
                        if ($field['value']['kind'] === 'string' && array_key_exists($key, $data)) {
                            self::executeNode(
                                $data[$key],
                                $field,
                                "$path.$key",
                                $response,
                                true,
                                $branch['definitions'] ?? ($codec['definitions'] ?? $definitions),
                                $depth + 1,
                            );
                        }
                    }
                    return true;
                } catch (SdkError $e) {
                    if ($e->kind === 'validation') {
                        return false;
                    }
                    throw $e;
                }
            });
        }
        $groups = function (
            array $branches,
            bool $multiple,
            int $start = 0,
            array $prefix = [],
        ) use (&$groups): \Generator {
            $indices = array_keys($branches);
            for ($i = $start; $i < count($indices); $i++) {
                $key = $indices[$i];
                $selected = $prefix + [$key => $branches[$key]];
                yield $selected;
                if ($multiple) {
                    yield from $groups($branches, true, $i + 1, $selected);
                }
            }
        };
        $chosen = [];
        $search = function (int $index) use (
            &$search,
            &$chosen,
            $groups,
            $value,
            $unions,
            $choices,
            $path,
            $response,
            $matching,
            $depth,
            $allowUnknownResponseFields,
            $budget,
        ): ?array {
            if (isset($unions[$index])) {
                [$codec, $definitions, $keyword] = $unions[$index];
                foreach ($groups($choices[$index], $keyword === 'some') as $branches) {
                    $chosen[] = [$unions[$index], $branches];
                    $found = $search($index + 1);
                    array_pop($chosen);
                    if ($found !== null) {
                        return $found;
                    }
                }
                return null;
            }
            $remaining = $budget->remaining[$path] ?? 256;
            $budget->remaining[$path] = $remaining - 1;
            if ($remaining <= 0) {
                $budget->exhausted = true;
                self::fail($path, 'numeric interpretation exceeds 256 alternative combinations');
            }
            try {
                $scopes = [];
                foreach ($chosen as [[$codec, $definitions], $branches]) {
                    foreach ($branches as $branch) {
                        $scopes[] = [$branch, $definitions];
                    }
                }
                $candidate = self::numericView(
                    $value,
                    $scopes,
                    $path,
                    $response,
                    $matching,
                    $depth + 1,
                    $allowUnknownResponseFields,
                    $budget,
                );
                if (!self::numericViewChanged($value, $candidate)) {
                    return null;
                }
                foreach ($chosen as [[$codec, $definitions, $keyword], $branches]) {
                    $matches = function (array $branch, bool $allowUnknownFields) use (
                        $candidate,
                        $path,
                        $response,
                        $definitions,
                        $depth,
                    ): bool {
                        try {
                            self::executeNode(
                                $candidate,
                                $branch,
                                $path,
                                $response,
                                true,
                                $definitions,
                                $depth + 1,
                                true,
                                $allowUnknownFields,
                            );
                            return true;
                        } catch (SdkError $e) {
                            if ($e->kind === 'validation') {
                                return false;
                            }
                            throw $e;
                        }
                    };
                    [$selected] = self::selectAlternatives(
                        $candidate,
                        $codec,
                        $keyword,
                        $path,
                        $response,
                        $matching,
                        $allowUnknownResponseFields,
                        $matches,
                    );
                    if (array_diff_key($branches, $selected)) {
                        return null;
                    }
                    // Untagged branches were fully matched. Tagged branches
                    // leave other constraints to the caller's validation mode.
                }
                return ['value' => $candidate];
            } catch (SdkError $e) {
                if ($budget->exhausted || $e->kind !== 'validation') {
                    throw $e;
                }
                return null;
            }
        };
        return $search(0);
    }
    /** Detect newly established numeric meaning without walking unchanged subtrees. */
    private static function numericViewChanged(mixed $before, mixed $after, int $depth = 0): bool
    {
        if ($depth > 256 || (!is_array($before) && $before === $after)) {
            return false;
        }
        if ($after instanceof ParsedNumber) {
            return !($before instanceof ParsedNumber);
        }
        if (
            (!is_object($before) && !is_array($before)) ||
            (!is_object($after) && !is_array($after))
        ) {
            return false;
        }
        $previous = (array) $before;
        foreach ((array) $after as $key => $child) {
            if (self::numericViewChanged($previous[$key] ?? null, $child, $depth + 1)) {
                return true;
            }
        }
        return false;
    }
    /** Merge established numeric meaning without reinterpreting either branch. */
    private static function mergeNumericViews(mixed $left, mixed $right, int $depth = 0): mixed
    {
        if ($depth > 256) {
            self::fail(
                'value',
                'value exceeds the supported nesting depth (256) or contains a cycle',
            );
        }
        if ($left instanceof \DateTimeInterface && is_string($right)) {
            return $right;
        }
        if ((!is_array($left) && $left === $right) || $left instanceof ParsedNumber) {
            return $left;
        }
        if ($right instanceof ParsedNumber) {
            return $right;
        }
        if ($left instanceof Model) {
            $left = $left->jsonSerialize();
        }
        if ($right instanceof Model) {
            $right = $right->jsonSerialize();
        }
        if ((!is_object($left) && !is_array($left)) || (!is_object($right) && !is_array($right))) {
            return $left;
        }
        $out = (array) $left;
        $other = (array) $right;
        foreach ($out as $key => $child) {
            $out[$key] = self::mergeNumericViews($child, $other[$key] ?? null, $depth + 1);
        }
        return is_object($left) ? (object) $out : $out;
    }
    /** Follow same-instance declarations with their reference registries. */
    private static function codecShapes(
        array $scopes,
        string $path,
        int $depth,
        ?callable $alternatives = null,
    ): array {
        $shapes = [];
        $collect = function (array $codec, array $definitions, int $level) use (
            &$collect,
            &$shapes,
            $path,
            $alternatives,
        ): void {
            if ($level > 256) {
                self::fail(
                    $path,
                    'value exceeds the supported nesting depth (256) or contains a cycle',
                );
            }
            $definitions = $codec['definitions'] ?? $definitions;
            if (isset($codec['reference'])) {
                $target = $definitions[$codec['reference']] ?? null;
                if ($target === null) {
                    self::fail($path, 'unresolved recursive model ' . $codec['reference']);
                }
                $collect($target, $definitions, $level + 1);
            } else {
                $shapes[] = [$codec, $definitions];
                foreach (
                    array_merge(
                        $codec['every'] ?? [],
                        $alternatives ? $alternatives($codec, $definitions) : [],
                    )
                    as $child
                ) {
                    $collect($child, $definitions, $level + 1);
                }
            }
        };
        foreach ($scopes as [$codec, $definitions]) {
            $collect($codec, $definitions, $depth);
        }
        return $shapes;
    }
    /** Reject numeric contributions from branches that no longer match. */
    private static function assertNumericSources(
        mixed $source,
        mixed $value,
        array $scopes,
        string $path,
        bool $response,
        bool $matching,
        int $depth,
        bool $allowUnknownResponseFields,
    ): void {
        if ($source instanceof Model) {
            $source = $source->jsonSerialize();
        }
        if (!self::numericViewChanged($source, $value)) {
            return;
        }
        $shapes = self::codecShapes($scopes, $path, $depth, function (
            array $codec,
            array $definitions,
        ) use ($value, $path, $response, $matching, $depth, $allowUnknownResponseFields): array {
            $branch = self::conditionalBranch(
                $value,
                $codec,
                $definitions,
                $path,
                $response,
                $depth,
            );
            $active = $branch === null ? [] : [$branch];
            foreach (['exactlyOne', 'some'] as $keyword) {
                if (!isset($codec[$keyword])) {
                    continue;
                }
                [$selected] = self::selectAlternatives(
                    $value,
                    $codec,
                    $keyword,
                    $path,
                    $response,
                    $matching,
                    $allowUnknownResponseFields,
                    function (array $branch, bool $allowUnknownFields) use (
                        $value,
                        $path,
                        $response,
                        $definitions,
                        $depth,
                    ): bool {
                        try {
                            self::executeNode(
                                $value,
                                $branch,
                                $path,
                                $response,
                                true,
                                $definitions,
                                $depth + 1,
                                true,
                                $allowUnknownFields,
                            );
                            return true;
                        } catch (SdkError $e) {
                            if ($e->kind === 'validation') {
                                return false;
                            }
                            throw $e;
                        }
                    },
                );
                array_push($active, ...array_values($selected));
            }
            return $active;
        });
        if ($value instanceof ParsedNumber) {
            foreach ($shapes as [$codec]) {
                if (
                    self::exactValue($codec['value']) ||
                    ($codec['value']['kind'] === 'native-number' &&
                        (is_int($source) || is_float($source)))
                ) {
                    return;
                }
            }
            self::fail($path, 'numeric interpretation depends on an unmatched alternative');
        }
        if (!is_array($value) && !is_object($value)) {
            return;
        }
        $original = is_array($source) || is_object($source) ? (array) $source : [];
        $list = is_array($value) && array_is_list($value);
        foreach ((array) $value as $key => $child) {
            $children = [];
            foreach ($shapes as [$codec, $definitions]) {
                $field = $list
                    ? $codec['element'] ?? null
                    : $codec['fields'][$key] ??
                        (is_array($codec['extra'] ?? null) ? $codec['extra'] : null);
                if ($field !== null) {
                    $children[] = [$field, $definitions];
                }
            }
            self::assertNumericSources(
                $original[$key] ?? null,
                $child,
                $children,
                $list ? $path . '[' . $key . ']' : "$path.$key",
                $response,
                $matching,
                $depth + 1,
                $allowUnknownResponseFields,
            );
        }
    }
    /** Resolve exact SDK strings to JSON numbers before applying any conjunct.
     * Named schemas are followed along the finite value, never expanded globally.
     * Each scope carries its own registry, including during alternative matching.
     */
    private static function numericView(
        mixed $value,
        array $scopes,
        string $path,
        bool $response,
        bool $matching,
        int $depth,
        bool $allowUnknownResponseFields,
        \stdClass $budget,
        ?array $previous = null,
    ): mixed {
        if (!$scopes) {
            return $value;
        }
        // A previously matched view can be reused wherever numeric meaning did
        // not change. Keep the same scopes and direction policy on refinement.
        if ($previous !== null && !self::numericViewChanged($previous['value'], $value)) {
            return $value;
        }
        $previousChildren =
            $previous !== null && (is_object($previous['value']) || is_array($previous['value']))
                ? (array) $previous['value']
                : null;
        if ($budget->exhausted) {
            self::fail($path, 'numeric interpretation exceeds 256 alternative combinations');
        }
        if ($depth > 256) {
            self::fail(
                $path,
                'value exceeds the supported nesting depth (256) or contains a cycle',
            );
        }
        if ($value instanceof Model) {
            $value = $value->toInputValue();
        }
        $shapes = self::codecShapes($scopes, $path, $depth);
        if ($value instanceof \DateTimeInterface && !$response) {
            foreach ($shapes as [$codec]) {
                if ($codec['value']['kind'] === 'date-time') {
                    $value = \DateTimeImmutable::createFromInterface($value)
                        ->setTimezone(new \DateTimeZone('UTC'))
                        ->format('Y-m-d\\TH:i:s.v\\Z');
                    break;
                }
            }
        }
        if (is_string($value)) {
            foreach ($shapes as [$codec]) {
                $pattern =
                    $codec['value']['kind'] === 'exact-integer'
                        ? '/^-?(?:0|[1-9]\d*)$/'
                        : '/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/';
                if (
                    self::exactValue($codec['value']) &&
                    ($codec['numberInput'] ?? null) !== 'explicit' &&
                    preg_match($pattern, $value)
                ) {
                    $value = new ParsedNumber($value);
                    break;
                }
            }
        }
        if (is_array($value) && array_is_list($value)) {
            $children = [];
            foreach ($shapes as [$codec, $definitions]) {
                if (isset($codec['element'])) {
                    $children[] = [$codec['element'], $definitions];
                }
            }
            if ($children) {
                $value = array_map(
                    fn($child, $index) => self::numericView(
                        $child,
                        $children,
                        $path . '[' . $index . ']',
                        $response,
                        $matching,
                        $depth + 1,
                        $allowUnknownResponseFields,
                        $budget,
                        $previousChildren !== null
                            ? ['value' => $previousChildren[$index] ?? null]
                            : null,
                    ),
                    $value,
                    array_keys($value),
                );
            }
        } elseif (
            (is_object($value) &&
                !($value instanceof ParsedNumber) &&
                !($value instanceof \DateTimeInterface)) ||
            is_array($value)
        ) {
            $out = [];
            foreach ((array) $value as $key => $child) {
                $children = [];
                foreach ($shapes as [$codec, $definitions]) {
                    $field =
                        $codec['fields'][$key] ??
                        (is_array($codec['extra'] ?? null) ? $codec['extra'] : null);
                    if ($field !== null) {
                        $children[] = [$field, $definitions];
                    }
                }
                $out[$key] = self::numericView(
                    $child,
                    $children,
                    "$path.$key",
                    $response,
                    $matching,
                    $depth + 1,
                    $allowUnknownResponseFields,
                    $budget,
                    $previousChildren !== null
                        ? ['value' => $previousChildren[$key] ?? null]
                        : null,
                );
            }
            $value = is_object($value) ? (object) $out : $out;
        }
        $unions = [];
        foreach ($shapes as [$codec, $definitions]) {
            foreach (['exactlyOne', 'some'] as $keyword) {
                if (isset($codec[$keyword])) {
                    $unions[] = [$codec, $definitions, $keyword];
                }
            }
        }
        $pending = $unions;
        // Constraint-only unions may depend on numeric declarations in later
        // conjuncts. Productive passes remove selections; if none can progress,
        // retain the failure instead of returning a partially interpreted value.
        while ($pending) {
            $before = $value;
            $deferred = [];
            $failure = null;
            foreach ($pending as $scope) {
                [$codec, $definitions, $keyword] = $scope;
                try {
                    $candidates = [];
                    $matches = function (array $branch, bool $allowUnknownFields, int $index) use (
                        &$candidates,
                        $value,
                        $definitions,
                        $path,
                        $response,
                        $depth,
                        $budget,
                    ): bool {
                        try {
                            $candidate = self::numericView(
                                $value,
                                [[$branch, $definitions]],
                                $path,
                                $response,
                                true,
                                $depth + 1,
                                $allowUnknownFields,
                                $budget,
                            );
                            self::executeNode(
                                $candidate,
                                $branch,
                                $path,
                                $response,
                                true,
                                $definitions,
                                $depth + 1,
                                true,
                                $allowUnknownFields,
                            );
                            $candidates[$index] = $candidate;
                            return true;
                        } catch (SdkError $e) {
                            if ($e->kind === 'validation') {
                                return false;
                            }
                            throw $e;
                        }
                    };
                    [$selected, $tolerateUnknownFields] = self::selectAlternatives(
                        $value,
                        $codec,
                        $keyword,
                        $path,
                        $response,
                        $matching,
                        $allowUnknownResponseFields,
                        $matches,
                    );
                    if (!$selected) {
                        $deferred[] = $scope;
                        continue;
                    }
                    // Reuse all matched views, refining only the subtrees where
                    // another branch supplied additional numeric meaning.
                    if (!array_diff_key($selected, $candidates)) {
                        foreach ($selected as $index => $branch) {
                            $value = self::mergeNumericViews($value, $candidates[$index]);
                        }
                        do {
                            $beforeRefinement = $value;
                            foreach ($selected as $index => $branch) {
                                $candidate = $candidates[$index];
                                if (!self::numericViewChanged($candidate, $value)) {
                                    continue;
                                }
                                $refined = self::numericView(
                                    $value,
                                    [[$branch, $definitions]],
                                    $path,
                                    $response,
                                    true,
                                    $depth + 1,
                                    $tolerateUnknownFields,
                                    $budget,
                                    ['value' => $candidate],
                                );
                                $candidates[$index] = $refined;
                                $value = self::mergeNumericViews($value, $refined);
                            }
                        } while (self::numericViewChanged($beforeRefinement, $value));
                    } else {
                        $value = self::numericView(
                            $value,
                            array_map(fn($branch) => [$branch, $definitions], $selected),
                            $path,
                            $response,
                            $matching,
                            $depth + 1,
                            $tolerateUnknownFields,
                            $budget,
                        );
                    }
                } catch (SdkError $e) {
                    if ($e->kind !== 'validation') {
                        throw $e;
                    }
                    $failure ??= $e;
                    $deferred[] = $scope;
                }
            }
            // Later conjuncts can make additional branches of an earlier anyOf
            // compatible. Revisit selections only when numeric meaning changes.
            if (count($unions) > 1 && self::numericViewChanged($before, $value)) {
                $pending = $unions;
                continue;
            }
            if (count($deferred) === count($pending)) {
                $joint = self::jointNumericView(
                    $value,
                    $unions,
                    $path,
                    $response,
                    $matching,
                    $depth,
                    $allowUnknownResponseFields,
                    $budget,
                );
                if ($joint !== null) {
                    $value = $joint['value'];
                    $pending = $unions;
                    continue;
                }
                if ($failure !== null) {
                    throw $failure;
                }
                break;
            }
            $pending = $deferred;
        }
        if ($budget->exhausted) {
            self::fail($path, 'numeric interpretation exceeds 256 alternative combinations');
        }
        foreach ($shapes as [$codec, $definitions]) {
            $branch = self::conditionalBranch(
                $value,
                $codec,
                $definitions,
                $path,
                $response,
                $depth,
            );
            if ($branch !== null) {
                $value = self::numericView(
                    $value,
                    [[$branch, $definitions]],
                    $path,
                    $response,
                    $matching,
                    $depth + 1,
                    $allowUnknownResponseFields,
                    $budget,
                );
            }
        }
        return $value;
    }
    private static function conditionalBranch(
        mixed $value,
        array $codec,
        array $definitions,
        string $path,
        bool $response,
        int $depth,
    ): ?array {
        if (!isset($codec['when'])) {
            return null;
        }
        try {
            self::executeNode(
                $value,
                $codec['when']['test'],
                $path,
                $response,
                true,
                $definitions,
                $depth + 1,
                true,
                false,
            );
            return $codec['when']['then'] ?? null;
        } catch (SdkError $error) {
            if ($error->kind !== 'validation') {
                throw $error;
            }
            return $codec['when']['else'] ?? null;
        }
    }
    private static function executeValue(
        mixed $value,
        array $s,
        string $path = 'input',
        bool $response = false,
        bool $matching = false,
        array $definitions = [],
        int $depth = 0,
        bool $validateConstraints = true,
        bool $allowUnknownResponseFields = false,
    ): mixed {
        $scopes = [[$s, $definitions]];
        $interpreted = self::numericView(
            $value,
            $scopes,
            $path,
            $response,
            $matching,
            $depth,
            $allowUnknownResponseFields,
            (object) ['remaining' => [], 'exhausted' => false],
        );
        self::assertNumericSources(
            $value,
            $interpreted,
            $scopes,
            $path,
            $response,
            $matching,
            $depth,
            $allowUnknownResponseFields,
        );
        return self::executeNode(
            $interpreted,
            $s,
            $path,
            $response,
            $matching,
            $definitions,
            $depth,
            $validateConstraints,
            $allowUnknownResponseFields,
        );
    }
    private static function executeNode(
        mixed $value,
        array $s,
        string $path = 'input',
        bool $response = false,
        bool $matching = false,
        array $definitions = [],
        int $depth = 0,
        bool $validateConstraints = true,
        bool $allowUnknownResponseFields = false,
    ): mixed {
        if ($depth > 256) {
            self::fail(
                $path,
                'value exceeds the supported nesting depth (256) or contains a cycle',
            );
        }
        $validateConstraints = isset($s['constraints']) ? $s['constraints'] : $validateConstraints;
        if (
            (!$response || $matching) &&
            isset($s['literal']) &&
            self::jsonIdentity($value) !== self::jsonIdentity(self::parse($s['literal'], true))
        ) {
            self::fail($path, 'value is outside the declared const');
        }
        $definitions = $s['definitions'] ?? $definitions;
        if (isset($s['reference'])) {
            $target = $definitions[$s['reference']] ?? null;
            if ($target === null) {
                self::fail($path, 'unresolved recursive model ' . $s['reference']);
            }
            return self::executeNode(
                $value,
                $target,
                $path,
                $response,
                $matching,
                $definitions,
                $depth + 1,
                $validateConstraints,
                $allowUnknownResponseFields,
            );
        }
        if ($value instanceof Model) {
            $value = $value->toInputValue();
        }
        self::wireKind($s['value']);
        if (
            isset($s['every']) ||
            isset($s['some']) ||
            isset($s['exactlyOne']) ||
            isset($s['exclude']) ||
            isset($s['when'])
        ) {
            $base = array_diff_key(
                $s,
                array_flip(['every', 'some', 'exactlyOne', 'exclude', 'tag', 'when']),
            );
            $result = self::executeNode(
                $value,
                $base,
                $path,
                $response,
                $matching,
                $definitions,
                $depth + 1,
                $validateConstraints,
                $allowUnknownResponseFields,
            );
            // A successful match already executed the complete branch. Reuse
            // it only in matching mode, with the same unknown-field policy.
            $matched = [];
            $matches = function ($branch, bool $allowUnknownFields) use (
                &$matched,
                $value,
                $path,
                $response,
                $definitions,
                $depth,
                $validateConstraints,
            ) {
                try {
                    $result = self::executeNode(
                        $value,
                        $branch,
                        $path,
                        $response,
                        true,
                        $definitions,
                        $depth + 1,
                        $validateConstraints,
                        $allowUnknownFields,
                    );
                    $matched[] = [$branch, $allowUnknownFields, $result];
                    return true;
                } catch (SdkError $e) {
                    if ($e->kind === 'validation') {
                        return false;
                    }
                    throw $e;
                }
            };
            if (isset($s['exclude']) && $matches($s['exclude'], false)) {
                self::fail($path, 'value matches a forbidden combination');
            }
            $conditional = self::conditionalBranch(
                $value,
                $s,
                $definitions,
                $path,
                $response,
                $depth,
            );
            foreach (
                array_merge($s['every'] ?? [], $conditional === null ? [] : [$conditional])
                as $branch
            ) {
                $result = self::combine(
                    $result,
                    self::executeNode(
                        $value,
                        $branch,
                        $path,
                        $response,
                        $matching,
                        $definitions,
                        $depth + 1,
                        $validateConstraints,
                        $allowUnknownResponseFields,
                    ),
                    $path,
                    $value,
                );
            }
            foreach (['exactlyOne', 'some'] as $keyword) {
                if (!isset($s[$keyword])) {
                    continue;
                }
                [$selected, $tolerateUnknownFields] = self::selectAlternatives(
                    $value,
                    $s,
                    $keyword,
                    $path,
                    $response,
                    $matching,
                    $allowUnknownResponseFields,
                    $matches,
                );
                foreach ($selected as $branch) {
                    $reused = false;
                    if ($matching) {
                        foreach ($matched as [$candidate, $allowUnknownFields, $candidateResult]) {
                            if (
                                $candidate === $branch &&
                                $allowUnknownFields === $tolerateUnknownFields
                            ) {
                                $branchResult = $candidateResult;
                                $reused = true;
                                break;
                            }
                        }
                    }
                    if (!$reused) {
                        $branchResult = self::executeNode(
                            $value,
                            $branch,
                            $path,
                            $response,
                            $matching,
                            $definitions,
                            $depth + 1,
                            $validateConstraints,
                            $tolerateUnknownFields,
                        );
                    }
                    $result = self::combine($result, $branchResult, $path, $value);
                }
            }
            return $result;
        }
        $type = self::wireKind($s['value']);
        if ($value === null) {
            if (
                (!$response || $matching) &&
                isset($s['members']) &&
                !in_array(null, $s['members'], true)
            ) {
                self::fail($path, 'null is outside the declared enum');
            }
            if ($s['nullable']) {
                return null;
            }
            self::fail($path, 'null is not permitted');
        }
        // Positive declarations establish numeric meaning before matching.
        // A negative branch must not reinterpret remaining JSON strings.
        if (
            ($matching || (!$response && ($s['numberInput'] ?? null) === 'explicit')) &&
            self::exactValue($s['value']) &&
            is_string($value)
        ) {
            self::fail($path, "expected $type; received a JSON string");
        }
        $numberToken = $value instanceof ParsedNumber ? $value->value : null;
        if ($value instanceof ParsedNumber) {
            if ($type === null) {
                if (
                    (!$response || $matching) &&
                    isset($s['members']) &&
                    !array_filter(
                        $s['members'],
                        fn($v) => (is_int($v) || is_float($v)) &&
                            self::compareDecimal($value->value, self::numberText($v)) === 0,
                    )
                ) {
                    self::fail($path, 'value is outside the declared enum');
                }
                if (!$response || $matching) {
                    self::numericConstraints(
                        $value->value,
                        $s,
                        $path,
                        $validateConstraints || $matching,
                    );
                }
                return $response ? $value : new RawNumber($value->value);
            }
            if ($type === 'integer') {
                $token = self::integerToken($value->value, $path);
                $value = self::exactValue($s['value']) ? $token : (int) $token;
            } elseif ($type === 'number') {
                $value = self::exactValue($s['value']) ? $value->value : (float) $value->value;
            } else {
                self::fail($path, "expected $type; received a JSON number");
            }
        }
        $exactEnum = self::exactValue($s['value']) || $s['value']['kind'] === 'native-number';
        if (
            (!$response || $matching) &&
            isset($s['members']) &&
            !($exactEnum
                ? (is_string($value) || is_int($value) || is_float($value)) &&
                    preg_match(
                        '/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/',
                        (string) $value,
                    ) &&
                    array_filter(
                        $s['members'],
                        fn($member) => (is_int($member) || is_float($member)) &&
                            self::compareDecimal(
                                $numberToken ?? self::numberText($value),
                                self::numberText($member),
                            ) === 0,
                    )
                : in_array($value, $s['members'], true))
        ) {
            self::fail($path, 'value is outside the declared enum');
        }
        if ($type === 'integer' || $type === 'number') {
            if (self::exactValue($s['value'])) {
                $token = is_int($value) ? (string) $value : $value;
                $pattern =
                    $type === 'integer'
                        ? '/^-?(?:0|[1-9]\d*)$/'
                        : '/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/';
                if (!is_string($token) || !preg_match($pattern, $token)) {
                    self::fail($path, 'expected an exact numeric string');
                }
                if (!$response || $matching) {
                    self::numericConstraints($token, $s, $path, $validateConstraints || $matching);
                }
                return $response ? $token : new RawNumber($token);
            }
            if ($s['value']['kind'] === 'native-number') {
                if ((!is_int($value) && !is_float($value)) || !is_finite((float) $value)) {
                    self::fail($path, 'expected a finite number');
                }
                if (!$response || $matching) {
                    self::numericConstraints(
                        $numberToken ?? self::numberText($value),
                        $s,
                        $path,
                        $validateConstraints || $matching,
                    );
                }
                return $response ? (float) $value : $value;
            }
            if (!is_int($value) || abs($value) > 9007199254740991) {
                self::fail($path, 'expected a safe integer; declare int64 for larger values');
            }
            if (!$response || $matching) {
                self::numericConstraints(
                    (string) $value,
                    $s,
                    $path,
                    $validateConstraints || $matching,
                );
            }
            return $value;
        }
        if ($type === 'null') {
            self::fail($path, 'expected null');
        }
        if (
            $type === 'object' ||
            ($type === null &&
                (is_object($value) ||
                    (is_array($value) &&
                        (!array_is_list($value) || (!$value && $s['modelObjectInput'])))))
        ) {
            if (
                !is_object($value) &&
                (!is_array($value) ||
                    $response ||
                    (array_is_list($value) && ($value !== [] || $matching)))
            ) {
                self::fail($path, 'expected an object');
            }
            $data = (array) $value;
            foreach ($response ? $s['requiredOutput'] : $s['requiredInput'] as $key) {
                if (!array_key_exists($key, $data)) {
                    self::fail("$path.$key", 'required field is missing');
                }
            }
            $out = new \stdClass();
            foreach ($data as $key => $v) {
                if (isset($s['fields'][$key])) {
                    if (!$response && ($s['fields'][$key]['rejectInput'] ?? false)) {
                        self::fail("$path.$key", 'readOnly fields cannot be sent');
                    }
                    $out->{$key} = self::executeNode(
                        $v,
                        $s['fields'][$key],
                        "$path.$key",
                        $response,
                        $matching,
                        $definitions,
                        $depth + 1,
                        $validateConstraints,
                        $allowUnknownResponseFields,
                    );
                } elseif (
                    (!$response || ($matching && !$allowUnknownResponseFields)) &&
                    ($s['extra'] ?? true) === false
                ) {
                    self::fail("$path.$key", 'unknown request field');
                } elseif (is_array($s['extra'] ?? null)) {
                    $out->{$key} = self::executeNode(
                        $v,
                        $s['extra'],
                        "$path.$key",
                        $response,
                        $matching,
                        $definitions,
                        $depth + 1,
                        $validateConstraints,
                        $allowUnknownResponseFields,
                    );
                } else {
                    $out->{$key} = $v;
                }
            }
            if ((!$response || $matching) && ($validateConstraints || $matching)) {
                $count = count((array) $out);
                if (
                    isset($s['checks']['minProperties']) &&
                    $count < $s['checks']['minProperties']
                ) {
                    self::fail($path, 'object violates minProperties');
                }
                if (
                    isset($s['checks']['maxProperties']) &&
                    $count > $s['checks']['maxProperties']
                ) {
                    self::fail($path, 'object violates maxProperties');
                }
            }
            return $out;
        }
        if ($type === 'array' || ($type === null && is_array($value) && array_is_list($value))) {
            if (!is_array($value) || !array_is_list($value)) {
                self::fail($path, 'expected an array');
            }
            if ((!$response || $matching) && ($validateConstraints || $matching)) {
                if (isset($s['checks']['minItems']) && count($value) < $s['checks']['minItems']) {
                    self::fail($path, 'array violates minItems');
                }
                if (isset($s['checks']['maxItems']) && count($value) > $s['checks']['maxItems']) {
                    self::fail($path, 'array violates maxItems');
                }
                if ($s['checks']['uniqueItems'] ?? false) {
                    $seen = [];
                    foreach ($value as $item) {
                        $key = self::jsonIdentity($item);
                        if (isset($seen[$key])) {
                            self::fail($path, 'array violates uniqueItems');
                        }
                        $seen[$key] = true;
                    }
                }
                if (isset($s['includes'])) {
                    $found = false;
                    foreach ($value as $index => $child) {
                        try {
                            self::executeNode(
                                $child,
                                $s['includes'],
                                "$path.$index",
                                $response,
                                true,
                                $definitions,
                                $depth + 1,
                                true,
                                false,
                            );
                            $found = true;
                            break;
                        } catch (SdkError $error) {
                            if ($error->kind !== 'validation') {
                                throw $error;
                            }
                        }
                    }
                    if (!$found) {
                        self::fail($path, 'array violates contains');
                    }
                }
            }
            return array_map(
                fn($v, $index) => self::executeNode(
                    $v,
                    $s['element'] ?? self::ANY_CODEC,
                    "{$path}[$index]",
                    $response,
                    $matching,
                    $definitions,
                    $depth + 1,
                    $validateConstraints,
                    $allowUnknownResponseFields,
                ),
                $value,
                array_keys($value),
            );
        }
        if ($type === 'string' && !is_string($value)) {
            self::fail($path, 'expected a string');
        }
        if (is_string($value) && (!$response || $matching)) {
            $length = preg_match_all('/./us', $value);
            if ($length === false) {
                self::fail($path, 'expected well-formed Unicode');
            }
            if ($validateConstraints || $matching) {
                if (isset($s['checks']['minLength']) && $length < $s['checks']['minLength']) {
                    self::fail($path, 'string violates minLength');
                }
                if (isset($s['checks']['maxLength']) && $length > $s['checks']['maxLength']) {
                    self::fail($path, 'string violates maxLength');
                }
                if (isset($s['checks']['pattern'])) {
                    $pattern = $s['phpPattern'];
                    if (preg_match($pattern, $value) !== 1) {
                        self::fail($path, 'string violates pattern');
                    }
                }
            }
        }
        if ($type === null && (is_int($value) || is_float($value)) && (!$response || $matching)) {
            if (!is_finite((float) $value)) {
                self::fail($path, 'expected a finite number');
            }
            self::numericConstraints(
                self::numberText($value),
                $s,
                $path,
                $validateConstraints || $matching,
            );
        }
        if ($type === 'boolean' && !is_bool($value)) {
            self::fail($path, 'expected a boolean');
        }
        return $value;
    }
    private static function numberText(string|int|float $value): string
    {
        return is_float($value) ? json_encode($value, JSON_THROW_ON_ERROR) : (string) $value;
    }
    public static function encode(mixed $value, int $depth = 0): string
    {
        if ($depth > 256) {
            self::fail('value', 'value exceeds the supported nesting depth or contains a cycle');
        }
        if ($value instanceof RawNumber) {
            return $value->value;
        }
        if ($value instanceof Model) {
            $value = $value->toInputValue();
        }
        if (is_float($value) && !is_finite($value)) {
            self::fail('value', 'expected a finite number');
        }
        if (is_array($value) && array_is_list($value)) {
            return '[' .
                implode(',', array_map(fn($v) => self::encode($v, $depth + 1), $value)) .
                ']';
        }
        if (is_object($value) || is_array($value)) {
            $pairs = [];
            foreach ((array) $value as $k => $v) {
                $pairs[] =
                    json_encode(
                        (string) $k,
                        JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES,
                    ) .
                    ':' .
                    self::encode($v, $depth + 1);
            }
            return '{' . implode(',', $pairs) . '}';
        }
        return json_encode(
            $value,
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES,
        );
    }
    public static function redact(
        mixed $value,
        array $schema = [],
        array $fields = [],
        array $definitions = [],
        int $depth = 0,
    ): mixed {
        if ($definitions && !isset($schema['x-sdk-definitions'])) {
            $schema['x-sdk-definitions'] = $definitions;
        }
        return self::redactPlan(
            $value,
            \Flint\Internal\SchemaAdapter::compile($schema),
            $fields,
            [],
            $depth,
        );
    }
    public static function redactPlan(
        mixed $value,
        array $schema = [],
        array $fields = [],
        array $definitions = [],
        int $depth = 0,
    ): mixed {
        if ($depth > 256) {
            return '[Nesting limit]';
        }
        $definitions = $schema['definitions'] ?? $definitions;
        $shapes = function ($s) use (&$shapes, $definitions) {
            if (isset($s['reference'])) {
                return array_merge(
                    [$s],
                    isset($definitions[$s['reference']])
                        ? $shapes($definitions[$s['reference']])
                        : [],
                );
            }
            $out = [$s];
            foreach (['then', 'else'] as $key) {
                if (isset($s['when'][$key])) {
                    $out = array_merge($out, $shapes($s['when'][$key]));
                }
            }
            foreach (['every', 'exactlyOne', 'some'] as $key) {
                foreach ($s[$key] ?? [] as $branch) {
                    $out = array_merge($out, $shapes($branch));
                }
            }
            return $out;
        };
        $schemas = $shapes($schema);
        foreach ($schemas as $shape) {
            if ($shape['sensitive'] ?? false) {
                return '[REDACTED]';
            }
        }
        if (is_array($value) && array_is_list($value)) {
            $items = array_values(
                array_filter(
                    array_map(fn($s) => $s['element'] ?? null, $schemas),
                    fn($s) => $s !== null,
                ),
            );
            return array_map(
                fn($v) => self::redactPlan(
                    $v,
                    ['every' => $items],
                    $fields,
                    $definitions,
                    $depth + 1,
                ),
                $value,
            );
        }
        if (is_object($value) || is_array($value)) {
            $out = new \stdClass();
            foreach ((array) $value as $k => $v) {
                $out->{$k} =
                    in_array((string) $k, $fields, true) ||
                    preg_match('/authorization|token|secret|password|api.?key/i', (string) $k)
                        ? '[REDACTED]'
                        : self::redactPlan(
                            $v,
                            [
                                'every' => array_values(
                                    array_filter(
                                        array_map(
                                            fn($s) => $s['fields'][$k] ??
                                                (is_array($s['extra'] ?? null)
                                                    ? $s['extra']
                                                    : null),
                                            $schemas,
                                        ),
                                        fn($s) => $s !== null,
                                    ),
                                ),
                            ],
                            $fields,
                            $definitions,
                            $depth + 1,
                        );
            }
            return $out;
        }
        return $value;
    }
}
