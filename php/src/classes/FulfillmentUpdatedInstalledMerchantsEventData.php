<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentUpdatedInstalledMerchantsEventData')); }
    /** Work required to deliver an order's items.
     * @return FulfillmentUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FulfillmentUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
