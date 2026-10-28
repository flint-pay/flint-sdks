<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CardDetails $card
 * @property-read string $flint_wallet_card_id
 * @property-read string|null $store_payment_method_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFlintWalletCard extends Model {
    /** @param array{'card': mixed, 'flint_wallet_card_id': string, 'store_payment_method_id': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFlintWalletCard')); }
    /** Shape $ (Value): {@see CardDetails}. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return CardDetails
     */
    public function getCard(): CardDetails { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Shape $ (Value): string. Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store.
     * @return string
     */
    public function getFlintWalletCardId(): string { return $this->get('flint_wallet_card_id'); }
    public function hasFlintWalletCardId(): bool { return $this->has('flint_wallet_card_id'); }
    /** Shape $ (Value): string or null. The store's independent card copy, or null when this store does not hold a copy. A pending copy still needs confirmation before use.
     * @return string|null
     */
    public function getStorePaymentMethodId(): string|null { return $this->get('store_payment_method_id'); }
    public function hasStorePaymentMethodId(): bool { return $this->has('store_payment_method_id'); }
}
