<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $calculation_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $flat_money
 * @property-read string|null $fulfillment_choice_group_id
 * @property-read TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $jurisdiction
 * @property-read string|null $location_id
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read int|float|null $percent
 * @property-read string|null $price_mode
 * @property-read string|null $tax_breakdown_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read string|null $tax_type
 * @property-read string|null $taxability_reason
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $taxable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxBreakdownFlatAmountPreviousAttributesInput extends Model {
    /** @param array{'calculation_type'?: string|null, 'flat_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'fulfillment_choice_group_id'?: string|null, 'jurisdiction'?: TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'location_id'?: string|null, 'order_charge_id'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'percent'?: int|float|null, 'price_mode'?: string|null, 'tax_breakdown_id'?: string|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_type'?: string|null, 'taxability_reason'?: string|null, 'taxable_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxBreakdownFlatAmountPreviousAttributesInput')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "flat_amount". anyOf[1] (Value): string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "flat_amount". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): mixed { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** The fixed tax amount. Present on `flat_amount` rows. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. anyOf[1] (Value): string. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_choice_group_id is omitted; use hasFulfillmentChoiceGroupId() or valueOrDefault().
     */
    public function getFulfillmentChoiceGroupId(): mixed { return $this->get('fulfillment_choice_group_id'); }
    public function hasFulfillmentChoiceGroupId(): bool { return $this->has('fulfillment_choice_group_id'); }
    /** The taxing authority this row's tax is owed to. anyOf[1] (Value): {@see TaxJurisdictionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxJurisdictionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. anyOf[1] (Value): string. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. anyOf[1] (Value): string. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): mixed { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. anyOf[1] (Value): string. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. anyOf[1] (Value): string. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. anyOf[1] (Value): number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Whether the price this row taxes already includes the tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the price this row taxes already includes the tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): mixed { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. anyOf[1] (Value): string. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): mixed { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The kind of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst". anyOf[1] (Value): string. The kind of tax this row collects. Value enum: "sales_tax", "use_tax", "retail_delivery_fee", "vat", "gst", "hst", "pst", "qst". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): mixed { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete", "reverse_charge". anyOf[1] (Value): string. Why the row's tax is what it is. Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete", "reverse_charge". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): mixed { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When taxable_money is omitted; use hasTaxableMoney() or valueOrDefault().
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
