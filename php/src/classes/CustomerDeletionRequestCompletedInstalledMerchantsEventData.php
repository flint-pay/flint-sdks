<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestCompletedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestCompletedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestCompletedInstalledMerchantsEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestCompletedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerDeletionRequestCompletedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
