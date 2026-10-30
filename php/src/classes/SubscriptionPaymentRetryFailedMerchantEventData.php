<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPaymentRetryFailedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPaymentRetryFailedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetryFailedMerchantEventData')); }
    /** An attempt to collect a subscription's overdue payment.
     * @return SubscriptionPaymentRetryFailedMerchantEventDataObject
     */
    public function getObject(): SubscriptionPaymentRetryFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
