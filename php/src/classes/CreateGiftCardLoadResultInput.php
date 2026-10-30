<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read GiftCardInput|array<array-key, mixed>|\stdClass $gift_card
 * @property-read GiftCardLoadInput|array<array-key, mixed>|\stdClass $gift_card_load
 * @property-read list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass> $gift_card_transactions
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardLoadResultInput extends Model {
    /** @param array{'gift_card': GiftCardInput|array<array-key, mixed>|\stdClass, 'gift_card_load': GiftCardLoadInput|array<array-key, mixed>|\stdClass, 'gift_card_transactions': list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardLoadResultInput')); }
    /** Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCardInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card is omitted; use hasGiftCard() or valueOrDefault().
     */
    public function getGiftCard(): mixed { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.
     * @return GiftCardLoadInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_load is omitted; use hasGiftCardLoad() or valueOrDefault().
     */
    public function getGiftCardLoad(): mixed { return $this->get('gift_card_load'); }
    public function hasGiftCardLoad(): bool { return $this->has('gift_card_load'); }
    /**  [] (Value): {@see GiftCardTransactionInput}. Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     * @return list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_card_transactions is omitted; use hasGiftCardTransactions() or valueOrDefault().
     */
    public function getGiftCardTransactions(): array { return $this->get('gift_card_transactions'); }
    public function hasGiftCardTransactions(): bool { return $this->has('gift_card_transactions'); }
}
