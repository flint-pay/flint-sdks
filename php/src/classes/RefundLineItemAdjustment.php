<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read MoneyValue $amount_money
 * @property-read string $applies_to
 * @property-read RefundAdjustmentReason $reason
 * @property-read string $refund_line_item_adjustment_id
 * @property-read MoneyValue $refunded_money
 * @property-read MoneyValue $remaining_money
 * Presence-aware response; omitted fields throw when accessed. */
final class RefundLineItemAdjustment extends Model {
    /** @param array{'adjustment_type': string, 'amount_money': mixed, 'applies_to': string, 'reason': mixed, 'refund_line_item_adjustment_id': string, 'refunded_money': object{'amount': string, 'currency': string}, 'remaining_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustment')); }
    /** @return string
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When applies_to is omitted; use hasAppliesTo() or valueOrDefault().
     */
    public function getAppliesTo(): string { return $this->get('applies_to'); }
    public function hasAppliesTo(): bool { return $this->has('applies_to'); }
    /** @return RefundAdjustmentReason
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): RefundAdjustmentReason { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When refund_line_item_adjustment_id is omitted; use hasRefundLineItemAdjustmentId() or valueOrDefault().
     */
    public function getRefundLineItemAdjustmentId(): string { return $this->get('refund_line_item_adjustment_id'); }
    public function hasRefundLineItemAdjustmentId(): bool { return $this->has('refund_line_item_adjustment_id'); }
    /** @return MoneyValue
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** @return MoneyValue
     * @throws SdkError When remaining_money is omitted; use hasRemainingMoney() or valueOrDefault().
     */
    public function getRemainingMoney(): MoneyValue { return $this->get('remaining_money'); }
    public function hasRemainingMoney(): bool { return $this->has('remaining_money'); }
}
