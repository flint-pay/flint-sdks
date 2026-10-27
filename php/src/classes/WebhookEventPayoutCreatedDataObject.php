<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $arrival_date
 * @property-read string $balance_source_type
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read ?string $failure_code
 * @property-read ?string $failure_message
 * @property-read string $fee_amount_status
 * @property-read MoneyValue|null $fee_money
 * @property-read string $initiated_by
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $method
 * @property-read SignedMoney|null $net_money
 * @property-read ExpandedPayoutSummary|null $original_payout
 * @property-read ?string $original_payout_id
 * @property-read ExpandedPayoutDestinationSummary|null $payout_destination
 * @property-read ?string $payout_destination_id
 * @property-read string $payout_id
 * @property-read string $reversal_status
 * @property-read ExpandedPayoutSummary|null $reversed_by_payout
 * @property-read ?string $reversed_by_payout_id
 * @property-read ?string $statement_descriptor
 * @property-read string $status
 * @property-read ?PayoutTraceID $trace_id
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutCreatedDataObject extends Model {
    /** @param array{'amount_money': mixed, 'arrival_date'?: string, 'balance_source_type': string, 'created_at': string, 'currency': string, 'description'?: string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fee_amount_status': string, 'fee_money': mixed, 'initiated_by': string, 'merchant_id': string, 'metadata'?: \stdClass, 'method': string, 'net_money': mixed, 'original_payout'?: mixed, 'original_payout_id'?: string, 'payout_destination'?: mixed, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'reversed_by_payout'?: mixed, 'reversed_by_payout_id'?: string, 'statement_descriptor'?: string, 'status': string, 'trace_id'?: mixed, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutCreatedDataObject')); }
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
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Value enum: "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name", "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card", "payout_failed".
     * @return ?string
     */
    public function getFailureCode(): ?string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Shape $ (Value): string. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message.
     * @return ?string
     */
    public function getFailureMessage(): ?string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** Shape $ (Value): string. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * @return string
     */
    public function getFeeAmountStatus(): string { return $this->get('fee_amount_status'); }
    public function hasFeeAmountStatus(): bool { return $this->has('fee_amount_status'); }
    /** Shape $ (Value): {@see MoneyValue} or null. Shape $.anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getFeeMoney(): MoneyValue|null { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** Shape $ (Value): string. What started the payout. Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform", "other".
     * @return string
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Value enum: "standard", "instant", "other".
     * @return string
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): {@see SignedMoney} or null. Shape $.anyOf[1] (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return SignedMoney|null
     */
    public function getNetMoney(): SignedMoney|null { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** Shape $ (Value): {@see ExpandedPayoutSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPayoutSummary|null
     */
    public function getOriginalPayout(): ExpandedPayoutSummary|null { return $this->get('original_payout'); }
    public function hasOriginalPayout(): bool { return $this->has('original_payout'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOriginalPayoutId(): ?string { return $this->get('original_payout_id'); }
    public function hasOriginalPayoutId(): bool { return $this->has('original_payout_id'); }
    /** Shape $ (Value): {@see ExpandedPayoutDestinationSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPayoutDestinationSummary}. A payout destination's summary fields, such as type, bank name, last four digits, and status, returned when the destination is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPayoutDestinationSummary|null
     */
    public function getPayoutDestination(): ExpandedPayoutDestinationSummary|null { return $this->get('payout_destination'); }
    public function hasPayoutDestination(): bool { return $this->has('payout_destination'); }
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
    /** Shape $ (Value): {@see ExpandedPayoutSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPayoutSummary|null
     */
    public function getReversedByPayout(): ExpandedPayoutSummary|null { return $this->get('reversed_by_payout'); }
    public function hasReversedByPayout(): bool { return $this->has('reversed_by_payout'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReversedByPayoutId(): ?string { return $this->get('reversed_by_payout_id'); }
    public function hasReversedByPayoutId(): bool { return $this->has('reversed_by_payout_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getStatementDescriptor(): ?string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Shape $ (Value): string.  Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see PayoutTraceID}. A payout's bank trace ID, with whether it is pending, available, or unsupported.
     * @return ?PayoutTraceID
     */
    public function getTraceId(): ?PayoutTraceID { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
