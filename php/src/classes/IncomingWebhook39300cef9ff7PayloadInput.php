<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'available_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_id': string, 'currency': string, 'held_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'observed_at': string|\DateTimeInterface, 'payouts_enabled': bool, 'pending_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'pending_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'reserve_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook39300cef9ff7PayloadInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'available_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_id': string, 'currency': string, 'held_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'observed_at': string|\DateTimeInterface, 'payouts_enabled': bool, 'pending_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'pending_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'reserve_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook39300cef9ff7PayloadInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see BalanceInput}. Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. Shape $.object.available_by_source_type (Optional): Map of {@see SignedMoneyInput}. Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. Shape $.object.available_by_source_type.* (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.available_money (Required): {@see SignedMoneyInput}. Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.balance_id (Required): string. Stable identifier of this currency's balance. Shape $.object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". Shape $.object.held_money (Required): {@see MoneyValueInput}. Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.merchant_id (Required): string. Merchant whose balance this is. Shape $.object.observed_at (Required): string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: date-time. Shape $.object.payouts_enabled (Required): boolean. Whether your account can receive payouts. While it is false, payments can still succeed, and their funds wait in your balance. Shape $.object.pending_by_source_type (Optional): Map of {@see SignedMoneyInput}. Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. Shape $.object.pending_by_source_type.* (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.pending_money (Required): {@see SignedMoneyInput}. Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.reserve_money (Required): {@see MoneyValueInput}. Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array{'object': array{'available_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'available_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_id': string, 'currency': string, 'held_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'observed_at': string|\DateTimeInterface, 'payouts_enabled': bool, 'pending_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'pending_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'reserve_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "balance.updated".
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
