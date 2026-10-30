<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryLevelShortageDetectedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryLevelShortageDetectedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelShortageDetectedInstalledMerchantsEventData')); }
    /** The quantity state of one inventory item at one Location.
     * @return InventoryLevelShortageDetectedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryLevelShortageDetectedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
