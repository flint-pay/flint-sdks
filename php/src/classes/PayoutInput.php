<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $arrival_date
 * @property-read string $balance_source_type
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $currency
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string $fee_amount_status
 * @property-read array{'amount': string, 'currency': string}|object|null $fee_money
 * @property-read string $initiated_by
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $method
 * @property-read array{'amount': string, 'currency': string, ...}|object|null $net_money
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $original_payout
 * @property-read string $original_payout_id
 * @property-read array{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'default_for_currency': bool, 'last4'?: string, 'payout_destination_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null $payout_destination
 * @property-read string $payout_destination_id
 * @property-read string $payout_id
 * @property-read string $reversal_status
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $reversed_by_payout
 * @property-read string $reversed_by_payout_id
 * @property-read string $statement_descriptor
 * @property-read string $status
 * @property-read PayoutTraceIDInput|array<array-key, mixed>|\stdClass $trace_id
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at': string|\DateTimeInterface, 'currency': string, 'description'?: string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fee_amount_status': string, 'fee_money': array{'amount': string, 'currency': string}|object|null, 'initiated_by': string, 'merchant_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'method': string, 'net_money': array{'amount': string, 'currency': string, ...}|object|null, 'original_payout'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'original_payout_id'?: string, 'payout_destination'?: array{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'default_for_currency': bool, 'last4'?: string, 'payout_destination_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'reversed_by_payout'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'reversed_by_payout_id'?: string, 'statement_descriptor'?: string, 'status': string, 'trace_id'?: PayoutTraceIDInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount sent to your bank. Always positive. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Calendar date the bank is expected to receive the funds, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date.
     * @return string
     * @throws SdkError When arrival_date is omitted; use hasArrivalDate() or valueOrDefault().
     */
    public function getArrivalDate(): string { return $this->get('arrival_date'); }
    public function hasArrivalDate(): bool { return $this->has('arrival_date'); }
    /** Shape $ (Value): string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account".
     * @return string
     * @throws SdkError When balance_source_type is omitted; use hasBalanceSourceType() or valueOrDefault().
     */
    public function getBalanceSourceType(): string { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** Shape $ (Value): string. When the payout was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Description sent when the payout was created. Absent when there is none.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Value enum: "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name", "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card", "payout_failed".
     * @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Shape $ (Value): string. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message.
     * @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** Shape $ (Value): string. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     * @return string
     * @throws SdkError When fee_amount_status is omitted; use hasFeeAmountStatus() or valueOrDefault().
     */
    public function getFeeAmountStatus(): string { return $this->get('fee_amount_status'); }
    public function hasFeeAmountStatus(): bool { return $this->has('fee_amount_status'); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout, and null until then. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When fee_money is omitted; use hasFeeMoney() or valueOrDefault().
     */
    public function getFeeMoney(): mixed { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** Shape $ (Value): string. What started the payout. A payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform", "other".
     * @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Shape $ (Value): string. Merchant receiving the payout.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Payout method. instant can appear on imported payouts; unmapped methods are returned as other. Value enum: "standard", "instant", "other".
     * @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Shape $ (Value): {@see SignedMoneyInput} or null. Signed effect of this payout on your Flint balance. It is negative because the payout takes money out: a 25000 payout with no fee has net_money -25000. Null until your processor records the payout. Shape $.anyOf[1] (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string, ...}|object|null
     * @throws SdkError When net_money is omitted; use hasNetMoney() or valueOrDefault().
     */
    public function getNetMoney(): mixed { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** Shape $ (Value): {@see ExpandedPayoutSummaryInput} or null. The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Shape $.anyOf[1] (Value): {@see ExpandedPayoutSummaryInput}. A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When original_payout is omitted; use hasOriginalPayout() or valueOrDefault().
     */
    public function getOriginalPayout(): mixed { return $this->get('original_payout'); }
    public function hasOriginalPayout(): bool { return $this->has('original_payout'); }
    /** Shape $ (Value): string. On a payout that reverses another payout, the payout it reverses. A payout has at most one of original_payout_id and reversed_by_payout_id.
     * @return string
     * @throws SdkError When original_payout_id is omitted; use hasOriginalPayoutId() or valueOrDefault().
     */
    public function getOriginalPayoutId(): string { return $this->get('original_payout_id'); }
    public function hasOriginalPayoutId(): bool { return $this->has('original_payout_id'); }
    /** Shape $ (Value): {@see ExpandedPayoutDestinationSummaryInput} or null. The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Shape $.anyOf[1] (Value): {@see ExpandedPayoutDestinationSummaryInput}. A payout destination's summary fields, such as type, bank name, last four digits, and status, returned when the destination is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'default_for_currency': bool, 'last4'?: string, 'payout_destination_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When payout_destination is omitted; use hasPayoutDestination() or valueOrDefault().
     */
    public function getPayoutDestination(): mixed { return $this->get('payout_destination'); }
    public function hasPayoutDestination(): bool { return $this->has('payout_destination'); }
    /** Shape $ (Value): string. Bank account or debit card receiving the payout. Absent when Flint can't match your processor's destination to a payout destination.
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Shape $ (Value): string. Stable identifier of the payout.
     * @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Shape $ (Value): string. Whether Flint has pulled a paid payout back from your bank: none, reversing while a reversal is in progress, or reversed once it completes and a payout_reversal balance transaction returns the money. status stays paid throughout. Value enum: "none", "reversing", "reversed".
     * @return string
     * @throws SdkError When reversal_status is omitted; use hasReversalStatus() or valueOrDefault().
     */
    public function getReversalStatus(): string { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** Shape $ (Value): {@see ExpandedPayoutSummaryInput} or null. The payout that reversed this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Shape $.anyOf[1] (Value): {@see ExpandedPayoutSummaryInput}. A payout's summary fields, including amount, method, status, and arrival date, returned when the payout is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'arrival_date'?: string, 'balance_source_type': string, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'method': string, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When reversed_by_payout is omitted; use hasReversedByPayout() or valueOrDefault().
     */
    public function getReversedByPayout(): mixed { return $this->get('reversed_by_payout'); }
    public function hasReversedByPayout(): bool { return $this->has('reversed_by_payout'); }
    /** Shape $ (Value): string. On a reversed payout, the separate payout that reversed it, when there is one. A payout has at most one of original_payout_id and reversed_by_payout_id.
     * @return string
     * @throws SdkError When reversed_by_payout_id is omitted; use hasReversedByPayoutId() or valueOrDefault().
     */
    public function getReversedByPayoutId(): string { return $this->get('reversed_by_payout_id'); }
    public function hasReversedByPayoutId(): bool { return $this->has('reversed_by_payout_id'); }
    /** Shape $ (Value): string. Text shown on your bank statement for the deposit, when one was set.
     * @return string
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Shape $ (Value): string. Where the payout is: pending until it is sent, in_transit on its way to your bank, then paid or failed. A paid payout can still become failed if the bank returns the deposit, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see PayoutTraceIDInput}. The bank's trace number for the deposit, which your bank can use to locate a late deposit. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID, with whether it is pending, available, or unsupported.
     * @return PayoutTraceIDInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When trace_id is omitted; use hasTraceId() or valueOrDefault().
     */
    public function getTraceId(): mixed { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** Shape $ (Value): string. When the payout last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
