<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass> $blocked_reasons
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read array<array-key, string>|\stdClass $default_payout_destinations
 * @property-read int $delay_days
 * @property-read int $delay_days_override
 * @property-read string $interval
 * @property-read string $merchant_id
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_balance_by_currency
 * @property-read list<int> $monthly_payout_days
 * @property-read list<NextActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string $payout_settings_id
 * @property-read string $statement_descriptor
 * @property-read string $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read list<string> $weekly_payout_days
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutSettingsInput extends Model {
    /** @param array{'blocked_reasons': list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface|null, 'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<NextActionInput|array<array-key, mixed>|\stdClass>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|\DateTimeInterface|null, 'weekly_payout_days': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsInput')); }
    /** Shape $ (Value): Array of {@see MoneyMovementBlockedReasonInput}. Shape $[] (Value): {@see MoneyMovementBlockedReasonInput}. Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it.
     * @return list<MoneyMovementBlockedReasonInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When blocked_reasons is omitted; use hasBlockedReasons() or valueOrDefault().
     */
    public function getBlockedReasons(): array { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** Shape $ (Value): string or null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When default_payout_destinations is omitted; use hasDefaultPayoutDestinations() or valueOrDefault().
     */
    public function getDefaultPayoutDestinations(): array|object { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When delay_days is omitted; use hasDelayDays() or valueOrDefault().
     */
    public function getDelayDays(): int { return $this->get('delay_days'); }
    public function hasDelayDays(): bool { return $this->has('delay_days'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When delay_days_override is omitted; use hasDelayDaysOverride() or valueOrDefault().
     */
    public function getDelayDaysOverride(): int { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Shape $ (Value): string. Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * @return string
     * @throws SdkError When interval is omitted; use hasInterval() or valueOrDefault().
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of {@see MoneyValueInput}. Shape $.* (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_balance_by_currency is omitted; use hasMinimumBalanceByCurrency() or valueOrDefault().
     */
    public function getMinimumBalanceByCurrency(): array|object { return $this->get('minimum_balance_by_currency'); }
    public function hasMinimumBalanceByCurrency(): bool { return $this->has('minimum_balance_by_currency'); }
    /** Shape $ (Value): Array of integer. Shape $[] (Value): integer. Format: int32.
     * @return list<int>
     * @throws SdkError When monthly_payout_days is omitted; use hasMonthlyPayoutDays() or valueOrDefault().
     */
    public function getMonthlyPayoutDays(): array { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** Shape $ (Value): Array of {@see NextActionInput}. Shape $[] (Value): {@see NextActionInput}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.
     * @return list<NextActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payout_settings_id is omitted; use hasPayoutSettingsId() or valueOrDefault().
     */
    public function getPayoutSettingsId(): string { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Shape $ (Value): string.  Value enum: "enabled", "disabled", "blocked", "pending".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's update time when supplied, otherwise null. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): Array of string. Days of the week on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". Shape $[] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * @return list<string>
     * @throws SdkError When weekly_payout_days is omitted; use hasWeeklyPayoutDays() or valueOrDefault().
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
