<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryDistanceInput|array<array-key, mixed>|\stdClass $maximum_distance
 * @property-read string $measurement
 * @property-read DeliveryRadiusOriginInput|array<array-key, mixed>|\stdClass $origin
 * @property-read string $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRadiusConditionInput extends Model {
    /** @param array{'maximum_distance': DeliveryDistanceInput|array<array-key, mixed>|\stdClass, 'measurement'?: string, 'origin': DeliveryRadiusOriginInput|array<array-key, mixed>|\stdClass, 'subject'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRadiusConditionInput')); }
    /** Shape $ (Value): {@see DeliveryDistanceInput}. A distance as a `value` in meters, kilometers, or miles.
     * @return DeliveryDistanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When maximum_distance is omitted; use hasMaximumDistance() or valueOrDefault().
     */
    public function getMaximumDistance(): mixed { return $this->get('maximum_distance'); }
    public function hasMaximumDistance(): bool { return $this->has('maximum_distance'); }
    /** Shape $ (Value): string. Default: "straight_line". Value enum: "straight_line".
     * @return string
     * @throws SdkError When measurement is omitted; use hasMeasurement() or valueOrDefault().
     */
    public function getMeasurement(): string { return $this->get('measurement'); }
    public function hasMeasurement(): bool { return $this->has('measurement'); }
    /** Shape $ (Value): {@see DeliveryRadiusOriginInput}. The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).
     * @return DeliveryRadiusOriginInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): mixed { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: "destination_address". Value enum: "destination_address", "buyer_location".
     * @return string
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): string { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
