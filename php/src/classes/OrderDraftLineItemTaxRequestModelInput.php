<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $line_item_tax_category
 * @property-read bool $taxable
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDraftLineItemTaxRequestModelInput extends Model {
    /** @param array{'calculation'?: OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass, 'line_item_tax_category'?: string, 'taxable'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDraftLineItemTaxRequestModelInput')); }
    /** The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode.
     * @return OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Whether the line item is subject to tax.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
