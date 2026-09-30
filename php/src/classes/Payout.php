<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $arrival_at
 * @property-read string $balance_source_type
 * @property-read string $created_at
 * @property-read string $currency
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $failure_code
 * @property-read string $failure_message
 * @property-read string $fee_amount_status
 * @property-read MoneyValue|null $fee_money
 * @property-read MoneyValue $held_money
 * @property-read string $initiated_by
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $method
 * @property-read SignedMoney|null $net_money
 * @property-read ExpandedPayoutSummary|null $original_payout
 * @property-read string $original_payout_id
 * @property-read ExpandedPayoutDestinationSummary|null $payout_destination
 * @property-read string $payout_destination_id
 * @property-read string $payout_id
 * @property-read string $reversal_status
 * @property-read ExpandedPayoutSummary|null $reversed_by_payout
 * @property-read string $reversed_by_payout_id
 * @property-read string $statement_descriptor
 * @property-read string $status
 * @property-read PayoutTraceID $trace_id
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class Payout extends Model {
    /** @param array{'amount_money': mixed, 'arrival_at'?: string, 'balance_source_type'?: string, 'created_at': string, 'currency': string, 'description'?: string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fee_amount_status': string, 'fee_money'?: mixed, 'held_money': object{'amount': string, 'currency': string}, 'initiated_by': string, 'merchant_id': string, 'metadata'?: \stdClass, 'method': string, 'net_money'?: mixed, 'original_payout'?: mixed, 'original_payout_id'?: string, 'payout_destination'?: mixed, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'reversed_by_payout'?: mixed, 'reversed_by_payout_id'?: string, 'statement_descriptor'?: string, 'status': string, 'trace_id'?: object{'status': string, 'value'?: string}, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Payout')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When arrival_at is omitted; use hasArrivalAt() or valueOrDefault().
     */
    public function getArrivalAt(): string { return $this->get('arrival_at'); }
    public function hasArrivalAt(): bool { return $this->has('arrival_at'); }
    /** @return string
     * @throws SdkError When balance_source_type is omitted; use hasBalanceSourceType() or valueOrDefault().
     */
    public function getBalanceSourceType(): string { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When failure_code is omitted; use hasFailureCode() or valueOrDefault().
     */
    public function getFailureCode(): string { return $this->get('failure_code'); }
    public function hasFailureCode(): bool { return $this->has('failure_code'); }
    /** @return string
     * @throws SdkError When failure_message is omitted; use hasFailureMessage() or valueOrDefault().
     */
    public function getFailureMessage(): string { return $this->get('failure_message'); }
    public function hasFailureMessage(): bool { return $this->has('failure_message'); }
    /** @return string
     * @throws SdkError When fee_amount_status is omitted; use hasFeeAmountStatus() or valueOrDefault().
     */
    public function getFeeAmountStatus(): string { return $this->get('fee_amount_status'); }
    public function hasFeeAmountStatus(): bool { return $this->has('fee_amount_status'); }
    /** @return MoneyValue|null
     * @throws SdkError When fee_money is omitted; use hasFeeMoney() or valueOrDefault().
     */
    public function getFeeMoney(): MoneyValue|null { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** @return MoneyValue
     * @throws SdkError When held_money is omitted; use hasHeldMoney() or valueOrDefault().
     */
    public function getHeldMoney(): MoneyValue { return $this->get('held_money'); }
    public function hasHeldMoney(): bool { return $this->has('held_money'); }
    /** @return string
     * @throws SdkError When initiated_by is omitted; use hasInitiatedBy() or valueOrDefault().
     */
    public function getInitiatedBy(): string { return $this->get('initiated_by'); }
    public function hasInitiatedBy(): bool { return $this->has('initiated_by'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** @return SignedMoney|null
     * @throws SdkError When net_money is omitted; use hasNetMoney() or valueOrDefault().
     */
    public function getNetMoney(): SignedMoney|null { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** @return ExpandedPayoutSummary|null
     * @throws SdkError When original_payout is omitted; use hasOriginalPayout() or valueOrDefault().
     */
    public function getOriginalPayout(): ExpandedPayoutSummary|null { return $this->get('original_payout'); }
    public function hasOriginalPayout(): bool { return $this->has('original_payout'); }
    /** @return string
     * @throws SdkError When original_payout_id is omitted; use hasOriginalPayoutId() or valueOrDefault().
     */
    public function getOriginalPayoutId(): string { return $this->get('original_payout_id'); }
    public function hasOriginalPayoutId(): bool { return $this->has('original_payout_id'); }
    /** @return ExpandedPayoutDestinationSummary|null
     * @throws SdkError When payout_destination is omitted; use hasPayoutDestination() or valueOrDefault().
     */
    public function getPayoutDestination(): ExpandedPayoutDestinationSummary|null { return $this->get('payout_destination'); }
    public function hasPayoutDestination(): bool { return $this->has('payout_destination'); }
    /** @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** @return string
     * @throws SdkError When reversal_status is omitted; use hasReversalStatus() or valueOrDefault().
     */
    public function getReversalStatus(): string { return $this->get('reversal_status'); }
    public function hasReversalStatus(): bool { return $this->has('reversal_status'); }
    /** @return ExpandedPayoutSummary|null
     * @throws SdkError When reversed_by_payout is omitted; use hasReversedByPayout() or valueOrDefault().
     */
    public function getReversedByPayout(): ExpandedPayoutSummary|null { return $this->get('reversed_by_payout'); }
    public function hasReversedByPayout(): bool { return $this->has('reversed_by_payout'); }
    /** @return string
     * @throws SdkError When reversed_by_payout_id is omitted; use hasReversedByPayoutId() or valueOrDefault().
     */
    public function getReversedByPayoutId(): string { return $this->get('reversed_by_payout_id'); }
    public function hasReversedByPayoutId(): bool { return $this->has('reversed_by_payout_id'); }
    /** @return string
     * @throws SdkError When statement_descriptor is omitted; use hasStatementDescriptor() or valueOrDefault().
     */
    public function getStatementDescriptor(): string { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return PayoutTraceID
     * @throws SdkError When trace_id is omitted; use hasTraceId() or valueOrDefault().
     */
    public function getTraceId(): PayoutTraceID { return $this->get('trace_id'); }
    public function hasTraceId(): bool { return $this->has('trace_id'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
