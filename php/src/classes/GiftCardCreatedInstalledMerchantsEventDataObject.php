<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_money
 * @property-read MoneyValue $balance_money
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
final class GiftCardCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'available_money': mixed, 'balance_money': mixed, 'created_at': string, 'currency': string, 'customer_id': string|null, 'external_reference_id': string|null, 'gift_card_id': string, 'last_loaded_at': string|null, 'last_redeemed_at': string|null, 'last4': string, 'merchant_id': string, 'reserved_money': mixed, 'restrictions': list<mixed>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCreatedInstalledMerchantsEventDataObject')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableMoney(): MoneyValue { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBalanceMoney(): MoneyValue { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
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
    /** customer_id
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** gift_card_id
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getLastLoadedAt(): string|null { return $this->get('last_loaded_at'); }
    public function hasLastLoadedAt(): bool { return $this->has('last_loaded_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getLastRedeemedAt(): string|null { return $this->get('last_redeemed_at'); }
    public function hasLastRedeemedAt(): bool { return $this->has('last_redeemed_at'); }
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4.
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** merchant_id
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReservedMoney(): MoneyValue { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. [] (Value): {@see GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or dispute details.
     * @return list<GiftCardRestriction>
     */
    public function getRestrictions(): array { return $this->get('restrictions'); }
    public function hasRestrictions(): bool { return $this->has('restrictions'); }
    /** Value enum: "pending", "active", "frozen", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** [] enum: "freeze", "unfreeze", "close". [] (Value): string.  Value enum: "freeze", "unfreeze", "close".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
