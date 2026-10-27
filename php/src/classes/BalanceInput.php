<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass $available_by_source_type
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read string $balance_id
 * @property-read string $currency
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $held_money
 * @property-read string $merchant_id
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read bool $payouts_enabled
 * @property-read array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass $pending_by_source_type
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $pending_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reserve_money
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceInput extends Model {
    /** @param array{'available_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'available_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_id': string, 'currency': string, 'held_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'observed_at': string|\DateTimeInterface, 'payouts_enabled': bool, 'pending_by_source_type'?: array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass, 'pending_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'reserve_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceInput')); }
    /** Shape $ (Value): Map of {@see SignedMoneyInput}. Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. Shape $.* (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When available_by_source_type is omitted; use hasAvailableBySourceType() or valueOrDefault().
     */
    public function getAvailableBySourceType(): array|object { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** Shape $ (Value): {@see SignedMoneyInput}. Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When balance_id is omitted; use hasBalanceId() or valueOrDefault().
     */
    public function getBalanceId(): string { return $this->get('balance_id'); }
    public function hasBalanceId(): bool { return $this->has('balance_id'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When held_money is omitted; use hasHeldMoney() or valueOrDefault().
     */
    public function getHeldMoney(): mixed { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When payouts_enabled is omitted; use hasPayoutsEnabled() or valueOrDefault().
     */
    public function getPayoutsEnabled(): bool { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** Shape $ (Value): Map of {@see SignedMoneyInput}. Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. Shape $.* (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, SignedMoneyInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When pending_by_source_type is omitted; use hasPendingBySourceType() or valueOrDefault().
     */
    public function getPendingBySourceType(): array|object { return $this->get('pending_by_source_type'); }
    public function hasPendingBySourceType(): bool { return $this->has('pending_by_source_type'); }
    /** Shape $ (Value): {@see SignedMoneyInput}. Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pending_money is omitted; use hasPendingMoney() or valueOrDefault().
     */
    public function getPendingMoney(): mixed { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserve_money is omitted; use hasReserveMoney() or valueOrDefault().
     */
    public function getReserveMoney(): mixed { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
}
