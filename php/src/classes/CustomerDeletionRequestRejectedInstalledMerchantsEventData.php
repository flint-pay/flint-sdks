<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestRejectedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestRejectedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestRejectedInstalledMerchantsEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestRejectedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerDeletionRequestRejectedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
