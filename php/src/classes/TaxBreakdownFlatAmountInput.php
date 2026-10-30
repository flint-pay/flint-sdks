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
 * @property-read string $order_line_item_id
 * @property-read int|float $percent
 * @property-read string $price_mode
 * @property-read string $tax_breakdown_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $taxable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxBreakdownFlatAmountInput extends Model {
    /** @param array{'calculation_type': string, 'flat_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'fulfillment_choice_group_id'?: string, 'jurisdiction': TaxJurisdictionInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'order_charge_id'?: string, 'order_line_item_id'?: string, 'percent'?: int|float, 'price_mode': string, 'tax_breakdown_id': string, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax_type': string, 'taxability_reason': string, 'taxable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxBreakdownFlatAmountInput')); }
    /** Value enum: "flat_amount".
     * @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** fulfillment_choice_group_id
     * @return string
     * @throws SdkError When fulfillment_choice_group_id is omitted; use hasFulfillmentChoiceGroupId() or valueOrDefault().
     */
    public function getFulfillmentChoiceGroupId(): string { return $this->get('fulfillment_choice_group_id'); }
    public function hasFulfillmentChoiceGroupId(): bool { return $this->has('fulfillment_choice_group_id'); }
    /** A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return TaxJurisdictionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** location_id
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** order_charge_id
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** order_line_item_id
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** tax_breakdown_id
     * @return string
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): string { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Value enum: "sales_tax", "use_tax", "retail_delivery_fee".
     * @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Value enum: "standard_rated", "not_taxable", "customer_exempt", "tax_disabled", "location_required", "calculation_incomplete".
     * @return string
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When taxable_money is omitted; use hasTaxableMoney() or valueOrDefault().
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
