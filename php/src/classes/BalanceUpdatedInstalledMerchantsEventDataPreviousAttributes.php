<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, SignedMoneyPreviousAttributes>|null $available_by_source_type
 * @property-read mixed $available_money
 * @property-read string|null $balance_id
 * @property-read string|null $currency
 * @property-read mixed $held_money
 * @property-read string|null $merchant_id
 * @property-read string|null $observed_at
 * @property-read bool|null $payouts_enabled
 * @property-read array<array-key, SignedMoneyPreviousAttributes>|null $pending_by_source_type
 * @property-read mixed $pending_money
 * @property-read mixed $reserve_money
 * Presence-aware response; omitted optional fields return null. */
final class BalanceUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'available_by_source_type'?: mixed, 'available_money'?: mixed, 'balance_id'?: mixed, 'currency'?: mixed, 'held_money'?: mixed, 'merchant_id'?: mixed, 'observed_at'?: mixed, 'payouts_enabled'?: mixed, 'pending_by_source_type'?: mixed, 'pending_money'?: mixed, 'reserve_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Signed available amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to available_money. Active payout holds reduce both available_money and one source entry by the same amount. A payout with no recorded source type uses card. A hold whose source is absent from the map uses the largest source amount, with ties broken by source name. anyOf[1] (Value): Map of {@see SignedMoneyPreviousAttributes}. anyOf[1].* (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, SignedMoneyPreviousAttributes>|null
     */
    public function getAvailableBySourceType(): array|null { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** Signed amount available for payouts after active payout holds are deducted. Separate from pending_money, reserve_money, and held_money. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Stable identifier of this currency's balance. anyOf[1] (Value): string. Stable identifier of this currency's balance. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBalanceId(): string|null { return $this->get('balance_id'); }
    public function hasBalanceId(): bool { return $this->has('balance_id'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Funds set aside for payouts you created that haven't been debited from your balance yet. They aren't payable and aren't included in `available_money`. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getHeldMoney(): mixed { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** Merchant whose balance this is. anyOf[1] (Value): string. Merchant whose balance this is. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. anyOf[1] (Value): string. When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their observation time; a fresh provider read uses the time of that read. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getObservedAt(): string|null { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. anyOf[1] (Value): boolean. Whether payouts are ready for this balance currency, including an active default payout destination and account readiness. While it is false, payments can still succeed, and their funds wait in your balance. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getPayoutsEnabled(): bool|null { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use card and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These amounts are separate from available_by_source_type. anyOf[1] (Value): Map of {@see SignedMoneyPreviousAttributes}. anyOf[1].* (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, SignedMoneyPreviousAttributes>|null
     */
    public function getPendingBySourceType(): array|null { return $this->get('pending_by_source_type'); }
    public function hasPendingBySourceType(): bool { return $this->has('pending_by_source_type'); }
    /** Signed amount awaiting availability. Separate from available_money; pending_by_source_type breaks down this amount when source details are supplied. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPendingMoney(): mixed { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** Amount held in reserve. It doesn't overlap available_money or held_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReserveMoney(): mixed { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
}
