<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptVerifiedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptVerifiedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.correction_reason (Optional): string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation", "source_correction", "reconciliation_correction", "other". object.correction_reason_message (Optional): string. Detail about `correction_reason`. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_actor_id (Optional): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842". object.external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". object.generated_dispositions (Required): Array of {@see ReturnDispositionInput}. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@see ReturnDispositionInput}. A decision about how returned merchandise will be handled. object.line_items (Required): Array of {@see ReturnReceiptLineItemInput}. The lines recorded. object.line_items[] (Value): {@see ReturnReceiptLineItemInput}. A returned item recorded as received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique identifier for this return receipt, prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@see ReturnSourceSystemInput} or null. System that recorded the observation. `null` when no source system was recorded. object.source_system.anyOf[1] (Value): {@see ReturnSourceSystemInput}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string. Whether this is the current observation of these units or a correction replaced it. Value enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'external_reference_id'?: string, 'generated_dispositions': list<ReturnDispositionInput|array<array-key, mixed>|\stdClass>, 'line_items': list<ReturnReceiptLineItemInput|array<array-key, mixed>|\stdClass>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'return_id': string, 'return_receipt_id': string, 'shipment_id'?: string, 'source_system': array{'external_source_id'?: string, 'source_system_type': string}|object|null, 'status': string, 'superseded_at'?: string|\DateTimeInterface, 'superseded_by_return_receipt_id'?: string, 'supersedes_return_receipt_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "return_receipt.verified".
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
