<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantCreatedMerchantEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantCreatedMerchantEventDataObject
     */
    public function getObject(): ProductVariantCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
