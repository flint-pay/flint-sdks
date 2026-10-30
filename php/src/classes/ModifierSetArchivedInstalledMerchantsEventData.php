<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierSetArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetArchivedInstalledMerchantsEventData')); }
    /** A reusable collection of customization groups.
     * @return ModifierSetArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierSetArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
