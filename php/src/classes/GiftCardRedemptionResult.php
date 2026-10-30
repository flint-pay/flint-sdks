<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCard $gift_card
 * @property-read GiftCardRedemption $gift_card_redemption
 * @property-read list<GiftCardTransaction> $gift_card_transactions
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRedemptionResult extends Model {
    /** @param array{'gift_card': mixed, 'gift_card_redemption': mixed, 'gift_card_transactions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionResult')); }
    /** Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCard
     */
    public function getGiftCard(): GiftCard { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
     * @return GiftCardRedemption
     */
    public function getGiftCardRedemption(): GiftCardRedemption { return $this->get('gift_card_redemption'); }
    public function hasGiftCardRedemption(): bool { return $this->has('gift_card_redemption'); }
    /**  [] (Value): {@see GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     * @return list<GiftCardTransaction>
     */
    public function getGiftCardTransactions(): array { return $this->get('gift_card_transactions'); }
    public function hasGiftCardTransactions(): bool { return $this->has('gift_card_transactions'); }
}
