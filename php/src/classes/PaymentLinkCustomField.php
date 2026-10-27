<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $custom_field_type
 * @property-read string $key
 * @property-read string $label
 * @property-read ?int $max_length
 * @property-read ?list<string> $options
 * @property-read string $payment_link_custom_field_id
 * @property-read ?string $placeholder
 * @property-read ?int $position
 * @property-read ?bool $required
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkCustomField extends Model {
    /** @param array{'custom_field_type': string, 'key': string, 'label': string, 'max_length'?: int, 'options'?: list<string>, 'payment_link_custom_field_id': string, 'placeholder'?: string, 'position'?: int, 'required'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCustomField')); }
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea".
     * @return string
     */
    public function getCustomFieldType(): string { return $this->get('custom_field_type'); }
    public function hasCustomFieldType(): bool { return $this->has('custom_field_type'); }
    /** Shape $ (Value): string. Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     * @return string
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     * @return ?int
     */
    public function getMaxLength(): ?int { return $this->get('max_length'); }
    public function hasMaxLength(): bool { return $this->has('max_length'); }
    /** Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined metadata size budget. Shape $[] (Value): string. maxLength: 4096.
     * @return ?list<string>
     */
    public function getOptions(): ?array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentLinkCustomFieldId(): string { return $this->get('payment_link_custom_field_id'); }
    public function hasPaymentLinkCustomFieldId(): bool { return $this->has('payment_link_custom_field_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPlaceholder(): ?string { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getPosition(): ?int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRequired(): ?bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
