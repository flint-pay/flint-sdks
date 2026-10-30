<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantArchivedMerchantEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantArchivedMerchantEventDataObject
     */
    public function getObject(): ProductVariantArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
