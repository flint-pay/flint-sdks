<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active_payment_intent_id
 * @property-read ReaderConnectivityInput|array<array-key, mixed>|\stdClass $connectivity
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $device_id
 * @property-read bool $is_simulated
 * @property-read string $location_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $model
 * @property-read string $name
 * @property-read string $reader_id
 * @property-read string $serial_number
 * @property-read string $status
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReaderInput extends Model {
    /** @param array{'active_payment_intent_id'?: string, 'connectivity'?: ReaderConnectivityInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'device_id'?: string, 'is_simulated': bool, 'location_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'model'?: string, 'name': string, 'reader_id': string, 'serial_number'?: string, 'status': string, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderInput')); }
    /** The payment intent presented on the reader now. Omitted while the reader is idle. It follows the payment, so it doesn't advance the reader's `version` or send a reader event. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When active_payment_intent_id is omitted; use hasActivePaymentIntentId() or valueOrDefault().
     */
    public function getActivePaymentIntentId(): string { return $this->get('active_payment_intent_id'); }
    public function hasActivePaymentIntentId(): bool { return $this->has('active_payment_intent_id'); }
    /** Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers.
     * @return ReaderConnectivityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When connectivity is omitted; use hasConnectivity() or valueOrDefault().
     */
    public function getConnectivity(): mixed { return $this->get('connectivity'); }
    public function hasConnectivity(): bool { return $this->has('connectivity'); }
    /** When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * @return bool
     * @throws SdkError When is_simulated is omitted; use hasIsSimulated() or valueOrDefault().
     */
    public function getIsSimulated(): bool { return $this->get('is_simulated'); }
    public function hasIsSimulated(): bool { return $this->has('is_simulated'); }
    /** The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The smart reader's model, read from the reader at registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * @return string
     * @throws SdkError When model is omitted; use hasModel() or valueOrDefault().
     */
    public function getModel(): string { return $this->get('model'); }
    public function hasModel(): bool { return $this->has('model'); }
    /** Your label for the reader. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * @return string
     * @throws SdkError When reader_id is omitted; use hasReaderId() or valueOrDefault().
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** The smart reader's serial number, read from the reader at registration. Smart readers only.
     * @return string
     * @throws SdkError When serial_number is omitted; use hasSerialNumber() or valueOrDefault().
     */
    public function getSerialNumber(): string { return $this->get('serial_number'); }
    public function hasSerialNumber(): bool { return $this->has('serial_number'); }
    /** Whether the reader can take payments. Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
