<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductArchivedMerchantEventData')); }
    /** An item offered in the merchant's catalog.
     * @return ProductArchivedMerchantEventDataObject
     */
    public function getObject(): ProductArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
