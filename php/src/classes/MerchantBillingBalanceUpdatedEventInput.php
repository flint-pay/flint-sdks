<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string|\DateTimeInterface, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'past_due_at'?: string|\DateTimeInterface, 'past_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payout_hold_at'?: string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array{'available_credit_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'currency'?: string|null, 'merchant_billing_balance_id'?: string|null, 'observed_at'?: string|\DateTimeInterface|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'past_due_at'?: string|\DateTimeInterface|null, 'past_due_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payout_hold_at'?: string|\DateTimeInterface|null, ...}|object}|object $data
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
final class MerchantBillingBalanceUpdatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string|\DateTimeInterface, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'past_due_at'?: string|\DateTimeInterface, 'past_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payout_hold_at'?: string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array{'available_credit_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'currency'?: string|null, 'merchant_billing_balance_id'?: string|null, 'observed_at'?: string|\DateTimeInterface|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'past_due_at'?: string|\DateTimeInterface|null, 'past_due_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payout_hold_at'?: string|\DateTimeInterface|null, ...}|object}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingBalanceUpdatedEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.available_credit_money (Required): {@see MoneyValueInput}. Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.merchant_billing_balance_id (Required): string. Stable identifier for this billing account and currency balance projection. Example: "mbbal_01KEZF7C002TWWZA70R4DRVJC9". object.observed_at (Required): string. RFC3339 timestamp for the balance snapshot. Format: date-time. Example: "2026-08-02T16:00:00Z". object.outstanding_money (Required): {@see MoneyValueInput}. What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.past_due_at (Optional): string. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: date-time. Example: "2026-08-02T16:00:00Z". object.past_due_money (Required): {@see MoneyValueInput}. Amount that is past its due date and still unpaid. Zero when nothing is past due. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.payout_hold_at (Optional): string. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. previous_attributes.available_credit_money (Optional): {@see MoneyValuePreviousAttributesInput} or null. Account credit Flint holds for you that hasn't been applied yet, unsigned. Each application lowers both amounts and records a credit_applied entry. previous_attributes.available_credit_money.anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. previous_attributes.available_credit_money.anyOf[2] (Value): null. previous_attributes.currency (Optional): string or null. ISO 4217 currency code. previous_attributes.currency.anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.merchant_billing_balance_id (Optional): string or null. Stable identifier for this billing account and currency balance projection. previous_attributes.merchant_billing_balance_id.anyOf[1] (Value): string. Stable identifier for this billing account and currency balance projection. Example: "mbbal_01KEZF7C002TWWZA70R4DRVJC9". previous_attributes.merchant_billing_balance_id.anyOf[2] (Value): null. previous_attributes.observed_at (Optional): string or null. RFC3339 timestamp for the balance snapshot. previous_attributes.observed_at.anyOf[1] (Value): string. RFC3339 timestamp for the balance snapshot. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.observed_at.anyOf[2] (Value): null. previous_attributes.outstanding_money (Optional): {@see MoneyValuePreviousAttributesInput} or null. What you owe Flint now, unsigned. Available credit isn't subtracted: credit lowers this amount only when Flint applies it, which records a credit_applied entry. previous_attributes.outstanding_money.anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. previous_attributes.outstanding_money.anyOf[2] (Value): null. previous_attributes.past_due_at (Optional): string or null. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. previous_attributes.past_due_at.anyOf[1] (Value): string. Due date of the oldest unpaid past-due amount, as an RFC 3339 UTC timestamp. Omitted when nothing is past due. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.past_due_at.anyOf[2] (Value): null. previous_attributes.past_due_money (Optional): {@see MoneyValuePreviousAttributesInput} or null. Amount that is past its due date and still unpaid. Zero when nothing is past due. previous_attributes.past_due_money.anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. previous_attributes.past_due_money.anyOf[2] (Value): null. previous_attributes.payout_hold_at (Optional): string or null. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. previous_attributes.payout_hold_at.anyOf[1] (Value): string. Time at which Flint holds payouts if the suspendable past-due amount is still unpaid and totals at least 25 major currency units in this currency (25 USD for USD billing), as an RFC 3339 UTC timestamp. Flint attempts collection from the available balance before holding payouts. The hold can begin later than this while a collection is in progress. Payouts are actually held when `readiness.payouts.status_reason` on the Merchant is `billing_suspended`. Omitted when no hold is scheduled, including when suspendable past-due amounts in this currency are below that floor or the only past-due amounts never hold payouts. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.payout_hold_at.anyOf[2] (Value): null.
     * @return array{'object': array{'available_credit_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currency': string, 'merchant_billing_balance_id': string, 'observed_at': string|\DateTimeInterface, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'past_due_at'?: string|\DateTimeInterface, 'past_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payout_hold_at'?: string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array{'available_credit_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'currency'?: string|null, 'merchant_billing_balance_id'?: string|null, 'observed_at'?: string|\DateTimeInterface|null, 'outstanding_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'past_due_at'?: string|\DateTimeInterface|null, 'past_due_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payout_hold_at'?: string|\DateTimeInterface|null, ...}|object}|object
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
    /** The resource change or condition this event announces. Value enum: "merchant_billing_balance.updated".
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
