<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_id
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributes|null $discount_money
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read string|null $return_replacement_line_item_id
 * @property-read string|null $return_resolution_id
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributes|null $subtotal_money
 * @property-read MoneyValuePreviousAttributes|null $tax_money
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReplacementLineItemPreviousAttributes extends Model {
    /** @param array{'bundle_id'?: mixed, 'description'?: mixed, 'discount_money'?: mixed, 'name'?: mixed, 'product_id'?: mixed, 'quantity'?: mixed, 'return_replacement_line_item_id'?: mixed, 'return_resolution_id'?: mixed, 'sku'?: mixed, 'subtotal_money'?: mixed, 'tax_money'?: mixed, 'total_money'?: mixed, 'unit_price_money'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReplacementLineItemPreviousAttributes')); }
    /** ID of the bundle the replacement line is for. anyOf[1] (Value): string. ID of the bundle the replacement line is for. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the replacement item. anyOf[1] (Value): string. Description of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount on the replacement units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getDiscountMoney(): MoneyValuePreviousAttributes|null { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Name of the replacement item. anyOf[1] (Value): string. Name of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. anyOf[1] (Value): string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unique identifier for this return replacement line item, prefixed `retrepli_`. anyOf[1] (Value): string. Unique identifier for this return replacement line item, prefixed `retrepli_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReplacementLineItemId(): string|null { return $this->get('return_replacement_line_item_id'); }
    public function hasReturnReplacementLineItemId(): bool { return $this->has('return_replacement_line_item_id'); }
    /** ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the line belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** SKU of the replacement item. anyOf[1] (Value): string. SKU of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subtotal of the replacement units, before discount and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the replacement units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTaxMoney(): MoneyValuePreviousAttributes|null { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discount, plus tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Price of one replacement unit. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the variant the replacement line is for. anyOf[1] (Value): string. ID of the variant the replacement line is for. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
