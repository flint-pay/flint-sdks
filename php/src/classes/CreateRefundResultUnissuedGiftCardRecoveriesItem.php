<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_intent_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read CreateRefundResultUnissuedGiftCardRecoveriesItemReturnedAmountMoney $returned_amount_money
 * @property-read string $settlement_allocation_id
 * @property-read CreateRefundResultUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney $source_pending_amount_money
 * @property-read CreateRefundResultUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney $source_remaining_amount_money
 * Presence-aware response; omitted optional fields return null. */
final class CreateRefundResultUnissuedGiftCardRecoveriesItem extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': mixed, 'settlement_allocation_id': string, 'source_pending_amount_money': mixed, 'source_remaining_amount_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundResultUnissuedGiftCardRecoveriesItem')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Shape $ (Value): {@see CreateRefundResultUnissuedGiftCardRecoveriesItemReturnedAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultUnissuedGiftCardRecoveriesItemReturnedAmountMoney
     */
    public function getReturnedAmountMoney(): CreateRefundResultUnissuedGiftCardRecoveriesItemReturnedAmountMoney { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSettlementAllocationId(): string { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** Shape $ (Value): {@see CreateRefundResultUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney
     */
    public function getSourcePendingAmountMoney(): CreateRefundResultUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** Shape $ (Value): {@see CreateRefundResultUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return CreateRefundResultUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney
     */
    public function getSourceRemainingAmountMoney(): CreateRefundResultUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
