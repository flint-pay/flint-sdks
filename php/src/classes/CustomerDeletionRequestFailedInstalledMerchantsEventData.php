<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestFailedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestFailedInstalledMerchantsEventData')); }
    /** A request to delete a customer's personal information.
     * @return CustomerDeletionRequestFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerDeletionRequestFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
