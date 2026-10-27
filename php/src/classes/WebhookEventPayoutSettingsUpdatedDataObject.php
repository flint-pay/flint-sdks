<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyMovementBlockedReason> $blocked_reasons
 * @property-read string|null $created_at
 * @property-read ?array<array-key, string> $default_payout_destinations
 * @property-read int $delay_days
 * @property-read ?int $delay_days_override
 * @property-read string $interval
 * @property-read string $merchant_id
 * @property-read ?array<array-key, MoneyValue> $minimum_balance_by_currency
 * @property-read list<int> $monthly_payout_days
 * @property-read list<NextAction> $next_actions
 * @property-read string $payout_settings_id
 * @property-read ?string $statement_descriptor
 * @property-read string $status
 * @property-read string|null $updated_at
 * @property-read list<string> $weekly_payout_days
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutSettingsUpdatedDataObject extends Model {
    /** @param array{'blocked_reasons': list<mixed>, 'created_at': string|null, 'default_payout_destinations'?: \stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_by_currency'?: \stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<mixed>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|null, 'weekly_payout_days': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutSettingsUpdatedDataObject')); }
    /** Shape $ (Value): Array of {@see MoneyMovementBlockedReason}. Shape $[] (Value): {@see MoneyMovementBlockedReason}. Why a money movement action is blocked, with an error code, a message, next steps, and who can resolve it.
     * @return list<MoneyMovementBlockedReason>
     */
    public function getBlockedReasons(): array { return $this->get('blocked_reasons'); }
    public function hasBlockedReasons(): bool { return $this->has('blocked_reasons'); }
    /** Shape $ (Value): string or null. When Flint stored the payout settings record, as an RFC 3339 UTC instant at second precision. Null when no stored settings record exists. Format: date-time.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getDefaultPayoutDestinations(): ?array { return $this->get('default_payout_destinations'); }
    public function hasDefaultPayoutDestinations(): bool { return $this->has('default_payout_destinations'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getDelayDays(): int { return $this->get('delay_days'); }
    public function hasDelayDays(): bool { return $this->has('delay_days'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getDelayDaysOverride(): ?int { return $this->get('delay_days_override'); }
    public function hasDelayDaysOverride(): bool { return $this->has('delay_days_override'); }
    /** Shape $ (Value): string. Payout schedule interval. Unmapped intervals are returned as other. Value enum: "manual", "daily", "weekly", "monthly", "other".
     * @return string
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of {@see MoneyValue}. Shape $.* (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?array<array-key, MoneyValue>
     */
    public function getMinimumBalanceByCurrency(): ?array { return $this->get('minimum_balance_by_currency'); }
    public function hasMinimumBalanceByCurrency(): bool { return $this->has('minimum_balance_by_currency'); }
    /** Shape $ (Value): Array of integer. Shape $[] (Value): integer. Format: int32.
     * @return list<int>
     */
    public function getMonthlyPayoutDays(): array { return $this->get('monthly_payout_days'); }
    public function hasMonthlyPayoutDays(): bool { return $this->has('monthly_payout_days'); }
    /** Shape $ (Value): Array of {@see NextAction}. Shape $[] (Value): {@see NextAction}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.
     * @return list<NextAction>
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPayoutSettingsId(): string { return $this->get('payout_settings_id'); }
    public function hasPayoutSettingsId(): bool { return $this->has('payout_settings_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getStatementDescriptor(): ?string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Shape $ (Value): string.  Value enum: "enabled", "disabled", "blocked", "pending".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. When the stored payout settings record was last updated, as an RFC 3339 UTC instant at second precision. Without a stored record, this is the provider's update time when supplied, otherwise null. Format: date-time.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): Array of string. Days of the week on which weekly payouts are sent. Allowed values are monday, tuesday, wednesday, thursday, friday, saturday, and sunday. [] enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday". Shape $[] (Value): string.  Value enum: "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday".
     * @return list<string>
     */
    public function getWeeklyPayoutDays(): array { return $this->get('weekly_payout_days'); }
    public function hasWeeklyPayoutDays(): bool { return $this->has('weekly_payout_days'); }
}
