<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReaderConnectivity $connectivity
 * @property-read string $created_at
 * @property-read ?string $device_id
 * @property-read bool $is_simulated
 * @property-read string $location_id
 * @property-read array<array-key, string> $metadata
 * @property-read ?string $model
 * @property-read string $name
 * @property-read string $reader_id
 * @property-read ?string $serial_number
 * @property-read string $status
 * @property-read string $type
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ReaderUpdatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'connectivity'?: mixed, 'created_at': string, 'device_id'?: string, 'is_simulated': bool, 'location_id': string, 'metadata': mixed, 'model'?: string, 'name': string, 'reader_id': string, 'serial_number'?: string, 'status': string, 'type': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderUpdatedInstalledMerchantsEventDataObject')); }
    /** Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and every five minutes for active live smart readers.
     * @return ?ReaderConnectivity
     */
    public function getConnectivity(): ?ReaderConnectivity { return $this->get('connectivity'); }
    public function hasConnectivity(): bool { return $this->has('connectivity'); }
    /** When the reader was registered. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * @return ?string
     */
    public function getDeviceId(): ?string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * @return bool
     */
    public function getIsSimulated(): bool { return $this->get('is_simulated'); }
    public function hasIsSimulated(): bool { return $this->has('is_simulated'); }
    /** The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The smart reader's model, read from the reader at registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * @return ?string
     */
    public function getModel(): ?string { return $this->get('model'); }
    public function hasModel(): bool { return $this->has('model'); }
    /** Your label for the reader. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for the reader.
     * @return string
     */
    public function getReaderId(): string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** The smart reader's serial number, read from the reader at registration. Smart readers only.
     * @return ?string
     */
    public function getSerialNumber(): ?string { return $this->get('serial_number'); }
    public function hasSerialNumber(): bool { return $this->has('serial_number'); }
    /** Whether the reader can take payments. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the reader last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
