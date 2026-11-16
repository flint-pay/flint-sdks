<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $destination_type
 * @property-read string|null $location_id
 * @property-read string|null $name
 * Presence-aware response; omitted optional fields return null. */
final class ReturnHandoffDestinationPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'destination_type'?: mixed, 'location_id'?: mixed, 'name'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffDestinationPreviousAttributes')); }
    /** Postal address the buyer sends the merchandise to. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** What kind of place the destination is. Value enum: "buyer_address", "location", "external_location". anyOf[1] (Value): string. What kind of place the destination is. Value enum: "buyer_address", "location", "external_location". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDestinationType(): string|null { return $this->get('destination_type'); }
    public function hasDestinationType(): bool { return $this->has('destination_type'); }
    /** ID of the Location that receives the merchandise. anyOf[1] (Value): string. ID of the Location that receives the merchandise. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Name of the destination. anyOf[1] (Value): string. Name of the destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
