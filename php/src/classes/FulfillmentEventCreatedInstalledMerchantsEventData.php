<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEventCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentEventCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventCreatedInstalledMerchantsEventData')); }
    /** An action recorded during an order's fulfillment.
     * @return FulfillmentEventCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentEventCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
