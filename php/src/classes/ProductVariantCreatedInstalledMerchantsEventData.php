<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantCreatedInstalledMerchantsEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductVariantCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
