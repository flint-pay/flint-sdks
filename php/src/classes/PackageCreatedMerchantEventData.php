<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PackageCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PackageCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageCreatedMerchantEventData')); }
    /** A package within a shipment.
     * @return PackageCreatedMerchantEventDataObject
     */
    public function getObject(): PackageCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
