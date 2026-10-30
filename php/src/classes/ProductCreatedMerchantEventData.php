<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductCreatedMerchantEventData')); }
    /** An item offered in the merchant's catalog.
     * @return ProductCreatedMerchantEventDataObject
     */
    public function getObject(): ProductCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
