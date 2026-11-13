<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read ?BuyerInvoiceSnapshotTaxBreakdownsItemPercentageFlatMoney $flat_money
 * @property-read ?string $fulfillment_choice_group_id
 * @property-read BuyerInvoiceSnapshotTaxBreakdownsItemPercentageJurisdiction $jurisdiction
 * @property-read ?string $location_id
 * @property-read ?string $order_charge_id
 * @property-read string $order_id
 * @property-read ?string $order_line_item_id
 * @property-read float $percent
 * @property-read string $price_mode
 * @property-read string $tax_breakdown_id
 * @property-read BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxMoney $tax_money
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * @property-read BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxableMoney $taxable_money
 * Presence-aware response; omitted optional fields return null. */
final class BuyerInvoiceSnapshotTaxBreakdownsItemPercentage extends Model {
    /** @param array{'calculation_type': string, 'flat_money'?: mixed, 'fulfillment_choice_group_id'?: string, 'jurisdiction': mixed, 'location_id'?: string, 'order_charge_id'?: string, 'order_id': string, 'order_line_item_id'?: string, 'percent': float, 'price_mode': string, 'tax_breakdown_id': string, 'tax_money': mixed, 'tax_type': string, 'taxability_reason': string, 'taxable_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoiceSnapshotTaxBreakdownsItemPercentage')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "percentage".
     * @return string
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?BuyerInvoiceSnapshotTaxBreakdownsItemPercentageFlatMoney
     */
    public function getFlatMoney(): ?BuyerInvoiceSnapshotTaxBreakdownsItemPercentageFlatMoney { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** fulfillment_choice_group_id
     * @return ?string
     */
    public function getFulfillmentChoiceGroupId(): ?string { return $this->get('fulfillment_choice_group_id'); }
    public function hasFulfillmentChoiceGroupId(): bool { return $this->has('fulfillment_choice_group_id'); }
    /** The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return BuyerInvoiceSnapshotTaxBreakdownsItemPercentageJurisdiction
     */
    public function getJurisdiction(): BuyerInvoiceSnapshotTaxBreakdownsItemPercentageJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** location_id
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax.
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Whether the price this row taxes already includes the tax. Value enum: "additive", "inclusive".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax.
     * @return string
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxMoney
     */
    public function getTaxMoney(): BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The kind of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     * @return string
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete", "reverse_charge".
     * @return string
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxableMoney
     */
    public function getTaxableMoney(): BuyerInvoiceSnapshotTaxBreakdownsItemPercentageTaxableMoney { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
