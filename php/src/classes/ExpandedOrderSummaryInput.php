<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read string|\DateTimeInterface $closed_at
 * @property-read string $closed_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string $fulfillment_status
 * @property-read string|null $governing_delivery_selection_id
 * @property-read string $order_id
 * @property-read string $order_number
 * @property-read list<string> $payment_intent_ids
 * @property-read string $payment_status
 * @property-read PricingAmountsInput|array<array-key, mixed>|\stdClass $pricing_amounts
 * @property-read string $refund_status
 * @property-read SettlementAmountsInput|array<array-key, mixed>|\stdClass $settlement_amounts
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedOrderSummaryInput extends Model {
    /** @param array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedOrderSummaryInput')); }
    /** Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. Buyer contact supplied with payment or saved during checkout.
     * @return CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** When the order was created, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer associated with the order, when one is set.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return string
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** ID of the delivery selection that governs this order. Null when no selection governs the order.
     * @return string|null
     * @throws SdkError When governing_delivery_selection_id is omitted; use hasGoverningDeliverySelectionId() or valueOrDefault().
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Stable identifier of the expanded order.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference.
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Payment intents associated with the order. [] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * @return string
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Order totals before accounting for collected payments and refunds. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Payments, refunds, credits, and amounts still owed for the order. How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain.
     * @return SettlementAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settlement_amounts is omitted; use hasSettlementAmounts() or valueOrDefault().
     */
    public function getSettlementAmounts(): mixed { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the order was last updated, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
