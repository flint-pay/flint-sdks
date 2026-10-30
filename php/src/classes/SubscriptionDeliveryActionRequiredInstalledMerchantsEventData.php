<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryActionRequiredInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryActionRequiredInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryActionRequiredInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionDeliveryActionRequiredInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionDeliveryActionRequiredInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
