<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierSetUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetUpdatedInstalledMerchantsEventData')); }
    /** A reusable collection of customization groups.
     * @return ModifierSetUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierSetUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
