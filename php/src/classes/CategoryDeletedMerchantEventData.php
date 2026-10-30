<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryDeletedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryDeletedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryDeletedMerchantEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryDeletedMerchantEventDataObject
     */
    public function getObject(): CategoryDeletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
