<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryDistancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $maximum_distance
 * @property-read string|null $measurement
 * @property-read DeliveryRadiusOriginPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $origin
 * @property-read string|null $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRadiusConditionPreviousAttributesInput extends Model {
    /** @param array{'maximum_distance'?: DeliveryDistancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'measurement'?: string|null, 'origin'?: DeliveryRadiusOriginPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subject'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRadiusConditionPreviousAttributesInput')); }
    /** The largest distance from the origin that still matches. anyOf[1] (Value): {@see DeliveryDistancePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryDistancePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When maximum_distance is omitted; use hasMaximumDistance() or valueOrDefault().
     */
    public function getMaximumDistance(): mixed { return $this->get('maximum_distance'); }
    public function hasMaximumDistance(): bool { return $this->has('maximum_distance'); }
    /** How Flint measures the distance. Value enum: "straight_line". anyOf[1] (Value): string. How Flint measures the distance. Default: "straight_line". Value enum: "straight_line". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When measurement is omitted; use hasMeasurement() or valueOrDefault().
     */
    public function getMeasurement(): mixed { return $this->get('measurement'); }
    public function hasMeasurement(): bool { return $this->has('measurement'); }
    /** The point to measure the distance from. anyOf[1] (Value): {@see DeliveryRadiusOriginPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRadiusOriginPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Value enum: "destination_address", "buyer_location". anyOf[1] (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
