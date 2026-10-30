<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_resolution_types
 * @property-read ?CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityDecisionProposal $decision_proposal
 * @property-read int $eligible_quantity
 * @property-read ?string $evaluated_at
 * @property-read ?string $expires_at
 * @property-read ?string $ineligibility_reason
 * @property-read list<CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem> $policy_adjustment_proposals
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read ?string $return_policy_id
 * @property-read ?string $return_policy_revision_id
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility extends Model {
    /** @param array{'allowed_resolution_types': list<string>, 'decision_proposal'?: mixed, 'eligible_quantity': int, 'evaluated_at'?: string, 'expires_at'?: string, 'ineligibility_reason'?: string, 'policy_adjustment_proposals': list<mixed>, 'reason': string, 'reason_message': string, 'return_policy_id'?: string, 'return_policy_revision_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibility')); }
    /** [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return list<string>
     */
    public function getAllowedResolutionTypes(): array { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required.
     * @return ?CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityDecisionProposal
     */
    public function getDecisionProposal(): ?CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityDecisionProposal { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getEligibleQuantity(): int { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
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
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other".
     * @return ?string
     */
    public function getIneligibilityReason(): ?string { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /**  [] (Value): {@see CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem}. A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
     * @return list<CreateReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem>
     */
    public function getPolicyAdjustmentProposals(): array { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
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
