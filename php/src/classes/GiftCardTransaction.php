<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read MoneyValue $balance_after_money
 * @property-read MoneyValue $balance_before_money
 * @property-read string|null $cash_out_reference
 * @property-read string $gift_card_id
 * @property-read string $gift_card_transaction_id
 * @property-read string|null $idempotency_key
 * @property-read string $merchant_sequence
 * @property-read ?string $order_id
 * @property-read string $posted_at
 * @property-read string|null $reason
 * @property-read string $sequence
 * @property-read ResourceReference|null $source
 * @property-read string $transaction_type
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardTransaction extends Model {
    /** @param array{'amount_money': mixed, 'balance_after_money': mixed, 'balance_before_money': mixed, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string, 'reason': string|null, 'sequence': string, 'source': mixed, 'transaction_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransaction')); }
    /** Shape $ (Value): {@see SignedMoney}. Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see MoneyValue}. The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBalanceAfterMoney(): MoneyValue { return $this->get('balance_after_money'); }
    public function hasBalanceAfterMoney(): bool { return $this->has('balance_after_money'); }
    /** Shape $ (Value): {@see MoneyValue}. The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBalanceBeforeMoney(): MoneyValue { return $this->get('balance_before_money'); }
    public function hasBalanceBeforeMoney(): bool { return $this->has('balance_before_money'); }
    /** Shape $ (Value): string or null. Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: 255.
     * @return string|null
     */
    public function getCashOutReference(): string|null { return $this->get('cash_out_reference'); }
    public function hasCashOutReference(): bool { return $this->has('cash_out_reference'); }
    /** Shape $ (Value): string. Gift card whose balance this transaction changed.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. Stable identifier of the transaction.
     * @return string
     */
    public function getGiftCardTransactionId(): string { return $this->get('gift_card_transaction_id'); }
    public function hasGiftCardTransactionId(): bool { return $this->has('gift_card_transaction_id'); }
    /** Shape $ (Value): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): integer string. Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getMerchantSequence(): string { return $this->get('merchant_sequence'); }
    public function hasMerchantSequence(): bool { return $this->has('merchant_sequence'); }
    /** Shape $ (Value): string. Order this transaction belongs to, when there is one.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. When the transaction was posted to the card. Format: date-time.
     * @return string
     */
    public function getPostedAt(): string { return $this->get('posted_at'); }
    public function hasPostedAt(): bool { return $this->has('posted_at'); }
    /** Shape $ (Value): string or null. Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Value enum: "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity", "balance_accidentally_increased", "customer_request", null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): integer string. Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getSequence(): string { return $this->get('sequence'); }
    public function hasSequence(): bool { return $this->has('sequence'); }
    /** Shape $ (Value): {@see ResourceReference} or null. The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. null when the cause has no public resource. Shape $.anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getSource(): ResourceReference|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): string. Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * @return string
     */
    public function getTransactionType(): string { return $this->get('transaction_type'); }
    public function hasTransactionType(): bool { return $this->has('transaction_type'); }
}
