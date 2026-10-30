<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderInventoryExceptionResolvedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class OrderInventoryExceptionResolvedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderInventoryExceptionResolvedInstalledMerchantsEventData')); }
    /** A customer's purchase and its payment and fulfillment progress.
     * @return OrderInventoryExceptionResolvedInstalledMerchantsEventDataObject
     */
    public function getObject(): OrderInventoryExceptionResolvedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
