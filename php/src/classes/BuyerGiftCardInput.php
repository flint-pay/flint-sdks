<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $balance_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read string $gift_card_id
 * @property-read string|\DateTimeInterface|null $last_loaded_at
 * @property-read string|\DateTimeInterface|null $last_redeemed_at
 * @property-read string $last4
 * @property-read string $merchant_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reserved_money
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerGiftCardInput extends Model {
    /** @param array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'currency': string, 'gift_card_id': string, 'last_loaded_at': string|\DateTimeInterface|null, 'last_redeemed_at': string|\DateTimeInterface|null, 'last4': string, 'merchant_id': string, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerGiftCardInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_money is omitted; use hasBalanceMoney() or valueOrDefault().
     */
    public function getBalanceMoney(): mixed { return $this->get('balance_money'); }
    public function hasBalanceMoney(): bool { return $this->has('balance_money'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_loaded_at is omitted; use hasLastLoadedAt() or valueOrDefault().
     */
    public function getLastLoadedAt(): string|\DateTimeInterface|null { return $this->get('last_loaded_at'); }
    public function hasLastLoadedAt(): bool { return $this->has('last_loaded_at'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_redeemed_at is omitted; use hasLastRedeemedAt() or valueOrDefault().
     */
    public function getLastRedeemedAt(): string|\DateTimeInterface|null { return $this->get('last_redeemed_at'); }
    public function hasLastRedeemedAt(): bool { return $this->has('last_redeemed_at'); }
    /** Shape $ (Value): string. Last four characters of the card's current code. minLength: 4. maxLength: 4.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserved_money is omitted; use hasReservedMoney() or valueOrDefault().
     */
    public function getReservedMoney(): mixed { return $this->get('reserved_money'); }
    public function hasReservedMoney(): bool { return $this->has('reserved_money'); }
    /** Shape $ (Value): string.  Value enum: "pending", "active", "frozen", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
