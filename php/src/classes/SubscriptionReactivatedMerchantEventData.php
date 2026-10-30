<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionReactivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionReactivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionReactivatedMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionReactivatedMerchantEventDataObject
     */
    public function getObject(): SubscriptionReactivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
