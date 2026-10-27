<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $disposition
 * @property-read MoneyValue $dispute_amount_money
 * @property-read string $dispute_id
 * @property-read string $gift_card_funding_disposition_id
 * @property-read list<string> $gift_card_ids
 * @property-read MoneyValue $honored_value_money
 * @property-read string $idempotency_key
 * @property-read MoneyValue $original_gift_card_consideration_money
 * @property-read string $payment_intent_id
 * @property-read MoneyValue $preserved_reserved_value_money
 * @property-read string $reason_message
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardFundingDisposition extends Model {
    /** @param array{'created_at': string, 'disposition': string, 'dispute_amount_money': mixed, 'dispute_id': string, 'gift_card_funding_disposition_id': string, 'gift_card_ids': list<string>, 'honored_value_money': mixed, 'idempotency_key': string, 'original_gift_card_consideration_money': mixed, 'payment_intent_id': string, 'preserved_reserved_value_money': mixed, 'reason_message': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDisposition')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.  Value enum: "honor_value".
     * @return string
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** Shape $ (Value): {@see MoneyValue}. The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDisputeAmountMoney(): MoneyValue { return $this->get('dispute_amount_money'); }
    public function hasDisputeAmountMoney(): bool { return $this->has('dispute_amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getGiftCardIds(): array { return $this->get('gift_card_ids'); }
    public function hasGiftCardIds(): bool { return $this->has('gift_card_ids'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getHonoredValueMoney(): MoneyValue { return $this->get('honored_value_money'); }
    public function hasHonoredValueMoney(): bool { return $this->has('honored_value_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getOriginalGiftCardConsiderationMoney(): MoneyValue { return $this->get('original_gift_card_consideration_money'); }
    public function hasOriginalGiftCardConsiderationMoney(): bool { return $this->has('original_gift_card_consideration_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPreservedReservedValueMoney(): MoneyValue { return $this->get('preserved_reserved_value_money'); }
    public function hasPreservedReservedValueMoney(): bool { return $this->has('preserved_reserved_value_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
