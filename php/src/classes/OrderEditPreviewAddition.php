<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read MoneyValue $discount_money
 * @property-read string $name
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?string $sku
 * @property-read MoneyValue $subtotal_money
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read MoneyValue $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditPreviewAddition extends Model {
    /** @param array{'bundle_id'?: string, 'discount_money': mixed, 'name': string, 'product_id'?: string, 'quantity': int, 'sku'?: string, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed, 'type': string, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreviewAddition')); }
    /** The catalog bundle, for a bundle line.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** The line's name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the catalog product the item was sold from. Absent on bundle and custom lines.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64. minimum: 1.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The line's SKU, when it has one.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Unit price times quantity, including modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the line, calculated through the order's tax settings. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** The unit price from the catalog, price list, customer pricing or request. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant, for a variant line.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
