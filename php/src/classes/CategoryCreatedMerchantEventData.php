<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CategoryCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CategoryCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryCreatedMerchantEventData')); }
    /** A catalog grouping used to organize items.
     * @return CategoryCreatedMerchantEventDataObject
     */
    public function getObject(): CategoryCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
