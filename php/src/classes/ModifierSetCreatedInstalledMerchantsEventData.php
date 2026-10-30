<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierSetCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetCreatedInstalledMerchantsEventData')); }
    /** A reusable collection of customization groups.
     * @return ModifierSetCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ModifierSetCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
