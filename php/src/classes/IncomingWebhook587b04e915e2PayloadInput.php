<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'weekly_payout_days': list<string>, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class IncomingWebhook587b04e915e2PayloadInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'weekly_payout_days': list<string>, ...}|object}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IncomingWebhook587b04e915e2PayloadInput')); }
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
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see PayoutSettingsInput}. The merchant's payout schedule and preferences. Shape $.object.blocked_reasons (Required): Array of {@see MoneyMovementBlockedReasonInput}. Shape $.object.blocked_reasons[] (Value): {@see MoneyMovementBlockedReasonInput}. Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it. Shape $.object.created_at (Required): string or null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time. Shape $.object.default_payout_destinations (Optional): Map of string. Shape $.object.default_payout_destinations.* (Value): string. Shape $.object.delay_days (Required): integer. Format: int32. Shape $.object.delay_days_override (Optional): integer. Format: int32. Shape $.object.interval (Required): string. Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other". Shape $.object.merchant_id (Required): string. Shape $.object.minimum_balance_by_currency (Optional): Map of {@see MoneyValueInput}. Shape $.object.minimum_balance_by_currency.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.monthly_payout_days (Required): Array of integer. Shape $.object.monthly_payout_days[] (Value): integer. Format: int32. Shape $.object.next_actions (Required): Array of {@see NextActionInput}. Shape $.object.next_actions[] (Value): {@see NextActionInput}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs. Shape $.object.payout_settings_id (Required): string. Shape $.object.statement_descriptor (Optional): string. Shape $.object.status (Required): string.  Value enum: "enabled", "disabled", "blocked", "pending". Shape $.object.updated_at (Required): string or null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's update time when supplied, otherwise null. Format: date-time. Shape $.object.weekly_payout_days (Required): Array of string. Days of the week on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". Shape $.object.weekly_payout_days[] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * @return array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'weekly_payout_days': list<string>, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "payout_settings.updated".
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
