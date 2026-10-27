<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCard $gift_card
 * @property-read ?GiftCardLoad $gift_card_load
 * @property-read list<GiftCardTransaction> $gift_card_transactions
 * Presence-aware response; omitted optional fields return null. */
final class AdjustGiftCardBalanceResult extends Model {
    /** @param array{'gift_card': mixed, 'gift_card_load'?: mixed, 'gift_card_transactions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AdjustGiftCardBalanceResult')); }
    /** Shape $ (Value): {@see GiftCard}. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCard
     */
    public function getGiftCard(): GiftCard { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** Shape $ (Value): {@see GiftCardLoad}. Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.
     * @return ?GiftCardLoad
     */
    public function getGiftCardLoad(): ?GiftCardLoad { return $this->get('gift_card_load'); }
    public function hasGiftCardLoad(): bool { return $this->has('gift_card_load'); }
    /** Shape $ (Value): Array of {@see GiftCardTransaction}. Shape $[] (Value): {@see GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     * @return list<GiftCardTransaction>
     */
    public function getGiftCardTransactions(): array { return $this->get('gift_card_transactions'); }
    public function hasGiftCardTransactions(): bool { return $this->has('gift_card_transactions'); }
}
