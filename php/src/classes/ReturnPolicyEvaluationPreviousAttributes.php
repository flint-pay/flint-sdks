<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $evaluated_at
 * @property-read string|null $expires_at
 * @property-read list<ReturnPolicyEvaluationLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyEvaluationPreviousAttributes extends Model {
    /** @param array{'evaluated_at'?: mixed, 'expires_at'?: mixed, 'line_items'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'return_policy_id'?: mixed, 'return_policy_revision_id'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyEvaluationPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvaluatedAt(): string|null { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Eligibility of each line asked about. anyOf[1] (Value): Array of {@see ReturnPolicyEvaluationLineItemPreviousAttributes}. Eligibility of each line asked about. anyOf[1][] (Value): {@see ReturnPolicyEvaluationLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyEvaluationLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Why the selection got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the selection got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonMessage(): string|null { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the policy that judged the lines. Absent when none matched. anyOf[1] (Value): string. ID of the policy that judged the lines. Absent when none matched. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyId(): string|null { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the policy revision that judged the lines. Absent when none matched. anyOf[1] (Value): string. ID of the policy revision that judged the lines. Absent when none matched. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyRevisionId(): string|null { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Overall result for the selection. `review_required` when the lines differ. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Overall result for the selection. `review_required` when the lines differ. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
