<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantUpdatedInstalledMerchantsEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductVariantUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
