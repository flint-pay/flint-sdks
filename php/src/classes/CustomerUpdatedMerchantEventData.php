<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerUpdatedMerchantEventData')); }
    /** A merchant's customer profile.
     * @return CustomerUpdatedMerchantEventDataObject
     */
    public function getObject(): CustomerUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
