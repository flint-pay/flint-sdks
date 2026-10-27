<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_intent_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $returned_amount_money
 * @property-read string $settlement_allocation_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $source_pending_amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $source_remaining_amount_money
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundUnissuedGiftCardRecoveryInput extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'settlement_allocation_id': string, 'source_pending_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source_remaining_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundUnissuedGiftCardRecoveryInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When returned_amount_money is omitted; use hasReturnedAmountMoney() or valueOrDefault().
     */
    public function getReturnedAmountMoney(): mixed { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When settlement_allocation_id is omitted; use hasSettlementAllocationId() or valueOrDefault().
     */
    public function getSettlementAllocationId(): string { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_pending_amount_money is omitted; use hasSourcePendingAmountMoney() or valueOrDefault().
     */
    public function getSourcePendingAmountMoney(): mixed { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_remaining_amount_money is omitted; use hasSourceRemainingAmountMoney() or valueOrDefault().
     */
    public function getSourceRemainingAmountMoney(): mixed { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
