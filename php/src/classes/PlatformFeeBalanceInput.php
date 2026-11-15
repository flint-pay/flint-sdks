<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $available_money
 * @property-read string $currency
 * @property-read string|\DateTimeInterface $next_payout_at
 * @property-read string $partner_app_id
 * @property-read string $payouts_disabled_reason
 * @property-read bool $payouts_enabled
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $pending_money
 * @property-read string $platform_fee_balance_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $reserve_money
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeBalanceInput extends Model {
    /** @param array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'currency': string, 'next_payout_at'?: string|\DateTimeInterface, 'partner_app_id': string, 'payouts_disabled_reason'?: string, 'payouts_enabled': bool, 'pending_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'platform_fee_balance_id': string, 'reserve_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalanceInput')); }
    /** Fees Flint holds as available funds, net of the reserve. It can be negative: a fee returned after payout is owed back from your next fees. available_money plus pending_money equals the sum of amount_money over the app's balance transactions in this currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_money is omitted; use hasAvailableMoney() or valueOrDefault().
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** ISO 4217 currency code of every amount on the balance. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** The next scheduled payout run. Absent until scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When next_payout_at is omitted; use hasNextPayoutAt() or valueOrDefault().
     */
    public function getNextPayoutAt(): string|\DateTimeInterface { return $this->get('next_payout_at'); }
    public function hasNextPayoutAt(): bool { return $this->has('next_payout_at'); }
    /** The partner app the balance belongs to. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Why payouts wait. Present only when payouts_enabled is false. Can gain values. Value enum: "platform_paused", "merchant_payouts_unavailable".
     * @return string
     * @throws SdkError When payouts_disabled_reason is omitted; use hasPayoutsDisabledReason() or valueOrDefault().
     */
    public function getPayoutsDisabledReason(): string { return $this->get('payouts_disabled_reason'); }
    public function hasPayoutsDisabledReason(): bool { return $this->has('payouts_disabled_reason'); }
    /** Whether your platform and merchant account can receive payouts. Flint deferring a run for cash safety doesn't disable payouts.
     * @return bool
     * @throws SdkError When payouts_enabled is omitted; use hasPayoutsEnabled() or valueOrDefault().
     */
    public function getPayoutsEnabled(): bool { return $this->get('payouts_enabled'); }
    public function hasPayoutsEnabled(): bool { return $this->has('payouts_enabled'); }
    /** Fees Flint hasn't received as available funds yet, net of their reserve holds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pending_money is omitted; use hasPendingMoney() or valueOrDefault().
     */
    public function getPendingMoney(): mixed { return $this->get('pending_money'); }
    public function hasPendingMoney(): bool { return $this->has('pending_money'); }
    /** Unique identifier for the balance. Example: "pfbal_01KEZF7C005QNZBGFAR0NNPEQ4".
     * @return string
     * @throws SdkError When platform_fee_balance_id is omitted; use hasPlatformFeeBalanceId() or valueOrDefault().
     */
    public function getPlatformFeeBalanceId(): string { return $this->get('platform_fee_balance_id'); }
    public function hasPlatformFeeBalanceId(): bool { return $this->has('platform_fee_balance_id'); }
    /** What Flint holds in your reserve now: reserve holds minus releases. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reserve_money is omitted; use hasReserveMoney() or valueOrDefault().
     */
    public function getReserveMoney(): mixed { return $this->get('reserve_money'); }
    public function hasReserveMoney(): bool { return $this->has('reserve_money'); }
    /** When the balance last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
