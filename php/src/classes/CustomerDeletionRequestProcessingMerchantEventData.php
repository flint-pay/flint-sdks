<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestProcessingMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestProcessingMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestProcessingMerchantEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestProcessingMerchantEventDataObject
     */
    public function getObject(): CustomerDeletionRequestProcessingMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
