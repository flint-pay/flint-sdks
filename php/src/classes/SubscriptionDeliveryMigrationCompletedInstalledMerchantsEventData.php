<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventData')); }
    /** A move of subscribers from one delivery method to another.
     * @return SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
