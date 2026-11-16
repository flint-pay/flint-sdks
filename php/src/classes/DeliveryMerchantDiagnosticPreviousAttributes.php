<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_method_revision_id
 * @property-read string|null $diagnostic_id
 * @property-read list<DeliveryEligibilityMismatchPreviousAttributes>|null $eligibility_mismatches
 * @property-read string|null $occurred_at
 * @property-read string|null $outcome
 * @property-read string|null $recommended_action
 * @property-read bool|null $retryable
 * @property-read string|null $scope
 * @property-read string|null $summary
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMerchantDiagnosticPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'delivery_method_id'?: mixed, 'delivery_method_revision_id'?: mixed, 'diagnostic_id'?: mixed, 'eligibility_mismatches'?: mixed, 'occurred_at'?: mixed, 'outcome'?: mixed, 'recommended_action'?: mixed, 'retryable'?: mixed, 'scope'?: mixed, 'summary'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMerchantDiagnosticPreviousAttributes')); }
    /** Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Value enum: "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[1] (Value): string. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Value enum: "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ID of the method that was evaluated. Omitted when the diagnostic is about a Location. anyOf[1] (Value): string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. anyOf[1] (Value): string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodRevisionId(): string|null { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID to quote when you ask Flint about this diagnostic. anyOf[1] (Value): string. ID to quote when you ask Flint about this diagnostic. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDiagnosticId(): string|null { return $this->get('diagnostic_id'); }
    public function hasDiagnosticId(): bool { return $this->has('diagnostic_id'); }
    /** Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. anyOf[1] (Value): Array of {@see DeliveryEligibilityMismatchPreviousAttributes}. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. anyOf[1][] (Value): {@see DeliveryEligibilityMismatchPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeliveryEligibilityMismatchPreviousAttributes>|null
     */
    public function getEligibilityMismatches(): array|null { return $this->get('eligibility_mismatches'); }
    public function hasEligibilityMismatches(): bool { return $this->has('eligibility_mismatches'); }
    /** Time Flint recorded this diagnostic. anyOf[1] (Value): string. Time Flint recorded this diagnostic. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOccurredAt(): string|null { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** What happened when Flint evaluated the method or Location. Value enum: "unavailable", "input_required", "cannot_calculate", "requires_checkout_context". anyOf[1] (Value): string. What happened when Flint evaluated the method or Location. Value enum: "unavailable", "input_required", "cannot_calculate", "requires_checkout_context". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOutcome(): string|null { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** What the merchant can do to get an option. Value enum: "review_configuration", "provide_input", "create_checkout", "retry". anyOf[1] (Value): string. What the merchant can do to get an option. Value enum: "review_configuration", "provide_input", "create_checkout", "retry". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRecommendedAction(): string|null { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Whether trying again later can succeed. anyOf[1] (Value): boolean. Whether trying again later can succeed. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRetryable(): bool|null { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** What the diagnostic is about. Value enum: "method". anyOf[1] (Value): string. What the diagnostic is about. Value enum: "method". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScope(): string|null { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Plain-language explanation for the merchant. anyOf[1] (Value): string. Plain-language explanation for the merchant. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSummary(): string|null { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
}
