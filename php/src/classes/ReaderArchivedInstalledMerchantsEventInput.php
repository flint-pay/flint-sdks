<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'connectivity'?: ReaderConnectivityInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'device_id'?: string, 'is_simulated': bool, 'location_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'model'?: string, 'name': string, 'reader_id': string, 'serial_number'?: string, 'status': string, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderArchivedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'connectivity'?: ReaderConnectivityInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'device_id'?: string, 'is_simulated': bool, 'location_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'model'?: string, 'name': string, 'reader_id': string, 'serial_number'?: string, 'status': string, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderArchivedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object and {@see WebhookReaderInput}. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `active_payment_intent_id`. object.connectivity (Optional): {@see ReaderConnectivityInput}. Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers. object.created_at (Required): string. When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z". object.device_id (Optional): string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". object.is_simulated (Required): boolean. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. object.location_id (Required): string. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Required): {@see MetadataMapInput}. Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. object.model (Optional): string. The smart reader's model, read from the reader at registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". object.name (Required): string. Your label for the reader. minLength: 1. maxLength: 255. object.reader_id (Required): string. Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". object.serial_number (Optional): string. The smart reader's serial number, read from the reader at registration. Smart readers only. object.status (Required): string. Whether the reader can take payments. Value enum: "active", "archived". object.type (Required): string. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". object.updated_at (Required): string. When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'connectivity'?: ReaderConnectivityInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'device_id'?: string, 'is_simulated': bool, 'location_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'model'?: string, 'name': string, 'reader_id': string, 'serial_number'?: string, 'status': string, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "reader.archived".
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
