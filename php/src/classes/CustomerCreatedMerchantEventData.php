<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerCreatedMerchantEventData')); }
    /** A merchant's customer profile.
     * @return CustomerCreatedMerchantEventDataObject
     */
    public function getObject(): CustomerCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
