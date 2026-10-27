<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $applied_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $assessed_amount_money
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $return_line_item_id
 * @property-read string $status
 * @property-read string $value_effect
 * @property-read string $waiver_reason
 * @property-read string $waiver_reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionAdjustmentRequestInput extends Model {
    /** @param array{'adjustment_type': string, 'applied_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'assessed_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reason': string, 'reason_message'?: string, 'return_line_item_id'?: string, 'status'?: string, 'value_effect': string, 'waiver_reason'?: string, 'waiver_reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionAdjustmentRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit", "price_correction", "other".
     * @return string
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When applied_amount_money is omitted; use hasAppliedAmountMoney() or valueOrDefault().
     */
    public function getAppliedAmountMoney(): mixed { return $this->get('applied_amount_money'); }
    public function hasAppliedAmountMoney(): bool { return $this->has('applied_amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When assessed_amount_money is omitted; use hasAssessedAmountMoney() or valueOrDefault().
     */
    public function getAssessedAmountMoney(): mixed { return $this->get('assessed_amount_money'); }
    public function hasAssessedAmountMoney(): bool { return $this->has('assessed_amount_money'); }
    /** Shape $ (Value): string.  Value enum: "return_policy", "inspection_result", "return_shipping_cost", "customer_service", "manual_correction", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.  Value enum: "applied", "waived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "deduction", "credit".
     * @return string
     * @throws SdkError When value_effect is omitted; use hasValueEffect() or valueOrDefault().
     */
    public function getValueEffect(): string { return $this->get('value_effect'); }
    public function hasValueEffect(): bool { return $this->has('value_effect'); }
    /** Shape $ (Value): string.  Value enum: "policy_override", "merchant_review", "customer_service", "other".
     * @return string
     * @throws SdkError When waiver_reason is omitted; use hasWaiverReason() or valueOrDefault().
     */
    public function getWaiverReason(): string { return $this->get('waiver_reason'); }
    public function hasWaiverReason(): bool { return $this->has('waiver_reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When waiver_reason_message is omitted; use hasWaiverReasonMessage() or valueOrDefault().
     */
    public function getWaiverReasonMessage(): string { return $this->get('waiver_reason_message'); }
    public function hasWaiverReasonMessage(): bool { return $this->has('waiver_reason_message'); }
}
