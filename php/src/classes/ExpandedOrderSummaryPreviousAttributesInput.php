<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $buyer_contact
 * @property-read string|\DateTimeInterface|null $closed_at
 * @property-read string|null $closed_reason
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $customer_id
 * @property-read list<DeferredPromotionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $deferred_promotions
 * @property-read string|null $fulfillment_status
 * @property-read string|null|null $governing_delivery_selection_id
 * @property-read string|null $order_id
 * @property-read string|null $order_number
 * @property-read string|\DateTimeInterface|null|null $paid_at
 * @property-read list<string>|null $payment_intent_ids
 * @property-read string|null $payment_status
 * @property-read PricingAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $pricing_amounts
 * @property-read string|null $refund_status
 * @property-read OrderSettlementAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $settlement_amounts
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedOrderSummaryPreviousAttributesInput extends Model {
    /** @param array{'buyer_contact'?: CheckoutBuyerContactPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'closed_at'?: string|\DateTimeInterface|null, 'closed_reason'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'deferred_promotions'?: list<DeferredPromotionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'fulfillment_status'?: string|null, 'governing_delivery_selection_id'?: string|null|null, 'order_id'?: string|null, 'order_number'?: string|null, 'paid_at'?: string|\DateTimeInterface|null|null, 'payment_intent_ids'?: list<string>|null, 'payment_status'?: string|null, 'pricing_amounts'?: PricingAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refund_status'?: string|null, 'settlement_amounts'?: OrderSettlementAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedOrderSummaryPreviousAttributesInput')); }
    /** Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. anyOf[1] (Value): {@see CheckoutBuyerContactPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CheckoutBuyerContactPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. anyOf[1] (Value): string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): mixed { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): mixed { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** When the order was created, in RFC3339 format. anyOf[1] (Value): string. When the order was created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer associated with the order, when one is set. anyOf[1] (Value): string. Customer associated with the order, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1] (Value): Array of {@see DeferredPromotionPreviousAttributesInput}. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1][] (Value): {@see DeferredPromotionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<DeferredPromotionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When deferred_promotions is omitted; use hasDeferredPromotions() or valueOrDefault().
     */
    public function getDeferredPromotions(): mixed { return $this->get('deferred_promotions'); }
    public function hasDeferredPromotions(): bool { return $this->has('deferred_promotions'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): string. Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): mixed { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** ID of the delivery selection that governs this order. Null when no selection governs the order. anyOf[1] (Value): string or null. ID of the delivery selection that governs this order. Null when no selection governs the order. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When governing_delivery_selection_id is omitted; use hasGoverningDeliverySelectionId() or valueOrDefault().
     */
    public function getGoverningDeliverySelectionId(): mixed { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Stable identifier of the expanded order. anyOf[1] (Value): string. Stable identifier of the expanded order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference. anyOf[1] (Value): string. Human-readable order number for receipts and merchant reference. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): mixed { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. anyOf[1] (Value): string or null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null|null
     * @throws SdkError When paid_at is omitted; use hasPaidAt() or valueOrDefault().
     */
    public function getPaidAt(): mixed { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Payment intents associated with the order. anyOf[1] (Value): Array of string. Payment intents associated with the order. anyOf[1][] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): mixed { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value): string. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): mixed { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Order totals before accounting for collected payments and refunds. anyOf[1] (Value): {@see PricingAmountsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PricingAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): mixed { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Payments, refunds, credits, and amounts still owed for the order. anyOf[1] (Value): {@see OrderSettlementAmountsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderSettlementAmountsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When settlement_amounts is omitted; use hasSettlementAmounts() or valueOrDefault().
     */
    public function getSettlementAmounts(): mixed { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1][] (Value): string.  Value enum: "close", "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the order was last updated, in RFC3339 format. anyOf[1] (Value): string. When the order was last updated, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
