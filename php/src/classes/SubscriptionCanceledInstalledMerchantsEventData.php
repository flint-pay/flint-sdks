<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionCanceledInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCanceledInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCanceledInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionCanceledInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionCanceledInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
