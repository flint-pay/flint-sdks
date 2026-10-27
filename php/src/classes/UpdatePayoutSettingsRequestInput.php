<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $default_payout_destinations
 * @property-read int|null $delay_days_override
 * @property-read string $interval
 * @property-read array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass $minimum_balance_by_currency
 * @property-read list<int> $monthly_payout_days
 * @property-read string|null $statement_descriptor
 * @property-read list<string> $weekly_payout_days
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePayoutSettingsRequestInput extends Model {
    /** @param array{'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days_override'?: int|null, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePayoutSettingsRequestInput')); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When default_payout_destinations is omitted; use hasDefaultPayoutDestinations() or valueOrDefault().
     */
    public function getDefaultPayoutDestinations(): array|object { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Shape $ (Value): integer or null. Format: int32.
     * @return int|null
     * @throws SdkError When delay_days_override is omitted; use hasDelayDaysOverride() or valueOrDefault().
     */
    public function getDelayDaysOverride(): int|null { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Shape $ (Value): string.  Value enum: "manual", "daily", "weekly", "monthly".
     * @return string
     * @throws SdkError When interval is omitted; use hasInterval() or valueOrDefault().
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Shape $ (Value): Map of ({@see MoneyValueInput} or null). Shape $.* (Value): {@see MoneyValueInput} or null. Shape $.*.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.*.anyOf[2] (Value): null.
     * @return array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass
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
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Shape $ (Value): Array of string. Weekdays on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, and friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday". Shape $[] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday".
     * @return list<string>
     * @throws SdkError When weekly_payout_days is omitted; use hasWeeklyPayoutDays() or valueOrDefault().
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
