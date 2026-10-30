<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDunningExhaustedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDunningExhaustedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDunningExhaustedInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionDunningExhaustedInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionDunningExhaustedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
