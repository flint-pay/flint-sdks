<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_execution_leg_id
 * @property-read string $origin_location_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem extends Model {
    /** @param array{'delivery_execution_leg_id': string, 'origin_location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableOptionExecutionLegsItem')); }
    /** delivery_execution_leg_id
     * @return string
     */
    public function getDeliveryExecutionLegId(): string { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** origin_location_id
     * @return string
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
