<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionCancellationScheduledMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCancellationScheduledMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCancellationScheduledMerchantEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionCancellationScheduledMerchantEventDataObject
     */
    public function getObject(): SubscriptionCancellationScheduledMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
