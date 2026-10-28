<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $evaluated_at
 * @property-read ?string $expires_at
 * @property-read list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem> $line_items
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read ?string $return_policy_id
 * @property-read ?string $return_policy_revision_id
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation extends Model {
    /** @param array{'evaluated_at'?: string, 'expires_at'?: string, 'line_items': list<mixed>, 'reason': string, 'reason_message': string, 'return_policy_id'?: string, 'return_policy_revision_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluation')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getEvaluatedAt(): ?string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem} and {@see BuyerReturnPolicyEvaluationLineItem}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem}. An order line's eligibility, allowed resolutions, return requirements, and catalog details from the buyer's Return policy evaluation.
     * @return list<MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.  Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnPolicyId(): ?string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnPolicyRevisionId(): ?string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
