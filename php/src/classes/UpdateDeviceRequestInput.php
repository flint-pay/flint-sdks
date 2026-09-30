<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateDeviceRequestInput extends Model {
    /** @param array{'location_id'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateDeviceRequestInput')); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
