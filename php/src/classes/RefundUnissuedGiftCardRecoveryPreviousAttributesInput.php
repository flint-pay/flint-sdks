<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $returned_amount_money
 * @property-read string|null $settlement_allocation_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $source_pending_amount_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $source_remaining_amount_money
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundUnissuedGiftCardRecoveryPreviousAttributesInput extends Model {
    /** @param array{'order_id'?: string|null, 'order_line_item_id'?: string|null, 'payment_intent_id'?: string|null, 'purchase_refund_allocation_id'?: string|null, 'returned_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'settlement_allocation_id'?: string|null, 'source_pending_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'source_remaining_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundUnissuedGiftCardRecoveryPreviousAttributesInput')); }
    /** The order the gift card was sold on. anyOf[1] (Value): string. The order the gift card was sold on. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. anyOf[1] (Value): string. The gift card line item the cash paid for. Name it in a `line_items` entry of the new refund. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The payment the returned cash belongs to. Name it in the new refund. anyOf[1] (Value): string. The payment the returned cash belongs to. Name it in the new refund. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** ID of the gift card purchase refund allocation whose cash came back after it failed. anyOf[1] (Value): string. ID of the gift card purchase refund allocation whose cash came back after it failed. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): mixed { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Cash that came back and funded no gift card. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When returned_amount_money is omitted; use hasReturnedAmountMoney() or valueOrDefault().
     */
    public function getReturnedAmountMoney(): mixed { return $this->get('returned_amount_money'); }
    public function hasReturnedAmountMoney(): bool { return $this->has('returned_amount_money'); }
    /** ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. anyOf[1] (Value): string. ID of the settlement allocation this entry draws on. Entries that share one describe the same pool, so their amounts aren't additive. Example: "opsa_01KEZF7C00MB3NB1V0AM09SX8T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When settlement_allocation_id is omitted; use hasSettlementAllocationId() or valueOrDefault().
     */
    public function getSettlementAllocationId(): mixed { return $this->get('settlement_allocation_id'); }
    public function hasSettlementAllocationId(): bool { return $this->has('settlement_allocation_id'); }
    /** Cash on the whole settlement allocation that pending refunds hold. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When source_pending_amount_money is omitted; use hasSourcePendingAmountMoney() or valueOrDefault().
     */
    public function getSourcePendingAmountMoney(): mixed { return $this->get('source_pending_amount_money'); }
    public function hasSourcePendingAmountMoney(): bool { return $this->has('source_pending_amount_money'); }
    /** Cash left on the whole settlement allocation, including cash that pending refunds hold. Subtract `source_pending_amount_money` to find what you can refund now. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When source_remaining_amount_money is omitted; use hasSourceRemainingAmountMoney() or valueOrDefault().
     */
    public function getSourceRemainingAmountMoney(): mixed { return $this->get('source_remaining_amount_money'); }
    public function hasSourceRemainingAmountMoney(): bool { return $this->has('source_remaining_amount_money'); }
}
