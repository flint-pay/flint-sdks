<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $closed_at
 * @property-read ?string $closed_reason
 * @property-read ?string $created_at
 * @property-read ?string $customer_id
 * @property-read list<DeferredPromotion> $deferred_promotions
 * @property-read ?string $fulfillment_status
 * @property-read string|null $governing_delivery_selection_id
 * @property-read string $order_id
 * @property-read ?string $order_number
 * @property-read string|null $paid_at
 * @property-read ?list<string> $payment_intent_ids
 * @property-read string $payment_status
 * @property-read PricingAmounts $pricing_amounts
 * @property-read string $refund_status
 * @property-read OrderSettlementAmounts $settlement_amounts
 * @property-read string $status
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class BuyerExpandedOrderSummary extends Model {
    /** @param array{'closed_at'?: string, 'closed_reason'?: string, 'created_at'?: string, 'customer_id'?: string, 'deferred_promotions': list<mixed>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': mixed, 'refund_status': string, 'settlement_amounts': mixed, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerExpandedOrderSummary')); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time.
     * @return ?string
     */
    public function getClosedAt(): ?string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return ?string
     */
    public function getClosedReason(): ?string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** When the order was created, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer associated with the order, when one is set.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. [] (Value): {@see DeferredPromotion}. A promotion accepted at subscription signup for the subscription's first charged cycle. It does not discount the signup order.
     * @return list<DeferredPromotion>
     */
    public function getDeferredPromotions(): array { return $this->get('deferred_promotions'); }
    public function hasDeferredPromotions(): bool { return $this->has('deferred_promotions'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return ?string
     */
    public function getFulfillmentStatus(): ?string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** ID of the delivery selection that governs this order. Null when no selection governs the order.
     * @return string|null
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Stable identifier of the expanded order.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference.
     * @return ?string
     */
    public function getOrderNumber(): ?string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: date-time.
     * @return string|null
     */
    public function getPaidAt(): string|null { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Payment intents associated with the order. [] (Value): string.
     * @return ?list<string>
     */
    public function getPaymentIntentIds(): ?array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * @return string
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmounts
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Payments, refunds, credits, and amounts still owed for the order. The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture. Money collected, returned, waived, and still owed on a bill.
     * @return OrderSettlementAmounts
     */
    public function getSettlementAmounts(): OrderSettlementAmounts { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the order was last updated, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
