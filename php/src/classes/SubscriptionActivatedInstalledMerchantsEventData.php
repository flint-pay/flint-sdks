<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionActivatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionActivatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionActivatedInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionActivatedInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionActivatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
