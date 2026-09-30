<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available
 * @property-read string $available_from
 * @property-read list<string> $enum_values
 * @property-read string $missing_value_behavior
 * @property-read string $name
 * @property-read bool $nullable
 * @property-read list<string> $operators
 * @property-read string $unavailable_reason
 * @property-read string $value_type
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicRiskAttributeInput extends Model {
    /** @param array{'available': bool, 'available_from': string, 'enum_values'?: list<string>, 'missing_value_behavior': string, 'name': string, 'nullable': bool, 'operators': list<string>, 'unavailable_reason'?: string, 'value_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicRiskAttributeInput')); }
    /** @return bool
     * @throws SdkError When available is omitted; use hasAvailable() or valueOrDefault().
     */
    public function getAvailable(): bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** @return string
     * @throws SdkError When available_from is omitted; use hasAvailableFrom() or valueOrDefault().
     */
    public function getAvailableFrom(): string { return $this->get('available_from'); }
    public function hasAvailableFrom(): bool { return $this->has('available_from'); }
    /** @return list<string>
     * @throws SdkError When enum_values is omitted; use hasEnumValues() or valueOrDefault().
     */
    public function getEnumValues(): array { return $this->get('enum_values'); }
    public function hasEnumValues(): bool { return $this->has('enum_values'); }
    /** @return string
     * @throws SdkError When missing_value_behavior is omitted; use hasMissingValueBehavior() or valueOrDefault().
     */
    public function getMissingValueBehavior(): string { return $this->get('missing_value_behavior'); }
    public function hasMissingValueBehavior(): bool { return $this->has('missing_value_behavior'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return bool
     * @throws SdkError When nullable is omitted; use hasNullable() or valueOrDefault().
     */
    public function getNullable(): bool { return $this->get('nullable'); }
    public function hasNullable(): bool { return $this->has('nullable'); }
    /** @return list<string>
     * @throws SdkError When operators is omitted; use hasOperators() or valueOrDefault().
     */
    public function getOperators(): array { return $this->get('operators'); }
    public function hasOperators(): bool { return $this->has('operators'); }
    /** @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** @return string
     * @throws SdkError When value_type is omitted; use hasValueType() or valueOrDefault().
     */
    public function getValueType(): string { return $this->get('value_type'); }
    public function hasValueType(): bool { return $this->has('value_type'); }
}
