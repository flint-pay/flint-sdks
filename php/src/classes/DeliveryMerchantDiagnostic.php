<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $delivery_method_id
 * @property-read string $delivery_method_revision_id
 * @property-read string $diagnostic_id
 * @property-read list<DeliveryEligibilityMismatch> $eligibility_mismatches
 * @property-read string $occurred_at
 * @property-read string $outcome
 * @property-read string $recommended_action
 * @property-read bool $retryable
 * @property-read string $scope
 * @property-read string $summary
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryMerchantDiagnostic extends Model {
    /** @param array{'code': string, 'delivery_method_id'?: string, 'delivery_method_revision_id'?: string, 'diagnostic_id': string, 'eligibility_mismatches'?: list<mixed>, 'occurred_at': string, 'outcome': string, 'recommended_action': string, 'retryable': bool, 'scope': string, 'summary': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMerchantDiagnostic')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** @return string
     * @throws SdkError When diagnostic_id is omitted; use hasDiagnosticId() or valueOrDefault().
     */
    public function getDiagnosticId(): string { return $this->get('diagnostic_id'); }
    public function hasDiagnosticId(): bool { return $this->has('diagnostic_id'); }
    /** @return list<DeliveryEligibilityMismatch>
     * @throws SdkError When eligibility_mismatches is omitted; use hasEligibilityMismatches() or valueOrDefault().
     */
    public function getEligibilityMismatches(): array { return $this->get('eligibility_mismatches'); }
    public function hasEligibilityMismatches(): bool { return $this->has('eligibility_mismatches'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** @return string
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** @return string
     * @throws SdkError When summary is omitted; use hasSummary() or valueOrDefault().
     */
    public function getSummary(): string { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
}
