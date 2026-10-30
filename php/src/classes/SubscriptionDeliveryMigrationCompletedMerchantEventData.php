<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryMigrationCompletedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMigrationCompletedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationCompletedMerchantEventData')); }
    /** A move of subscribers from one delivery method to another.
     * @return SubscriptionDeliveryMigrationCompletedMerchantEventDataObject
     */
    public function getObject(): SubscriptionDeliveryMigrationCompletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
