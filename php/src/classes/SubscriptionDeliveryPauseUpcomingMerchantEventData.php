<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryPauseUpcomingMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryPauseUpcomingMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryPauseUpcomingMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionDeliveryPauseUpcomingMerchantEventDataObject
     */
    public function getObject(): SubscriptionDeliveryPauseUpcomingMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
