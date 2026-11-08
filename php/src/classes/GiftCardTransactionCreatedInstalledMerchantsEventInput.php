<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': int, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': int, 'source': array{'resource_id': string, 'resource_type': string}|object|null, 'transaction_type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardTransactionCreatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': int, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': int, 'source': array{'resource_id': string, 'resource_type': string}|object|null, 'transaction_type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionCreatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.amount_money (Required): {@see SignedMoneyInput}. Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. object.balance_after_money (Required): {@see MoneyValueInput}. The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.balance_before_money (Required): {@see MoneyValueInput}. The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.cash_out_reference (Required): string or null. Your reference for the cash you paid the buyer outside Flint. `null` when the transaction is not a cash_out. maxLength: 255. object.gift_card_id (Required): string. Gift card whose balance this transaction changed. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_transaction_id (Required): string. Stable identifier of the transaction. Example: "gct_01KEZF7C006Q1VC3M2DXJ6T936". object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. object.merchant_sequence (Required): integer. Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: int64. object.order_id (Optional): string. Order this transaction belongs to, when there is one. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.posted_at (Required): string. When the transaction was posted to the card. Format: date-time. Example: "2026-08-02T16:00:00Z". object.reason (Required): string or null. Your adjustment reason on adjustment transactions, and customer_request on cash_out. `null` when the transaction is any other type. Value enum: "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity", "balance_accidentally_increased", "customer_request", null. object.sequence (Required): integer. Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: int64. object.source (Required): {@see ResourceReferenceInput} or null. The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource. object.source.anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. object.source.anyOf[2] (Value): null. object.transaction_type (Required): string. Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': int, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': int, 'source': array{'resource_id': string, 'resource_type': string}|object|null, 'transaction_type': string, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "gift_card_transaction.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the partner app that owns the receiving endpoint. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. environment_grant_id (Required): string. The grant authorizing delivery from this merchant environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required): string. Whether the installed merchant event came from live mode or a sandbox. Value enum: "test", "live". partner_app_install_id (Required): string. The install connecting the merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id (Optional): string. The sandbox the event came from, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
