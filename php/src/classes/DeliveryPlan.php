<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $complete_by_at
 * @property-read string $first_arrival_at
 * @property-read int $planned_delivery_count
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryPlan extends Model {
    /** @param array{'complete_by_at'?: string, 'first_arrival_at'?: string, 'planned_delivery_count'?: int, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPlan')); }
    /** @return string
     * @throws SdkError When complete_by_at is omitted; use hasCompleteByAt() or valueOrDefault().
     */
    public function getCompleteByAt(): string { return $this->get('complete_by_at'); }
    public function hasCompleteByAt(): bool { return $this->has('complete_by_at'); }
    /** @return string
     * @throws SdkError When first_arrival_at is omitted; use hasFirstArrivalAt() or valueOrDefault().
     */
    public function getFirstArrivalAt(): string { return $this->get('first_arrival_at'); }
    public function hasFirstArrivalAt(): bool { return $this->has('first_arrival_at'); }
    /** @return int
     * @throws SdkError When planned_delivery_count is omitted; use hasPlannedDeliveryCount() or valueOrDefault().
     */
    public function getPlannedDeliveryCount(): int { return $this->get('planned_delivery_count'); }
    public function hasPlannedDeliveryCount(): bool { return $this->has('planned_delivery_count'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
