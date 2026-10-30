<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAppliedAmountMoney $applied_amount_money
 * @property-read CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAssessedAmountMoney $assessed_amount_money
 * @property-read string $reason
 * @property-read ?string $reason_message
 * @property-read ?string $return_line_item_id
 * @property-read ?string $return_policy_revision_id
 * @property-read string $return_resolution_adjustment_id
 * @property-read string $status
 * @property-read string $value_effect
 * @property-read ?string $waived_at
 * @property-read ?CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemWaivedBy $waived_by
 * @property-read ?string $waiver_reason
 * @property-read ?string $waiver_reason_message
 * Presence-aware response; omitted optional fields return null. */
final class CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem extends Model {
    /** @param array{'adjustment_type': string, 'applied_amount_money': mixed, 'assessed_amount_money': mixed, 'reason': string, 'reason_message'?: string, 'return_line_item_id'?: string, 'return_policy_revision_id'?: string, 'return_resolution_adjustment_id': string, 'status': string, 'value_effect': string, 'waived_at'?: string, 'waived_by'?: mixed, 'waiver_reason'?: string, 'waiver_reason_message'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItem')); }
    /** Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other".
     * @return string
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAppliedAmountMoney
     */
    public function getAppliedAmountMoney(): CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAppliedAmountMoney { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAssessedAmountMoney
     */
    public function getAssessedAmountMoney(): CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemAssessedAmountMoney { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** reason_message
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** return_line_item_id
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** return_policy_revision_id
     * @return ?string
     */
    public function getReturnPolicyRevisionId(): ?string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** return_resolution_adjustment_id
     * @return string
     */
    public function getReturnResolutionAdjustmentId(): string { return $this->get('return_resolution_adjustment_id'); }
    public function hasReturnResolutionAdjustmentId(): bool { return $this->has('return_resolution_adjustment_id'); }
    /** Value enum: "applied", "waived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Value enum: "deduction", "credit".
     * @return string
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getWaivedAt(): ?string { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemWaivedBy
     */
    public function getWaivedBy(): ?CreateReturnPreviewResponseDataResolutionResolutionAdjustmentsItemWaivedBy { return $this->get('waived_by'); }
    public function hasWaivedBy(): bool { return $this->has('waived_by'); }
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other".
     * @return ?string
     */
    public function getWaiverReason(): ?string { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** waiver_reason_message
     * @return ?string
     */
    public function getWaiverReasonMessage(): ?string { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
}
