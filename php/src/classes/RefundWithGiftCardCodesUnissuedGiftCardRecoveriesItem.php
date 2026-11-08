<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_intent_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemReturnedAmountMoney $returned_amount_money
 * @property-read string $settlement_allocation_id
 * @property-read RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney $source_pending_amount_money
 * @property-read RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney $source_remaining_amount_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItem extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'payment_intent_id': string, 'purchase_refund_allocation_id': string, 'returned_amount_money': mixed, 'settlement_allocation_id': string, 'source_pending_amount_money': mixed, 'source_remaining_amount_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItem')); }
    /** The order the gift card was sold on.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The payment the returned cash belongs to. Name it in the new refund.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** ID of the gift card purchase refund allocation whose cash came back after it failed.
     * @return string
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Cash that came back and funded no gift card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemReturnedAmountMoney
     */
    public function getReturnedAmountMoney(): RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemReturnedAmountMoney { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive.
     * @return string
     */
    public function getSettlementAllocationId(): string { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** Cash on the whole settlement allocation that pending refunds hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney
     */
    public function getSourcePendingAmountMoney(): RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourcePendingAmountMoney { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney
     */
    public function getSourceRemainingAmountMoney(): RefundWithGiftCardCodesUnissuedGiftCardRecoveriesItemSourceRemainingAmountMoney { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
