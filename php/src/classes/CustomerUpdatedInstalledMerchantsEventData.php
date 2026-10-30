<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerUpdatedInstalledMerchantsEventData')); }
    /** A merchant's customer profile.
     * @return CustomerUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
