<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read string|null $name
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditLineAdditionPreviousAttributesInput extends Model {
    /** @param array{'bundle_id'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'order_line_item_id'?: string|null, 'product_id'?: string|null, 'quantity'?: int|null, 'sku'?: string|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditLineAdditionPreviousAttributesInput')); }
    /** The catalog bundle, for a bundle line. anyOf[1] (Value): string. The catalog bundle, for a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Always zero: promotions aren't re-evaluated for added lines. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** The line's name. anyOf[1] (Value): string. The line's name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The order line reserved by this edit. While pending, the line isn't on the order yet. anyOf[1] (Value): string. The order line reserved by this edit. While pending, the line isn't on the order yet. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the catalog product the item was sold from. Absent on bundle and custom lines. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Units to add. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Units to add. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The line's SKU, when it has one. anyOf[1] (Value): string. The line's SKU, when it has one. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Unit price times quantity, including modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the line, calculated through the order's tax settings. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** What the line costs: subtotal_money minus discount_money plus additive tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. The kind of line, as in the request. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** The unit price from the catalog, price list, customer pricing or request. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** The catalog variant, for a variant line. anyOf[1] (Value): string. The catalog variant, for a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
