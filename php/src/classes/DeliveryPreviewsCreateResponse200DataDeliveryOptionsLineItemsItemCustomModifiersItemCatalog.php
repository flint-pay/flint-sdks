<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $modifier_id
 * @property-read ?string $order_line_item_modifier_id
 * @property-read ?string $quantity
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText $text
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalog extends Model {
    /** @param array{'metadata'?: mixed, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: string, 'text'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalog')); }
    /** Shape $ (Value): {@see MetadataRequest}. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: 1.
     * @return string
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Shape $ (Value): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getOrderLineItemModifierId(): ?string { return $this->get('order_line_item_modifier_id'); }
    public function hasOrderLineItemModifierId(): bool { return $this->has('order_line_item_modifier_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getQuantity(): ?string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText}. Text a buyer entered for a text modifier group on an order line item.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText
     */
    public function getText(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomModifiersItemCatalogText { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
    /** Shape $ (Value): string. Selects the type branch. Value enum: "catalog".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
