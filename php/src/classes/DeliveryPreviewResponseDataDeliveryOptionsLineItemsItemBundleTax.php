<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculation $calculation
 * @property-read ?string $line_item_tax_category
 * @property-read ?bool $taxable
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax extends Model {
    /** @param array{'calculation'?: mixed, 'line_item_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax')); }
    /** A tax calculation you supply for a draft order line item, made of tax components and a price mode.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculation
     */
    public function getCalculation(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTaxCalculation { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** taxable
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
