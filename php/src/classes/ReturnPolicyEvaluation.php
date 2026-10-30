<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $evaluated_at
 * @property-read ?string $expires_at
 * @property-read list<ReturnPolicyEvaluationLineItem> $line_items
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read ?string $return_policy_id
 * @property-read ?string $return_policy_revision_id
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicyEvaluation extends Model {
    /** @param array{'evaluated_at'?: string, 'expires_at'?: string, 'line_items': list<mixed>, 'reason': string, 'reason_message': string, 'return_policy_id'?: string, 'return_policy_revision_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicyEvaluation')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getEvaluatedAt(): ?string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /**  [] (Value): {@see ReturnPolicyEvaluationLineItem}. The policy result for one return line: status, eligible quantity, allowed resolution types, and handling requirements such as inspection.
     * @return list<ReturnPolicyEvaluationLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** reason_message
     * @return string
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** return_policy_id
     * @return ?string
     */
    public function getReturnPolicyId(): ?string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** return_policy_revision_id
     * @return ?string
     */
    public function getReturnPolicyRevisionId(): ?string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Value enum: "eligible", "ineligible", "review_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
