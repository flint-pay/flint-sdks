<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestFailedMerchantEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestFailedMerchantEventDataObject
     */
    public function getObject(): CustomerDeletionRequestFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
