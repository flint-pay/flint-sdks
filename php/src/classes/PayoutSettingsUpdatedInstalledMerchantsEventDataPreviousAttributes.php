<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReasonPreviousAttributes>|null $blocked_reasons
 * @property-read string|null $created_at
 * @property-read array<array-key, string>|null $default_payout_destinations
 * @property-read int|null $delay_days
 * @property-read int|null $delay_days_override
 * @property-read string|null $interval
 * @property-read string|null $merchant_id
 * @property-read array<array-key, MoneyValuePreviousAttributes>|null $minimum_balance_currency_options
 * @property-read list<int>|null $monthly_payout_days
 * @property-read list<NextActionPreviousAttributes>|null $next_actions
 * @property-read string|null $payout_settings_id
 * @property-read string|null $statement_descriptor
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read list<string>|null $weekly_payout_days
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'blocked_reasons'?: mixed, 'created_at'?: mixed, 'default_payout_destinations'?: mixed, 'delay_days'?: mixed, 'delay_days_override'?: mixed, 'interval'?: mixed, 'merchant_id'?: mixed, 'minimum_balance_currency_options'?: mixed, 'monthly_payout_days'?: mixed, 'next_actions'?: mixed, 'payout_settings_id'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'weekly_payout_days'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Why payouts can't run. Empty when nothing blocks them. anyOf[1] (Value): Array of {@see MoneyMovementBlockedReasonPreviousAttributes}. Why payouts can't run. Empty when nothing blocks them. anyOf[1][] (Value): {@see MoneyMovementBlockedReasonPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MoneyMovementBlockedReasonPreviousAttributes>|null
     */
    public function getBlockedReasons(): array|null { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. anyOf[1] (Value): string. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. anyOf[1] (Value): Map of string. anyOf[1].* (Value): string. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getDefaultPayoutDestinations(): array|null { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. anyOf[1] (Value): integer. Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDelayDays(): int|null { return $this->get('delay_days'); }
    public function hasDelayDays(): bool { return $this->has('delay_days'); }
    /** Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. anyOf[1] (Value): integer. Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDelayDaysOverride(): int|null { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other". anyOf[1] (Value): string. Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInterval(): string|null { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Merchant these settings belong to. anyOf[1] (Value): string. Merchant these settings belong to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. anyOf[1] (Value): Map of {@see MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, MoneyValuePreviousAttributes>|null
     */
    public function getMinimumBalanceCurrencyOptions(): array|null { return $this->get('minimum_balance_currency_options'); }
    public function hasMinimumBalanceCurrencyOptions(): bool { return $this->has('minimum_balance_currency_options'); }
    /** Days of the month, 1 through 31, on which monthly payouts are sent. anyOf[1] (Value): Array of integer. Days of the month, 1 through 31, on which monthly payouts are sent. anyOf[1][] (Value): integer. Format: int32. anyOf[2] (Value): null.
     * @return list<int>|null
     */
    public function getMonthlyPayoutDays(): array|null { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. anyOf[1] (Value): Array of {@see NextActionPreviousAttributes}. Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. anyOf[1][] (Value): {@see NextActionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<NextActionPreviousAttributes>|null
     */
    public function getNextActions(): array|null { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Stable identifier of your payout settings. anyOf[1] (Value): string. Stable identifier of your payout settings. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutSettingsId(): string|null { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
    /** Text shown on your bank statement for payouts. Absent when none is set. anyOf[1] (Value): string. Text shown on your bank statement for payouts. Absent when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum: "enabled", "disabled", "blocked", "pending". anyOf[1] (Value): string. Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum: "enabled", "disabled", "blocked", "pending". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. anyOf[1] (Value): string. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". anyOf[1] (Value): Array of string. Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". anyOf[1][] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getWeeklyPayoutDays(): array|null { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
