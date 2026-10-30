<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PackageCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PackageCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageCreatedInstalledMerchantsEventData')); }
    /** A package within a shipment.
     * @return PackageCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PackageCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
