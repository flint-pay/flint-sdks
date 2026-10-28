<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBuyerLocationRequestInput extends Model {
    /** @param array{'address': DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'coordinate'?: DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'address'?: DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass, 'coordinate': DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBuyerLocationRequestInput')); }
    /** Shape $ (Value): {@see DeliveryAddressRequestInput}. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present.
     * @return DeliveryAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see DeliveryCoordinateRequestInput}. A latitude and longitude.
     * @return DeliveryCoordinateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string.  Value enum: "address", "coordinate".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
