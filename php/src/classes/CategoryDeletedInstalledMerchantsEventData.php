<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryDeletedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryDeletedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryDeletedInstalledMerchantsEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryDeletedInstalledMerchantsEventDataObject
     */
    public function getObject(): CategoryDeletedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
