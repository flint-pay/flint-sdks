<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation $calculation
 * @property-read ?string $line_item_tax_category
 * @property-read ?bool $taxable
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax extends Model {
    /** @param array{'calculation'?: mixed, 'line_item_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTax')); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation}. A tax calculation you supply for a draft order line item, made of tax components and a price mode.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation
     */
    public function getCalculation(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemCustomTaxCalculation { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Shape $ (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
