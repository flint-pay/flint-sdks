<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestPreviousAttributes|null $calculation
 * @property-read string|null $line_item_tax_category
 * @property-read bool|null $taxable
 * Presence-aware response; omitted optional fields return null. */
final class OrderCalculatedLineItemTaxPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'line_item_tax_category'?: mixed, 'taxable'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedLineItemTaxPreviousAttributes')); }
    /** The tax you supply for this line item. Used when the order's tax `mode` is `external`. anyOf[1] (Value): {@see TaxCalculationRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxCalculationRequestPreviousAttributes|null
     */
    public function getCalculation(): TaxCalculationRequestPreviousAttributes|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLineItemTaxCategory(): string|null { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Whether the line item is subject to tax. anyOf[1] (Value): boolean. Whether the line item is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
