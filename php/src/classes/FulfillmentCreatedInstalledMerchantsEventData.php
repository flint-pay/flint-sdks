<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentCreatedInstalledMerchantsEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
