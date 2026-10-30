<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductUpdatedMerchantEventData')); }
    /** An item offered in the merchant's catalog.
     * @return ProductUpdatedMerchantEventDataObject
     */
    public function getObject(): ProductUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
