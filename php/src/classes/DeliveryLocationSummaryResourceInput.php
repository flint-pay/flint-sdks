<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $instructions
 * @property-read string $location_id
 * @property-read string $name
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryLocationSummaryResourceInput extends Model {
    /** @param array{'address'?: DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass, 'instructions'?: string, 'location_id': string, 'name': string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSummaryResourceInput')); }
    /** @return DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
