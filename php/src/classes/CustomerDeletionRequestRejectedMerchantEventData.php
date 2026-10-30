<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestRejectedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestRejectedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestRejectedMerchantEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestRejectedMerchantEventDataObject
     */
    public function getObject(): CustomerDeletionRequestRejectedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
