<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductVariantArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantArchivedInstalledMerchantsEventData')); }
    /** A specific purchasable version of a product.
     * @return ProductVariantArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductVariantArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
