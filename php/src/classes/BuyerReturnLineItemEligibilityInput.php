<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass $decision_proposal
 * @property-read int $eligible_quantity
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $ineligibility_reason
 * @property-read list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass> $policy_adjustment_proposals
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnLineItemEligibilityInput extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'decision_proposal'?: ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass, 'eligible_quantity': int, 'evaluated_at'?: string|\DateTimeInterface, 'expires_at'?: string|\DateTimeInterface, 'ineligibility_reason'?: string, 'policy_adjustment_proposals': list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>, 'reason': string, 'reason_message': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnLineItemEligibilityInput')); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required.
     * @return ReturnLineItemDecisionProposalInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When decision_proposal is omitted; use hasDecisionProposal() or valueOrDefault().
     */
    public function getDecisionProposal(): mixed { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): int { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return string
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /**  [] (Value): {@see ReturnPolicyAdjustmentProposalInput}. A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
     * @return list<ReturnPolicyAdjustmentProposalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When policy_adjustment_proposals is omitted; use hasPolicyAdjustmentProposals() or valueOrDefault().
     */
    public function getPolicyAdjustmentProposals(): array { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** reason_message
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Value enum: "eligible", "ineligible", "review_required".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
