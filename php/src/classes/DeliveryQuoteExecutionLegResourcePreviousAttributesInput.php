<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_execution_leg_id
 * @property-read string|null $origin_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteExecutionLegResourcePreviousAttributesInput extends Model {
    /** @param array{'delivery_execution_leg_id'?: string|null, 'origin_location_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteExecutionLegResourcePreviousAttributesInput')); }
    /** Unique ID of this leg. anyOf[1] (Value): string. Unique ID of this leg. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_execution_leg_id is omitted; use hasDeliveryExecutionLegId() or valueOrDefault().
     */
    public function getDeliveryExecutionLegId(): mixed { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** ID of the Location the items leave from. anyOf[1] (Value): string. ID of the Location the items leave from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): mixed { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
