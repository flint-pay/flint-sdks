<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAddressResource $address
 * @property-read DeliveryCoordinateRequest $coordinate
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryQuoteBuyerLocationCoordinate extends Model {
    /** @param array{'address'?: mixed, 'coordinate': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteBuyerLocationCoordinate')); }
    /** @return DeliveryAddressResource
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): DeliveryAddressResource { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return DeliveryCoordinateRequest
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): DeliveryCoordinateRequest { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
