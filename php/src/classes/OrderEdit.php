<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditLineAddition> $add_line_items
 * @property-read MoneyValue $added_total_money
 * @property-read list<OrderEditChargeRefund> $charge_refunds
 * @property-read string $created_at
 * @property-read ?string $note
 * @property-read string $order_edit_id
 * @property-read string $order_id
 * @property-read ?string $reason
 * @property-read list<string> $refund_ids
 * @property-read MoneyValue $refund_money
 * @property-read list<OrderEditLineRemoval> $remove_line_items
 * @property-read MoneyValue $removed_total_money
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read MoneyValue $unrefunded_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEdit extends Model {
    /** @param array{'add_line_items': list<mixed>, 'added_total_money': mixed, 'charge_refunds': list<mixed>, 'created_at': string, 'note'?: string, 'order_edit_id': string, 'order_id': string, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': mixed, 'remove_line_items': list<mixed>, 'removed_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEdit')); }
    /** Added order lines, in request order, with their quantities and values frozen at commit. Empty when the edit added nothing. [] (Value): {@see OrderEditLineAddition}. An order line added by the enclosing edit, with its value frozen at commit.
     * @return list<OrderEditLineAddition>
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAddedTotalMoney(): MoneyValue { return $this->get('added_total_money'); }
    public function hasAddedTotalMoney(): bool { return $this->has('added_total_money'); }
    /** Charges released by this edit, frozen at commit. Empty when no charges were released. [] (Value): {@see OrderEditChargeRefund}. The value an edit releases from one order charge, and the part refunded to the buyer.
     * @return list<OrderEditChargeRefund>
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** When the edit committed. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: 500.
     * @return ?string
     */
    public function getNote(): ?string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
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
    /** Removed units and their refund amounts frozen at commit. [] (Value): {@see OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.
     * @return list<OrderEditLineRemoval>
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRemovedTotalMoney(): MoneyValue { return $this->get('removed_total_money'); }
    public function hasRemovedTotalMoney(): bool { return $this->has('removed_total_money'); }
    /** Whether this edit has committed. Refund processing has its own status on each refund. Value enum: "completed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "retry". [] (Value): string.  Value enum: "retry".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnrefundedMoney(): MoneyValue { return $this->get('unrefunded_money'); }
    public function hasUnrefundedMoney(): bool { return $this->has('unrefunded_money'); }
}
