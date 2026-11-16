<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditLineAddition> $add_line_items
 * @property-read MoneyValue $added_total_money
 * @property-read MoneyValue $amount_due_money
 * @property-read string|null $canceled_at
 * @property-read string|null $cancellation_reason
 * @property-read list<OrderEditChargeRefund> $charge_refunds
 * @property-read string|null $completed_at
 * @property-read string $created_at
 * @property-read string|null $expires_at
 * @property-read string $order_edit_id
 * @property-read string $order_id
 * @property-read string|null $payment_intent_id
 * @property-read ?string $reason
 * @property-read list<string> $refund_ids
 * @property-read MoneyValue $refund_money
 * @property-read list<OrderEditLineRemoval> $remove_line_items
 * @property-read MoneyValue $removed_total_money
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read MoneyValue $unrefunded_money
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditUpdatedMerchantEventDataObject extends Model {
    /** @param array{'add_line_items': list<mixed>, 'added_total_money': mixed, 'amount_due_money': mixed, 'canceled_at': string|null, 'cancellation_reason': string|null, 'charge_refunds': list<mixed>, 'completed_at': string|null, 'created_at': string, 'expires_at': string|null, 'order_edit_id': string, 'order_id': string, 'payment_intent_id': string|null, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': mixed, 'remove_line_items': list<mixed>, 'removed_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': mixed, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditUpdatedMerchantEventDataObject')); }
    /** Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. [] (Value): {@see OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen at creation.
     * @return list<OrderEditLineAddition>
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAddedTotalMoney(): MoneyValue { return $this->get('added_total_money'); }
    public function hasAddedTotalMoney(): bool { return $this->has('added_total_money'); }
    /** What the added lines cost beyond the removed value and released charges, tax included, frozen when the edit was created. Zero when the edit had no balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountDueMoney(): MoneyValue { return $this->get('amount_due_money'); }
    public function hasAmountDueMoney(): bool { return $this->has('amount_due_money'); }
    /** When the edit was canceled. `null` when the edit is not canceled. Format: date-time.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Why the edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed", "payment_returned", null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Charges released by this edit, frozen at creation. Empty when no charges were released. [] (Value): {@see OrderEditChargeRefund}. The value an edit releases from one order charge, and the part refunded to the buyer.
     * @return list<OrderEditChargeRefund>
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** When the item changes were applied to the order. `null` when the edit is pending or canceled. Format: date-time.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** When the edit was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getOrderEditId(): string { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** The order this edit belongs to.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Reason for the edit and its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. [] (Value): string.
     * @return list<string>
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundMoney(): MoneyValue { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** Removed units and their refund amounts frozen at creation. [] (Value): {@see OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen at creation. The enclosing edit identifies the order.
     * @return list<OrderEditLineRemoval>
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRemovedTotalMoney(): MoneyValue { return $this->get('removed_total_money'); }
    public function hasRemovedTotalMoney(): bool { return $this->has('removed_total_money'); }
    /** Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Value enum: "pending", "completed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "cancel", "retry". [] (Value): string.  Value enum: "cancel", "retry".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnrefundedMoney(): MoneyValue { return $this->get('unrefunded_money'); }
    public function hasUnrefundedMoney(): bool { return $this->has('unrefunded_money'); }
    /** The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
