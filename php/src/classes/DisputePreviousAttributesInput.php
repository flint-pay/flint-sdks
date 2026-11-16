<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read bool|null $can_respond_with_evidence
 * @property-read string|null $case_type
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $dispute_id
 * @property-read string|\DateTimeInterface|null $evidence_due_at
 * @property-read int|null $evidence_submission_count
 * @property-read string|null $fraud_warning_id
 * @property-read bool|null $has_evidence
 * @property-read bool|null $is_action_required
 * @property-read bool|null $is_evidence_deadline_passed
 * @property-read string|null $merchant_id
 * @property-read string|null $network_reason_code
 * @property-read ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $order
 * @property-read string|null $order_id
 * @property-read ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_option
 * @property-read string|null $reason
 * @property-read list<string>|null $recommended_evidence_types
 * @property-read string|null $response_unavailable_reason
 * @property-read list<SplitReversalReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $split_reversals
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $status_changed_at
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'can_respond_with_evidence'?: bool|null, 'case_type'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'customer'?: ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'customer_id'?: string|null, 'dispute_id'?: string|null, 'evidence_due_at'?: string|\DateTimeInterface|null, 'evidence_submission_count'?: int|null, 'fraud_warning_id'?: string|null, 'has_evidence'?: bool|null, 'is_action_required'?: bool|null, 'is_evidence_deadline_passed'?: bool|null, 'merchant_id'?: string|null, 'network_reason_code'?: string|null, 'order'?: ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'order_id'?: string|null, 'payment_intent'?: ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payment_intent_id'?: string|null, 'payment_option'?: string|null, 'reason'?: string|null, 'recommended_evidence_types'?: list<string>|null, 'response_unavailable_reason'?: string|null, 'split_reversals'?: list<SplitReversalReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'status'?: string|null, 'status_changed_at'?: string|\DateTimeInterface|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputePreviousAttributesInput')); }
    /** Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. anyOf[1] (Value): boolean. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When can_respond_with_evidence is omitted; use hasCanRespondWithEvidence() or valueOrDefault().
     */
    public function getCanRespondWithEvidence(): mixed { return $this->get('can_respond_with_evidence'); }
    public function hasCanRespondWithEvidence(): bool { return $this->has('can_respond_with_evidence'); }
    /** Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[1] (Value): string. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When case_type is omitted; use hasCaseType() or valueOrDefault().
     */
    public function getCaseType(): mixed { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer on the disputed payment. Absent when the payment has none. anyOf[1] (Value): string. The customer on the disputed payment. Absent when the payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Stable identifier of the dispute. anyOf[1] (Value): string. Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): mixed { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. anyOf[1] (Value): string. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When evidence_due_at is omitted; use hasEvidenceDueAt() or valueOrDefault().
     */
    public function getEvidenceDueAt(): mixed { return $this->get('evidence_due_at'); }
    public function hasEvidenceDueAt(): bool { return $this->has('evidence_due_at'); }
    /** How many times evidence was submitted for this dispute. 0 until you submit. anyOf[1] (Value): integer. How many times evidence was submitted for this dispute. 0 until you submit. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When evidence_submission_count is omitted; use hasEvidenceSubmissionCount() or valueOrDefault().
     */
    public function getEvidenceSubmissionCount(): mixed { return $this->get('evidence_submission_count'); }
    public function hasEvidenceSubmissionCount(): bool { return $this->has('evidence_submission_count'); }
    /** The fraud warning the card network sent for this payment before the dispute. Absent when there was none. anyOf[1] (Value): string. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): mixed { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. anyOf[1] (Value): boolean. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When has_evidence is omitted; use hasHasEvidence() or valueOrDefault().
     */
    public function getHasEvidence(): mixed { return $this->get('has_evidence'); }
    public function hasHasEvidence(): bool { return $this->has('has_evidence'); }
    /** True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. anyOf[1] (Value): boolean. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_action_required is omitted; use hasIsActionRequired() or valueOrDefault().
     */
    public function getIsActionRequired(): mixed { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. anyOf[1] (Value): boolean. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_evidence_deadline_passed is omitted; use hasIsEvidenceDeadlinePassed() or valueOrDefault().
     */
    public function getIsEvidenceDeadlinePassed(): mixed { return $this->get('is_evidence_deadline_passed'); }
    public function hasIsEvidenceDeadlinePassed(): bool { return $this->has('is_evidence_deadline_passed'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): mixed { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. anyOf[1] (Value): string. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When network_reason_code is omitted; use hasNetworkReasonCode() or valueOrDefault().
     */
    public function getNetworkReasonCode(): mixed { return $this->get('network_reason_code'); }
    public function hasNetworkReasonCode(): bool { return $this->has('network_reason_code'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. anyOf[1] (Value): string. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. anyOf[1] (Value): string. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): mixed { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. anyOf[1] (Value): string. How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): mixed { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1] (Value): string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. [] enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[1] (Value): Array of string. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. [] enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[1][] (Value): string.  Value enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When recommended_evidence_types is omitted; use hasRecommendedEvidenceTypes() or valueOrDefault().
     */
    public function getRecommendedEvidenceTypes(): mixed { return $this->get('recommended_evidence_types'); }
    public function hasRecommendedEvidenceTypes(): bool { return $this->has('recommended_evidence_types'); }
    /** Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable". anyOf[1] (Value): string. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When response_unavailable_reason is omitted; use hasResponseUnavailableReason() or valueOrDefault().
     */
    public function getResponseUnavailableReason(): mixed { return $this->get('response_unavailable_reason'); }
    public function hasResponseUnavailableReason(): bool { return $this->has('response_unavailable_reason'); }
    /** Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. anyOf[1] (Value): Array of {@see SplitReversalReferencePreviousAttributesInput}. Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. anyOf[1][] (Value): {@see SplitReversalReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SplitReversalReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When split_reversals is omitted; use hasSplitReversals() or valueOrDefault().
     */
    public function getSplitReversals(): mixed { return $this->get('split_reversals'); }
    public function hasSplitReversals(): bool { return $this->has('split_reversals'); }
    /** Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): string. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. anyOf[1] (Value): string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When status_changed_at is omitted; use hasStatusChangedAt() or valueOrDefault().
     */
    public function getStatusChangedAt(): mixed { return $this->get('status_changed_at'); }
    public function hasStatusChangedAt(): bool { return $this->has('status_changed_at'); }
    /** Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. [] enum: "accept". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. [] enum: "accept". anyOf[1][] (Value): string.  Value enum: "accept". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
