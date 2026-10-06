<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $audience
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $evaluation_status
 * @property-read list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass> $input_requirements
 * @property-read list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass> $locations
 * @property-read list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass> $merchant_diagnostics
 * @property-read string $mode
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPickupAvailabilityInput extends Model {
    /** @param array{'audience': string, 'evaluated_at': string|\DateTimeInterface, 'evaluation_status': string, 'input_requirements': list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>, 'locations': list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass>, 'merchant_diagnostics'?: list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass>, 'mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityInput')); }
    /** @return string
     * @throws SdkError When audience is omitted; use hasAudience() or valueOrDefault().
     */
    public function getAudience(): string { return $this->get('audience'); }
    public function hasAudience(): bool { return $this->has('audience'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** @return string
     * @throws SdkError When evaluation_status is omitted; use hasEvaluationStatus() or valueOrDefault().
     */
    public function getEvaluationStatus(): string { return $this->get('evaluation_status'); }
    public function hasEvaluationStatus(): bool { return $this->has('evaluation_status'); }
    /** @return list<DeliveryInputRequirementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When input_requirements is omitted; use hasInputRequirements() or valueOrDefault().
     */
    public function getInputRequirements(): array { return $this->get('input_requirements'); }
    public function hasInputRequirements(): bool { return $this->has('input_requirements'); }
    /** @return list<DeliveryPickupAvailabilityLocationResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When locations is omitted; use hasLocations() or valueOrDefault().
     */
    public function getLocations(): array { return $this->get('locations'); }
    public function hasLocations(): bool { return $this->has('locations'); }
    /** @return list<DeliveryPickupAvailabilityDiagnosticInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When merchant_diagnostics is omitted; use hasMerchantDiagnostics() or valueOrDefault().
     */
    public function getMerchantDiagnostics(): array { return $this->get('merchant_diagnostics'); }
    public function hasMerchantDiagnostics(): bool { return $this->has('merchant_diagnostics'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
}
