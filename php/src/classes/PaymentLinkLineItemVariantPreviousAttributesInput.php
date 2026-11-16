<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantity_adjustment
 * @property-read bool|null $allow_unit_price_adjustment
 * @property-read string|null $bundle_id
 * @property-read string|null $default_variant_id
 * @property-read string|null $description
 * @property-read bool|null $is_catalog_item_unavailable
 * @property-read string|null $key
 * @property-read int|null $max_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $max_unit_price_money
 * @property-read int|null $min_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $min_unit_price_money
 * @property-read string|null $name
 * @property-read string|null $payment_link_line_item_id
 * @property-read string|null $product_id
 * @property-read string|null $product_type
 * @property-read int|null $quantity
 * @property-read string|null $resolved_name
 * @property-read ProductPriceRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $resolved_price_range
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $resolved_unit_price_money
 * @property-read list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $suggested_unit_price_money_options
 * @property-read OrderLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * @property-read list<string>|null $variant_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkLineItemVariantPreviousAttributesInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkLineItemVariantPreviousAttributesInput')); }
    /** Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When allow_quantity_adjustment is omitted; use hasAllowQuantityAdjustment() or valueOrDefault().
     */
    public function getAllowQuantityAdjustment(): mixed { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1] (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When allow_unit_price_adjustment is omitted; use hasAllowUnitPriceAdjustment() or valueOrDefault().
     */
    public function getAllowUnitPriceAdjustment(): mixed { return $this->get('allow_unit_price_adjustment'); }
    public function hasAllowUnitPriceAdjustment(): bool { return $this->has('allow_unit_price_adjustment'); }
    /** ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When default_variant_id is omitted; use hasDefaultVariantId() or valueOrDefault().
     */
    public function getDefaultVariantId(): mixed { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1] (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed variant in variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_catalog_item_unavailable is omitted; use hasIsCatalogItemUnavailable() or valueOrDefault().
     */
    public function getIsCatalogItemUnavailable(): mixed { return $this->get('is_catalog_item_unavailable'); }
    public function hasIsCatalogItemUnavailable(): bool { return $this->has('is_catalog_item_unavailable'); }
    /** Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): mixed { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): mixed { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When max_unit_price_money is omitted; use hasMaxUnitPriceMoney() or valueOrDefault().
     */
    public function getMaxUnitPriceMoney(): mixed { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): mixed { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When min_unit_price_money is omitted; use hasMinUnitPriceMoney() or valueOrDefault().
     */
    public function getMinUnitPriceMoney(): mixed { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
    /** Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string. Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value): string. Unique identifier for this payment link line item, prefixed `plli_`. Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_link_line_item_id is omitted; use hasPaymentLinkLineItemId() or valueOrDefault().
     */
    public function getPaymentLinkLineItemId(): mixed { return $this->get('payment_link_line_item_id'); }
    public function hasPaymentLinkLineItemId(): bool { return $this->has('payment_link_line_item_id'); }
    /** Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog context only. The product that the variants in variant_ids belong to. Present only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string. Classification configured on a custom line for ACH debit. Null when unclassified or catalog-backed; catalog lines get their product classification when checkout starts. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): mixed { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. anyOf[1] (Value): string. Current catalog name of the referenced variant or bundle, or the product name for variant_ids lines. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resolved_name is omitted; use hasResolvedName() or valueOrDefault().
     */
    public function getResolvedName(): mixed { return $this->get('resolved_name'); }
    public function hasResolvedName(): bool { return $this->has('resolved_name'); }
    /** Current lowest and highest catalog unit prices among listed variants that can be sold in the line currency. Computed at read time, not stored. Omitted when no listed variant can be sold. anyOf[1] (Value): {@see ProductPriceRangePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ProductPriceRangePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When resolved_price_range is omitted; use hasResolvedPriceRange() or valueOrDefault().
     */
    public function getResolvedPriceRange(): mixed { return $this->get('resolved_price_range'); }
    public function hasResolvedPriceRange(): bool { return $this->has('resolved_price_range'); }
    /** Current catalog unit price of the referenced variant or bundle. For a fixed variant this is the base price that applies below the first quantity price break. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids lines, and when the catalog object no longer exists. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When resolved_unit_price_money is omitted; use hasResolvedUnitPriceMoney() or valueOrDefault().
     */
    public function getResolvedUnitPriceMoney(): mixed { return $this->get('resolved_unit_price_money'); }
    public function hasResolvedUnitPriceMoney(): bool { return $this->has('resolved_unit_price_money'); }
    /** Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributesInput}. Unit prices offered as one-tap choices when the buyer sets the price. anyOf[1][] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When suggested_unit_price_money_options is omitted; use hasSuggestedUnitPriceMoneyOptions() or valueOrDefault().
     */
    public function getSuggestedUnitPriceMoneyOptions(): mixed { return $this->get('suggested_unit_price_money_options'); }
    public function hasSuggestedUnitPriceMoneyOptions(): bool { return $this->has('suggested_unit_price_money_options'); }
    /** Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value): {@see OrderLineItemTaxPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** How the line item is defined. Value enum: "variant". anyOf[1] (Value): string. How the line item is defined. Value enum: "variant". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "variant".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1] (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): mixed { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
