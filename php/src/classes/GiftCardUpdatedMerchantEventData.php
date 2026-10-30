<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardUpdatedMerchantEventData')); }
    /** Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCardUpdatedMerchantEventDataObject
     */
    public function getObject(): GiftCardUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
