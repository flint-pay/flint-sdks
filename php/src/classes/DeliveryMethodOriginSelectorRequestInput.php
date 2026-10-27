<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_location_set_id
 * @property-read string $location_id
 * @property-read list<string> $location_ids
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodOriginSelectorRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodOriginSelectorRequestInput')); }
    /** Shape $ (Value): string. Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     * @return string
     * @throws SdkError When delivery_location_set_id is omitted; use hasDeliveryLocationSetId() or valueOrDefault().
     */
    public function getDeliveryLocationSetId(): string { return $this->get('delivery_location_set_id'); }
    public function hasDeliveryLocationSetId(): bool { return $this->has('delivery_location_set_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): Array of string. Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** Shape $ (Value): string.  Value enum: "fixed_location", "allocated_origin_group", "pickup_location_collection".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
