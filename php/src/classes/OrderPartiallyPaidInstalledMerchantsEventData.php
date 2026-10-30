<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPartiallyPaidInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class OrderPartiallyPaidInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPartiallyPaidInstalledMerchantsEventData')); }
    /** A customer's purchase and its payment and fulfillment progress.
     * @return OrderPartiallyPaidInstalledMerchantsEventDataObject
     */
    public function getObject(): OrderPartiallyPaidInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
