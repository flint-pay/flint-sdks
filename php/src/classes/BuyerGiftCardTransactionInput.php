<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $balance_after_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $balance_before_money
 * @property-read string $gift_card_id
 * @property-read string $gift_card_transaction_id
 * @property-read string|\DateTimeInterface $posted_at
 * @property-read string $sequence
 * @property-read string $transaction_type
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerGiftCardTransactionInput extends Model {
    /** @param array{'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'gift_card_transaction_id': string, 'posted_at': string|\DateTimeInterface, 'sequence': string, 'transaction_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerGiftCardTransactionInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_after_money is omitted; use hasBalanceAfterMoney() or valueOrDefault().
     */
    public function getBalanceAfterMoney(): mixed { return $this->get('balance_after_money'); }
    public function hasBalanceAfterMoney(): bool { return $this->has('balance_after_money'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_before_money is omitted; use hasBalanceBeforeMoney() or valueOrDefault().
     */
    public function getBalanceBeforeMoney(): mixed { return $this->get('balance_before_money'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When posted_at is omitted; use hasPostedAt() or valueOrDefault().
     */
    public function getPostedAt(): string|\DateTimeInterface { return $this->get('posted_at'); }
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
