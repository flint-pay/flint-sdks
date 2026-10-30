<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptVerifiedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptVerifiedInstalledMerchantsEventInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object and {@see ReturnReceiptInput}. A record of returned items arriving at a location. object.correction_reason (Optional): string.  Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". object.correction_reason_message (Optional): string. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. object.external_actor_id (Optional): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. object.generated_dispositions (Required): Array of {@see ReturnDispositionInput}. object.generated_dispositions[] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled. object.line_items (Required): Array of {@see ReturnReceiptLineItemInput}. object.line_items[] (Value): {@see ReturnReceiptLineItemInput}. A returned item recorded as received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time. object.receiving_location_id (Required): string. object.return_id (Required): string. object.return_receipt_id (Required): string. object.shipment_id (Optional): string. object.source_system (Required): {@see ReturnSourceSystemInput} or null. object.source_system.anyOf[1] (Value): {@see ReturnSourceSystemInput}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.  Value enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp. Format: date-time. object.superseded_by_return_receipt_id (Optional): string. object.supersedes_return_receipt_id (Optional): string. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. object.version (Required): integer. Format: int64. minimum: 1.
     * @return array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "return_receipt.verified".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
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
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
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
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
