<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_resolution_types
 * @property-read ReturnLineItemDecisionProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $decision_proposal
 * @property-read int|null $eligible_quantity
 * @property-read string|\DateTimeInterface|null $evaluated_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $ineligibility_reason
 * @property-read list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $policy_adjustment_proposals
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_shipping_payer
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnLineItemEligibilityPreviousAttributesInput extends Model {
    /** @param array{'allowed_resolution_types'?: list<string>|null, 'decision_proposal'?: ReturnLineItemDecisionProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'eligible_quantity'?: int|null, 'evaluated_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'ineligibility_reason'?: string|null, 'policy_adjustment_proposals'?: list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'reason'?: string|null, 'reason_message'?: string|null, 'return_policy_id'?: string|null, 'return_policy_revision_id'?: string|null, 'return_shipping_payer'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnLineItemEligibilityPreviousAttributesInput')); }
    /** Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types the policy allows for this line. [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When allowed_resolution_types is omitted; use hasAllowedResolutionTypes() or valueOrDefault().
     */
    public function getAllowedResolutionTypes(): mixed { return $this->get('allowed_resolution_types'); }
    public function hasAllowedResolutionTypes(): bool { return $this->has('allowed_resolution_types'); }
    /** Terms the policy proposes if the line is approved. Absent when the policy can't propose any. anyOf[1] (Value): {@see ReturnLineItemDecisionProposalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnLineItemDecisionProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When decision_proposal is omitted; use hasDecisionProposal() or valueOrDefault().
     */
    public function getDecisionProposal(): mixed { return $this->get('decision_proposal'); }
    public function hasDecisionProposal(): bool { return $this->has('decision_proposal'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When eligible_quantity is omitted; use hasEligibleQuantity() or valueOrDefault().
     */
    public function getEligibleQuantity(): mixed { return $this->get('eligible_quantity'); }
    public function hasEligibleQuantity(): bool { return $this->has('eligible_quantity'); }
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
    /** The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1] (Value): string. The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When ineligibility_reason is omitted; use hasIneligibilityReason() or valueOrDefault().
     */
    public function getIneligibilityReason(): mixed { return $this->get('ineligibility_reason'); }
    public function hasIneligibilityReason(): bool { return $this->has('ineligibility_reason'); }
    /** Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1] (Value): Array of {@see ReturnPolicyAdjustmentProposalPreviousAttributesInput}. Fees or credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][] (Value): {@see ReturnPolicyAdjustmentProposalPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ReturnPolicyAdjustmentProposalPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When policy_adjustment_proposals is omitted; use hasPolicyAdjustmentProposals() or valueOrDefault().
     */
    public function getPolicyAdjustmentProposals(): mixed { return $this->get('policy_adjustment_proposals'); }
    public function hasPolicyAdjustmentProposals(): bool { return $this->has('policy_adjustment_proposals'); }
    /** Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired", "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
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
    /** ID of the policy that judged the line. Absent when none matched. anyOf[1] (Value): string. ID of the policy that judged the line. Absent when none matched. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): mixed { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the policy revision that judged the line. Absent when none matched. anyOf[1] (Value): string. ID of the policy revision that judged the line. Absent when none matched. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): mixed { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Value enum: "merchant", "buyer", null. anyOf[1] (Value): string. Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Value enum: "merchant", "buyer", null. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_shipping_payer is omitted; use hasReturnShippingPayer() or valueOrDefault().
     */
    public function getReturnShippingPayer(): mixed { return $this->get('return_shipping_payer'); }
    public function hasReturnShippingPayer(): bool { return $this->has('return_shipping_payer'); }
    /** Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether the policy lets the buyer return this. `review_required` means the merchant decides. Value enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
