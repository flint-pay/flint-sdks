<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object> $modifiers
 * @property-read string $name
 * @property-read int $quantity
 * @property-read list<string> $swap_variant_ids
 * @property-read OrderLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read string $type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlanLineItemInputBundleInput extends Model {
    /** @param array{'bundle_id': string, 'description'?: string, 'modifiers'?: list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'swap_variant_ids'?: list<string>, 'tax'?: OrderLineItemTaxInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanLineItemInputBundleInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /**  [] (Value): {@see OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@see MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. [].text (Optional): {@see TextModifierRequestInput}. Text a buyer entered for a text modifier group on an order line item. [].type (Required): string. Selects the type branch. Value enum: "catalog", "text". [].oneOf[1] (Value): {@see OrderLineItemModifierInputCatalogInput}. The `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@see OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     * @return list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     * @throws SdkError When swap_variant_ids is omitted; use hasSwapVariantIds() or valueOrDefault().
     */
    public function getSwapVariantIds(): array { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** A line item's tax category and whether it is taxable.
     * @return OrderLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Value enum: "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
