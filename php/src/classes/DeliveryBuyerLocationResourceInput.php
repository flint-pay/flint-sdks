<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass $address
 * @property-read DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBuyerLocationResourceInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBuyerLocationResourceInput')); }
    /** @return DeliveryAddressResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
