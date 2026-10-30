<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $available_from
 * @property-read list<string> $enum_values
 * @property-read bool $is_available
 * @property-read bool $is_nullable
 * @property-read string $missing_value_behavior
 * @property-read string $name
 * @property-read list<string> $operators
 * @property-read string $unavailable_reason
 * @property-read string $value_type
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskAttributeInput extends Model {
    /** @param array{'available_from': string, 'enum_values'?: list<string>, 'is_available': bool, 'is_nullable': bool, 'missing_value_behavior': string, 'name': string, 'operators': list<string>, 'unavailable_reason'?: string, 'value_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskAttributeInput')); }
    /** Value enum: "pre_authorization", "post_authorization".
     * @return string
     * @throws SdkError When available_from is omitted; use hasAvailableFrom() or valueOrDefault().
     */
    public function getAvailableFrom(): string { return $this->get('available_from'); }
    public function hasAvailableFrom(): bool { return $this->has('available_from'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When enum_values is omitted; use hasEnumValues() or valueOrDefault().
     */
    public function getEnumValues(): array { return $this->get('enum_values'); }
    public function hasEnumValues(): bool { return $this->has('enum_values'); }
    /** Whether the attribute can be used in rules in this environment.
     * @return bool
     * @throws SdkError When is_available is omitted; use hasIsAvailable() or valueOrDefault().
     */
    public function getIsAvailable(): bool { return $this->get('is_available'); }
    public function hasIsAvailable(): bool { return $this->has('is_available'); }
    /** Whether the attribute can be missing from a payment.
     * @return bool
     * @throws SdkError When is_nullable is omitted; use hasIsNullable() or valueOrDefault().
     */
    public function getIsNullable(): bool { return $this->get('is_nullable'); }
    public function hasIsNullable(): bool { return $this->has('is_nullable'); }
    /** Value enum: "not_applicable_except_is_missing".
     * @return string
     * @throws SdkError When missing_value_behavior is omitted; use hasMissingValueBehavior() or valueOrDefault().
     */
    public function getMissingValueBehavior(): string { return $this->get('missing_value_behavior'); }
    public function hasMissingValueBehavior(): bool { return $this->has('missing_value_behavior'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Operators accepted by this attribute. [] enum: "eq", "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing". [] (Value): string.  Value enum: "eq", "neq", "gt", "gte", "lt", "lte", "in", "in_list", "is_missing".
     * @return list<string>
     * @throws SdkError When operators is omitted; use hasOperators() or valueOrDefault().
     */
    public function getOperators(): array { return $this->get('operators'); }
    public function hasOperators(): bool { return $this->has('operators'); }
    /** Value enum: "risk_scoring_not_enabled", "ip_geolocation_not_enabled".
     * @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** Value enum: "money", "currency", "string", "enum", "country", "email", "ip_address", "boolean", "integer".
     * @return string
     * @throws SdkError When value_type is omitted; use hasValueType() or valueOrDefault().
     */
    public function getValueType(): string { return $this->get('value_type'); }
    public function hasValueType(): bool { return $this->has('value_type'); }
}
