<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_id
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read string|null $name
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditLineAdditionPreviousAttributes extends Model {
    /** @param array{'bundle_id'?: mixed, 'discount_money'?: mixed, 'name'?: mixed, 'order_line_item_id'?: mixed, 'product_id'?: mixed, 'quantity'?: mixed, 'sku'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, 'type'?: mixed, 'unit_price_money'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditLineAdditionPreviousAttributes')); }
    /** The catalog bundle, for a bundle line. anyOf[1] (Value): string. The catalog bundle, for a bundle line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Always zero: promotions aren't re-evaluated for added lines. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** The line's name. anyOf[1] (Value): string. The line's name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The order line reserved by this edit. While pending, the line isn't on the order yet. anyOf[1] (Value): string. The order line reserved by this edit. While pending, the line isn't on the order yet. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the catalog product the item was sold from. Absent on bundle and custom lines. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Units to add. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The line's SKU, when it has one. anyOf[1] (Value): string. The line's SKU, when it has one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Unit price times quantity, including modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the line, calculated through the order's tax settings. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line costs: subtotal_money minus discount_money plus additive tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** The unit price from the catalog, price list, customer pricing or request. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant, for a variant line. anyOf[1] (Value): string. The catalog variant, for a variant line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
