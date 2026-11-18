<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyPreviousAttributes|null $amount_money
 * @property-read string|null $available_at
 * @property-read string|null $balance_transaction_id
 * @property-read string|null $currency
 * @property-read string|null $description
 * @property-read list<BalanceTransactionFeeDetailPreviousAttributes>|null $fee_details
 * @property-read SignedMoneyPreviousAttributes|null $fee_money
 * @property-read string|null $merchant_id
 * @property-read SignedMoneyPreviousAttributes|null $net_money
 * @property-read string|null $occurred_at
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $payout_id
 * @property-read list<string>|null $related_balance_transaction_ids
 * @property-read ResourceReferencePreviousAttributes|null $related_resource
 * @property-read string|null $status
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'available_at'?: mixed, 'balance_transaction_id'?: mixed, 'currency'?: mixed, 'description'?: mixed, 'fee_details'?: mixed, 'fee_money'?: mixed, 'merchant_id'?: mixed, 'net_money'?: mixed, 'occurred_at'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'payout_id'?: mixed, 'related_balance_transaction_ids'?: mixed, 'related_resource'?: mixed, 'status'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionUpdatedMerchantEventDataPreviousAttributes')); }
    /** Signed gross amount of this balance movement, before any fee. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributes|null
     */
    public function getAmountMoney(): SignedMoneyPreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. anyOf[1] (Value): string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAvailableAt(): string|null { return $this->get('available_at'); }
    public function hasAvailableAt(): bool { return $this->has('available_at'); }
    /** Stable identifier of this balance transaction. anyOf[1] (Value): string. Stable identifier of this balance transaction. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBalanceTransactionId(): string|null { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Short text describing the movement, from Flint or your processor. Use it for display, not for matching. anyOf[1] (Value): string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted. anyOf[1] (Value): Array of {@see BalanceTransactionFeeDetailPreviousAttributes}. Fee sources on a payment charged a platform fee. Amounts are zero or positive and sum to the magnitude of fee_money. These are the original charges; later refunds do not reduce them. Absent on movements without a platform fee or without a payment Flint accepted. anyOf[1][] (Value): {@see BalanceTransactionFeeDetailPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BalanceTransactionFeeDetailPreviousAttributes>|null
     */
    public function getFeeDetails(): array|null { return $this->get('fee_details'); }
    public function hasFeeDetails(): bool { return $this->has('fee_details'); }
    /** Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributes|null
     */
    public function getFeeMoney(): SignedMoneyPreviousAttributes|null { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** Merchant whose balance this transaction moved. anyOf[1] (Value): string. Merchant whose balance this transaction moved. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributes|null
     */
    public function getNetMoney(): SignedMoneyPreviousAttributes|null { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** When the balance movement happened. anyOf[1] (Value): string. When the balance movement happened. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOccurredAt(): string|null { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. anyOf[1] (Value): string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. anyOf[1] (Value): string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutId(): string|null { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. anyOf[1] (Value): Array of string. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRelatedBalanceTransactionIds(): array|null { return $this->get('related_balance_transaction_ids'); }
    public function hasRelatedBalanceTransactionIds(): bool { return $this->has('related_balance_transaction_ids'); }
    /** The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return ResourceReferencePreviousAttributes|null
     */
    public function getRelatedResource(): ResourceReferencePreviousAttributes|null { return $this->get('related_resource'); }
    public function hasRelatedResource(): bool { return $this->has('related_resource'); }
    /** Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Value enum: "pending", "available". anyOf[1] (Value): string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Value enum: "pending", "available". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Kind of balance movement. Unmapped movement types are returned as other. Value enum: "inbound_payout", "inbound_payout_failure", "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". anyOf[1] (Value): string. Kind of balance movement. Unmapped movement types are returned as other. Value enum: "inbound_payout", "inbound_payout_failure", "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
