<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ModifierSetArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetArchivedMerchantEventData')); }
    /** A reusable collection of customization groups.
     * @return ModifierSetArchivedMerchantEventDataObject
     */
    public function getObject(): ModifierSetArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
