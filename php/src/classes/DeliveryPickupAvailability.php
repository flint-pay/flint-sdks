<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read string $evaluated_at
 * @property-read string $evaluation_status
 * @property-read list<DeliveryInputRequirement> $input_requirements
 * @property-read list<DeliveryPickupAvailabilityLocationResource> $locations
 * @property-read list<DeliveryPickupAvailabilityDiagnostic> $merchant_diagnostics
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPickupAvailability extends Model {
    /** @param array{'audience': string, 'evaluated_at': string, 'evaluation_status': string, 'input_requirements': list<mixed>, 'locations': list<mixed>, 'merchant_diagnostics'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailability')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return string
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return list<DeliveryInputRequirement>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<DeliveryPickupAvailabilityLocationResource>
     * @throws SdkError When locations is omitted; use hasLocations() or valueOrDefault().
     */
    public function getLocations(): array { return $this->get('locations'); }
    public function hasLocations(): bool { return $this->has('locations'); }
    /** @return list<DeliveryPickupAvailabilityDiagnostic>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
}
