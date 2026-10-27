<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read bool $can_respond_with_evidence
 * @property-read string $case_type
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read string $dispute_id
 * @property-read string|null $evidence_due_at
 * @property-read int $evidence_submission_count
 * @property-read ?string $fraud_warning_id
 * @property-read bool $has_evidence
 * @property-read bool $is_action_required
 * @property-read bool $is_evidence_deadline_passed
 * @property-read string $merchant_id
 * @property-read ExpandedOrderSummary|null $order
 * @property-read ?string $order_id
 * @property-read ExpandedPaymentIntentSummary|null $payment_intent
 * @property-read ?string $payment_intent_id
 * @property-read string|null $payment_option
 * @property-read string $reason
 * @property-read ?string $response_unavailable_reason
 * @property-read string $status
 * @property-read ?string $status_changed_at
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeUpdatedDataObject extends Model {
    /** @param array{'amount_money': mixed, 'can_respond_with_evidence': bool, 'case_type': string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'dispute_id': string, 'evidence_due_at': string|null, 'evidence_submission_count': int, 'fraud_warning_id'?: string, 'has_evidence': bool, 'is_action_required': bool, 'is_evidence_deadline_passed': bool, 'merchant_id': string, 'order'?: mixed, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_option': string|null, 'reason': string, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeUpdatedDataObject')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): boolean. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now.
     * @return bool
     */
    public function getCanRespondWithEvidence(): bool { return $this->get('can_respond_with_evidence'); }
    public function hasCanRespondWithEvidence(): bool { return $this->has('can_respond_with_evidence'); }
    /** Shape $ (Value): string.  Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return".
     * @return string
     */
    public function getCaseType(): string { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getEvidenceDueAt(): string|null { return $this->get('evidence_due_at'); }
    public function hasEvidenceDueAt(): bool { return $this->has('evidence_due_at'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getEvidenceSubmissionCount(): int { return $this->get('evidence_submission_count'); }
    public function hasEvidenceSubmissionCount(): bool { return $this->has('evidence_submission_count'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFraudWarningId(): ?string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Shape $ (Value): boolean. Whether evidence is saved for this dispute, submitted or not. evidence_submission_count says whether it was submitted.
     * @return bool
     */
    public function getHasEvidence(): bool { return $this->get('has_evidence'); }
    public function hasHasEvidence(): bool { return $this->has('has_evidence'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsActionRequired(): bool { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsEvidenceDeadlinePassed(): bool { return $this->get('is_evidence_deadline_passed'); }
    public function hasIsEvidenceDeadlinePassed(): bool { return $this->has('is_evidence_deadline_passed'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): {@see ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummary|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummary|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string or null.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null.
     * @return string|null
     */
    public function getPaymentOption(): string|null { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Shape $ (Value): string.  Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
     * @return ?string
     */
    public function getResponseUnavailableReason(): ?string { return $this->get('response_unavailable_reason'); }
    public function hasResponseUnavailableReason(): bool { return $this->has('response_unavailable_reason'); }
    /** Shape $ (Value): string.  Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: date-time.
     * @return ?string
     */
    public function getStatusChangedAt(): ?string { return $this->get('status_changed_at'); }
    public function hasStatusChangedAt(): bool { return $this->has('status_changed_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
