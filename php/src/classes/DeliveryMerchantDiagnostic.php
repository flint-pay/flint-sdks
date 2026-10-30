<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ?string $delivery_method_id
 * @property-read ?string $delivery_method_revision_id
 * @property-read string $diagnostic_id
 * @property-read ?list<DeliveryEligibilityMismatch> $eligibility_mismatches
 * @property-read string $occurred_at
 * @property-read string $outcome
 * @property-read string $recommended_action
 * @property-read bool $retryable
 * @property-read string $scope
 * @property-read string $summary
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMerchantDiagnostic extends Model {
    /** @param array{'code': string, 'delivery_method_id'?: string, 'delivery_method_revision_id'?: string, 'diagnostic_id': string, 'eligibility_mismatches'?: list<mixed>, 'occurred_at': string, 'outcome': string, 'recommended_action': string, 'retryable': bool, 'scope': string, 'summary': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMerchantDiagnostic')); }
    /** Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. Value enum: "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required", "dependency_failure".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** delivery_method_id
     * @return ?string
     */
    public function getDeliveryMethodId(): ?string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** delivery_method_revision_id
     * @return ?string
     */
    public function getDeliveryMethodRevisionId(): ?string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** diagnostic_id
     * @return string
     */
    public function getDiagnosticId(): string { return $this->get('diagnostic_id'); }
    public function hasDiagnosticId(): bool { return $this->has('diagnostic_id'); }
    /** Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. [] (Value): {@see DeliveryEligibilityMismatch}. An eligibility condition that rejected a delivery method, with its condition type, its path in the expression, and the field tested.
     * @return ?list<DeliveryEligibilityMismatch>
     */
    public function getEligibilityMismatches(): ?array { return $this->get('eligibility_mismatches'); }
    public function hasEligibilityMismatches(): bool { return $this->has('eligibility_mismatches'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Value enum: "unavailable", "input_required", "cannot_calculate", "requires_checkout_context".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Value enum: "review_configuration", "provide_input", "create_checkout", "retry".
     * @return string
     */
    public function getRecommendedAction(): string { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** retryable
     * @return bool
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Value enum: "method".
     * @return string
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** summary
     * @return string
     */
    public function getSummary(): string { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
}
