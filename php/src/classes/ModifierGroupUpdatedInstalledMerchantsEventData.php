<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierGroupUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierGroupUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupUpdatedInstalledMerchantsEventData')); }
    /** A group of choices that customize an item.
     * @return ModifierGroupUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierGroupUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
