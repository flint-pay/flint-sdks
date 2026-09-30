<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReason> $blocked_reasons
 * @property-read string $created_at
 * @property-read array<array-key, string> $default_payout_destinations
 * @property-read int $delay_days
 * @property-read int $delay_days_override
 * @property-read string $interval
 * @property-read string $merchant_id
 * @property-read array<array-key, MoneyValue> $minimum_balance_by_currency
 * @property-read list<int> $monthly_payout_days
 * @property-read list<NextAction> $next_actions
 * @property-read string $payout_settings_id
 * @property-read string $statement_descriptor
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read list<string> $weekly_payout_days
 * Presence-aware response; omitted fields throw when accessed. */
final class PayoutSettings extends Model {
    /** @param array{'blocked_reasons'?: list<mixed>, 'created_at': string, 'default_payout_destinations'?: \stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: \stdClass, 'monthly_payout_days'?: list<int>, 'next_actions'?: list<mixed>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string, 'weekly_payout_days'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettings')); }
    /** @return list<MoneyMovementBlockedReason>
     * @throws SdkError When blocked_reasons is omitted; use hasBlockedReasons() or valueOrDefault().
     */
    public function getBlockedReasons(): array { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return array<array-key, string>
     * @throws SdkError When default_payout_destinations is omitted; use hasDefaultPayoutDestinations() or valueOrDefault().
     */
    public function getDefaultPayoutDestinations(): array { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** @return int
     * @throws SdkError When delay_days is omitted; use hasDelayDays() or valueOrDefault().
     */
    public function getDelayDays(): int { return $this->get('delay_days'); }
    public function hasDelayDays(): bool { return $this->has('delay_days'); }
    /** @return int
     * @throws SdkError When delay_days_override is omitted; use hasDelayDaysOverride() or valueOrDefault().
     */
    public function getDelayDaysOverride(): int { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** @return string
     * @throws SdkError When interval is omitted; use hasInterval() or valueOrDefault().
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, MoneyValue>
     * @throws SdkError When minimum_balance_by_currency is omitted; use hasMinimumBalanceByCurrency() or valueOrDefault().
     */
    public function getMinimumBalanceByCurrency(): array { return $this->get('minimum_balance_by_currency'); }
    public function hasMinimumBalanceByCurrency(): bool { return $this->has('minimum_balance_by_currency'); }
    /** @return list<int>
     * @throws SdkError When monthly_payout_days is omitted; use hasMonthlyPayoutDays() or valueOrDefault().
     */
    public function getMonthlyPayoutDays(): array { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** @return list<NextAction>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string
     * @throws SdkError When payout_settings_id is omitted; use hasPayoutSettingsId() or valueOrDefault().
     */
    public function getPayoutSettingsId(): string { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
    /** @return string
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return list<string>
     * @throws SdkError When weekly_payout_days is omitted; use hasWeeklyPayoutDays() or valueOrDefault().
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
