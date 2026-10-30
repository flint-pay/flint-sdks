<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cash_out_reference
 * @property-read string $gift_card_id
 * @property-read string $idempotency_key
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string|\DateTimeInterface $posted_after
 * @property-read string|\DateTimeInterface $posted_before
 * @property-read string $source_id
 * @property-read list<string>|string $source_type
 * @property-read list<string>|string $transaction_type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardTransactionsListParams extends Model {
    /** @param array{'cash_out_reference'?: string, 'gift_card_id'?: string, 'idempotency_key'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'posted_after'?: string|\DateTimeInterface, 'posted_before'?: string|\DateTimeInterface, 'source_id'?: string, 'source_type'?: list<string>|string, 'transaction_type'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionsListParams')); }
    /** Exact, case-sensitive filter on your reference for the cash paid to the buyer outside Flint. Matches only cash_out transactions. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When cash_out_reference is omitted; use hasCashOutReference() or valueOrDefault().
     */
    public function getCashOutReference(): string { return $this->get('cash_out_reference'); }
    public function hasCashOutReference(): bool { return $this->has('cash_out_reference'); }
    /** Exact, case-sensitive filter. maxLength: 255. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Exact, case-sensitive filter. maxLength: 255. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Inclusive lower bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When posted_after is omitted; use hasPostedAfter() or valueOrDefault().
     */
    public function getPostedAfter(): string|\DateTimeInterface { return $this->get('posted_after'); }
    public function hasPostedAfter(): bool { return $this->has('posted_after'); }
    /** Exclusive upper bound on posted_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When posted_before is omitted; use hasPostedBefore() or valueOrDefault().
     */
    public function getPostedBefore(): string|\DateTimeInterface { return $this->get('posted_before'); }
    public function hasPostedBefore(): bool { return $this->has('posted_before'); }
    /** Exact, case-sensitive filter. maxLength: 255.
     * @return string
     * @throws SdkError When source_id is omitted; use hasSourceId() or valueOrDefault().
     */
    public function getSourceId(): string { return $this->get('source_id'); }
    public function hasSourceId(): bool { return $this->has('source_id'); }
    /** Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation". Value enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation". anyOf[1][] (Value): string. maxLength: 255. Value enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation". anyOf[2] (Value): string. maxLength: 255. Value enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation".
     * @return list<string>|string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): mixed { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Filter by transaction_type. Repeat the parameter or send a comma-separated list to match any of several values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". anyOf[1][] (Value): string.  Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". anyOf[2] (Value): string.  Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * @return list<string>|string
     * @throws SdkError When transaction_type is omitted; use hasTransactionType() or valueOrDefault().
     */
    public function getTransactionType(): mixed { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
