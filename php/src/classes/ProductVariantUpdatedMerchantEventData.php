<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantUpdatedMerchantEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantUpdatedMerchantEventDataObject
     */
    public function getObject(): ProductVariantUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
