<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReaderConnectivity|null $connectivity
 * @property-read string|null $created_at
 * @property-read string|null $device_id
 * @property-read bool|null $is_simulated
 * @property-read string|null $location_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $model
 * @property-read string|null $name
 * @property-read string|null $reader_id
 * @property-read string|null $serial_number
 * @property-read string|null $status
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ReaderUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'connectivity'?: mixed, 'created_at'?: mixed, 'device_id'?: mixed, 'is_simulated'?: mixed, 'location_id'?: mixed, 'metadata'?: mixed, 'model'?: mixed, 'name'?: mixed, 'reader_id'?: mixed, 'serial_number'?: mixed, 'status'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReaderUpdatedMerchantEventDataPreviousAttributes')); }
    /** Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. anyOf[1] (Value): {@see ReaderConnectivity}. Smart readers only, and omitted once the reader is archived. Observed reader state: it changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself before it sends a payment. anyOf[2] (Value): null.
     * @return ReaderConnectivity|null
     */
    public function getConnectivity(): ReaderConnectivity|null { return $this->get('connectivity'); }
    public function hasConnectivity(): bool { return $this->has('connectivity'); }
    /** When the reader was registered. anyOf[1] (Value): string. When the reader was registered. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeviceId(): string|null { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsSimulated(): bool|null { return $this->get('is_simulated'); }
    public function hasIsSimulated(): bool { return $this->has('is_simulated'); }
    /** The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. anyOf[1] (Value): string. The location the reader is at. Set at registration and never changed: to move a reader, archive it and register it again. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Your key-value pairs for the reader. anyOf[1] (Value): {@see MetadataMap}. Your key-value pairs for the reader. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The smart reader's model, read from the reader at registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value): string. The smart reader's model, read from the reader at registration. Smart readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModel(): string|null { return $this->get('model'); }
    public function hasModel(): bool { return $this->has('model'); }
    /** Your label for the reader. anyOf[1] (Value): string. Your label for the reader. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for the reader. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReaderId(): string|null { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** The smart reader's serial number, read from the reader at registration. Smart readers only. anyOf[1] (Value): string. The smart reader's serial number, read from the reader at registration. Smart readers only. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSerialNumber(): string|null { return $this->get('serial_number'); }
    public function hasSerialNumber(): bool { return $this->has('serial_number'); }
    /** Whether the reader can take payments. Value enum: "active", "archived". anyOf[1] (Value): string. Whether the reader can take payments. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the reader last changed. anyOf[1] (Value): string. When the reader last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
