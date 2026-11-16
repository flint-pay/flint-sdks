<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_execution_leg_id
 * @property-read string|null $origin_location_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteExecutionLegResourcePreviousAttributes extends Model {
    /** @param array{'delivery_execution_leg_id'?: mixed, 'origin_location_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteExecutionLegResourcePreviousAttributes')); }
    /** Unique ID of this leg. anyOf[1] (Value): string. Unique ID of this leg. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryExecutionLegId(): string|null { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** ID of the Location the items leave from. anyOf[1] (Value): string. ID of the Location the items leave from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginLocationId(): string|null { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
