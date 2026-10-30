<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $device_id
 * @property-read int $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class DevicesDeleteInput extends Model {
    /** @param array{'device_id': string, 'expected_version'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DevicesDeleteInput')); }
    /** Flint device ID. Example: "dev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Optional device version last read by the caller. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
