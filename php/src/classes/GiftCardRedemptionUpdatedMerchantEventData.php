<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardRedemptionUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRedemptionUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionUpdatedMerchantEventData')); }
    /** Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
     * @return GiftCardRedemptionUpdatedMerchantEventDataObject
     */
    public function getObject(): GiftCardRedemptionUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
