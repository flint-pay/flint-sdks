<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionActivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionActivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionActivatedMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionActivatedMerchantEventDataObject
     */
    public function getObject(): SubscriptionActivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
