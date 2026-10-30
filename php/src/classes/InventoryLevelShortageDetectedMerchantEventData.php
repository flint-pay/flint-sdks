<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryLevelShortageDetectedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryLevelShortageDetectedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelShortageDetectedMerchantEventData')); }
    /** The quantity state of one inventory item at one Location.
     * @return InventoryLevelShortageDetectedMerchantEventDataObject
     */
    public function getObject(): InventoryLevelShortageDetectedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
