<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read ReturnLineItemDecisionProposalPreviousAttributes|null $decision_proposal
 * @property-read int|null $eligible_quantity
 * @property-read string|null $evaluated_at
 * @property-read string|null $expires_at
 * @property-read string|null $ineligibility_reason
 * @property-read list<ReturnPolicyAdjustmentProposalPreviousAttributes>|null $policy_adjustment_proposals
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_shipping_payer
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class ReturnLineItemEligibilityPreviousAttributes extends Model {
    /** @param array{'allowed_resolution_types'?: mixed, 'decision_proposal'?: mixed, 'eligible_quantity'?: mixed, 'evaluated_at'?: mixed, 'expires_at'?: mixed, 'ineligibility_reason'?: mixed, 'policy_adjustment_proposals'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'return_policy_id'?: mixed, 'return_policy_revision_id'?: mixed, 'return_shipping_payer'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemEligibilityPreviousAttributes')); }
    /** Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedResolutionTypes(): array|null { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Terms the policy proposes if the line is approved. Absent when the policy can't propose any. anyOf[1] (Value): {@see ReturnLineItemDecisionProposalPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnLineItemDecisionProposalPreviousAttributes|null
     */
    public function getDecisionProposal(): ReturnLineItemDecisionProposalPreviousAttributes|null { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEligibleQuantity(): int|null { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
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
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1] (Value): string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIneligibilityReason(): string|null { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1] (Value): Array of {@see ReturnPolicyAdjustmentProposalPreviousAttributes}. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][] (Value): {@see ReturnPolicyAdjustmentProposalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyAdjustmentProposalPreviousAttributes>|null
     */
    public function getPolicyAdjustmentProposals(): array|null { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonMessage(): string|null { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the policy that judged the line. Absent when none matched. anyOf[1] (Value): string. ID of the policy that judged the line. Absent when none matched. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyId(): string|null { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the policy revision that judged the line. Absent when none matched. anyOf[1] (Value): string. ID of the policy revision that judged the line. Absent when none matched. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyRevisionId(): string|null { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Value enum: "merchant", "buyer", null. anyOf[1] (Value): string. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Value enum: "merchant", "buyer", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnShippingPayer(): string|null { return $this->get('return_shipping_payer'); }
    public function hasReturnShippingPayer(): bool { return $this->has('return_shipping_payer'); }
    /** Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
