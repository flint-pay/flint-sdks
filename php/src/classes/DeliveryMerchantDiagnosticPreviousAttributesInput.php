<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_method_revision_id
 * @property-read string|null $diagnostic_id
 * @property-read list<DeliveryEligibilityMismatchPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $eligibility_mismatches
 * @property-read string|\DateTimeInterface|null $occurred_at
 * @property-read string|null $outcome
 * @property-read string|null $recommended_action
 * @property-read bool|null $retryable
 * @property-read string|null $scope
 * @property-read string|null $summary
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMerchantDiagnosticPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'delivery_method_id'?: string|null, 'delivery_method_revision_id'?: string|null, 'diagnostic_id'?: string|null, 'eligibility_mismatches'?: list<DeliveryEligibilityMismatchPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'occurred_at'?: string|\DateTimeInterface|null, 'outcome'?: string|null, 'recommended_action'?: string|null, 'retryable'?: bool|null, 'scope'?: string|null, 'summary'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMerchantDiagnosticPreviousAttributesInput')); }
    /** Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Value enum: "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[1] (Value): string. Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Value enum: "eligibility_no_match", "method_unavailable", "input_required", "checkout_context_required", "dependency_failure", "dependency_revoked". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** ID of the method that was evaluated. Omitted when the diagnostic is about a Location. anyOf[1] (Value): string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. anyOf[1] (Value): string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): mixed { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** ID to quote when you ask Flint about this diagnostic. anyOf[1] (Value): string. ID to quote when you ask Flint about this diagnostic. Example: "ddiag_01KEZF7C002JPVD08857RGDGPC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When diagnostic_id is omitted; use hasDiagnosticId() or valueOrDefault().
     */
    public function getDiagnosticId(): mixed { return $this->get('diagnostic_id'); }
    public function hasDiagnosticId(): bool { return $this->has('diagnostic_id'); }
    /** Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. anyOf[1] (Value): Array of {@see DeliveryEligibilityMismatchPreviousAttributesInput}. Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. anyOf[1][] (Value): {@see DeliveryEligibilityMismatchPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeliveryEligibilityMismatchPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When eligibility_mismatches is omitted; use hasEligibilityMismatches() or valueOrDefault().
     */
    public function getEligibilityMismatches(): mixed { return $this->get('eligibility_mismatches'); }
    public function hasEligibilityMismatches(): bool { return $this->has('eligibility_mismatches'); }
    /** Time Flint recorded this diagnostic. anyOf[1] (Value): string. Time Flint recorded this diagnostic. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): mixed { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** What happened when Flint evaluated the method or Location. Value enum: "unavailable", "input_required", "cannot_calculate", "requires_checkout_context". anyOf[1] (Value): string. What happened when Flint evaluated the method or Location. Value enum: "unavailable", "input_required", "cannot_calculate", "requires_checkout_context". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): mixed { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** What the merchant can do to get an option. Value enum: "review_configuration", "provide_input", "create_checkout", "retry". anyOf[1] (Value): string. What the merchant can do to get an option. Value enum: "review_configuration", "provide_input", "create_checkout", "retry". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When recommended_action is omitted; use hasRecommendedAction() or valueOrDefault().
     */
    public function getRecommendedAction(): mixed { return $this->get('recommended_action'); }
    public function hasRecommendedAction(): bool { return $this->has('recommended_action'); }
    /** Whether trying again later can succeed. anyOf[1] (Value): boolean. Whether trying again later can succeed. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): mixed { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** What the diagnostic is about. Value enum: "method". anyOf[1] (Value): string. What the diagnostic is about. Value enum: "method". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): mixed { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Plain-language explanation for the merchant. anyOf[1] (Value): string. Plain-language explanation for the merchant. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When summary is omitted; use hasSummary() or valueOrDefault().
     */
    public function getSummary(): mixed { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
}
