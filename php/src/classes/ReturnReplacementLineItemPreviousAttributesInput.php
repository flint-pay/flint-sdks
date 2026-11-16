<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_id
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read string|null $return_replacement_line_item_id
 * @property-read string|null $return_resolution_id
 * @property-read string|null $sku
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReplacementLineItemPreviousAttributesInput extends Model {
    /** @param array{'bundle_id'?: string|null, 'description'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'product_id'?: string|null, 'quantity'?: int|null, 'return_replacement_line_item_id'?: string|null, 'return_resolution_id'?: string|null, 'sku'?: string|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReplacementLineItemPreviousAttributesInput')); }
    /** ID of the bundle the replacement line is for. anyOf[1] (Value): string. ID of the bundle the replacement line is for. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the replacement item. anyOf[1] (Value): string. Description of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount on the replacement units. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Name of the replacement item. anyOf[1] (Value): string. Name of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. anyOf[1] (Value): string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unique identifier for this return replacement line item, prefixed `retrepli_`. anyOf[1] (Value): string. Unique identifier for this return replacement line item, prefixed `retrepli_`. Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_replacement_line_item_id is omitted; use hasReturnReplacementLineItemId() or valueOrDefault().
     */
    public function getReturnReplacementLineItemId(): mixed { return $this->get('return_replacement_line_item_id'); }
    public function hasReturnReplacementLineItemId(): bool { return $this->has('return_replacement_line_item_id'); }
    /** ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): mixed { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** SKU of the replacement item. anyOf[1] (Value): string. SKU of the replacement item. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subtotal of the replacement units, before discount and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Tax on the replacement units. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discount, plus tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Price of one replacement unit. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the variant the replacement line is for. anyOf[1] (Value): string. ID of the variant the replacement line is for. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
