<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': string, 'source': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'transaction_type': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_gift_card_transaction_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': string, 'source': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'transaction_type': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_gift_card_transaction_created_installed_merchantsInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see GiftCardTransactionInput}. Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions. Shape $.object.amount_money (Required): {@see SignedMoneyInput}. Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.balance_after_money (Required): {@see MoneyValueInput}. The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.balance_before_money (Required): {@see MoneyValueInput}. The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.cash_out_reference (Required): string or null. Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: 255. Shape $.object.gift_card_id (Required): string. Gift card whose balance this transaction changed. Shape $.object.gift_card_transaction_id (Required): string. Stable identifier of the transaction. Shape $.object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. Shape $.object.merchant_sequence (Required): integer string. Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.order_id (Optional): string. Order this transaction belongs to, when there is one. Shape $.object.posted_at (Required): string. When the transaction was posted to the card. Format: date-time. Shape $.object.reason (Required): string or null. Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Value enum: "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity", "balance_accidentally_increased", "customer_request", null. Shape $.object.sequence (Required): integer string. Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $.object.source (Required): {@see ResourceReferenceInput} or null. The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. null when the cause has no public resource. Shape $.object.source.anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. Shape $.object.source.anyOf[2] (Value): null. Shape $.object.transaction_type (Required): string. Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Value enum: "load", "import", "redeem", "refund", "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted", "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     * @return array{'object': array{'amount_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_after_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_before_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'cash_out_reference': string|null, 'gift_card_id': string, 'gift_card_transaction_id': string, 'idempotency_key': string|null, 'merchant_sequence': string, 'order_id'?: string, 'posted_at': string|\DateTimeInterface, 'reason': string|null, 'sequence': string, 'source': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'transaction_type': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "gift_card_transaction.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): Alternative shapes (see declared variants) and object. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
