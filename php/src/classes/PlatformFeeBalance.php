<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $available_money
 * @property-read string $currency
 * @property-read ?string $next_payout_at
 * @property-read string $partner_app_id
 * @property-read ?string $payouts_disabled_reason
 * @property-read bool $payouts_enabled
 * @property-read MoneyValue $pending_money
 * @property-read string $platform_fee_balance_id
 * @property-read MoneyValue $reserve_money
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeBalance extends Model {
    /** @param array{'available_money': mixed, 'currency': string, 'next_payout_at'?: string, 'partner_app_id': string, 'payouts_disabled_reason'?: string, 'payouts_enabled': bool, 'pending_money': mixed, 'platform_fee_balance_id': string, 'reserve_money': mixed, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalance')); }
    /** Fees Flint holds as available funds, net of the reserve. It can be negative: a fee returned after payout is owed back from your next fees. available_money plus pending_money equals the sum of amount_money over the app's balance transactions in this currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAvailableMoney(): MoneyValue { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** ISO 4217 currency code of every amount on the balance. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** The next scheduled payout run. Absent until scheduled. Format: date-time.
     * @return ?string
     */
    public function getNextPayoutAt(): ?string { return $this->get('next_payout_at'); }
    public function hasNextPayoutAt(): bool { return $this->has('next_payout_at'); }
    /** The partner app the balance belongs to.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Why payouts wait. Present only when payouts_enabled is false. Can gain values. Value enum: "platform_paused", "merchant_payouts_unavailable".
     * @return ?string
     */
    public function getPayoutsDisabledReason(): ?string { return $this->get('payouts_disabled_reason'); }
    public function hasPayoutsDisabledReason(): bool { return $this->has('payouts_disabled_reason'); }
    /** Whether your platform and merchant account can receive payouts. Flint deferring a run for cash safety doesn't disable payouts.
     * @return bool
     */
    public function getPayoutsEnabled(): bool { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** Fees Flint hasn't received as available funds yet, net of their reserve holds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getPendingMoney(): MoneyValue { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** Unique identifier for the balance.
     * @return string
     */
    public function getPlatformFeeBalanceId(): string { return $this->get('platform_fee_balance_id'); }
    public function hasPlatformFeeBalanceId(): bool { return $this->has('platform_fee_balance_id'); }
    /** What Flint holds in your reserve now: reserve holds minus releases. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getReserveMoney(): MoneyValue { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
    /** When the balance last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
