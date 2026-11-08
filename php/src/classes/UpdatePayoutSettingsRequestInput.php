<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $default_payout_destinations
 * @property-read int|null $delay_days_override
 * @property-read int $expected_version
 * @property-read string $interval
 * @property-read array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass $minimum_balance_currency_options
 * @property-read list<int> $monthly_payout_days
 * @property-read string|null $statement_descriptor
 * @property-read list<string> $weekly_payout_days
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePayoutSettingsRequestInput extends Model {
    /** @param array{'default_payout_destinations'?: array<array-key, string>|\stdClass, 'delay_days_override'?: int|null, 'expected_version'?: int, 'interval'?: string, 'minimum_balance_currency_options'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePayoutSettingsRequestInput')); }
    /** Makes each listed destination the default for its currency, keyed by currency code. Currencies you leave out keep their default. Each destination must be `active` and in that currency. A currency's default can't be removed, only replaced, so values can't be null. Requires expected_version. maxProperties: 20. * (Value): string. minLength: 1. pattern: ^pdest_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When default_payout_destinations is omitted; use hasDefaultPayoutDestinations() or valueOrDefault().
     */
    public function getDefaultPayoutDestinations(): array|object { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Days, 0 through 31, a payment stays pending before its funds become available, in place of the account's default. Send null to go back to the default. Format: int32.
     * @return int|null
     * @throws SdkError When delay_days_override is omitted; use hasDelayDaysOverride() or valueOrDefault().
     */
    public function getDelayDaysOverride(): int|null { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Expected version of the payout settings. Required when sending default_payout_destinations, minimum_balance_currency_options, monthly_payout_days, or weekly_payout_days, including empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and monthly need their day list in the same request. Value enum: "manual", "daily", "weekly", "monthly".
     * @return string
     * @throws SdkError When interval is omitted; use hasInterval() or valueOrDefault().
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Amount to keep in your balance instead of paying it out, keyed by currency code. Each value's currency must match its key and its amount can't be negative. Set a currency to null to remove its minimum. * (Value): {@see MoneyValueInput} or null. *.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. *.anyOf[2] (Value): null.
     * @return array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass
     * @throws SdkError When minimum_balance_currency_options is omitted; use hasMinimumBalanceCurrencyOptions() or valueOrDefault().
     */
    public function getMinimumBalanceCurrencyOptions(): array|object { return $this->get('minimum_balance_currency_options'); }
    public function hasMinimumBalanceCurrencyOptions(): bool { return $this->has('minimum_balance_currency_options'); }
    /** Days of the month, 1 through 31, on which monthly payouts are sent. Send it with interval monthly; it is rejected with any other interval. [] (Value): integer. Format: int32.
     * @return list<int>
     * @throws SdkError When monthly_payout_days is omitted; use hasMonthlyPayoutDays() or valueOrDefault().
     */
    public function getMonthlyPayoutDays(): array { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** Text shown on your bank statement for payouts, 22 characters or fewer. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Weekdays on which weekly payouts are sent, monday through friday. Send it with interval weekly; it is rejected with any other interval. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday". [] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday".
     * @return list<string>
     * @throws SdkError When weekly_payout_days is omitted; use hasWeeklyPayoutDays() or valueOrDefault().
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
