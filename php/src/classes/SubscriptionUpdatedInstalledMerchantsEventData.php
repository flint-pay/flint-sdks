<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionUpdatedInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
