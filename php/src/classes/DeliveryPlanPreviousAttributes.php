<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $complete_by_at
 * @property-read string|null $first_arrival_at
 * @property-read int|null $planned_delivery_count
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPlanPreviousAttributes extends Model {
    /** @param array{'complete_by_at'?: mixed, 'first_arrival_at'?: mixed, 'planned_delivery_count'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPlanPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompleteByAt(): string|null { return $this->get('complete_by_at'); }
    public function hasCompleteByAt(): bool { return $this->has('complete_by_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFirstArrivalAt(): string|null { return $this->get('first_arrival_at'); }
    public function hasFirstArrivalAt(): bool { return $this->has('first_arrival_at'); }
    /** Number of deliveries the plan makes. anyOf[1] (Value): integer. Number of deliveries the plan makes. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPlannedDeliveryCount(): int|null { return $this->get('planned_delivery_count'); }
    public function hasPlannedDeliveryCount(): bool { return $this->has('planned_delivery_count'); }
    /** Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". anyOf[1] (Value): string. Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
