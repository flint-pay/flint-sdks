<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryCreatedInstalledMerchantsEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CategoryCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
