<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $balance_after_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $balance_before_money
 * @property-read string|null $cash_out_reference
 * @property-read string $gift_card_id
 * @property-read string $gift_card_transaction_id
 * @property-read string|null $idempotency_key
 * @property-read string $merchant_sequence
 * @property-read string $order_id
 * @property-read string|\DateTimeInterface $posted_at
 * @property-read string|null $reason
 * @property-read string $sequence
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $source
 * @property-read string $transaction_type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardTransactionInput extends Model {
    /** @param array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': string, 'source': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'transaction_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionInput')); }
    /** Shape $ (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_after_money is omitted; use hasBalanceAfterMoney() or valueOrDefault().
     */
    public function getBalanceAfterMoney(): mixed { return $this->get('balance_after_money'); }
    public function hasBalanceAfterMoney(): bool { return $this->has('balance_after_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_before_money is omitted; use hasBalanceBeforeMoney() or valueOrDefault().
     */
    public function getBalanceBeforeMoney(): mixed { return $this->get('balance_before_money'); }
    public function hasBalanceBeforeMoney(): bool { return $this->has('balance_before_money'); }
    /** Shape $ (Value): string or null. Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: 255.
     * @return string|null
     * @throws SdkError When cash_out_reference is omitted; use hasCashOutReference() or valueOrDefault().
     */
    public function getCashOutReference(): string|null { return $this->get('cash_out_reference'); }
    public function hasCashOutReference(): bool { return $this->has('cash_out_reference'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_transaction_id is omitted; use hasGiftCardTransactionId() or valueOrDefault().
     */
    public function getGiftCardTransactionId(): string { return $this->get('gift_card_transaction_id'); }
    public function hasGiftCardTransactionId(): bool { return $this->has('gift_card_transaction_id'); }
    /** Shape $ (Value): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When merchant_sequence is omitted; use hasMerchantSequence() or valueOrDefault().
     */
    public function getMerchantSequence(): string { return $this->get('merchant_sequence'); }
    public function hasMerchantSequence(): bool { return $this->has('merchant_sequence'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When posted_at is omitted; use hasPostedAt() or valueOrDefault().
     */
    public function getPostedAt(): string|\DateTimeInterface { return $this->get('posted_at'); }
    public function hasPostedAt(): bool { return $this->has('posted_at'); }
    /** Shape $ (Value): string or null. Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Value enum: "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity", "balance_accidentally_increased", "customer_request", null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When sequence is omitted; use hasSequence() or valueOrDefault().
     */
    public function getSequence(): string { return $this->get('sequence'); }
    public function hasSequence(): bool { return $this->has('sequence'); }
    /** Shape $ (Value): {@see ResourceReferenceInput} or null. Shape $.anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): string.  Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * @return string
     * @throws SdkError When transaction_type is omitted; use hasTransactionType() or valueOrDefault().
     */
    public function getTransactionType(): string { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
