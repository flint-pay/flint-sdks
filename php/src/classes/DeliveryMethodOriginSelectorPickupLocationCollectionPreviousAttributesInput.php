<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_location_set_id
 * @property-read string|null $delivery_location_set_revision_id
 * @property-read string|null $location_id
 * @property-read list<string>|null $location_ids
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput')); }
    /** ID of the delivery location set that names the Locations in the group. anyOf[1] (Value): string. ID of the delivery location set that names the Locations in the group. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_location_set_id is omitted; use hasDeliveryLocationSetId() or valueOrDefault().
     */
    public function getDeliveryLocationSetId(): mixed { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** ID of the location set revision in effect for this method revision. anyOf[1] (Value): string. ID of the location set revision in effect for this method revision. Example: "dlsr_01KEZF7C00HN2NT80H5VNQSVFJ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_location_set_revision_id is omitted; use hasDeliveryLocationSetRevisionId() or valueOrDefault().
     */
    public function getDeliveryLocationSetRevisionId(): mixed { return $this->get('delivery_location_set_revision_id'); }
    public function hasDeliveryLocationSetRevisionId(): bool { return $this->has('delivery_location_set_revision_id'); }
    /** ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. anyOf[1] (Value): string. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** IDs of the Locations in the group. anyOf[1] (Value): Array of string. IDs of the Locations in the group. anyOf[1][] (Value): string. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null. anyOf[1] (Value): Array of string. IDs of the Locations in the group. minItems: 1. maxItems: 1000. uniqueItems: true.
     * @return list<string>|null
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): mixed { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** Where delivery starts. Value enum: "pickup_location_collection". anyOf[1] (Value): string. Where delivery starts. Value enum: "pickup_location_collection". anyOf[2] (Value): null. anyOf[1] (Value): any. Where delivery starts. Value enum: "pickup_location_collection".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
