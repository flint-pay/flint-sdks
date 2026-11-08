<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $custom_field_type
 * @property-read string $key
 * @property-read string $label
 * @property-read string $payment_link_custom_field_id
 * @property-read mixed $value
 * Presence-aware response; omitted optional fields return null. */
final class OrderCreatedMerchantEventDataObjectCustomFieldAnswersItemTextarea extends Model {
    /** @param array{'custom_field_type': string, 'key': string, 'label': string, 'payment_link_custom_field_id': string, 'value': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCreatedMerchantEventDataObjectCustomFieldAnswersItemTextarea')); }
    /** The kind of field answered, which determines the type of `value`. Value enum: "textarea".
     * @return string
     */
    public function getCustomFieldType(): string { return $this->get('custom_field_type'); }
    public function hasCustomFieldType(): bool { return $this->has('custom_field_type'); }
    /** The field's `key` when checkout started. minLength: 1. maxLength: 243.
     * @return string
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** The question the buyer saw: the field's `label` when checkout started. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: ^plcf_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getPaymentLinkCustomFieldId(): string { return $this->get('payment_link_custom_field_id'); }
    public function hasPaymentLinkCustomFieldId(): bool { return $this->has('payment_link_custom_field_id'); }
    /** The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: 1. maxLength: 4096. anyOf[1] (Value): string. minLength: 1. maxLength: 4096. anyOf[2] (Value): boolean.
     * @return mixed
     */
    public function getValue(): mixed { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
