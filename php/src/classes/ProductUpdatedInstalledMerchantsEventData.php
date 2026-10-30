<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ProductUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ProductUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductUpdatedInstalledMerchantsEventData')); }
    /** An item offered in the merchant's catalog.
     * @return ProductUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ProductUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
