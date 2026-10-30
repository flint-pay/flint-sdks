<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerCreatedInstalledMerchantsEventData')); }
    /** A merchant's customer profile.
     * @return CustomerCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
