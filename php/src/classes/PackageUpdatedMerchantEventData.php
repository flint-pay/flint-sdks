<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PackageUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PackageUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageUpdatedMerchantEventData')); }
    /** A package within a shipment.
     * @return PackageUpdatedMerchantEventDataObject
     */
    public function getObject(): PackageUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
