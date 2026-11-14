<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $automatic_profile
 * @property-read ?list<string> $available_location_inputs
 * @property-read ?string $components_source
 * @property-read ?DeliveryChargeTaxCalculationRequest $delivery_charge_calculation
 * @property-read bool $enabled
 * @property-read ?BuyerOrderTaxExemption $exemption
 * @property-read ?BuyerOrderTaxLocation $location
 * @property-read string $mode
 * @property-read ?string $price_mode
 * @property-read TaxReverseCharge|null $reverse_charge
 * @property-read string $status
 * @property-read ?list<string> $supported_countries
 * @property-read list<BuyerOrderTaxTaxBreakdownsItemPercentage|BuyerOrderTaxTaxBreakdownsItemFlatAmount|\stdClass>|null $tax_breakdowns
 * Presence-aware response; omitted optional fields return null. */
final class BuyerOrderTax extends Model {
    /** @param array{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'components_source'?: string, 'delivery_charge_calculation'?: mixed, 'enabled': bool, 'exemption'?: mixed, 'location'?: mixed, 'mode': string, 'price_mode'?: string, 'reverse_charge'?: mixed, 'status': string, 'supported_countries'?: list<string>, 'tax_breakdowns'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderTax')); }
    /** Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected".
     * @return ?string
     */
    public function getAutomaticProfile(): ?string { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. [] (Value): string.
     * @return ?list<string>
     */
    public function getAvailableLocationInputs(): ?array { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Value enum: "provided", "callback".
     * @return ?string
     */
    public function getComponentsSource(): ?string { return $this->get('components_source'); }
    public function hasComponentsSource(): bool { return $this->has('components_source'); }
    /** The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax.
     * @return ?DeliveryChargeTaxCalculationRequest
     */
    public function getDeliveryChargeCalculation(): ?DeliveryChargeTaxCalculationRequest { return $this->get('delivery_charge_calculation'); }
    public function hasDeliveryChargeCalculation(): bool { return $this->has('delivery_charge_calculation'); }
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`.
     * @return bool
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. The recorded exemption assessment, without merchant evidence references.
     * @return ?BuyerOrderTaxExemption
     */
    public function getExemption(): ?BuyerOrderTaxExemption { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location used to calculate tax on a buyer's order, and where its address came from.
     * @return ?BuyerOrderTaxLocation
     */
    public function getLocation(): ?BuyerOrderTaxLocation { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive".
     * @return ?string
     */
    public function getPriceMode(): ?string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. anyOf[1] (Value): {@see TaxReverseCharge}. The buyer accounts for the tax under the reverse charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax. anyOf[2] (Value): null.
     * @return TaxReverseCharge|null
     */
    public function getReverseCharge(): TaxReverseCharge|null { return $this->get('reverse_charge'); }
    public function hasReverseCharge(): bool { return $this->has('reverse_charge'); }
    /** Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. [] (Value): string.
     * @return ?list<string>
     */
    public function getSupportedCountries(): ?array { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. [] (Value): {@see TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<BuyerOrderTaxTaxBreakdownsItemPercentage|BuyerOrderTaxTaxBreakdownsItemFlatAmount|\stdClass>|null
     */
    public function getTaxBreakdowns(): ?array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
