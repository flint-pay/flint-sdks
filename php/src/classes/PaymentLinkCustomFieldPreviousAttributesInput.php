<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $custom_field_type
 * @property-read string|null $key
 * @property-read string|null $label
 * @property-read int|null $max_length
 * @property-read list<string>|null $options
 * @property-read string|null $payment_link_custom_field_id
 * @property-read string|null $placeholder
 * @property-read int|null $position
 * @property-read bool|null $required
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkCustomFieldPreviousAttributesInput extends Model {
    /** @param array{'custom_field_type'?: string|null, 'key'?: string|null, 'label'?: string|null, 'max_length'?: int|null, 'options'?: list<string>|null, 'payment_link_custom_field_id'?: string|null, 'placeholder'?: string|null, 'position'?: int|null, 'required'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCustomFieldPreviousAttributesInput')); }
    /** What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox", "textarea". anyOf[1] (Value): string. What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox", "textarea". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When custom_field_type is omitted; use hasCustomFieldType() or valueOrDefault().
     */
    public function getCustomFieldType(): mixed { return $this->get('custom_field_type'); }
    public function hasCustomFieldType(): bool { return $this->has('custom_field_type'); }
    /** Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. anyOf[1] (Value): string. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. minLength: 1. maxLength: 243. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): mixed { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Question shown to the buyer. anyOf[1] (Value): string. Question shown to the buyer. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): mixed { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. anyOf[1] (Value): integer. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum: 4096. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_length is omitted; use hasMaxLength() or valueOrDefault().
     */
    public function getMaxLength(): mixed { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. anyOf[1] (Value): Array of string. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. anyOf[1][] (Value): string. maxLength: 4096. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): mixed { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Unique identifier for this payment link custom field, prefixed `plcf_`. anyOf[1] (Value): string. Unique identifier for this payment link custom field, prefixed `plcf_`. Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_link_custom_field_id is omitted; use hasPaymentLinkCustomFieldId() or valueOrDefault().
     */
    public function getPaymentLinkCustomFieldId(): mixed { return $this->get('payment_link_custom_field_id'); }
    public function hasPaymentLinkCustomFieldId(): bool { return $this->has('payment_link_custom_field_id'); }
    /** Hint text shown inside the empty field. anyOf[1] (Value): string. Hint text shown inside the empty field. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When placeholder is omitted; use hasPlaceholder() or valueOrDefault().
     */
    public function getPlaceholder(): mixed { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Display order among the link's custom fields. Lower numbers come first. anyOf[1] (Value): integer. Display order among the link's custom fields. Lower numbers come first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether the buyer must answer before paying. anyOf[1] (Value): boolean. Whether the buyer must answer before paying. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): mixed { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
