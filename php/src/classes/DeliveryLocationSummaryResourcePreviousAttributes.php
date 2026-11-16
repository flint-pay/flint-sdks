<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $instructions
 * @property-read string|null $location_id
 * @property-read string|null $name
 * @property-read string|null $timezone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSummaryResourcePreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'instructions'?: mixed, 'location_id'?: mixed, 'name'?: mixed, 'timezone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSummaryResourcePreviousAttributes')); }
    /** Street address of the Location. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Buyer-visible pickup instructions for the Location. anyOf[1] (Value): string. Buyer-visible pickup instructions for the Location. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** ID of the Location buyers can collect from. anyOf[1] (Value): string. ID of the Location buyers can collect from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Name of the Location, as buyers see it when choosing pickup. anyOf[1] (Value): string. Name of the Location, as buyers see it when choosing pickup. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
