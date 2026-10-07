<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, SignedMoney> $available_by_source_type
 * @property-read SignedMoney $available_money
 * @property-read string $balance_id
 * @property-read string $currency
 * @property-read array<array-key, MoneyValue> $held_by_type
 * @property-read MoneyValue $held_money
 * @property-read string $merchant_id
 * @property-read bool $payouts_enabled
 * @property-read array<array-key, SignedMoney> $pending_by_source_type
 * @property-read SignedMoney $pending_money
 * @property-read MoneyValue $reserve_money
 * @property-read MoneyValue $unavailable_money
 * Presence-aware response; omitted fields throw when accessed. */
final class Balance extends Model {
    /** @param array{'available_by_source_type'?: \stdClass, 'available_money': mixed, 'balance_id': string, 'currency': string, 'held_by_type'?: \stdClass, 'held_money': mixed, 'merchant_id': string, 'payouts_enabled': bool, 'pending_by_source_type'?: \stdClass, 'pending_money': mixed, 'reserve_money': mixed, 'unavailable_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Balance')); }
    /** @return array<array-key, SignedMoney>
     * @throws SdkError When available_by_source_type is omitted; use hasAvailableBySourceType() or valueOrDefault().
     */
    public function getAvailableBySourceType(): array { return $this->get('available_by_source_type'); }
    public function hasAvailableBySourceType(): bool { return $this->has('available_by_source_type'); }
    /** @return SignedMoney
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): SignedMoney { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** @return string
     * @throws SdkError When balance_id is omitted; use hasBalanceId() or valueOrDefault().
     */
    public function getBalanceId(): string { return $this->get('balance_id'); }
    public function hasBalanceId(): bool { return $this->has('balance_id'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When held_by_type is omitted; use hasHeldByType() or valueOrDefault().
     */
    public function getHeldByType(): array { return $this->get('held_by_type'); }
    public function hasHeldByType(): bool { return $this->has('held_by_type'); }
    /** @return MoneyValue
     * @throws SdkError When held_money is omitted; use hasHeldMoney() or valueOrDefault().
     */
    public function getHeldMoney(): MoneyValue { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return bool
     * @throws SdkError When payouts_enabled is omitted; use hasPayoutsEnabled() or valueOrDefault().
     */
    public function getPayoutsEnabled(): bool { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** @return array<array-key, SignedMoney>
     * @throws SdkError When pending_by_source_type is omitted; use hasPendingBySourceType() or valueOrDefault().
     */
    public function getPendingBySourceType(): array { return $this->get('pending_by_source_type'); }
    public function hasPendingBySourceType(): bool { return $this->has('pending_by_source_type'); }
    /** @return SignedMoney
     * @throws SdkError When pending_money is omitted; use hasPendingMoney() or valueOrDefault().
     */
    public function getPendingMoney(): SignedMoney { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** @return MoneyValue
     * @throws SdkError When reserve_money is omitted; use hasReserveMoney() or valueOrDefault().
     */
    public function getReserveMoney(): MoneyValue { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
    /** @return MoneyValue
     * @throws SdkError When unavailable_money is omitted; use hasUnavailableMoney() or valueOrDefault().
     */
    public function getUnavailableMoney(): MoneyValue { return $this->get('unavailable_money'); }
    public function hasUnavailableMoney(): bool { return $this->has('unavailable_money'); }
}
