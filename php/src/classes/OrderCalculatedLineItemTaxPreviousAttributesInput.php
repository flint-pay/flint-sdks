<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculation
 * @property-read string|null $line_item_tax_category
 * @property-read bool|null $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderCalculatedLineItemTaxPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'line_item_tax_category'?: string|null, 'taxable'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedLineItemTaxPreviousAttributesInput')); }
    /** The tax you supply for this line item. Used when the order's tax `mode` is `external`. anyOf[1] (Value): {@see TaxCalculationRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): mixed { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Whether the line item is subject to tax. anyOf[1] (Value): boolean. Whether the line item is subject to tax. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
