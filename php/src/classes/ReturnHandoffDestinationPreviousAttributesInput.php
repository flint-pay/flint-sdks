<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read string|null $destination_type
 * @property-read string|null $location_id
 * @property-read string|null $name
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnHandoffDestinationPreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'destination_type'?: string|null, 'location_id'?: string|null, 'name'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffDestinationPreviousAttributesInput')); }
    /** Postal address the buyer sends the merchandise to. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** What kind of place the destination is. Value enum: "buyer_address", "location", "external_location". anyOf[1] (Value): string. What kind of place the destination is. Value enum: "buyer_address", "location", "external_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When destination_type is omitted; use hasDestinationType() or valueOrDefault().
     */
    public function getDestinationType(): mixed { return $this->get('destination_type'); }
    public function hasDestinationType(): bool { return $this->has('destination_type'); }
    /** ID of the Location that receives the merchandise. anyOf[1] (Value): string. ID of the Location that receives the merchandise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Name of the destination. anyOf[1] (Value): string. Name of the destination. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
