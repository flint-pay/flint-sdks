<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass> $charge_refunds
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $note
 * @property-read string $order_edit_id
 * @property-read string $order_id
 * @property-read string $reason
 * @property-read list<string> $refund_ids
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refund_money
 * @property-read list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass> $remove_line_items
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unrefunded_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditInput extends Model {
    /** @param array{'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'note'?: string, 'order_edit_id': string, 'order_id': string, 'reason'?: string, 'refund_ids': list<string>, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'unrefunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditInput')); }
    /** Explicit charge refunds frozen at commit. Empty when no charges were refunded. [] (Value): {@see OrderEditChargeRefundInput}. The refund the preview would make for one order charge.
     * @return list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_refunds is omitted; use hasChargeRefunds() or valueOrDefault().
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** When the edit committed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: 500.
     * @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * @return string
     * @throws SdkError When order_edit_id is omitted; use hasOrderEditId() or valueOrDefault().
     */
    public function getOrderEditId(): string { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** The order this edit belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Reason for the edit and its refund. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Total money to refund for removed units and charges. May be zero; a zero-value edit creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_money is omitted; use hasRefundMoney() or valueOrDefault().
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** Removed units and their refund amounts frozen at commit. [] (Value): {@see OrderEditLineRemovalInput}. Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.
     * @return list<OrderEditLineRemovalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When remove_line_items is omitted; use hasRemoveLineItems() or valueOrDefault().
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** Whether this edit has committed. Refund processing has its own status on each refund. Value enum: "completed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. [] enum: "retry". [] (Value): string.  Value enum: "retry".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unrefunded_money is omitted; use hasUnrefundedMoney() or valueOrDefault().
     */
    public function getUnrefundedMoney(): mixed { return $this->get('unrefunded_money'); }
    public function hasUnrefundedMoney(): bool { return $this->has('unrefunded_money'); }
}
