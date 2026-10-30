<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentFailedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentFailedInstalledMerchantsEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
