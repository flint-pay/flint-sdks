<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read ?string $description
 * @property-read MoneyValue $discount_money
 * @property-read string $name
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read string $return_replacement_line_item_id
 * @property-read string $return_resolution_id
 * @property-read ?string $sku
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * @property-read MoneyValue $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReplacementLineItem extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'discount_money': mixed, 'name': string, 'product_id'?: string, 'quantity': int, 'return_replacement_line_item_id': string, 'return_resolution_id': string, 'sku'?: string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReplacementLineItem')); }
    /** ID of the bundle the replacement line is for.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the replacement item.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Name of the replacement item.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unique identifier for this return replacement line item, prefixed `retrepli_`.
     * @return string
     */
    public function getReturnReplacementLineItemId(): string { return $this->get('return_replacement_line_item_id'); }
    public function hasReturnReplacementLineItemId(): bool { return $this->has('return_replacement_line_item_id'); }
    /** ID of the resolution the line belongs to.
     * @return string
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** SKU of the replacement item.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subtotal of the replacement units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Price of one replacement unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the variant the replacement line is for.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
