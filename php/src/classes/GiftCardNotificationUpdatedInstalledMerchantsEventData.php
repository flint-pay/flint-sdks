<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardNotificationUpdatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationUpdatedInstalledMerchantsEventData')); }
    /** A message sent to a gift card recipient.
     * @return GiftCardNotificationUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): GiftCardNotificationUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
