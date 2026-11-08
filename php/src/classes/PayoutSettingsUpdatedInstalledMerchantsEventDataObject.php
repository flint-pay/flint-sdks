<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReason> $blocked_reasons
 * @property-read string|null $created_at
 * @property-read array<array-key, string> $default_payout_destinations
 * @property-read int $delay_days
 * @property-read ?int $delay_days_override
 * @property-read string $interval
 * @property-read string $merchant_id
 * @property-read ?array<array-key, MoneyValue> $minimum_balance_currency_options
 * @property-read list<int> $monthly_payout_days
 * @property-read list<NextAction> $next_actions
 * @property-read string $payout_settings_id
 * @property-read ?string $statement_descriptor
 * @property-read string $status
 * @property-read string|null $updated_at
 * @property-read int $version
 * @property-read list<string> $weekly_payout_days
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsUpdatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'blocked_reasons': list<mixed>, 'created_at': string|null, 'default_payout_destinations': \stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: \stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<mixed>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|null, 'version': int, 'weekly_payout_days': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedInstalledMerchantsEventDataObject')); }
    /** Why payouts can't run. Empty when nothing blocks them. [] (Value): {@see MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it.
     * @return list<MoneyMovementBlockedReason>
     */
    public function getBlockedReasons(): array { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Default payout destination for each currency, as a map from currency code to payout_destination_id. Empty when no defaults are configured. Change a currency's default with `default_payout_destinations` on PATCH /v1/payout-settings, or in the payouts embedded component. * (Value): string.
     * @return array<array-key, string>
     */
    public function getDefaultPayoutDestinations(): array { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Normal settlement delay in days before a payment's funds become available to pay out. A new account's first payments can stay pending longer; each balance transaction's available_at is when its funds become available. Format: int32.
     * @return int
     */
    public function getDelayDays(): int { return $this->get('delay_days'); }
    public function hasDelayDays(): bool { return $this->has('delay_days'); }
    /** Settlement delay in days you set in place of the account's default, 0 through 31. It doesn't guarantee the pending time of every payment; see available_at on each balance transaction. Absent when none is set. Format: int32.
     * @return ?int
     */
    public function getDelayDaysOverride(): ?int { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * @return string
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Merchant these settings belong to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Amount kept in your balance instead of paid out, keyed by currency code. Absent when no minimum is set. * (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMinimumBalanceCurrencyOptions(): ?array { return $this->get('minimum_balance_currency_options'); }
    public function hasMinimumBalanceCurrencyOptions(): bool { return $this->has('minimum_balance_currency_options'); }
    /** Days of the month, 1 through 31, on which monthly payouts are sent. [] (Value): integer. Format: int32.
     * @return list<int>
     */
    public function getMonthlyPayoutDays(): array { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** Steps that would let payouts run, when Flint has one to suggest. Empty otherwise. [] (Value): {@see NextAction}. A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.
     * @return list<NextAction>
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Stable identifier of your payout settings.
     * @return string
     */
    public function getPayoutSettingsId(): string { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
    /** Text shown on your bank statement for payouts. Absent when none is set.
     * @return ?string
     */
    public function getStatementDescriptor(): ?string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Whether payouts can run: enabled, disabled, blocked, or pending. When it isn't enabled, blocked_reasons says why and next_actions lists any steps Flint can suggest. Value enum: "enabled", "disabled", "blocked", "pending".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is your processor's update time. `null` when there is no stored record and your processor supplied no update time. Format: date-time.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Days of the week weekly payouts are sent. Accounts set up outside Flint can report saturday or sunday; when you change the schedule, Flint accepts monday through friday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". [] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * @return list<string>
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
