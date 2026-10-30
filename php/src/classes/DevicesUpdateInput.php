<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $device_id
 * @property-read array{'expected_version'?: int, 'location_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DevicesUpdateInput extends Model {
    /** @param array{'device_id': string, 'body': array{'expected_version'?: int, 'location_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DevicesUpdateInput')); }
    /** Flint device ID. Example: "dev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** The request body for: Update device. Example: {"expected_version":1,"metadata":{"floor":"1","register":"front_counter"},"name":"Front Counter iPad 2"}.
     * @return array{'expected_version'?: int, 'location_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
