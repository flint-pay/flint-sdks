<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $disposition
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $dispute_amount_money
 * @property-read string $dispute_id
 * @property-read string $gift_card_funding_disposition_id
 * @property-read list<string> $gift_card_ids
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $honored_value_money
 * @property-read string $idempotency_key
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $original_gift_card_consideration_money
 * @property-read string $payment_intent_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $preserved_reserved_value_money
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingDispositionInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'disposition': string, 'dispute_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'dispute_id': string, 'gift_card_funding_disposition_id': string, 'gift_card_ids': list<string>, 'honored_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'idempotency_key': string, 'original_gift_card_consideration_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_intent_id': string, 'preserved_reserved_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reason_message': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDispositionInput')); }
    /** When the disposition was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** How Flint handles the lost funding. honor_value keeps the affected cards' unspent value spendable and removes the freeze this dispute placed on them. Value enum: "honor_value".
     * @return string
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** The whole disputed payment amount, which can include consideration for other purchases. It is separate from the original gift card consideration and honored face value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When dispute_amount_money is omitted; use hasDisputeAmountMoney() or valueOrDefault().
     */
    public function getDisputeAmountMoney(): mixed { return $this->get('dispute_amount_money'); }
    public function hasDisputeAmountMoney(): bool { return $this->has('dispute_amount_money'); }
    /** The lost dispute this disposition resolves.
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Stable identifier of the disposition.
     * @return string
     * @throws SdkError When gift_card_funding_disposition_id is omitted; use hasGiftCardFundingDispositionId() or valueOrDefault().
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** Gift cards whose value this disposition honors, including replacement cards that received value from the disputed funding. [] (Value): string.
     * @return list<string>
     * @throws SdkError When gift_card_ids is omitted; use hasGiftCardIds() or valueOrDefault().
     */
    public function getGiftCardIds(): array { return $this->get('gift_card_ids'); }
    public function hasGiftCardIds(): bool { return $this->has('gift_card_ids'); }
    /** Unspent value that stays spendable under this disposition, summed across the affected cards, including replacement cards that received value from the disputed funding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When honored_value_money is omitted; use hasHonoredValueMoney() or valueOrDefault().
     */
    public function getHonoredValueMoney(): mixed { return $this->get('honored_value_money'); }
    public function hasHonoredValueMoney(): bool { return $this->has('honored_value_money'); }
    /** The Idempotency-Key sent with the request that created this disposition.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** What the buyer paid for the gift card value the disputed payment funded, summed across its funding loads. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When original_gift_card_consideration_money is omitted; use hasOriginalGiftCardConsiderationMoney() or valueOrDefault().
     */
    public function getOriginalGiftCardConsiderationMoney(): mixed { return $this->get('original_gift_card_consideration_money'); }
    public function hasOriginalGiftCardConsiderationMoney(): bool { return $this->has('original_gift_card_consideration_money'); }
    /** The disputed payment that funded the gift card value.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Part of honored_value_money that pending redemptions held when the disposition was created. It stays reserved for them. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When preserved_reserved_value_money is omitted; use hasPreservedReservedValueMoney() or valueOrDefault().
     */
    public function getPreservedReservedValueMoney(): mixed { return $this->get('preserved_reserved_value_money'); }
    public function hasPreservedReservedValueMoney(): bool { return $this->has('preserved_reserved_value_money'); }
    /** Your reason for honoring the value, from the create request.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
