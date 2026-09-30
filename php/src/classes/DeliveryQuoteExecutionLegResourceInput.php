<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_execution_leg_id
 * @property-read string $origin_location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryQuoteExecutionLegResourceInput extends Model {
    /** @param array{'delivery_execution_leg_id': string, 'origin_location_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteExecutionLegResourceInput')); }
    /** @return string
     * @throws SdkError When delivery_execution_leg_id is omitted; use hasDeliveryExecutionLegId() or valueOrDefault().
     */
    public function getDeliveryExecutionLegId(): string { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** @return string
     * @throws SdkError When origin_location_id is omitted; use hasOriginLocationId() or valueOrDefault().
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
}
