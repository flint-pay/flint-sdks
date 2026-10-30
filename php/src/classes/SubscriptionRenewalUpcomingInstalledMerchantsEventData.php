<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionRenewalUpcomingInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionRenewalUpcomingInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalUpcomingInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionRenewalUpcomingInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionRenewalUpcomingInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
