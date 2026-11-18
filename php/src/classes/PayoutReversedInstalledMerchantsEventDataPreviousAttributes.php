<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $arrival_date
 * @property-read string|null $balance_source_type
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read string|null $description
 * @property-read string|null $direction
 * @property-read string|null $external_reference_id
 * @property-read string|null $failure_code
 * @property-read string|null $failure_message
 * @property-read string|null $fee_amount_status
 * @property-read MoneyValuePreviousAttributes|null $fee_money
 * @property-read string|null $initiated_by
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $method
 * @property-read SignedMoneyPreviousAttributes|null $net_money
 * @property-read ExpandedPayoutSummaryPreviousAttributes|null $original_payout
 * @property-read string|null $original_payout_id
 * @property-read ExpandedPayoutDestinationSummaryPreviousAttributes|null $payout_destination
 * @property-read string|null $payout_destination_id
 * @property-read string|null $payout_id
 * @property-read string|null $reversal_status
 * @property-read ExpandedPayoutSummaryPreviousAttributes|null $reversed_by_payout
 * @property-read string|null $reversed_by_payout_id
 * @property-read string|null $statement_descriptor
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read PayoutTraceIDPreviousAttributes|null $trace_id
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PayoutReversedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'arrival_date'?: mixed, 'balance_source_type'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'description'?: mixed, 'direction'?: mixed, 'external_reference_id'?: mixed, 'failure_code'?: mixed, 'failure_message'?: mixed, 'fee_amount_status'?: mixed, 'fee_money'?: mixed, 'initiated_by'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'method'?: mixed, 'net_money'?: mixed, 'original_payout'?: mixed, 'original_payout_id'?: mixed, 'payout_destination'?: mixed, 'payout_destination_id'?: mixed, 'payout_id'?: mixed, 'reversal_status'?: mixed, 'reversed_by_payout'?: mixed, 'reversed_by_payout_id'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'trace_id'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutReversedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Amount moved between your bank and Flint. Always positive. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. anyOf[1] (Value): string. Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the expected arrival. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getArrivalDate(): string|null { return $this->get('arrival_date'); }
    public function hasArrivalDate(): bool { return $this->has('arrival_date'); }
    /** Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account". anyOf[1] (Value): string. Balance source this payout draws from. Flint chooses the source when balance_source_type is omitted at create. Clients must accept source types added in future releases. Value enum: "card", "bank_account". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBalanceSourceType(): string|null { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** When the payout was created. anyOf[1] (Value): string. When the payout was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ISO 4217 currency code. anyOf[1] (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Description sent when the payout was created. Absent when there is none. anyOf[1] (Value): string. Description sent when the payout was created. Absent when there is none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Direction of the money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a negative Flint balance. Value enum: "outbound", "inbound". anyOf[1] (Value): string. Direction of the money movement. Outbound payouts deposit funds in your bank; inbound payouts withdraw funds to cover a negative Flint balance. Value enum: "outbound", "inbound". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDirection(): string|null { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Value enum: "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name", "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card", "payout_failed". anyOf[1] (Value): string. Flint-normalized payout failure code. Unknown provider values are returned as payout_failed. Value enum: "account_closed", "account_frozen", "bank_account_restricted", "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined", "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name", "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency", "no_account", "unsupported_card", "payout_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureCode(): string|null { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. anyOf[1] (Value): string. Flint-authored payout failure message. This is stable explanatory text, not a raw provider message. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailureMessage(): string|null { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable". anyOf[1] (Value): string. Whether the payout fee is estimated or final. not_applicable means no applicable fee status is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFeeAmountStatus(): string|null { return $this->get('fee_amount_status'); }
    public function hasFeeAmountStatus(): bool { return $this->has('fee_amount_status'); }
    /** Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor records the payout. `null` when your processor hasn't recorded the payout yet. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** What started the payout. Inbound payouts are always platform initiated. An outbound payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled outbound payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform", "other". anyOf[1] (Value): string. What started the payout. Inbound payouts are always platform initiated. An outbound payout imported from your processor follows the processor: scheduled when it sent the payout automatically, otherwise manual. Only scheduled outbound payouts list their balance transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with reason not_itemized. Unmapped sources are returned as other. Value enum: "manual", "scheduled", "platform", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInitiatedBy(): string|null { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** Merchant whose balance the payout changes. anyOf[1] (Value): string. Merchant whose balance the payout changes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other". anyOf[1] (Value): string. Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a method Flint doesn't map. Value enum: "standard", "instant", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMethod(): string|null { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Signed effect of this payout on your Flint balance. Negative for outbound payouts and positive for inbound payouts. `null` when your processor hasn't recorded the payout yet. anyOf[1] (Value): {@see SignedMoneyPreviousAttributes}. anyOf[2] (Value): null.
     * @return SignedMoneyPreviousAttributes|null
     */
    public function getNetMoney(): SignedMoneyPreviousAttributes|null { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** The payout this one reverses, inlined when you request expand=original_payout. null when expanded and original_payout_id is absent. Present only when `expand` includes `original_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value): {@see ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPayoutSummaryPreviousAttributes|null
     */
    public function getOriginalPayout(): ExpandedPayoutSummaryPreviousAttributes|null { return $this->get('original_payout'); }
    public function hasOriginalPayout(): bool { return $this->has('original_payout'); }
    /** On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. anyOf[1] (Value): string. On a payout that reverses another payout, the payout it reverses. Present only when Flint has the matching original payout. A payout has at most one of original_payout_id and reversed_by_payout_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginalPayoutId(): string|null { return $this->get('original_payout_id'); }
    public function hasOriginalPayoutId(): bool { return $this->has('original_payout_id'); }
    /** The payout destination, inlined when you request expand=payout_destination. null when expanded and payout_destination_id is absent. Present only when `expand` includes `payout_destination`; `null` when expanded and there is no related payout destination. anyOf[1] (Value): {@see ExpandedPayoutDestinationSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPayoutDestinationSummaryPreviousAttributes|null
     */
    public function getPayoutDestination(): ExpandedPayoutDestinationSummaryPreviousAttributes|null { return $this->get('payout_destination'); }
    public function hasPayoutDestination(): bool { return $this->has('payout_destination'); }
    /** Bank account or debit card used for the payout. Absent when Flint can't match your processor's destination to a payout destination. anyOf[1] (Value): string. Bank account or debit card used for the payout. Absent when Flint can't match your processor's destination to a payout destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutDestinationId(): string|null { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Stable identifier of the payout. anyOf[1] (Value): string. Stable identifier of the payout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPayoutId(): string|null { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Value enum: "none", "reversed". anyOf[1] (Value): string. Whether Flint has pulled a paid payout back from your bank: none until the reversal completes, then reversed. A payout_reversal balance transaction returns the money, and status stays succeeded. Value enum: "none", "reversed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversalStatus(): string|null { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** The payout reversing this one, inlined when you request expand=reversed_by_payout. null when expanded and reversed_by_payout_id is absent. Present only when `expand` includes `reversed_by_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value): {@see ExpandedPayoutSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPayoutSummaryPreviousAttributes|null
     */
    public function getReversedByPayout(): ExpandedPayoutSummaryPreviousAttributes|null { return $this->get('reversed_by_payout'); }
    public function hasReversedByPayout(): bool { return $this->has('reversed_by_payout'); }
    /** The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. anyOf[1] (Value): string. The separate payout reversing this one, when Flint has the matching payout. Its presence does not mean the reversal has completed; read reversal_status. A payout has at most one of original_payout_id and reversed_by_payout_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversedByPayoutId(): string|null { return $this->get('reversed_by_payout_id'); }
    public function hasReversedByPayoutId(): bool { return $this->has('reversed_by_payout_id'); }
    /** Text shown on your bank statement for the transfer, when one was set. anyOf[1] (Value): string. Text shown on your bank statement for the transfer, when one was set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Where the payout is: pending until it is sent, in_transit moving between Flint and your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the transfer, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[1] (Value): string. Where the payout is: pending until it is sent, in_transit moving between Flint and your bank, then succeeded or failed. A succeeded payout can still become failed if the bank returns the transfer, and canceled means a manual payout was canceled while pending. Value enum: "pending", "in_transit", "succeeded", "failed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The bank's trace number for the transfer, which your bank can use to locate it. Its status says whether the number is pending, available, or unsupported, and value holds the number when Flint has it. Absent when Flint has no trace information. anyOf[1] (Value): {@see PayoutTraceIDPreviousAttributes}. anyOf[2] (Value): null.
     * @return PayoutTraceIDPreviousAttributes|null
     */
    public function getTraceId(): PayoutTraceIDPreviousAttributes|null { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** When the payout last changed. anyOf[1] (Value): string. When the payout last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
