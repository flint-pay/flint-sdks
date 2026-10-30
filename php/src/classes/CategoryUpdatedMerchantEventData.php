<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryUpdatedMerchantEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryUpdatedMerchantEventDataObject
     */
    public function getObject(): CategoryUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
