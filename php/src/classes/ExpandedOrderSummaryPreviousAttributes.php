<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactPreviousAttributes|null $buyer_contact
 * @property-read string|null $closed_at
 * @property-read string|null $closed_reason
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read list<DeferredPromotionPreviousAttributes>|null $deferred_promotions
 * @property-read string|null $fulfillment_status
 * @property-read string|null $governing_delivery_selection_id
 * @property-read string|null $order_id
 * @property-read string|null $order_number
 * @property-read string|null $paid_at
 * @property-read list<string>|null $payment_intent_ids
 * @property-read string|null $payment_status
 * @property-read PricingAmountsPreviousAttributes|null $pricing_amounts
 * @property-read string|null $refund_status
 * @property-read OrderSettlementAmountsPreviousAttributes|null $settlement_amounts
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedOrderSummaryPreviousAttributes extends Model {
    /** @param array{'buyer_contact'?: mixed, 'closed_at'?: mixed, 'closed_reason'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'deferred_promotions'?: mixed, 'fulfillment_status'?: mixed, 'governing_delivery_selection_id'?: mixed, 'order_id'?: mixed, 'order_number'?: mixed, 'paid_at'?: mixed, 'payment_intent_ids'?: mixed, 'payment_status'?: mixed, 'pricing_amounts'?: mixed, 'refund_status'?: mixed, 'settlement_amounts'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedOrderSummaryPreviousAttributes')); }
    /** Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. anyOf[1] (Value): {@see CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutBuyerContactPreviousAttributes|null
     */
    public function getBuyerContact(): CheckoutBuyerContactPreviousAttributes|null { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** When the order last closed. Present exactly when status is closed. anyOf[1] (Value): string. When the order last closed. Present exactly when status is closed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** When the order was created, in RFC3339 format. anyOf[1] (Value): string. When the order was created, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer associated with the order, when one is set. anyOf[1] (Value): string. Customer associated with the order, when one is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1] (Value): Array of {@see DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1][] (Value): {@see DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeferredPromotionPreviousAttributes>|null
     */
    public function getDeferredPromotions(): array|null { return $this->get('deferred_promotions'); }
    public function hasDeferredPromotions(): bool { return $this->has('deferred_promotions'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): string. Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentStatus(): string|null { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** ID of the delivery selection that governs this order. Null when no selection governs the order. anyOf[1] (Value): string. ID of the delivery selection that governs this order. Null when no selection governs the order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Stable identifier of the expanded order. anyOf[1] (Value): string. Stable identifier of the expanded order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference. anyOf[1] (Value): string. Human-readable order number for receipts and merchant reference. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderNumber(): string|null { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. anyOf[1] (Value): string. When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaidAt(): string|null { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Payment intents associated with the order. anyOf[1] (Value): Array of string. Payment intents associated with the order. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentIntentIds(): array|null { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value): string. Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentStatus(): string|null { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Order totals before accounting for collected payments and refunds. anyOf[1] (Value): {@see PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PricingAmountsPreviousAttributes|null
     */
    public function getPricingAmounts(): PricingAmountsPreviousAttributes|null { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundStatus(): string|null { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Payments, refunds, credits, and amounts still owed for the order. anyOf[1] (Value): {@see OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderSettlementAmountsPreviousAttributes|null
     */
    public function getSettlementAmounts(): OrderSettlementAmountsPreviousAttributes|null { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1][] (Value): string.  Value enum: "close", "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the order was last updated, in RFC3339 format. anyOf[1] (Value): string. When the order was last updated, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
