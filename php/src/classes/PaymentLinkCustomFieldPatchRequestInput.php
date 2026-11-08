<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $custom_field_type
 * @property-read string $key
 * @property-read string $label
 * @property-read int $max_length
 * @property-read list<string> $options
 * @property-read string $payment_link_custom_field_id
 * @property-read string $placeholder
 * @property-read int $position
 * @property-read bool $required
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkCustomFieldPatchRequestInput extends Model {
    /** @param array{'custom_field_type': string, 'key': string, 'label': string, 'max_length'?: int, 'options'?: list<string>, 'payment_link_custom_field_id'?: string, 'placeholder'?: string, 'position'?: int, 'required'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCustomFieldPatchRequestInput')); }
    /** What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox", "textarea".
     * @return string
     * @throws SdkError When custom_field_type is omitted; use hasCustomFieldType() or valueOrDefault().
     */
    public function getCustomFieldType(): string { return $this->get('custom_field_type'); }
    public function hasCustomFieldType(): bool { return $this->has('custom_field_type'); }
    /** Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Question shown to the buyer. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum: 4096.
     * @return int
     * @throws SdkError When max_length is omitted; use hasMaxLength() or valueOrDefault().
     */
    public function getMaxLength(): int { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     * @return list<string>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1. Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     * @return string
     * @throws SdkError When payment_link_custom_field_id is omitted; use hasPaymentLinkCustomFieldId() or valueOrDefault().
     */
    public function getPaymentLinkCustomFieldId(): string { return $this->get('payment_link_custom_field_id'); }
    public function hasPaymentLinkCustomFieldId(): bool { return $this->has('payment_link_custom_field_id'); }
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When placeholder is omitted; use hasPlaceholder() or valueOrDefault().
     */
    public function getPlaceholder(): string { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether the buyer must answer before paying.
     * @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
