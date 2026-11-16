<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read DeliveryCoordinateRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $coordinate
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'coordinate'?: DeliveryCoordinateRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBuyerLocationResourceCoordinatePreviousAttributesInput')); }
    /** The buyer location as an address. Set only when `type` is `address`. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** The buyer location as a coordinate. Set only when `type` is `coordinate`. anyOf[1] (Value): {@see DeliveryCoordinateRequestPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryCoordinateRequestPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Whether the buyer location is an address or a coordinate. Value enum: "coordinate". anyOf[1] (Value): string. Whether the buyer location is an address or a coordinate. Value enum: "coordinate". anyOf[2] (Value): null. anyOf[1] (Value): any. Whether the buyer location is an address or a coordinate. Value enum: "coordinate".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
