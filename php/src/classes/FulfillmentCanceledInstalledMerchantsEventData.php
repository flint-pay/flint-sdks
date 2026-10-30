<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentCanceledInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentCanceledInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentCanceledInstalledMerchantsEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentCanceledInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentCanceledInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
