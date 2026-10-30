<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPlanChangedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPlanChangedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanChangedMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionPlanChangedMerchantEventDataObject
     */
    public function getObject(): SubscriptionPlanChangedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
