<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $automatic_profile
 * @property-read ?list<string> $available_location_inputs
 * @property-read bool $enabled
 * @property-read ?OrderTaxExemption $exemption
 * @property-read ?BuyerOrderTaxLocation $location
 * @property-read string $mode
 * @property-read ?string $price_mode
 * @property-read string $status
 * @property-read list<BuyerOrderTaxTaxBreakdownsItemPercentage|BuyerOrderTaxTaxBreakdownsItemFlatAmount|\stdClass>|null $tax_breakdowns
 * Presence-aware response; omitted optional fields return null. */
final class BuyerOrderTax extends Model {
    /** @param array{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'enabled': bool, 'exemption'?: mixed, 'location'?: mixed, 'mode': string, 'price_mode'?: string, 'status': string, 'tax_breakdowns'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderTax')); }
    /** Shape $ (Value): string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Value enum: "standard", "connected".
     * @return ?string
     */
    public function getAutomaticProfile(): ?string { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getAvailableLocationInputs(): ?array { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): {@see OrderTaxExemption}. Whether an order is tax exempt, and the customer it was assessed from.
     * @return ?OrderTaxExemption
     */
    public function getExemption(): ?OrderTaxExemption { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** Shape $ (Value): {@see BuyerOrderTaxLocation}. The location used to calculate tax on a buyer's order, and where its address came from.
     * @return ?BuyerOrderTaxLocation
     */
    public function getLocation(): ?BuyerOrderTaxLocation { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Shape $ (Value): string.  Value enum: "automatic", "external".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Value enum: "additive", "inclusive".
     * @return ?string
     */
    public function getPriceMode(): ?string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
    /** Shape $ (Value): string.  Value enum: "not_required", "requires_location", "calculated", "exempt", "incomplete".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of {@see TaxBreakdown}. Shape $[] (Value): {@see TaxBreakdown}. The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.
     * @return list<BuyerOrderTaxTaxBreakdownsItemPercentage|BuyerOrderTaxTaxBreakdownsItemFlatAmount|\stdClass>|null
     */
    public function getTaxBreakdowns(): ?array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
}
