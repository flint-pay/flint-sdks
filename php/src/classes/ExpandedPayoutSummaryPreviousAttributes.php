<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $arrival_date
 * @property-read string|null $balance_source_type
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $method
 * @property-read string|null $payout_destination_id
 * @property-read string|null $payout_id
 * @property-read string|null $reversal_status
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPayoutSummaryPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'arrival_date'?: mixed, 'balance_source_type'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'method'?: mixed, 'payout_destination_id'?: mixed, 'payout_id'?: mixed, 'reversal_status'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPayoutSummaryPreviousAttributes')); }
    /** Amount sent to your bank. Always positive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. anyOf[1] (Value): string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getArrivalDate(): string|null { return $this->get('arrival_date'); }
    public function hasArrivalDate(): bool { return $this->has('arrival_date'); }
    /** Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account". anyOf[1] (Value): string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBalanceSourceType(): string|null { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other". anyOf[1] (Value): string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMethod(): string|null { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. anyOf[1] (Value): string. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutDestinationId(): string|null { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Unique identifier for this payout, prefixed `po_`. anyOf[1] (Value): string. Unique identifier for this payout, prefixed `po_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutId(): string|null { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Value enum: "none", "reversed". anyOf[1] (Value): string. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Value enum: "none", "reversed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversalStatus(): string|null { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[1] (Value): string. Where the payout is: pending until it is sent, in_transit on its way to your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
