<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryUpdatedInstalledMerchantsEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CategoryUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
