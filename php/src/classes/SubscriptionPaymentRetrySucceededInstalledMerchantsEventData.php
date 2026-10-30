<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPaymentRetrySucceededInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPaymentRetrySucceededInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPaymentRetrySucceededInstalledMerchantsEventData')); }
    /** An attempt to collect a subscription's overdue payment.
     * @return SubscriptionPaymentRetrySucceededInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionPaymentRetrySucceededInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
