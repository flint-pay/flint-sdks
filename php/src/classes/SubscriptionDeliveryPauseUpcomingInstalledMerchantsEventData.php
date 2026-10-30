<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryPauseUpcomingInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryPauseUpcomingInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryPauseUpcomingInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionDeliveryPauseUpcomingInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionDeliveryPauseUpcomingInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
