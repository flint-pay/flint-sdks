<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'active_payment_attempt_count': int|null, 'created_at': string|\DateTimeInterface, 'custom_domain_id': string, 'dns_records': list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass>, 'hostname': string, 'last_checked_at': string|\DateTimeInterface|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|\DateTimeInterface|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
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
final class CustomDomainArchivedEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'active_payment_attempt_count': int|null, 'created_at': string|\DateTimeInterface, 'custom_domain_id': string, 'dns_records': list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass>, 'hostname': string, 'last_checked_at': string|\DateTimeInterface|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|\DateTimeInterface|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainArchivedEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.active_payment_attempt_count (Required): integer or null. Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. Format: int64. object.created_at (Required): string. When this domain resource was created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.custom_domain_id (Required): string. Flint custom domain ID. Example: "cdom_01KEZF7C00483JTTKHZVFQHKS8". object.dns_records (Required): Array of {@see CustomDomainDNSRecordInput}. DNS records to add for setup or verification. For an archived hostname, records that can be deleted. object.dns_records[] (Value): {@see CustomDomainDNSRecordInput}. A DNS record for configuring or verifying a custom hostname. object.hostname (Required): string. Configured hostname, normalized to lowercase without a trailing dot. object.last_checked_at (Required): string or null. When the domain was last checked, in RFC3339 format; `null` when no check time is available. Format: date-time. Example: "2026-08-02T16:00:00Z". object.payment_method_domain_id (Required): string or null. Payment method domain associated with this hostname. `null` when none is reported. Example: "pmdom_01KEZF7C001WQCSRGH9GWR6628". object.redirect_expires_at (Required): string or null. End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Current setup and availability state of the hostname. Archived domains retain their resource identity. Value enum: "provisioning", "active", "attention_required", "inactive", "archived". object.status_reason (Required): string or null. Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Value enum: "dns_record_missing", "dns_record_mismatch", "ownership_record_missing", "ownership_record_mismatch", "caa_record_blocks_certificate", "proxied_by_another_provider", "certificate_pending", "custom_domains_inactive", "other", null. object.type (Required): string. Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum: "checkout", "customer_account". object.updated_at (Required): string. When this domain resource was last updated, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'active_payment_attempt_count': int|null, 'created_at': string|\DateTimeInterface, 'custom_domain_id': string, 'dns_records': list<CustomDomainDNSRecordInput|array<array-key, mixed>|\stdClass>, 'hostname': string, 'last_checked_at': string|\DateTimeInterface|null, 'payment_method_domain_id': string|null, 'redirect_expires_at': string|\DateTimeInterface|null, 'status': string, 'status_reason': string|null, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "custom_domain.archived".
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
