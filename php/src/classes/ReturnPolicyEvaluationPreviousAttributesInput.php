<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $evaluated_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read list<ReturnPolicyEvaluationLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPolicyEvaluationPreviousAttributesInput extends Model {
    /** @param array{'evaluated_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'line_items'?: list<ReturnPolicyEvaluationLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'reason'?: string|null, 'reason_message'?: string|null, 'return_policy_id'?: string|null, 'return_policy_revision_id'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyEvaluationPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): mixed { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Eligibility of each line asked about. anyOf[1] (Value): Array of {@see ReturnPolicyEvaluationLineItemPreviousAttributesInput}. Eligibility of each line asked about. anyOf[1][] (Value): {@see ReturnPolicyEvaluationLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyEvaluationLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Why the selection got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the selection got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): mixed { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the policy that judged the lines. Absent when none matched. anyOf[1] (Value): string. ID of the policy that judged the lines. Absent when none matched. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): mixed { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the policy revision that judged the lines. Absent when none matched. anyOf[1] (Value): string. ID of the policy revision that judged the lines. Absent when none matched. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): mixed { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Overall result for the selection. `review_required` when the lines differ. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Overall result for the selection. `review_required` when the lines differ. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
