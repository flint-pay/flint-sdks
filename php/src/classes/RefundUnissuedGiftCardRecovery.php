<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_intent_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read MoneyValue $returned_amount_money
 * @property-read string $settlement_allocation_id
 * @property-read MoneyValue $source_pending_amount_money
 * @property-read MoneyValue $source_remaining_amount_money
 * Presence-aware response; omitted fields throw when accessed. */
final class RefundUnissuedGiftCardRecovery extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': object{'amount': string, 'currency': string}, 'settlement_allocation_id': string, 'source_pending_amount_money': object{'amount': string, 'currency': string}, 'source_remaining_amount_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundUnissuedGiftCardRecovery')); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** @return MoneyValue
     * @throws SdkError When returned_amount_money is omitted; use hasReturnedAmountMoney() or valueOrDefault().
     */
    public function getReturnedAmountMoney(): MoneyValue { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** @return string
     * @throws SdkError When settlement_allocation_id is omitted; use hasSettlementAllocationId() or valueOrDefault().
     */
    public function getSettlementAllocationId(): string { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** @return MoneyValue
     * @throws SdkError When source_pending_amount_money is omitted; use hasSourcePendingAmountMoney() or valueOrDefault().
     */
    public function getSourcePendingAmountMoney(): MoneyValue { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** @return MoneyValue
     * @throws SdkError When source_remaining_amount_money is omitted; use hasSourceRemainingAmountMoney() or valueOrDefault().
     */
    public function getSourceRemainingAmountMoney(): MoneyValue { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
