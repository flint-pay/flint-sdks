<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionCycleSkippedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCycleSkippedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCycleSkippedMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionCycleSkippedMerchantEventDataObject
     */
    public function getObject(): SubscriptionCycleSkippedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
