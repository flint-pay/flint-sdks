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
 * @property-read list<string> $source_type
 * @property-read list<string> $transaction_type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardTransactionsListInput extends Model {
    /** @param array{'cash_out_reference'?: string, 'gift_card_id'?: string, 'idempotency_key'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'posted_after'?: string|\DateTimeInterface, 'posted_before'?: string|\DateTimeInterface, 'source_id'?: string, 'source_type'?: list<string>, 'transaction_type'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionsListInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When cash_out_reference is omitted; use hasCashOutReference() or valueOrDefault().
     */
    public function getCashOutReference(): string { return $this->get('cash_out_reference'); }
    public function hasCashOutReference(): bool { return $this->has('cash_out_reference'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When posted_after is omitted; use hasPostedAfter() or valueOrDefault().
     */
    public function getPostedAfter(): string|\DateTimeInterface { return $this->get('posted_after'); }
    public function hasPostedAfter(): bool { return $this->has('posted_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When posted_before is omitted; use hasPostedBefore() or valueOrDefault().
     */
    public function getPostedBefore(): string|\DateTimeInterface { return $this->get('posted_before'); }
    public function hasPostedBefore(): bool { return $this->has('posted_before'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When source_id is omitted; use hasSourceId() or valueOrDefault().
     */
    public function getSourceId(): string { return $this->get('source_id'); }
    public function hasSourceId(): bool { return $this->has('source_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation". Shape $[] (Value): string. maxLength: 255. Value enum: "gift_card_funding_disposition", "gift_card_load", "gift_card_redemption", "purchase_refund_allocation", "refund", "refund_allocation".
     * @return list<string>
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): array { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". Shape $[] (Value): string.  Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * @return list<string>
     * @throws SdkError When transaction_type is omitted; use hasTransactionType() or valueOrDefault().
     */
    public function getTransactionType(): array { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
