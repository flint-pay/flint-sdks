<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierGroupArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierGroupArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupArchivedInstalledMerchantsEventData')); }
    /** A group of choices that customize an item.
     * @return ModifierGroupArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierGroupArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
