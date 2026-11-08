<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $arrival_date
 * @property-read string $balance_source_type
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read string $method
 * @property-read string $payout_destination_id
 * @property-read string $payout_id
 * @property-read string $reversal_status
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPayoutSummaryInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPayoutSummaryInput')); }
    /** Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When arrival_date is omitted; use hasArrivalDate() or valueOrDefault().
     */
    public function getArrivalDate(): string { return $this->get('arrival_date'); }
    public function hasArrivalDate(): bool { return $this->has('arrival_date'); }
    /** Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account".
     * @return string
     * @throws SdkError When balance_source_type is omitted; use hasBalanceSourceType() or valueOrDefault().
     */
    public function getBalanceSourceType(): string { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other".
     * @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. Example: "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Unique identifier for this payout, prefixed `po_`. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Value enum: "none", "reversed".
     * @return string
     * @throws SdkError When reversal_status is omitted; use hasReversalStatus() or valueOrDefault().
     */
    public function getReversalStatus(): string { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. [] enum: "cancel". [] (Value): string.  Value enum: "cancel".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
