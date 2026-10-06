<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read MoneyValue $balance_after_money
 * @property-read MoneyValue $balance_before_money
 * @property-read string|null $external_reference_id
 * @property-read string $gift_card_id
 * @property-read string $gift_card_transaction_id
 * @property-read string $idempotency_key
 * @property-read string $merchant_sequence
 * @property-read string $order_id
 * @property-read string $posted_at
 * @property-read string $reason
 * @property-read string $sequence
 * @property-read string $source_id
 * @property-read string $source_type
 * @property-read string $transaction_type
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardTransaction extends Model {
    /** @param array{'amount_money': object{'amount': string, 'currency': string}, 'balance_after_money': object{'amount': string, 'currency': string}, 'balance_before_money': object{'amount': string, 'currency': string}, 'external_reference_id': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string, 'reason': string, 'sequence': string, 'source_id': string, 'source_type': string, 'transaction_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransaction')); }
    /** @return SignedMoney
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return MoneyValue
     * @throws SdkError When balance_after_money is omitted; use hasBalanceAfterMoney() or valueOrDefault().
     */
    public function getBalanceAfterMoney(): MoneyValue { return $this->get('balance_after_money'); }
    public function hasBalanceAfterMoney(): bool { return $this->has('balance_after_money'); }
    /** @return MoneyValue
     * @throws SdkError When balance_before_money is omitted; use hasBalanceBeforeMoney() or valueOrDefault().
     */
    public function getBalanceBeforeMoney(): MoneyValue { return $this->get('balance_before_money'); }
    public function hasBalanceBeforeMoney(): bool { return $this->has('balance_before_money'); }
    /** @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_transaction_id is omitted; use hasGiftCardTransactionId() or valueOrDefault().
     */
    public function getGiftCardTransactionId(): string { return $this->get('gift_card_transaction_id'); }
    public function hasGiftCardTransactionId(): bool { return $this->has('gift_card_transaction_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When merchant_sequence is omitted; use hasMerchantSequence() or valueOrDefault().
     */
    public function getMerchantSequence(): string { return $this->get('merchant_sequence'); }
    public function hasMerchantSequence(): bool { return $this->has('merchant_sequence'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When posted_at is omitted; use hasPostedAt() or valueOrDefault().
     */
    public function getPostedAt(): string { return $this->get('posted_at'); }
    public function hasPostedAt(): bool { return $this->has('posted_at'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When sequence is omitted; use hasSequence() or valueOrDefault().
     */
    public function getSequence(): string { return $this->get('sequence'); }
    public function hasSequence(): bool { return $this->has('sequence'); }
    /** @return string
     * @throws SdkError When source_id is omitted; use hasSourceId() or valueOrDefault().
     */
    public function getSourceId(): string { return $this->get('source_id'); }
    public function hasSourceId(): bool { return $this->has('source_id'); }
    /** @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** @return string
     * @throws SdkError When transaction_type is omitted; use hasTransactionType() or valueOrDefault().
     */
    public function getTransactionType(): string { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
