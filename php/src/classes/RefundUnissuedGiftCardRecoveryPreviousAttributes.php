<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read mixed $returned_amount_money
 * @property-read string|null $settlement_allocation_id
 * @property-read mixed $source_pending_amount_money
 * @property-read mixed $source_remaining_amount_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundUnissuedGiftCardRecoveryPreviousAttributes extends Model {
    /** @param array{'order_id'?: mixed, 'order_line_item_id'?: mixed, 'payment_intent_id'?: mixed, 'purchase_refund_allocation_id'?: mixed, 'returned_amount_money'?: mixed, 'settlement_allocation_id'?: mixed, 'source_pending_amount_money'?: mixed, 'source_remaining_amount_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundUnissuedGiftCardRecoveryPreviousAttributes')); }
    /** The order the gift card was sold on. anyOf[1] (Value): string. The order the gift card was sold on. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. anyOf[1] (Value): string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The payment the returned cash belongs to. Name it in the new refund. anyOf[1] (Value): string. The payment the returned cash belongs to. Name it in the new refund. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** ID of the gift card purchase refund allocation whose cash came back after it failed. anyOf[1] (Value): string. ID of the gift card purchase refund allocation whose cash came back after it failed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPurchaseRefundAllocationId(): string|null { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Cash that came back and funded no gift card. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnedAmountMoney(): mixed { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. anyOf[1] (Value): string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSettlementAllocationId(): string|null { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** Cash on the whole settlement allocation that pending refunds hold. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSourcePendingAmountMoney(): mixed { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSourceRemainingAmountMoney(): mixed { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
