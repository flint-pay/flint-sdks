<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductArchivedInstalledMerchantsEventData')); }
    /** An item offered in the merchant's catalog.
     * @return ProductArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
