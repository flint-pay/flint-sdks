<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PackageUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PackageUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageUpdatedInstalledMerchantsEventData')); }
    /** A package within a shipment.
     * @return PackageUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PackageUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
