<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $flat_money
 * @property-read string $fulfillment_choice_group_id
 * @property-read TaxJurisdictionInput|array<array-key, mixed>|\stdClass $jurisdiction
 * @property-read string $location_id
 * @property-read string $order_charge_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read int|float $percent
 * @property-read string $price_mode
 * @property-read string $tax_breakdown_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $taxable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxBreakdownInput extends Model {
    /** @param array{'calculation_type': string, 'flat_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'fulfillment_choice_group_id'?: string, 'jurisdiction': TaxJurisdictionInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'order_charge_id'?: string, 'order_id': string, 'order_line_item_id'?: string, 'percent': int|float, 'price_mode': string, 'tax_breakdown_id': string, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_type': string, 'taxability_reason': string, 'taxable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object|array{'calculation_type': string, 'flat_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'fulfillment_choice_group_id'?: string, 'jurisdiction': TaxJurisdictionInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'order_charge_id'?: string, 'order_id': string, 'order_line_item_id'?: string, 'percent'?: int|float, 'price_mode': string, 'tax_breakdown_id': string, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_type': string, 'taxability_reason': string, 'taxable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxBreakdownInput')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "percentage", "flat_amount".
     * @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * @return string
     * @throws SdkError When fulfillment_choice_group_id is omitted; use hasFulfillmentChoiceGroupId() or valueOrDefault().
     */
    public function getFulfillmentChoiceGroupId(): string { return $this->get('fulfillment_choice_group_id'); }
    public function hasFulfillmentChoiceGroupId(): bool { return $this->has('fulfillment_choice_group_id'); }
    /** The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return TaxJurisdictionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Whether the price this row taxes already includes the tax. Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB".
     * @return string
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The kind of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst".
     * @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete", "reverse_charge".
     * @return string
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When taxable_money is omitted; use hasTaxableMoney() or valueOrDefault().
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
