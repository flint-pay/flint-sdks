<?php
declare(strict_types=1);
namespace Flint;
class Model implements \JsonSerializable
{
    protected readonly mixed $values;
    private readonly mixed $inputValues;
    private readonly array $codec;
    private readonly ?array $representation;
    protected readonly array $schema;
    protected readonly array $redactFields;
    public function __construct(
        mixed $values,
        array $schema,
        bool $response = false,
        array $redactFields = [],
        ?array $compiled = null,
    ) {
        $this->schema = $schema;
        $codec = $compiled ?? \Flint\Internal\SchemaAdapter::compile($schema);
        $this->codec = $codec;
        $representation = $compiled['phpRepresentation'] ?? null;
        if ($representation !== null) {
            self::assertRepresentation($representation);
        }
        $this->representation = $representation;
        $this->redactFields = $redactFields;
        if (is_array($values) && $codec['modelObjectInput']) {
            $values = (object) $values;
        }
        $normalized = Codec::execute($values, $codec, [
            'mode' => $response ? 'response' : 'request',
        ]);
        // Store public values: unwrap nested models and exact wire-number wrappers,
        // while retaining the normalized distinction between objects and lists.
        $unwrap = function (mixed $value, int $depth = 0) use (&$unwrap): mixed {
            if ($depth > 256) {
                Codec::fail(
                    'value',
                    'value exceeds the supported nesting depth or contains a cycle',
                );
            }
            if ($value instanceof Model) {
                return $unwrap($value->jsonSerialize(), $depth + 1);
            }
            if ($value instanceof RawNumber) {
                return $value->value;
            }
            if (is_array($value)) {
                return array_map(fn($v) => $unwrap($v, $depth + 1), $value);
            }
            if (is_object($value)) {
                $out = new \stdClass();
                foreach ((array) $value as $key => $child) {
                    $out->{$key} = $unwrap($child, $depth + 1);
                }
                return $out;
            }
            return $value;
        };
        $preserveNumbers = function (mixed $value, int $depth = 0) use (&$preserveNumbers): mixed {
            if ($depth > 256) {
                Codec::fail('value', 'value exceeds supported nesting depth or contains a cycle');
            }
            if ($value instanceof RawNumber) {
                return new ExactNumber($value->value);
            }
            if (is_array($value)) {
                return array_map(fn($child) => $preserveNumbers($child, $depth + 1), $value);
            }
            if (is_object($value)) {
                $out = new \stdClass();
                foreach ((array) $value as $key => $child) {
                    $out->{$key} = $preserveNumbers($child, $depth + 1);
                }
                return $out;
            }
            return $value;
        };
        $this->inputValues = $preserveNumbers($normalized);
        $this->values = $unwrap($normalized);
    }
    /** @internal Validate the serialized public-value graph without invoking schema adapters. */
    public static function assertRepresentation(mixed $plan, int $depth = 0): void
    {
        if (!is_array($plan) || $depth > 256) {
            throw new \InvalidArgumentException('Invalid PHP representation');
        }
        switch ($plan['kind'] ?? null) {
            case 'value':
                if (
                    in_array(
                        $plan['type'] ?? null,
                        [
                            'mixed',
                            'null',
                            'string',
                            'int',
                            'float',
                            'bool',
                            '\\stdClass',
                            'array|object',
                        ],
                        true,
                    )
                ) {
                    return;
                }
                break;
            case 'entity':
                if (
                    is_string($plan['name'] ?? null) &&
                    preg_match('/^[A-Za-z][A-Za-z0-9_]*$/D', $plan['name'])
                ) {
                    return;
                }
                break;
            case 'nullable':
            case 'list':
            case 'map':
                self::assertRepresentation($plan['value'] ?? null, $depth + 1);
                return;
            case 'record':
            case 'tagged':
                $fields = $plan[$plan['kind'] === 'record' ? 'fields' : 'variants'] ?? null;
                if (
                    !is_array($fields) ||
                    ($plan['kind'] === 'tagged' && !is_string($plan['field'] ?? null))
                ) {
                    break;
                }
                foreach ($fields as $field) {
                    self::assertRepresentation($field, $depth + 1);
                }
                if (isset($plan['extra'])) {
                    self::assertRepresentation($plan['extra'], $depth + 1);
                }
                return;
        }
        throw new \InvalidArgumentException('Invalid PHP representation');
    }
    /** @internal Execute an already validated public representation after codec normalization. */
    public static function hydrate(
        mixed $value,
        array $plan,
        array $redactFields = [],
        int $depth = 0,
    ): mixed {
        if ($depth > 256) {
            throw new \InvalidArgumentException('PHP representation nesting limit');
        }
        switch ($plan['kind']) {
            case 'value':
                return self::copyValue($value);
            case 'nullable':
                return $value === null
                    ? null
                    : self::hydrate($value, $plan['value'], $redactFields, $depth + 1);
            case 'entity':
                if ($value instanceof Model) {
                    return $value;
                }
                $class = __NAMESPACE__ . '\\' . $plan['name'];
                return new $class($value, $redactFields);
            case 'list':
            case 'map':
                $out = [];
                foreach ((array) $value as $key => $child) {
                    $out[$key] = self::hydrate($child, $plan['value'], $redactFields, $depth + 1);
                }
                return $out;
            case 'tagged':
                $tag = is_object($value) ? $value->{$plan['field']} ?? null : null;
                return is_string($tag) && isset($plan['variants'][$tag])
                    ? self::hydrate($value, $plan['variants'][$tag], $redactFields, $depth + 1)
                    : self::copyValue($value);
            case 'record':
                $out = new \stdClass();
                foreach ((array) $value as $key => $child) {
                    $field = $plan['fields'][$key] ?? ($plan['extra'] ?? null);
                    $out->{$key} =
                        $field === null
                            ? self::copyValue($child)
                            : self::hydrate($child, $field, $redactFields, $depth + 1);
                }
                return $out;
        }
        throw new \InvalidArgumentException('Invalid PHP representation kind');
    }
    /** Copy normalized trees without losing immutable exact-number tokens. */
    private static function copyValue(mixed $value): mixed
    {
        if (is_array($value)) {
            return array_map(self::copyValue(...), $value);
        }
        if ($value instanceof \stdClass) {
            $out = new \stdClass();
            foreach ((array) $value as $key => $child) {
                $out->{$key} = self::copyValue($child);
            }
            return $out;
        }
        return $value;
    }
    public function has(string $field): bool
    {
        return is_object($this->values)
            ? property_exists($this->values, $field)
            : is_array($this->values) && array_key_exists($field, $this->values);
    }
    public function get(string $field): mixed
    {
        if (!$this->has($field)) {
            throw new SdkError(
                'validation',
                'Field ' .
                    $field .
                    ' was omitted; use has() or valueOrDefault() for optional fields.',
            );
        }
        $value = is_object($this->values) ? $this->values->{$field} : $this->values[$field];
        $plan = $this->representation['fields'][$field] ?? ($this->representation['extra'] ?? null);
        return $plan === null
            ? self::copyValue($value)
            : self::hydrate($value, $plan, $this->redactFields);
    }
    /** Return the fallback only for omission; an explicit null remains null. */
    public function valueOrDefault(string $field, mixed $default = null): mixed
    {
        return $this->has($field) ? $this->get($field) : self::copyValue($default);
    }
    public function __get(string $field): mixed
    {
        return $this->get($field);
    }
    public function __isset(string $field): bool
    {
        return $this->has($field) && $this->get($field) !== null;
    }
    /** Preserve the interpreted numeric kind when generated inputs are encoded again. */
    public function toInputArray(): array
    {
        return (array) self::copyValue($this->inputValues);
    }
    public function toInputValue(): mixed
    {
        return self::copyValue($this->inputValues);
    }
    public function toArray(): array
    {
        if (!is_object($this->values) && !is_array($this->values)) {
            throw new SdkError(
                'validation',
                'This model contains a scalar; use jsonSerialize() to access its value',
            );
        }
        return (array) self::copyValue($this->values);
    }
    public function jsonSerialize(): mixed
    {
        return self::copyValue($this->values);
    }
    public function __debugInfo(): array
    {
        $redacted = Codec::redactPlan($this->values, $this->codec, $this->redactFields);
        return is_array($redacted) || is_object($redacted)
            ? (array) $redacted
            : ['value' => $redacted];
    }
}
