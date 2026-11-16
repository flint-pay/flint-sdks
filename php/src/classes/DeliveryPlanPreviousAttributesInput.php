<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $complete_by_at
 * @property-read string|\DateTimeInterface|null $first_arrival_at
 * @property-read int|null $planned_delivery_count
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryPlanPreviousAttributesInput extends Model {
    /** @param array{'complete_by_at'?: string|\DateTimeInterface|null, 'first_arrival_at'?: string|\DateTimeInterface|null, 'planned_delivery_count'?: int|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPlanPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When complete_by_at is omitted; use hasCompleteByAt() or valueOrDefault().
     */
    public function getCompleteByAt(): mixed { return $this->get('complete_by_at'); }
    public function hasCompleteByAt(): bool { return $this->has('complete_by_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When first_arrival_at is omitted; use hasFirstArrivalAt() or valueOrDefault().
     */
    public function getFirstArrivalAt(): mixed { return $this->get('first_arrival_at'); }
    public function hasFirstArrivalAt(): bool { return $this->has('first_arrival_at'); }
    /** Number of deliveries the plan makes. anyOf[1] (Value): integer. Number of deliveries the plan makes. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When planned_delivery_count is omitted; use hasPlannedDeliveryCount() or valueOrDefault().
     */
    public function getPlannedDeliveryCount(): mixed { return $this->get('planned_delivery_count'); }
    public function hasPlannedDeliveryCount(): bool { return $this->has('planned_delivery_count'); }
    /** Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". anyOf[1] (Value): string. Whether the items arrive together. Value enum: "single_delivery", "multiple_deliveries". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
