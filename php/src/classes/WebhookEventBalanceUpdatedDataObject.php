<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?array<array-key, SignedMoney> $available_by_source_type
 * @property-read SignedMoney $available_money
 * @property-read string $balance_id
 * @property-read string $currency
 * @property-read MoneyValue $held_money
 * @property-read string $merchant_id
 * @property-read string $observed_at
 * @property-read bool $payouts_enabled
 * @property-read ?array<array-key, SignedMoney> $pending_by_source_type
 * @property-read SignedMoney $pending_money
 * @property-read MoneyValue $reserve_money
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventBalanceUpdatedDataObject extends Model {
    /** @param array{'available_by_source_type'?: \stdClass, 'available_money': mixed, 'balance_id': string, 'currency': string, 'held_money': mixed, 'merchant_id': string, 'observed_at': string, 'payouts_enabled': bool, 'pending_by_source_type'?: \stdClass, 'pending_money': mixed, 'reserve_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceUpdatedDataObject')); }
    /** Shape $ (Value): Map of {@see SignedMoney}. Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. Shape $.* (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, SignedMoney>
     */
    public function getAvailableBySourceType(): ?array { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** Shape $ (Value): {@see SignedMoney}. Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getAvailableMoney(): SignedMoney { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Shape $ (Value): string. Stable identifier of this currency's balance.
     * @return string
     */
    public function getBalanceId(): string { return $this->get('balance_id'); }
    public function hasBalanceId(): bool { return $this->has('balance_id'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): {@see MoneyValue}. Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getHeldMoney(): MoneyValue { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** Shape $ (Value): string. Merchant whose balance this is.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: date-time.
     * @return string
     */
    public function getObservedAt(): string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Shape $ (Value): boolean. Whether your account can receive payouts. While it is false, payments can still succeed, and their funds wait in your balance.
     * @return bool
     */
    public function getPayoutsEnabled(): bool { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** Shape $ (Value): Map of {@see SignedMoney}. Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. Shape $.* (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, SignedMoney>
     */
    public function getPendingBySourceType(): ?array { return $this->get('pending_by_source_type'); }
    public function hasPendingBySourceType(): bool { return $this->has('pending_by_source_type'); }
    /** Shape $ (Value): {@see SignedMoney}. Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getPendingMoney(): SignedMoney { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReserveMoney(): MoneyValue { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
}
