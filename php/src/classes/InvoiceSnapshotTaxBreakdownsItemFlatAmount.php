<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read InvoiceSnapshotTaxBreakdownsItemFlatAmountFlatMoney $flat_money
 * @property-read ?string $fulfillment_choice_group_id
 * @property-read InvoiceSnapshotTaxBreakdownsItemFlatAmountJurisdiction $jurisdiction
 * @property-read ?string $location_id
 * @property-read ?string $order_charge_id
 * @property-read ?string $order_line_item_id
 * @property-read ?float $percent
 * @property-read string $price_mode
 * @property-read string $tax_breakdown_id
 * @property-read InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxMoney $tax_money
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * @property-read InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxableMoney $taxable_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceSnapshotTaxBreakdownsItemFlatAmount extends Model {
    /** @param array{'calculation_type': string, 'flat_money': mixed, 'fulfillment_choice_group_id'?: string, 'jurisdiction': mixed, 'location_id'?: string, 'order_charge_id'?: string, 'order_line_item_id'?: string, 'percent'?: float, 'price_mode': string, 'tax_breakdown_id': string, 'tax_money': mixed, 'tax_type': string, 'taxability_reason': string, 'taxable_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceSnapshotTaxBreakdownsItemFlatAmount')); }
    /** Shape $ (Value): string.  Value enum: "flat_amount".
     * @return string
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Shape $ (Value): {@see InvoiceSnapshotTaxBreakdownsItemFlatAmountFlatMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoiceSnapshotTaxBreakdownsItemFlatAmountFlatMoney
     */
    public function getFlatMoney(): InvoiceSnapshotTaxBreakdownsItemFlatAmountFlatMoney { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFulfillmentChoiceGroupId(): ?string { return $this->get('fulfillment_choice_group_id'); }
    public function hasFulfillmentChoiceGroupId(): bool { return $this->has('fulfillment_choice_group_id'); }
    /** Shape $ (Value): {@see InvoiceSnapshotTaxBreakdownsItemFlatAmountJurisdiction}. A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return InvoiceSnapshotTaxBreakdownsItemFlatAmountJurisdiction
     */
    public function getJurisdiction(): InvoiceSnapshotTaxBreakdownsItemFlatAmountJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Shape $ (Value): {@see InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxMoney
     */
    public function getTaxMoney(): InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxMoney { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax", "retail_delivery_fee".
     * @return string
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Shape $ (Value): string.  Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete".
     * @return string
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** Shape $ (Value): {@see InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxableMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxableMoney
     */
    public function getTaxableMoney(): InvoiceSnapshotTaxBreakdownsItemFlatAmountTaxableMoney { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
