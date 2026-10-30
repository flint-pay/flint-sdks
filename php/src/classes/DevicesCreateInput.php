<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: mixed, 'name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DevicesCreateInput extends Model {
    /** @param array{'body': array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: mixed, 'name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DevicesCreateInput')); }
    /** The request body for: Create device. Example: {"hardware_fingerprint":"ios-device-uuid-123","location_id":"loc_01KEZF7C00G0VBJJ8VMFCQ5YVG","metadata":{"register":"front_counter"},"name":"Front Counter iPad"}.
     * @return array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: mixed, 'name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
