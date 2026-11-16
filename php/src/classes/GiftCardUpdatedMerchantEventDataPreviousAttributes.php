<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $available_money
 * @property-read MoneyValuePreviousAttributes|null $balance_money
 * @property-read string|null $code_source
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $customer_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $gift_card_id
 * @property-read string|null $last_loaded_at
 * @property-read string|null $last_redeemed_at
 * @property-read string|null $last4
 * @property-read string|null $merchant_id
 * @property-read MoneyValuePreviousAttributes|null $reserved_money
 * @property-read list<GiftCardRestrictionPreviousAttributes>|null $restrictions
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'available_money'?: mixed, 'balance_money'?: mixed, 'code_source'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'customer_id'?: mixed, 'external_reference_id'?: mixed, 'gift_card_id'?: mixed, 'last_loaded_at'?: mixed, 'last_redeemed_at'?: mixed, 'last4'?: mixed, 'merchant_id'?: mixed, 'reserved_money'?: mixed, 'restrictions'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardUpdatedMerchantEventDataPreviousAttributes')); }
    /** The balance minus reserved value: what can be spent now. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAvailableMoney(): MoneyValuePreviousAttributes|null { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** The posted balance, including value reserved for redemptions in progress. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getBalanceMoney(): MoneyValuePreviousAttributes|null { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Value enum: "generated", "imported". anyOf[1] (Value): string. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Value enum: "generated", "imported". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCodeSource(): string|null { return $this->get('code_source'); }
    public function hasCodeSource(): bool { return $this->has('code_source'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. Value enum: "USD". anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Value enum: "USD". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** ID of the customer associated with the card. `null` when no customer is associated. anyOf[1] (Value): string. ID of the customer associated with the card. `null` when no customer is associated. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Caller-owned identifier for this resource in an external system. `null` when none is set. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Unique identifier for this gift card, prefixed `gc_`. anyOf[1] (Value): string. Unique identifier for this gift card, prefixed `gc_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** RFC3339 timestamp. `null` when no value has been loaded onto the card. anyOf[1] (Value): string. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLastLoadedAt(): string|null { return $this->get('last_loaded_at'); }
    public function hasLastLoadedAt(): bool { return $this->has('last_loaded_at'); }
    /** RFC3339 timestamp. `null` when the card has never been redeemed. anyOf[1] (Value): string. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLastRedeemedAt(): string|null { return $this->get('last_redeemed_at'); }
    public function hasLastRedeemedAt(): bool { return $this->has('last_redeemed_at'); }
    /** Last four characters of the card's current code. anyOf[1] (Value): string. Last four characters of the card's current code. minLength: 4. maxLength: 4. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReservedMoney(): MoneyValuePreviousAttributes|null { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. anyOf[1] (Value): Array of {@see GiftCardRestrictionPreviousAttributes}. The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. anyOf[1][] (Value): {@see GiftCardRestrictionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<GiftCardRestrictionPreviousAttributes>|null
     */
    public function getRestrictions(): array|null { return $this->get('restrictions'); }
    public function hasRestrictions(): bool { return $this->has('restrictions'); }
    /** Where the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending", "active", "frozen", "closed". anyOf[1] (Value): string. Where the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending", "active", "frozen", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". anyOf[1] (Value): Array of string. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". anyOf[1][] (Value): string.  Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
