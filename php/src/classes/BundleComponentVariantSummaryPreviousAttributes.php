<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $is_available_for_sale
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read string|null $product_name
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BundleComponentVariantSummaryPreviousAttributes extends Model {
    /** @param array{'is_available_for_sale'?: mixed, 'name'?: mixed, 'product_id'?: mixed, 'product_name'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleComponentVariantSummaryPreviousAttributes')); }
    /** Whether the component's variant and its product are both active. anyOf[1] (Value): boolean. Whether the component's variant and its product are both active. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsAvailableForSale(): bool|null { return $this->get('is_available_for_sale'); }
    public function hasIsAvailableForSale(): bool { return $this->has('is_available_for_sale'); }
    /** Name of the component's variant, when set. anyOf[1] (Value): string. Name of the component's variant, when set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of the product this component variant belongs to. anyOf[1] (Value): string. Identifier of the product this component variant belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Name of the product the variant belongs to. anyOf[1] (Value): string. Name of the product the variant belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductName(): string|null { return $this->get('product_name'); }
    public function hasProductName(): bool { return $this->has('product_name'); }
    /** Option names and values selected by the component's variant. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributes}. Option names and values selected by the component's variant. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributes>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Stock keeping unit assigned to the component's variant, when set. anyOf[1] (Value): string. Stock keeping unit assigned to the component's variant, when set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Identifier of the product variant included in the component. anyOf[1] (Value): string. Identifier of the product variant included in the component. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
