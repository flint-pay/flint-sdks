<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDunningExhaustedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDunningExhaustedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDunningExhaustedMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionDunningExhaustedMerchantEventDataObject
     */
    public function getObject(): SubscriptionDunningExhaustedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
