<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read string|null $instructions
 * @property-read string|null $location_id
 * @property-read string|null $name
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryLocationSummaryResourcePreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'instructions'?: string|null, 'location_id'?: string|null, 'name'?: string|null, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSummaryResourcePreviousAttributesInput')); }
    /** Street address of the Location. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Buyer-visible pickup instructions for the Location. anyOf[1] (Value): string. Buyer-visible pickup instructions for the Location. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): mixed { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** ID of the Location buyers can collect from. anyOf[1] (Value): string. ID of the Location buyers can collect from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Name of the Location, as buyers see it when choosing pickup. anyOf[1] (Value): string. Name of the Location, as buyers see it when choosing pickup. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Uses an IANA time zone name. anyOf[1] (Value): string. Uses an IANA time zone name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
