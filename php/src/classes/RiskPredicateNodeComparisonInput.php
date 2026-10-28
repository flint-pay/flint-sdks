<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $attribute
 * @property-read string $operator
 * @property-read string|int|bool $value
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskPredicateNodeComparisonInput extends Model {
    /** @param array{'attribute': string, 'operator': string, 'value': string|int|bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskPredicateNodeComparisonInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 280.
     * @return string
     * @throws SdkError When attribute is omitted; use hasAttribute() or valueOrDefault().
     */
    public function getAttribute(): string { return $this->get('attribute'); }
    public function hasAttribute(): bool { return $this->has('attribute'); }
    /** Shape $ (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte".
     * @return string
     * @throws SdkError When operator is omitted; use hasOperator() or valueOrDefault().
     */
    public function getOperator(): string { return $this->get('operator'); }
    public function hasOperator(): bool { return $this->has('operator'); }
    /** Shape $ (Value): string or integer or boolean. Shape $.oneOf[1] (Value): string. minLength: 1. Shape $.oneOf[2] (Value): integer. Shape $.oneOf[3] (Value): boolean.
     * @return string|int|bool
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
