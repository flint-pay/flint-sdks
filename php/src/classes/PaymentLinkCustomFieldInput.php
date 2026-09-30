<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $custom_field_type
 * @property-read string $key
 * @property-read string $label
 * @property-read int $max_length
 * @property-read list<string> $options
 * @property-read string $placeholder
 * @property-read int $position
 * @property-read bool $required
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkCustomFieldInput extends Model {
    /** @param array{'custom_field_type': string, 'key': string, 'label': string, 'max_length'?: int, 'options'?: list<string>, 'placeholder'?: string, 'position'?: int, 'required'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCustomFieldInput')); }
    /** @return string
     * @throws SdkError When custom_field_type is omitted; use hasCustomFieldType() or valueOrDefault().
     */
    public function getCustomFieldType(): string { return $this->get('custom_field_type'); }
    public function hasCustomFieldType(): bool { return $this->has('custom_field_type'); }
    /** @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** @return int
     * @throws SdkError When max_length is omitted; use hasMaxLength() or valueOrDefault().
     */
    public function getMaxLength(): int { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** @return list<string>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** @return string
     * @throws SdkError When placeholder is omitted; use hasPlaceholder() or valueOrDefault().
     */
    public function getPlaceholder(): string { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
