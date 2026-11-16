<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $is_available_for_sale
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read string|null $product_name
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BundleComponentVariantSummaryPreviousAttributesInput extends Model {
    /** @param array{'is_available_for_sale'?: bool|null, 'name'?: string|null, 'product_id'?: string|null, 'product_name'?: string|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleComponentVariantSummaryPreviousAttributesInput')); }
    /** Whether the component's variant and its product are both active. anyOf[1] (Value): boolean. Whether the component's variant and its product are both active. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_available_for_sale is omitted; use hasIsAvailableForSale() or valueOrDefault().
     */
    public function getIsAvailableForSale(): mixed { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Name of the component's variant, when set. anyOf[1] (Value): string. Name of the component's variant, when set. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product this component variant belongs to. anyOf[1] (Value): string. Identifier of the product this component variant belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Name of the product the variant belongs to. anyOf[1] (Value): string. Name of the product the variant belongs to. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_name is omitted; use hasProductName() or valueOrDefault().
     */
    public function getProductName(): mixed { return $this->get('product_name'); }
    public function hasProductName(): bool { return $this->has('product_name'); }
    /** Option names and values selected by the component's variant. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Option names and values selected by the component's variant. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to the component's variant, when set. anyOf[1] (Value): string. Stock keeping unit assigned to the component's variant, when set. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Identifier of the product variant included in the component. anyOf[1] (Value): string. Identifier of the product variant included in the component. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
