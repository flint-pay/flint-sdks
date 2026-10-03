<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardMoney $amount_money
 * @property-read GiftCardMoney $balance_after_money
 * @property-read GiftCardMoney $balance_before_money
 * @property-read string $gift_card_id
 * @property-read string $gift_card_transaction_id
 * @property-read string $posted_at
 * @property-read string $sequence
 * @property-read string $transaction_type
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerGiftCardTransaction extends Model {
    /** @param array{'amount_money': mixed, 'balance_after_money': mixed, 'balance_before_money': mixed, 'gift_card_id': string, 'gift_card_transaction_id': string, 'posted_at': string, 'sequence': string, 'transaction_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerGiftCardTransaction')); }
    /** @return GiftCardMoney
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): GiftCardMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return GiftCardMoney
     * @throws SdkError When balance_after_money is omitted; use hasBalanceAfterMoney() or valueOrDefault().
     */
    public function getBalanceAfterMoney(): GiftCardMoney { return $this->get('balance_after_money'); }
    public function hasBalanceAfterMoney(): bool { return $this->has('balance_after_money'); }
    /** @return GiftCardMoney
     * @throws SdkError When balance_before_money is omitted; use hasBalanceBeforeMoney() or valueOrDefault().
     */
    public function getBalanceBeforeMoney(): GiftCardMoney { return $this->get('balance_before_money'); }
    public function hasBalanceBeforeMoney(): bool { return $this->has('balance_before_money'); }
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
     * @throws SdkError When posted_at is omitted; use hasPostedAt() or valueOrDefault().
     */
    public function getPostedAt(): string { return $this->get('posted_at'); }
    public function hasPostedAt(): bool { return $this->has('posted_at'); }
    /** @return string
     * @throws SdkError When sequence is omitted; use hasSequence() or valueOrDefault().
     */
    public function getSequence(): string { return $this->get('sequence'); }
    public function hasSequence(): bool { return $this->has('sequence'); }
    /** @return string
     * @throws SdkError When transaction_type is omitted; use hasTransactionType() or valueOrDefault().
     */
    public function getTransactionType(): string { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
