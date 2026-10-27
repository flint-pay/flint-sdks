<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $arrival_date
 * @property-read string $balance_source_type
 * @property-read ?string $created_at
 * @property-read string $currency
 * @property-read string $method
 * @property-read ?string $payout_destination_id
 * @property-read string $payout_id
 * @property-read string $reversal_status
 * @property-read string $status
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPayoutSummary extends Model {
    /** @param array{'amount_money': mixed, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPayoutSummary')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     * @return ?string
     */
    public function getArrivalDate(): ?string { return $this->get('arrival_date'); }
    public function hasArrivalDate(): bool { return $this->has('arrival_date'); }
    /** Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account".
     * @return string
     */
    public function getBalanceSourceType(): string { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Value enum: "standard", "instant", "other".
     * @return string
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPayoutDestinationId(): ?string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Shape $ (Value): string.  Value enum: "none", "reversing", "reversed".
     * @return string
     */
    public function getReversalStatus(): string { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** Shape $ (Value): string.  Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
