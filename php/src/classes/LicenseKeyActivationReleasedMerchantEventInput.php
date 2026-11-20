<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'created_at': string|\DateTimeInterface, 'fingerprint': string|null, 'last_validated_at': string|\DateTimeInterface|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|\DateTimeInterface|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string, ...}|object, 'previous_attributes'?: array{'created_at'?: string|\DateTimeInterface|null, 'fingerprint'?: string|null, 'last_validated_at'?: string|\DateTimeInterface|null, 'license_key_activation_id'?: string|null, 'license_key_id'?: string|null, 'name'?: string|null, 'product_id'?: string|null, 'released_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'variant_id'?: string|null, ...}|object}|object $data
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
final class LicenseKeyActivationReleasedMerchantEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'created_at': string|\DateTimeInterface, 'fingerprint': string|null, 'last_validated_at': string|\DateTimeInterface|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|\DateTimeInterface|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string, ...}|object, 'previous_attributes'?: array{'created_at'?: string|\DateTimeInterface|null, 'fingerprint'?: string|null, 'last_validated_at'?: string|\DateTimeInterface|null, 'license_key_activation_id'?: string|null, 'license_key_id'?: string|null, 'name'?: string|null, 'product_id'?: string|null, 'released_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'variant_id'?: string|null, ...}|object}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationReleasedMerchantEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. actor (Optional): {@see ReturnActorInput}. Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.created_at (Required): string. When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z". object.fingerprint (Required): string or null. The identifier supplied by the app. Null when absent or erased. object.last_validated_at (Required): string or null. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z". object.license_key_activation_id (Required): string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". object.license_key_id (Required): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". object.name (Required): string or null. The name supplied by the app. Null when erased. object.product_id (Required): string. The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.released_at (Required): string or null. When the activation was released. Null when it is active. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. The activation state. Value enum: "active", "released". object.supported_actions (Required): Array of string. Actions available for this activation. [] enum: "release". object.supported_actions[] (Value): string.  Value enum: "release". object.variant_id (Required): string. The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. previous_attributes.created_at (Optional): string or null. When the activation was created. previous_attributes.created_at.anyOf[1] (Value): string. When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.fingerprint (Optional): string or null. The identifier supplied by the app. Null when absent or erased. previous_attributes.fingerprint.anyOf[1] (Value): string. The identifier supplied by the app. Null when absent or erased. previous_attributes.fingerprint.anyOf[2] (Value): null. previous_attributes.last_validated_at (Optional): string or null. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. previous_attributes.last_validated_at.anyOf[1] (Value): string. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.last_validated_at.anyOf[2] (Value): null. previous_attributes.license_key_activation_id (Optional): string or null. The activation ID. previous_attributes.license_key_activation_id.anyOf[1] (Value): string. The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ". previous_attributes.license_key_activation_id.anyOf[2] (Value): null. previous_attributes.license_key_id (Optional): string or null. The activated license key ID. previous_attributes.license_key_id.anyOf[1] (Value): string. The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN". previous_attributes.license_key_id.anyOf[2] (Value): null. previous_attributes.name (Optional): string or null. The name supplied by the app. Null when erased. previous_attributes.name.anyOf[1] (Value): string. The name supplied by the app. Null when erased. previous_attributes.name.anyOf[2] (Value): null. previous_attributes.product_id (Optional): string or null. The product this installation can use. previous_attributes.product_id.anyOf[1] (Value): string. The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2] (Value): null. previous_attributes.released_at (Optional): string or null. When the activation was released. Null when it is active. previous_attributes.released_at.anyOf[1] (Value): string. When the activation was released. Null when it is active. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.released_at.anyOf[2] (Value): null. previous_attributes.status (Optional): string or null. The activation state. Value enum: "active", "released". previous_attributes.status.anyOf[1] (Value): string. The activation state. Value enum: "active", "released". previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions (Optional): Array of string or null. Actions available for this activation. [] enum: "release". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions available for this activation. [] enum: "release". previous_attributes.supported_actions.anyOf[1][] (Value): string.  Value enum: "release". previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.variant_id (Optional): string or null. The variant this installation can use. previous_attributes.variant_id.anyOf[1] (Value): string. The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes.variant_id.anyOf[2] (Value): null.
     * @return array{'actor'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'object': array{'created_at': string|\DateTimeInterface, 'fingerprint': string|null, 'last_validated_at': string|\DateTimeInterface|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|\DateTimeInterface|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string, ...}|object, 'previous_attributes'?: array{'created_at'?: string|\DateTimeInterface|null, 'fingerprint'?: string|null, 'last_validated_at'?: string|\DateTimeInterface|null, 'license_key_activation_id'?: string|null, 'license_key_id'?: string|null, 'name'?: string|null, 'product_id'?: string|null, 'released_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'variant_id'?: string|null, ...}|object}|object
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
    /** The resource change or condition this event announces. Value enum: "license_key_activation.released".
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
