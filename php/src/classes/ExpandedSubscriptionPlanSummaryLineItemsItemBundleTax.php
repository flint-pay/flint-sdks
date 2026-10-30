<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $line_item_tax_category
 * @property-read ?bool $taxable
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax extends Model {
    /** @param array{'line_item_tax_category'?: string, 'taxable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedSubscriptionPlanSummaryLineItemsItemBundleTax')); }
    /** Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
}
