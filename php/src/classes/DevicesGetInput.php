<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $device_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DevicesGetInput extends Model {
    /** @param array{'device_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DevicesGetInput')); }
    /** Flint device ID. Example: "dev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
}
