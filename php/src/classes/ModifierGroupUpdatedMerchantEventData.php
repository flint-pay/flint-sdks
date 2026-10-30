<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierGroupUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierGroupUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupUpdatedMerchantEventData')); }
    /** A group of choices that customize an item.
     * @return ModifierGroupUpdatedMerchantEventDataObject
     */
    public function getObject(): ModifierGroupUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
