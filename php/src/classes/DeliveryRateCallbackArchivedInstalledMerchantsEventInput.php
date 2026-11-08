<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'delivery_revocation_id': string|null, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateCallbackArchivedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'delivery_revocation_id': string|null, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateCallbackArchivedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.circuit_failure_count (Required): integer. Consecutive callback failures since the last successful response. minimum: 0. object.circuit_state (Required): string.  Value enum: "closed", "open", "half_open". object.configuration (Required): {@see DeliveryRateCallbackConfigurationInput}. Settings for a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and response size limits, redirect policy, and whether previews can use it. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.current_delivery_rate_callback_revision_id (Required): string. Example: "dcbr_01KEZF7C003QAPFXXMCHC59T5J". object.delivery_rate_callback_id (Required): string. Unique identifier for this delivery rate callback, prefixed `dcb_`. Example: "dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1". object.delivery_revocation_id (Required): string or null. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: "drev_01KEZF7C007Q141XJ28YAAC87B". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.key_id (Optional): string. Initial HMAC signing key ID. Returned only by create when hmac is included. Example: "cbkey_00112233445566778899aabb". object.name (Required): string. object.secret (Optional): string. Initial HMAC shared secret. Returned only by the create response when signing_methods includes hmac. object.signing_methods (Required): Array of string. Signing methods enabled for callback HTTP requests. jwt sends Authorization: Bearer with a Flint-signed token whose aud is this delivery_rate_callback_id; hmac sends webhook-signature and signing key IDs. minItems: 1. uniqueItems: true. Example: ["jwt"]. [] enum: "jwt", "hmac". object.signing_methods[] (Value): string. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". object.status (Required): string.  Value enum: "active", "inactive", "archived". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'circuit_failure_count': int, 'circuit_state': string, 'configuration': DeliveryRateCallbackConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_rate_callback_revision_id': string, 'delivery_rate_callback_id': string, 'delivery_revocation_id': string|null, 'external_reference_id'?: string, 'key_id'?: string, 'name': string, 'secret'?: string, 'signing_methods': list<string>, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "delivery_rate_callback.archived".
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
