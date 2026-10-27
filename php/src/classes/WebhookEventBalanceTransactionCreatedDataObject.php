<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read ?string $available_at
 * @property-read string $balance_transaction_id
 * @property-read string $currency
 * @property-read ?string $description
 * @property-read SignedMoney $fee_money
 * @property-read string $merchant_id
 * @property-read SignedMoney $net_money
 * @property-read string $occurred_at
 * @property-read ExpandedOrderSummary|null $order
 * @property-read ?string $order_id
 * @property-read ?string $payout_id
 * @property-read list<string> $related_balance_transaction_ids
 * @property-read ?ResourceReference $related_resource
 * @property-read string $status
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventBalanceTransactionCreatedDataObject extends Model {
    /** @param array{'amount_money': mixed, 'available_at'?: string, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': mixed, 'merchant_id': string, 'net_money': mixed, 'occurred_at': string, 'order'?: mixed, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: mixed, 'status': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionCreatedDataObject')); }
    /** Shape $ (Value): {@see SignedMoney}. Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: date-time.
     * @return ?string
     */
    public function getAvailableAt(): ?string { return $this->get('available_at'); }
    public function hasAvailableAt(): bool { return $this->has('available_at'); }
    /** Shape $ (Value): string. Stable identifier of this balance transaction.
     * @return string
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see SignedMoney}. Flint fee for this balance movement, never a provider cost passed through. Charges are positive; returned fees are negative. A payment of 5000 with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getFeeMoney(): SignedMoney { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** Shape $ (Value): string. Merchant whose balance this transaction moved.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see SignedMoney}. Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getNetMoney(): SignedMoney { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** Shape $ (Value): string. When the balance movement happened. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): {@see ExpandedOrderSummary} or null. The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries.
     * @return ?string
     */
    public function getPayoutId(): ?string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Shape $ (Value): Array of string. Earlier balance transactions this one is linked to, such as the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getRelatedBalanceTransactionIds(): array { return $this->get('related_balance_transaction_ids'); }
    public function hasRelatedBalanceTransactionIds(): bool { return $this->has('related_balance_transaction_ids'); }
    /** Shape $ (Value): {@see ResourceReference}. The Flint resource behind this movement: a payment_intent, refund, dispute, payout, payout_destination, or merchant_billing_invoice. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`.
     * @return ?ResourceReference
     */
    public function getRelatedResource(): ?ResourceReference { return $this->get('related_resource'); }
    public function hasRelatedResource(): bool { return $this->has('related_resource'); }
    /** Shape $ (Value): string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Value enum: "pending", "available".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Kind of balance movement. Unmapped movement types are returned as other. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "other".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
