<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletedMerchantEventData')); }
    /** A merchant's customer profile.
     * @return CustomerDeletedMerchantEventDataObject
     */
    public function getObject(): CustomerDeletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
