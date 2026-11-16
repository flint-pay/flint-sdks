<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $adjustment_type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $applied_amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $assessed_amount_money
 * @property-read string|null $reason
 * @property-read string|null $reason_message
 * @property-read string|null|null $return_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null|null $return_policy_id
 * @property-read string|null $return_policy_revision_id
 * @property-read string|null $return_resolution_adjustment_id
 * @property-read string|null $status
 * @property-read string|null $value_effect
 * @property-read string|\DateTimeInterface|null $waived_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $waived_by
 * @property-read string|null $waiver_reason
 * @property-read string|null $waiver_reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionAdjustmentPreviousAttributesInput extends Model {
    /** @param array{'adjustment_type'?: string|null, 'applied_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'assessed_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'reason'?: string|null, 'reason_message'?: string|null, 'return_id'?: string|null|null, 'return_line_item_id'?: string|null, 'return_policy_id'?: string|null|null, 'return_policy_revision_id'?: string|null, 'return_resolution_adjustment_id'?: string|null, 'status'?: string|null, 'value_effect'?: string|null, 'waived_at'?: string|\DateTimeInterface|null, 'waived_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'waiver_reason'?: string|null, 'waiver_reason_message'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionAdjustmentPreviousAttributesInput')); }
    /** What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): mixed { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When applied_amount_money is omitted; use hasAppliedAmountMoney() or valueOrDefault().
     */
    public function getAppliedAmountMoney(): mixed { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When assessed_amount_money is omitted; use hasAssessedAmountMoney() or valueOrDefault().
     */
    public function getAssessedAmountMoney(): mixed { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Why the adjustment was made. Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[1] (Value): string. Why the adjustment was made. Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record. anyOf[1] (Value): string. Optional detail about `reason`, kept with the record. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): mixed { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string or null. Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. anyOf[1] (Value): string. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. anyOf[1] (Value): string or null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When return_policy_id is omitted; use hasReturnPolicyId() or valueOrDefault().
     */
    public function getReturnPolicyId(): mixed { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. anyOf[1] (Value): string. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): mixed { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Unique identifier for this return resolution adjustment, prefixed `retadj_`. anyOf[1] (Value): string. Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_resolution_adjustment_id is omitted; use hasReturnResolutionAdjustmentId() or valueOrDefault().
     */
    public function getReturnResolutionAdjustmentId(): mixed { return $this->get('return_resolution_adjustment_id'); }
    public function hasReturnResolutionAdjustmentId(): bool { return $this->has('return_resolution_adjustment_id'); }
    /** Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived". anyOf[1] (Value): string. Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether the adjustment reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[1] (Value): string. Whether the adjustment reduces or increases what the buyer receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value_effect is omitted; use hasValueEffect() or valueOrDefault().
     */
    public function getValueEffect(): mixed { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When waived_at is omitted; use hasWaivedAt() or valueOrDefault().
     */
    public function getWaivedAt(): mixed { return $this->get('waived_at'); }
    public function hasWaivedAt(): bool { return $this->has('waived_at'); }
    /** Who waived the adjustment. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When waived_by is omitted; use hasWaivedBy() or valueOrDefault().
     */
    public function getWaivedBy(): mixed { return $this->get('waived_by'); }
    public function hasWaivedBy(): bool { return $this->has('waived_by'); }
    /** Why the adjustment was waived. Value enum: "policy_override", "merchant_review", "customer_service", "other". anyOf[1] (Value): string. Why the adjustment was waived. Value enum: "policy_override", "merchant_review", "customer_service", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When waiver_reason is omitted; use hasWaiverReason() or valueOrDefault().
     */
    public function getWaiverReason(): mixed { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** Detail about `waiver_reason`. anyOf[1] (Value): string. Detail about `waiver_reason`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When waiver_reason_message is omitted; use hasWaiverReasonMessage() or valueOrDefault().
     */
    public function getWaiverReasonMessage(): mixed { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
}
