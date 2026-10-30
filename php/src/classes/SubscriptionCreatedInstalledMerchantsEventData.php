<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCreatedInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
