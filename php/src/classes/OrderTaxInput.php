<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $automatic_profile
 * @property-read list<string> $available_location_inputs
 * @property-read bool $enabled
 * @property-read OrderTaxExemptionInput|array<array-key, mixed>|\stdClass $exemption
 * @property-read OrderTaxLocationInput|array<array-key, mixed>|\stdClass $location
 * @property-read string $mode
 * @property-read string $price_mode
 * @property-read string $status
 * @property-read list<TaxBreakdownInput|array<array-key, mixed>|\stdClass> $tax_breakdowns
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxInput extends Model {
    /** @param array{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'enabled': bool, 'exemption'?: OrderTaxExemptionInput|array<array-key, mixed>|\stdClass, 'location'?: OrderTaxLocationInput|array<array-key, mixed>|\stdClass, 'mode': string, 'price_mode'?: string, 'status': string, 'tax_breakdowns'?: list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxInput')); }
    /** Shape $ (Value): string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected".
     * @return string
     * @throws SdkError When automatic_profile is omitted; use hasAutomaticProfile() or valueOrDefault().
     */
    public function getAutomaticProfile(): string { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When available_location_inputs is omitted; use hasAvailableLocationInputs() or valueOrDefault().
     */
    public function getAvailableLocationInputs(): array { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): {@see OrderTaxExemptionInput}. Whether an order is tax exempt, and the customer it was assessed from.
     * @return OrderTaxExemptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When exemption is omitted; use hasExemption() or valueOrDefault().
     */
    public function getExemption(): mixed { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** Shape $ (Value): {@see OrderTaxLocationInput}. The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from.
     * @return OrderTaxLocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Shape $ (Value): string.  Value enum: "automatic", "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive".
     * @return string
     * @throws SdkError When price_mode is omitted; use hasPriceMode() or valueOrDefault().
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Shape $ (Value): string.  Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of {@see TaxBreakdownInput}. Shape $[] (Value): {@see TaxBreakdownInput}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<TaxBreakdownInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
