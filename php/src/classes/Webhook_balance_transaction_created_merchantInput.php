<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_balance_transaction_created_merchantInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_balance_transaction_created_merchantInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see BalanceTransactionInput}. A change to the merchant's balance. Shape $.object.amount_money (Required): {@see SignedMoneyInput}. Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.available_at (Optional): string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: date-time. Shape $.object.balance_transaction_id (Required): string. Stable identifier of this balance transaction. Shape $.object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". Shape $.object.description (Optional): string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. Shape $.object.fee_money (Required): {@see SignedMoneyInput}. Flint fee for this balance movement, never a provider cost passed through. Charges are positive; returned fees are negative. A payment of 5000 with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.merchant_id (Required): string. Merchant whose balance this transaction moved. Shape $.object.net_money (Required): {@see SignedMoneyInput}. Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.occurred_at (Required): string. When the balance movement happened. Format: date-time. Shape $.object.order (Optional): {@see ExpandedOrderSummaryInput} or null. The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Shape $.object.order.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.object.order.anyOf[2] (Value): null. Shape $.object.order_id (Optional): string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. Shape $.object.payout_id (Optional): string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. Shape $.object.related_balance_transaction_ids (Required): Array of string. Earlier balance transactions this one is linked to, such as the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. Shape $.object.related_balance_transaction_ids[] (Value): string. Shape $.object.related_resource (Optional): {@see ResourceReferenceInput}. The Flint resource behind this movement: a payment_intent, refund, dispute, payout, payout_destination, or merchant_billing_invoice. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`. Shape $.object.status (Required): string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Value enum: "pending", "available". Shape $.object.type (Required): string. Kind of balance movement. Unmapped movement types are returned as other. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "other".
     * @return array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "balance_transaction.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
