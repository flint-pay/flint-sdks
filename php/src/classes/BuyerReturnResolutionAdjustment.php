<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read MoneyValue $applied_amount_money
 * @property-read MoneyValue $assessed_amount_money
 * @property-read string $reason
 * @property-read ?string $reason_message
 * @property-read ?string $return_line_item_id
 * @property-read string $return_resolution_adjustment_id
 * @property-read string $status
 * @property-read string $value_effect
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnResolutionAdjustment extends Model {
    /** @param array{'adjustment_type': string, 'applied_amount_money': mixed, 'assessed_amount_money': mixed, 'reason': string, 'reason_message'?: string, 'return_line_item_id'?: string, 'return_resolution_adjustment_id': string, 'status': string, 'value_effect': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnResolutionAdjustment')); }
    /** What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other".
     * @return string
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAppliedAmountMoney(): MoneyValue { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAssessedAmountMoney(): MoneyValue { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Why the adjustment was made. Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional detail about `reason`, kept with the record.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Unique identifier for this return resolution adjustment, prefixed `retadj_`.
     * @return string
     */
    public function getReturnResolutionAdjustmentId(): string { return $this->get('return_resolution_adjustment_id'); }
    public function hasReturnResolutionAdjustmentId(): bool { return $this->has('return_resolution_adjustment_id'); }
    /** Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether the adjustment reduces or increases what the buyer receives. Value enum: "deduction", "credit".
     * @return string
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
}
