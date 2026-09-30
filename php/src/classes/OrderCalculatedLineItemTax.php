<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read \stdClass $calculation
 * @property-read string $line_item_tax_category
 * @property-read bool $taxable
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderCalculatedLineItemTax extends Model {
    /** @param array{'calculation'?: mixed, 'line_item_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderCalculatedLineItemTax')); }
    /** @return \stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): \stdClass { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
