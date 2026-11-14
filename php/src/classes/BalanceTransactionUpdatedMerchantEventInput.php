<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionUpdatedMerchantEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.amount_money (Required): {@see SignedMoneyInput}. Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. object.available_at (Optional): string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: date-time. Example: "2026-08-02T16:00:00Z". object.balance_transaction_id (Required): string. Stable identifier of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.description (Optional): string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. object.fee_money (Required): {@see SignedMoneyInput}. Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. object.merchant_id (Required): string. Merchant whose balance this transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.net_money (Required): {@see SignedMoneyInput}. Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. object.occurred_at (Required): string. When the balance movement happened. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional): {@see ExpandedOrderSummaryInput} or null. The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Optional): string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payout_id (Optional): string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.related_balance_transaction_ids (Required): Array of string. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. object.related_balance_transaction_ids[] (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.related_resource (Optional): {@see ResourceReferenceInput}. The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`. object.status (Required): string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Value enum: "pending", "available". object.type (Required): string. Kind of balance movement. Unmapped movement types are returned as other. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection", "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal", "payment_split", "payment_split_reversal", "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal", "other". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'available_at'?: string|\DateTimeInterface, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'net_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "balance_transaction.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
