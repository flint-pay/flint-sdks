<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestCompletedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestCompletedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestCompletedMerchantEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestCompletedMerchantEventDataObject
     */
    public function getObject(): CustomerDeletionRequestCompletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
