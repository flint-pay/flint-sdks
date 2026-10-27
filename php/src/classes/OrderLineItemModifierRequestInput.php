<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $modifier_id
 * @property-read string $order_line_item_modifier_id
 * @property-read string $quantity
 * @property-read TextModifierRequestInput|array<array-key, mixed>|\stdClass $text
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemModifierRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemModifierRequestInput')); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * @return string
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Shape $ (Value): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When order_line_item_modifier_id is omitted; use hasOrderLineItemModifierId() or valueOrDefault().
     */
    public function getOrderLineItemModifierId(): string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see TextModifierRequestInput}. Text a buyer entered for a text modifier group on an order line item.
     * @return TextModifierRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
