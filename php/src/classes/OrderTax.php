<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $automatic_profile
 * @property-read list<string> $available_location_inputs
 * @property-read bool $enabled
 * @property-read OrderTaxExemption $exemption
 * @property-read string $failure_reason
 * @property-read OrderTaxLocation $location
 * @property-read string $mode
 * @property-read string $status
 * @property-read list<\stdClass> $tax_breakdowns
 * @property-read string $taxability_reason
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderTax extends Model {
    /** @param array{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'enabled': bool, 'exemption'?: mixed, 'failure_reason'?: string, 'location'?: mixed, 'mode': string, 'status': string, 'tax_breakdowns'?: list<mixed>, 'taxability_reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTax')); }
    /** @return string
     * @throws SdkError When automatic_profile is omitted; use hasAutomaticProfile() or valueOrDefault().
     */
    public function getAutomaticProfile(): string { return $this->get('automatic_profile'); }
    public function hasAutomaticProfile(): bool { return $this->has('automatic_profile'); }
    /** @return list<string>
     * @throws SdkError When available_location_inputs is omitted; use hasAvailableLocationInputs() or valueOrDefault().
     */
    public function getAvailableLocationInputs(): array { return $this->get('available_location_inputs'); }
    public function hasAvailableLocationInputs(): bool { return $this->has('available_location_inputs'); }
    /** @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** @return OrderTaxExemption
     * @throws SdkError When exemption is omitted; use hasExemption() or valueOrDefault().
     */
    public function getExemption(): OrderTaxExemption { return $this->get('exemption'); }
    public function hasExemption(): bool { return $this->has('exemption'); }
    /** @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** @return OrderTaxLocation
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): OrderTaxLocation { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<\stdClass>
     * @throws SdkError When tax_breakdowns is omitted; use hasTaxBreakdowns() or valueOrDefault().
     */
    public function getTaxBreakdowns(): array { return $this->get('tax_breakdowns'); }
    public function hasTaxBreakdowns(): bool { return $this->has('tax_breakdowns'); }
    /** @return string
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
}
