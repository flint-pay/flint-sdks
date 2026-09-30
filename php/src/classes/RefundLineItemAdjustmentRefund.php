<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $original_refund_line_item_adjustment_id
 * @property-read string $refund_line_item_adjustment_refund_id
 * Presence-aware response; omitted fields throw when accessed. */
final class RefundLineItemAdjustmentRefund extends Model {
    /** @param array{'amount_money': object{'amount': string, 'currency': string}, 'original_refund_line_item_adjustment_id': string, 'refund_line_item_adjustment_refund_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentRefund')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When original_refund_line_item_adjustment_id is omitted; use hasOriginalRefundLineItemAdjustmentId() or valueOrDefault().
     */
    public function getOriginalRefundLineItemAdjustmentId(): string { return $this->get('original_refund_line_item_adjustment_id'); }
    public function hasOriginalRefundLineItemAdjustmentId(): bool { return $this->has('original_refund_line_item_adjustment_id'); }
    /** @return string
     * @throws SdkError When refund_line_item_adjustment_refund_id is omitted; use hasRefundLineItemAdjustmentRefundId() or valueOrDefault().
     */
    public function getRefundLineItemAdjustmentRefundId(): string { return $this->get('refund_line_item_adjustment_refund_id'); }
    public function hasRefundLineItemAdjustmentRefundId(): bool { return $this->has('refund_line_item_adjustment_refund_id'); }
}
