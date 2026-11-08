<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations': array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'version': int, 'weekly_payout_days': list<string>, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class PayoutSettingsUpdatedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations': array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'version': int, 'weekly_payout_days': list<string>, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.blocked_reasons (Required): Array of {@see MoneyMovementBlockedReasonInput}. Why payouts can't run. Empty when nothing blocks them. object.blocked_reasons[] (Value): {@see MoneyMovementBlockedReasonInput}. Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it. object.created_at (Required): string or null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time. Example: "2026-08-02T16:00:00Z". object.default_payout_destinations (Required): Map of string. Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. object.default_payout_destinations.* (Value): string. object.delay_days (Required): integer. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: int32. object.delay_days_override (Optional): integer. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: int32. object.interval (Required): string. Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other". object.merchant_id (Required): string. Merchant these settings belong to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.minimum_balance_currency_options (Optional): Map of {@see MoneyValueInput}. Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. object.minimum_balance_currency_options.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.monthly_payout_days (Required): Array of integer. Days of the month, 1 through 31, on which monthly payouts are sent. object.monthly_payout_days[] (Value): integer. Format: int32. object.next_actions (Required): Array of {@see NextActionInput}. Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. object.next_actions[] (Value): {@see NextActionInput}. A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id. object.payout_settings_id (Required): string. Stable identifier of your payout settings. Example: "pset_01KEZF7C0027X093301CQ36WSZ". object.statement_descriptor (Optional): string. Text shown on your bank statement for payouts. Absent when none is set. object.status (Required): string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum: "enabled", "disabled", "blocked", "pending". object.updated_at (Required): string or null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. object.weekly_payout_days (Required): Array of string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". object.weekly_payout_days[] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations': array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'version': int, 'weekly_payout_days': list<string>, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "payout_settings.updated".
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
