<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxAttentionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $attention
 * @property-read string|null $automatic_profile
 * @property-read list<string>|null $available_location_inputs
 * @property-read OrderTaxCallbackEvaluationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $callback_evaluation
 * @property-read string|null $components_source
 * @property-read DeliveryChargeTaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $delivery_charge_calculation
 * @property-read bool|null $enabled
 * @property-read OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $exemption
 * @property-read OrderTaxLocationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $location
 * @property-read string|null $mode
 * @property-read string|null $price_mode
 * @property-read TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $reverse_charge
 * @property-read string|null $status
 * @property-read list<string>|null $supported_countries
 * @property-read list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $tax_breakdowns
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxPreviousAttributesInput extends Model {
    /** @param array{'attention'?: OrderTaxAttentionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'automatic_profile'?: string|null, 'available_location_inputs'?: list<string>|null, 'callback_evaluation'?: OrderTaxCallbackEvaluationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'components_source'?: string|null, 'delivery_charge_calculation'?: DeliveryChargeTaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'enabled'?: bool|null, 'exemption'?: OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'location'?: OrderTaxLocationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'mode'?: string|null, 'price_mode'?: string|null, 'reverse_charge'?: TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'supported_countries'?: list<string>|null, 'tax_breakdowns'?: list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxPreviousAttributesInput')); }
    /** Tax information that needs merchant attention. Null when no tax attention is outstanding. Captured payments and refunds remain recorded; contact Flint support before changing tax. Omitted from buyer responses. Always present with merchant credentials. anyOf[1] (Value): {@see OrderTaxAttentionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderTaxAttentionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When attention is omitted; use hasAttention() or valueOrDefault().
     */
    public function getAttention(): mixed { return $this->get('attention'); }
    public function hasAttention(): bool { return $this->has('attention'); }
    /** Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected". anyOf[1] (Value): string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When automatic_profile is omitted; use hasAutomaticProfile() or valueOrDefault().
     */
    public function getAutomaticProfile(): mixed { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. anyOf[1] (Value): Array of string. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When available_location_inputs is omitted; use hasAvailableLocationInputs() or valueOrDefault().
     */
    public function getAvailableLocationInputs(): mixed { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. anyOf[1] (Value): {@see OrderTaxCallbackEvaluationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderTaxCallbackEvaluationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When callback_evaluation is omitted; use hasCallbackEvaluation() or valueOrDefault().
     */
    public function getCallbackEvaluation(): mixed { return $this->get('callback_evaluation'); }
    public function hasCallbackEvaluation(): bool { return $this->has('callback_evaluation'); }
    /** Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Value enum: "provided", "callback". anyOf[1] (Value): string. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Value enum: "provided", "callback". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When components_source is omitted; use hasComponentsSource() or valueOrDefault().
     */
    public function getComponentsSource(): mixed { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. anyOf[1] (Value): {@see DeliveryChargeTaxCalculationRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryChargeTaxCalculationRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When delivery_charge_calculation is omitted; use hasDeliveryChargeCalculation() or valueOrDefault().
     */
    public function getDeliveryChargeCalculation(): mixed { return $this->get('delivery_charge_calculation'); }
    public function hasDeliveryChargeCalculation(): bool { return $this->has('delivery_charge_calculation'); }
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. anyOf[1] (Value): boolean. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. anyOf[1] (Value): {@see OrderTaxExemptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderTaxExemptionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When exemption is omitted; use hasExemption() or valueOrDefault().
     */
    public function getExemption(): mixed { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. anyOf[1] (Value): {@see OrderTaxLocationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderTaxLocationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external". anyOf[1] (Value): string. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): mixed { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1] (Value): {@see TaxReverseChargePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return TaxReverseChargePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When reverse_charge is omitted; use hasReverseCharge() or valueOrDefault().
     */
    public function getReverseCharge(): mixed { return $this->get('reverse_charge'); }
    public function hasReverseCharge(): bool { return $this->has('reverse_charge'); }
    /** Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". anyOf[1] (Value): string. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. anyOf[1] (Value): Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_countries is omitted; use hasSupportedCountries() or valueOrDefault().
     */
    public function getSupportedCountries(): mixed { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. anyOf[1] (Value): Array of {@see TaxBreakdownPreviousAttributesInput}. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. anyOf[1][] (Value): {@see TaxBreakdownPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<TaxBreakdownPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): mixed { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
