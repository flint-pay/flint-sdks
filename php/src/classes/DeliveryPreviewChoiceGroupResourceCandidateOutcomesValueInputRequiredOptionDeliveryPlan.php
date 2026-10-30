<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $complete_by_at
 * @property-read ?string $first_arrival_at
 * @property-read ?int $planned_delivery_count
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionDeliveryPlan extends Model {
    /** @param array{'complete_by_at'?: string, 'first_arrival_at'?: string, 'planned_delivery_count'?: int, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionDeliveryPlan')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompleteByAt(): ?string { return $this->get('complete_by_at'); }
    public function hasCompleteByAt(): bool { return $this->has('complete_by_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getFirstArrivalAt(): ?string { return $this->get('first_arrival_at'); }
    public function hasFirstArrivalAt(): bool { return $this->has('first_arrival_at'); }
    /** planned_delivery_count
     * @return ?int
     */
    public function getPlannedDeliveryCount(): ?int { return $this->get('planned_delivery_count'); }
    public function hasPlannedDeliveryCount(): bool { return $this->has('planned_delivery_count'); }
    /** Value enum: "single_delivery", "multiple_deliveries".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
