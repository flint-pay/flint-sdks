<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read mixed $applied_amount_money
 * @property-read mixed $assessed_amount_money
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read mixed $return_id
 * @property-read string|null $return_line_item_id
 * @property-read mixed $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_resolution_adjustment_id
 * @property-read string|null $status
 * @property-read string|null $value_effect
 * @property-read string|null $waived_at
 * @property-read mixed $waived_by
 * @property-read string|null $waiver_reason
 * @property-read string|null $waiver_reason_message
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionAdjustmentPreviousAttributes extends Model {
    /** @param array{'adjustment_type'?: mixed, 'applied_amount_money'?: mixed, 'assessed_amount_money'?: mixed, 'reason'?: mixed, 'reason_message'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, 'return_policy_id'?: mixed, 'return_policy_revision_id'?: mixed, 'return_resolution_adjustment_id'?: mixed, 'status'?: mixed, 'value_effect'?: mixed, 'waived_at'?: mixed, 'waived_by'?: mixed, 'waiver_reason'?: mixed, 'waiver_reason_message'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionAdjustmentPreviousAttributes')); }
    /** What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAdjustmentType(): string|null { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAppliedAmountMoney(): mixed { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAssessedAmountMoney(): mixed { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Why the adjustment was made. Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[1] (Value): string. Why the adjustment was made. Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record. anyOf[1] (Value): string. Optional detail about `reason`, kept with the record. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonMessage(): string|null { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string or null. Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. anyOf[1] (Value): string. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[1] (Value): string or null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnPolicyId(): mixed { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. anyOf[1] (Value): string. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnPolicyRevisionId(): string|null { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Unique identifier for this return resolution adjustment, prefixed `retadj_`. anyOf[1] (Value): string. Unique identifier for this return resolution adjustment, prefixed `retadj_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionAdjustmentId(): string|null { return $this->get('return_resolution_adjustment_id'); }
    public function hasReturnResolutionAdjustmentId(): bool { return $this->has('return_resolution_adjustment_id'); }
    /** Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived". anyOf[1] (Value): string. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether the adjustment reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[1] (Value): string. Whether the adjustment reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValueEffect(): string|null { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWaivedAt(): string|null { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** Who waived the adjustment. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getWaivedBy(): mixed { return $this->get('waived_by'); }
    public function hasWaivedBy(): bool { return $this->has('waived_by'); }
    /** Why the adjustment was waived. Value enum: "policy_override", "merchant_review", "customer_service", "other". anyOf[1] (Value): string. Why the adjustment was waived. Value enum: "policy_override", "merchant_review", "customer_service", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWaiverReason(): string|null { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** Detail about `waiver_reason`. anyOf[1] (Value): string. Detail about `waiver_reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWaiverReasonMessage(): string|null { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
}
