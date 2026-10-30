<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestCreatedMerchantEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestCreatedMerchantEventDataObject
     */
    public function getObject(): CustomerDeletionRequestCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
