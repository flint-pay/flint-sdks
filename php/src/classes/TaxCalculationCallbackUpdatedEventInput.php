<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': TaxCalculationCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class TaxCalculationCallbackUpdatedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': TaxCalculationCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackUpdatedEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.circuit_failure_count (Required): integer. Consecutive failed requests to the endpoint for the current revision. A valid response resets it. minimum: 0. object.circuit_state (Required): string. Whether Flint is calling the endpoint, for the current revision. - `closed`: Flint calls the endpoint. - `open`: Flint stopped calling the endpoint after 30 consecutive failed requests. - `half_open`: 30 seconds after opening, the next request is a probe: a valid response closes the circuit, and a failure opens it again. Value enum: "closed", "open", "half_open". object.configuration (Required): {@see TaxCalculationCallbackConfigurationInput}. The endpoint URL and request limits. Settings for a tax calculation callback: the endpoint `url` Flint calls, request timeout, request and response size limits, and redirect policy. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.current_tax_calculation_callback_revision_id (Required): string. ID of the callback's current revision, beginning with `tcbr_`. It changes whenever `configuration` or `signing_methods` changes, and each revision has its own circuit. Example: "tcbr_01KEZF7C00V2GHWCXVV2NCWX29". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.key_id (Optional): string. ID of the HMAC signing key that goes with `secret`. Returned only in the response that returns `secret`, so it is omitted on reads, lists, and updates, and for a JWT-only callback. Example: "cbkey_00112233445566778899aabb". object.name (Required): string. Your label for the callback. object.secret (Optional): string. Initial HMAC shared secret, returned once when hmac is included in signing_methods. object.signing_methods (Required): Array of string. How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's public keys, `hmac` for a shared secret, or both. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string. Whether the callback can be selected in `tax.calculation_callback_id`. - `inactive`: Not selectable in settings. New callbacks start here. Connection checks and test deliveries still run. - `active`: Can be selected in `tax.calculation_callback_id`. - `archived`: Retired with `DELETE`. Still readable by ID, but it can't be changed, activated, or tested again. Value enum: "inactive", "active", "archived". object.tax_calculation_callback_id (Required): string. Unique identifier for this tax calculation callback, prefixed `tcb_`. Example: "tcb_01KEZF7C00N7SER74Y2E6D1ZGT". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Advances on every write. Send it as `expected_version` when you update `configuration` or `signing_methods`. Format: uint64. minimum: 0. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': TaxCalculationCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_tax_calculation_callback_revision_id': string, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'tax_calculation_callback_id': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "tax_calculation_callback.updated".
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
