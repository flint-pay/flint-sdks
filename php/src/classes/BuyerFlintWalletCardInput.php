<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CardDetailsInput|array<array-key, mixed>|\stdClass $card
 * @property-read string $flint_wallet_card_id
 * @property-read string|null $store_payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerFlintWalletCardInput extends Model {
    /** @param array{'card': CardDetailsInput|array<array-key, mixed>|\stdClass, 'flint_wallet_card_id': string, 'store_payment_method_id': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFlintWalletCardInput')); }
    /** Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return CardDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store.
     * @return string
     * @throws SdkError When flint_wallet_card_id is omitted; use hasFlintWalletCardId() or valueOrDefault().
     */
    public function getFlintWalletCardId(): string { return $this->get('flint_wallet_card_id'); }
    public function hasFlintWalletCardId(): bool { return $this->has('flint_wallet_card_id'); }
    /** The store's independent card copy, or null when this store does not hold a copy. A pending copy still needs confirmation before use.
     * @return string|null
     * @throws SdkError When store_payment_method_id is omitted; use hasStorePaymentMethodId() or valueOrDefault().
     */
    public function getStorePaymentMethodId(): string|null { return $this->get('store_payment_method_id'); }
    public function hasStorePaymentMethodId(): bool { return $this->has('store_payment_method_id'); }
}
