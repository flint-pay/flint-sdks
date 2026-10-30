<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionPastDueInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPastDueInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPastDueInstalledMerchantsEventData')); }
    /** A customer's recurring purchase.
     * @return SubscriptionPastDueInstalledMerchantsEventDataObject
     */
    public function getObject(): SubscriptionPastDueInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
