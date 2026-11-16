<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditLineAdditionPreviousAttributes>|null $add_line_items
 * @property-read MoneyValuePreviousAttributes|null $added_total_money
 * @property-read MoneyValuePreviousAttributes|null $amount_due_money
 * @property-read string|null $canceled_at
 * @property-read string|null $cancellation_reason
 * @property-read list<OrderEditChargeRefundPreviousAttributes>|null $charge_refunds
 * @property-read string|null $completed_at
 * @property-read string|null $created_at
 * @property-read string|null $expires_at
 * @property-read string|null $order_edit_id
 * @property-read string|null $order_id
 * @property-read string|null $payment_intent_id
 * @property-read string|null $reason
 * @property-read list<string>|null $refund_ids
 * @property-read MoneyValuePreviousAttributes|null $refund_money
 * @property-read list<OrderEditLineRemovalPreviousAttributes>|null $remove_line_items
 * @property-read MoneyValuePreviousAttributes|null $removed_total_money
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read MoneyValuePreviousAttributes|null $unrefunded_money
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditCompletedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'add_line_items'?: mixed, 'added_total_money'?: mixed, 'amount_due_money'?: mixed, 'canceled_at'?: mixed, 'cancellation_reason'?: mixed, 'charge_refunds'?: mixed, 'completed_at'?: mixed, 'created_at'?: mixed, 'expires_at'?: mixed, 'order_edit_id'?: mixed, 'order_id'?: mixed, 'payment_intent_id'?: mixed, 'reason'?: mixed, 'refund_ids'?: mixed, 'refund_money'?: mixed, 'remove_line_items'?: mixed, 'removed_total_money'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'unrefunded_money'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditCompletedMerchantEventDataPreviousAttributes')); }
    /** Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. anyOf[1] (Value): Array of {@see OrderEditLineAdditionPreviousAttributes}. Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. anyOf[1][] (Value): {@see OrderEditLineAdditionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderEditLineAdditionPreviousAttributes>|null
     */
    public function getAddLineItems(): array|null { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAddedTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('added_total_money'); }
    public function hasAddedTotalMoney(): bool { return $this->has('added_total_money'); }
    /** What the added lines cost beyond the removed value and released charges, tax included, frozen when the edit was created. Zero when the edit had no balance. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountDueMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_due_money'); }
    public function hasAmountDueMoney(): bool { return $this->has('amount_due_money'); }
    /** When the edit was canceled. `null` when the edit is not canceled. anyOf[1] (Value): string. When the edit was canceled. `null` when the edit is not canceled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Why the edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed", "payment_returned", null. anyOf[1] (Value): string. Why the edit was canceled. `null` when the edit is not canceled. Value enum: "merchant_request", "expired", "payment_disputed", "payment_returned", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Charges released by this edit, frozen at creation. Empty when no charges were released. anyOf[1] (Value): Array of {@see OrderEditChargeRefundPreviousAttributes}. Charges released by this edit, frozen at creation. Empty when no charges were released. anyOf[1][] (Value): {@see OrderEditChargeRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderEditChargeRefundPreviousAttributes>|null
     */
    public function getChargeRefunds(): array|null { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** When the item changes were applied to the order. `null` when the edit is pending or canceled. anyOf[1] (Value): string. When the item changes were applied to the order. `null` when the edit is pending or canceled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** When the edit was created. anyOf[1] (Value): string. When the edit was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. anyOf[1] (Value): string. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable ID of this order edit. anyOf[1] (Value): string. Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderEditId(): string|null { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** The order this edit belongs to. anyOf[1] (Value): string. The order this edit belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. anyOf[1] (Value): string. The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Reason for the edit and its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[1] (Value): string. Reason for the edit and its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. anyOf[1] (Value): Array of string. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRefundIds(): array|null { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundMoney(): MoneyValuePreviousAttributes|null { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** Removed units and their refund amounts frozen at creation. anyOf[1] (Value): Array of {@see OrderEditLineRemovalPreviousAttributes}. Removed units and their refund amounts frozen at creation. anyOf[1][] (Value): {@see OrderEditLineRemovalPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderEditLineRemovalPreviousAttributes>|null
     */
    public function getRemoveLineItems(): array|null { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** The value of the removed units: the sum of remove_line_items[].total_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRemovedTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('removed_total_money'); }
    public function hasRemovedTotalMoney(): bool { return $this->has('removed_total_money'); }
    /** Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Value enum: "pending", "completed", "canceled". anyOf[1] (Value): string. Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Value enum: "pending", "completed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1] (Value): Array of string. Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "cancel", "retry". anyOf[1][] (Value): string.  Value enum: "cancel", "retry". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnrefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('unrefunded_money'); }
    public function hasUnrefundedMoney(): bool { return $this->has('unrefunded_money'); }
    /** The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. anyOf[1] (Value): integer. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
