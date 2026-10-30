<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierSetUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetUpdatedMerchantEventData')); }
    /** A reusable collection of customization groups.
     * @return ModifierSetUpdatedMerchantEventDataObject
     */
    public function getObject(): ModifierSetUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
