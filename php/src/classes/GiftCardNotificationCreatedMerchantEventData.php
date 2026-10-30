<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardNotificationCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationCreatedMerchantEventData')); }
    /** A message sent to a gift card recipient.
     * @return GiftCardNotificationCreatedMerchantEventDataObject
     */
    public function getObject(): GiftCardNotificationCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
