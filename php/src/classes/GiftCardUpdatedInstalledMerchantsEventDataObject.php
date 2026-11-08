<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_money
 * @property-read MoneyValue $balance_money
 * @property-read string $code_source
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read string|null $customer_id
 * @property-read string|null $external_reference_id
 * @property-read string $gift_card_id
 * @property-read string|null $last_loaded_at
 * @property-read string|null $last_redeemed_at
 * @property-read string $last4
 * @property-read string $merchant_id
 * @property-read MoneyValue $reserved_money
 * @property-read list<GiftCardRestriction> $restrictions
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardUpdatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'available_money': mixed, 'balance_money': mixed, 'code_source': string, 'created_at': string, 'currency': string, 'customer_id': string|null, 'external_reference_id': string|null, 'gift_card_id': string, 'last_loaded_at': string|null, 'last_redeemed_at': string|null, 'last4': string, 'merchant_id': string, 'reserved_money': mixed, 'restrictions': list<mixed>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardUpdatedInstalledMerchantsEventDataObject')); }
    /** The balance minus reserved value: what can be spent now. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableMoney(): MoneyValue { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** The posted balance, including value reserved for redemptions in progress. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBalanceMoney(): MoneyValue { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Value enum: "generated", "imported".
     * @return string
     */
    public function getCodeSource(): string { return $this->get('code_source'); }
    public function hasCodeSource(): bool { return $this->has('code_source'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Value enum: "USD".
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** ID of the customer associated with the card. `null` when no customer is associated.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Unique identifier for this gift card, prefixed `gc_`.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time.
     * @return string|null
     */
    public function getLastLoadedAt(): string|null { return $this->get('last_loaded_at'); }
    public function hasLastLoadedAt(): bool { return $this->has('last_loaded_at'); }
    /** RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
     * @return string|null
     */
    public function getLastRedeemedAt(): string|null { return $this->get('last_redeemed_at'); }
    public function hasLastRedeemedAt(): bool { return $this->has('last_redeemed_at'); }
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReservedMoney(): MoneyValue { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. [] (Value): {@see GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or dispute details.
     * @return list<GiftCardRestriction>
     */
    public function getRestrictions(): array { return $this->get('restrictions'); }
    public function hasRestrictions(): bool { return $this->has('restrictions'); }
    /** Where the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending", "active", "frozen", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". [] (Value): string.  Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
