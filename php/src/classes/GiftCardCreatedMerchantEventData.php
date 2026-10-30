<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCreatedMerchantEventData')); }
    /** Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCardCreatedMerchantEventDataObject
     */
    public function getObject(): GiftCardCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
