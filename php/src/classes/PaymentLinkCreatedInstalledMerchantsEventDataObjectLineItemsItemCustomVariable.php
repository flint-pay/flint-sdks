<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $allow_quantity_adjustment
 * @property-read bool $allow_unit_price_adjustment
 * @property-read ?string $bundle_id
 * @property-read ?string $default_variant_id
 * @property-read ?string $description
 * @property-read bool $is_catalog_item_unavailable
 * @property-read ?string $key
 * @property-read ?int $max_quantity
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMaxUnitPriceMoney $max_unit_price_money
 * @property-read ?int $min_quantity
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMinUnitPriceMoney $min_unit_price_money
 * @property-read string $name
 * @property-read string $payment_link_line_item_id
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?string $resolved_name
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedPriceRange $resolved_price_range
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedUnitPriceMoney $resolved_unit_price_money
 * @property-read ?list<PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableSuggestedUnitPriceMoneyOptionsItem> $suggested_unit_price_money_options
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableTax $tax
 * @property-read string $type
 * @property-read ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableUnitPriceMoney $unit_price_money
 * @property-read ?string $variant_id
 * @property-read ?list<string> $variant_ids
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariable extends Model {
    /** @param array{'allow_quantity_adjustment'?: bool, 'allow_unit_price_adjustment': bool, 'bundle_id'?: string, 'default_variant_id'?: string, 'description'?: string, 'is_catalog_item_unavailable': bool, 'key'?: string, 'max_quantity'?: int, 'max_unit_price_money'?: mixed, 'min_quantity'?: int, 'min_unit_price_money'?: mixed, 'name': string, 'payment_link_line_item_id': string, 'product_id'?: string, 'quantity': int, 'resolved_name'?: string, 'resolved_price_range'?: mixed, 'resolved_unit_price_money'?: mixed, 'suggested_unit_price_money_options'?: list<mixed>, 'tax'?: mixed, 'type': string, 'unit_price_money'?: mixed, 'variant_id'?: string, 'variant_ids'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariable')); }
    /** allow_quantity_adjustment
     * @return ?bool
     */
    public function getAllowQuantityAdjustment(): ?bool { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Value enum: true.
     * @return bool
     */
    public function getAllowUnitPriceAdjustment(): bool { return $this->get('allow_unit_price_adjustment'); }
    public function hasAllowUnitPriceAdjustment(): bool { return $this->has('allow_unit_price_adjustment'); }
    /** bundle_id
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getDefaultVariantId(): ?string { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * @return bool
     */
    public function getIsCatalogItemUnavailable(): bool { return $this->get('is_catalog_item_unavailable'); }
    public function hasIsCatalogItemUnavailable(): bool { return $this->has('is_catalog_item_unavailable'); }
    /** Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update.
     * @return ?string
     */
    public function getKey(): ?string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return ?int
     */
    public function getMaxQuantity(): ?int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMaxUnitPriceMoney
     */
    public function getMaxUnitPriceMoney(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMaxUnitPriceMoney { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return ?int
     */
    public function getMinQuantity(): ?int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMinUnitPriceMoney
     */
    public function getMinUnitPriceMoney(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableMinUnitPriceMoney { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** payment_link_line_item_id
     * @return string
     */
    public function getPaymentLinkLineItemId(): string { return $this->get('payment_link_line_item_id'); }
    public function hasPaymentLinkLineItemId(): bool { return $this->has('payment_link_line_item_id'); }
    /** Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists.
     * @return ?string
     */
    public function getResolvedName(): ?string { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. The lowest and highest unit prices across a product's variants.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedPriceRange
     */
    public function getResolvedPriceRange(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedPriceRange { return $this->get('resolved_price_range'); }
    public function hasResolvedPriceRange(): bool { return $this->has('resolved_price_range'); }
    /** Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedUnitPriceMoney
     */
    public function getResolvedUnitPriceMoney(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableResolvedUnitPriceMoney { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /**  [] (Value): {@see PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableSuggestedUnitPriceMoneyOptionsItem}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?list<PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableSuggestedUnitPriceMoneyOptionsItem>
     */
    public function getSuggestedUnitPriceMoneyOptions(): ?array { return $this->get('suggested_unit_price_money_options'); }
    public function hasSuggestedUnitPriceMoneyOptions(): bool { return $this->has('suggested_unit_price_money_options'); }
    /** A line item's tax category and whether it is taxable.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableTax
     */
    public function getTax(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Value enum: "custom_variable".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableUnitPriceMoney
     */
    public function getUnitPriceMoney(): ?PaymentLinkCreatedInstalledMerchantsEventDataObjectLineItemsItemCustomVariableUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** variant_id
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?list<string>
     */
    public function getVariantIds(): ?array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
