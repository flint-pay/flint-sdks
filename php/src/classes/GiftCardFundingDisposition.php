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
 * @property-read MoneyValue $original_gift_card_consideration_money
 * @property-read string $payment_intent_id
 * @property-read MoneyValue $preserved_reserved_value_money
 * @property-read string $reason_message
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardFundingDisposition extends Model {
    /** @param array{'created_at': string, 'disposition': string, 'dispute_amount_money': object{'amount': string, 'currency': string}, 'dispute_id': string, 'gift_card_funding_disposition_id': string, 'gift_card_ids': list<string>, 'honored_value_money': object{'amount': string, 'currency': string}, 'original_gift_card_consideration_money': object{'amount': string, 'currency': string}, 'payment_intent_id': string, 'preserved_reserved_value_money': object{'amount': string, 'currency': string}, 'reason_message': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDisposition')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When disposition is omitted; use hasDisposition() or valueOrDefault().
     */
    public function getDisposition(): string { return $this->get('disposition'); }
    public function hasDisposition(): bool { return $this->has('disposition'); }
    /** @return MoneyValue
     * @throws SdkError When dispute_amount_money is omitted; use hasDisputeAmountMoney() or valueOrDefault().
     */
    public function getDisputeAmountMoney(): MoneyValue { return $this->get('dispute_amount_money'); }
    public function hasDisputeAmountMoney(): bool { return $this->has('dispute_amount_money'); }
    /** @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** @return string
     * @throws SdkError When gift_card_funding_disposition_id is omitted; use hasGiftCardFundingDispositionId() or valueOrDefault().
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
    /** @return list<string>
     * @throws SdkError When gift_card_ids is omitted; use hasGiftCardIds() or valueOrDefault().
     */
    public function getGiftCardIds(): array { return $this->get('gift_card_ids'); }
    public function hasGiftCardIds(): bool { return $this->has('gift_card_ids'); }
    /** @return MoneyValue
     * @throws SdkError When honored_value_money is omitted; use hasHonoredValueMoney() or valueOrDefault().
     */
    public function getHonoredValueMoney(): MoneyValue { return $this->get('honored_value_money'); }
    public function hasHonoredValueMoney(): bool { return $this->has('honored_value_money'); }
    /** @return MoneyValue
     * @throws SdkError When original_gift_card_consideration_money is omitted; use hasOriginalGiftCardConsiderationMoney() or valueOrDefault().
     */
    public function getOriginalGiftCardConsiderationMoney(): MoneyValue { return $this->get('original_gift_card_consideration_money'); }
    public function hasOriginalGiftCardConsiderationMoney(): bool { return $this->has('original_gift_card_consideration_money'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return MoneyValue
     * @throws SdkError When preserved_reserved_value_money is omitted; use hasPreservedReservedValueMoney() or valueOrDefault().
     */
    public function getPreservedReservedValueMoney(): MoneyValue { return $this->get('preserved_reserved_value_money'); }
    public function hasPreservedReservedValueMoney(): bool { return $this->has('preserved_reserved_value_money'); }
    /** @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
