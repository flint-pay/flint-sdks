<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderTaxAttentionPreviousAttributes|null $attention
 * @property-read string|null $automatic_profile
 * @property-read list<string>|null $available_location_inputs
 * @property-read OrderTaxCallbackEvaluationPreviousAttributes|null $callback_evaluation
 * @property-read string|null $components_source
 * @property-read DeliveryChargeTaxCalculationRequestPreviousAttributes|null $delivery_charge_calculation
 * @property-read bool|null $enabled
 * @property-read OrderTaxExemptionPreviousAttributes|null $exemption
 * @property-read OrderTaxLocationPreviousAttributes|null $location
 * @property-read string|null $mode
 * @property-read string|null $price_mode
 * @property-read TaxReverseChargePreviousAttributes|null $reverse_charge
 * @property-read string|null $status
 * @property-read list<string>|null $supported_countries
 * @property-read list<\stdClass>|null $tax_breakdowns
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxPreviousAttributes extends Model {
    /** @param array{'attention'?: mixed, 'automatic_profile'?: mixed, 'available_location_inputs'?: mixed, 'callback_evaluation'?: mixed, 'components_source'?: mixed, 'delivery_charge_calculation'?: mixed, 'enabled'?: mixed, 'exemption'?: mixed, 'location'?: mixed, 'mode'?: mixed, 'price_mode'?: mixed, 'reverse_charge'?: mixed, 'status'?: mixed, 'supported_countries'?: mixed, 'tax_breakdowns'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxPreviousAttributes')); }
    /** Tax information that needs merchant attention. Null when no tax attention is outstanding. Captured payments and refunds remain recorded; contact Flint support before changing tax. Omitted from buyer responses. Always present with merchant credentials. anyOf[1] (Value): {@see OrderTaxAttentionPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderTaxAttentionPreviousAttributes|null
     */
    public function getAttention(): OrderTaxAttentionPreviousAttributes|null { return $this->get('attention'); }
    public function hasAttention(): bool { return $this->has('attention'); }
    /** Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected". anyOf[1] (Value): string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAutomaticProfile(): string|null { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. anyOf[1] (Value): Array of string. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAvailableLocationInputs(): array|null { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. anyOf[1] (Value): {@see OrderTaxCallbackEvaluationPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderTaxCallbackEvaluationPreviousAttributes|null
     */
    public function getCallbackEvaluation(): OrderTaxCallbackEvaluationPreviousAttributes|null { return $this->get('callback_evaluation'); }
    public function hasCallbackEvaluation(): bool { return $this->has('callback_evaluation'); }
    /** Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Value enum: "provided", "callback". anyOf[1] (Value): string. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Value enum: "provided", "callback". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getComponentsSource(): string|null { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. anyOf[1] (Value): {@see DeliveryChargeTaxCalculationRequestPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryChargeTaxCalculationRequestPreviousAttributes|null
     */
    public function getDeliveryChargeCalculation(): DeliveryChargeTaxCalculationRequestPreviousAttributes|null { return $this->get('delivery_charge_calculation'); }
    public function hasDeliveryChargeCalculation(): bool { return $this->has('delivery_charge_calculation'); }
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. anyOf[1] (Value): boolean. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. anyOf[1] (Value): {@see OrderTaxExemptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderTaxExemptionPreviousAttributes|null
     */
    public function getExemption(): OrderTaxExemptionPreviousAttributes|null { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. anyOf[1] (Value): {@see OrderTaxLocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderTaxLocationPreviousAttributes|null
     */
    public function getLocation(): OrderTaxLocationPreviousAttributes|null { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external". anyOf[1] (Value): string. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive". anyOf[1] (Value): string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceMode(): string|null { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1] (Value): {@see TaxReverseChargePreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxReverseChargePreviousAttributes|null
     */
    public function getReverseCharge(): TaxReverseChargePreviousAttributes|null { return $this->get('reverse_charge'); }
    public function hasReverseCharge(): bool { return $this->has('reverse_charge'); }
    /** Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". anyOf[1] (Value): string. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for categories supported by automatic tax. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered. Services, professional services, physical goods and taxable charges are unsupported outside the US. The list is empty when an unsettled taxable item has an unsupported category or the checkout needs an active tax connection. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. anyOf[1] (Value): Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for categories supported by automatic tax. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered. Services, professional services, physical goods and taxable charges are unsupported outside the US. The list is empty when an unsettled taxable item has an unsupported category or the checkout needs an active tax connection. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedCountries(): array|null { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. anyOf[1] (Value): Array of {@see TaxBreakdownPreviousAttributes}. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. anyOf[1][] (Value): {@see TaxBreakdownPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getTaxBreakdowns(): array|null { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
