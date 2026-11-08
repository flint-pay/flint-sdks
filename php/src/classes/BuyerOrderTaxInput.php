<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $automatic_profile
 * @property-read list<string> $available_location_inputs
 * @property-read DeliveryChargeTaxCalculationRequestInput|array<array-key, mixed>|\stdClass $delivery_charge_calculation
 * @property-read bool $enabled
 * @property-read OrderTaxExemptionInput|array<array-key, mixed>|\stdClass $exemption
 * @property-read BuyerOrderTaxLocationInput|array<array-key, mixed>|\stdClass $location
 * @property-read string $mode
 * @property-read string $price_mode
 * @property-read string $status
 * @property-read list<string> $supported_countries
 * @property-read list<TaxBreakdownInput|array<array-key, mixed>|\stdClass> $tax_breakdowns
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerOrderTaxInput extends Model {
    /** @param array{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'delivery_charge_calculation'?: DeliveryChargeTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'enabled': bool, 'exemption'?: OrderTaxExemptionInput|array<array-key, mixed>|\stdClass, 'location'?: BuyerOrderTaxLocationInput|array<array-key, mixed>|\stdClass, 'mode': string, 'price_mode'?: string, 'status': string, 'supported_countries'?: list<string>, 'tax_breakdowns'?: list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderTaxInput')); }
    /** Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected".
     * @return string
     * @throws SdkError When automatic_profile is omitted; use hasAutomaticProfile() or valueOrDefault().
     */
    public function getAutomaticProfile(): string { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. [] (Value): string.
     * @return list<string>
     * @throws SdkError When available_location_inputs is omitted; use hasAvailableLocationInputs() or valueOrDefault().
     */
    public function getAvailableLocationInputs(): array { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode and a template is set. Existing charges retain their own tax.calculation. A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax.
     * @return DeliveryChargeTaxCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_charge_calculation is omitted; use hasDeliveryChargeCalculation() or valueOrDefault().
     */
    public function getDeliveryChargeCalculation(): mixed { return $this->get('delivery_charge_calculation'); }
    public function hasDeliveryChargeCalculation(): bool { return $this->has('delivery_charge_calculation'); }
    /** Whether Flint calculates tax for the order. When `false`, `status` is `not_required`.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The customer's tax exemption, when the order has one. Whether an order is tax exempt, and the customer it was assessed from.
     * @return OrderTaxExemptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exemption is omitted; use hasExemption() or valueOrDefault().
     */
    public function getExemption(): mixed { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location used to calculate tax on a buyer's order, and where its address came from.
     * @return BuyerOrderTaxLocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Value enum: "automatic", "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations and Canadian digital products and services are covered. Canadian physical goods and taxable charges are unsupported. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. [] (Value): string.
     * @return list<string>
     * @throws SdkError When supported_countries is omitted; use hasSupportedCountries() or valueOrDefault().
     */
    public function getSupportedCountries(): array { return $this->get('supported_countries'); }
    public function hasSupportedCountries(): bool { return $this->has('supported_countries'); }
    /** One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax only: automatic tax doesn't produce rows. [] (Value): {@see TaxBreakdownInput}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
