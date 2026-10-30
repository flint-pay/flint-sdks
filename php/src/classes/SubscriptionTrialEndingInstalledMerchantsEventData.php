<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionTrialEndingInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionTrialEndingInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTrialEndingInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionTrialEndingInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionTrialEndingInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
