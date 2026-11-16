<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read bool|null $can_respond_with_evidence
 * @property-read string|null $case_type
 * @property-read string|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $dispute_id
 * @property-read string|null $evidence_due_at
 * @property-read int|null $evidence_submission_count
 * @property-read string|null $fraud_warning_id
 * @property-read bool|null $has_evidence
 * @property-read bool|null $is_action_required
 * @property-read bool|null $is_evidence_deadline_passed
 * @property-read string|null $merchant_id
 * @property-read string|null $network_reason_code
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read ExpandedPaymentIntentSummaryPreviousAttributes|null $payment_intent
 * @property-read string|null $payment_intent_id
 * @property-read string|null $payment_option
 * @property-read string|null $reason
 * @property-read list<string>|null $recommended_evidence_types
 * @property-read string|null $response_unavailable_reason
 * @property-read list<SplitReversalReferencePreviousAttributes>|null $split_reversals
 * @property-read string|null $status
 * @property-read string|null $status_changed_at
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class DisputePreventedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'can_respond_with_evidence'?: mixed, 'case_type'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'dispute_id'?: mixed, 'evidence_due_at'?: mixed, 'evidence_submission_count'?: mixed, 'fraud_warning_id'?: mixed, 'has_evidence'?: mixed, 'is_action_required'?: mixed, 'is_evidence_deadline_passed'?: mixed, 'merchant_id'?: mixed, 'network_reason_code'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_option'?: mixed, 'reason'?: mixed, 'recommended_evidence_types'?: mixed, 'response_unavailable_reason'?: mixed, 'split_reversals'?: mixed, 'status'?: mixed, 'status_changed_at'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputePreventedMerchantEventDataPreviousAttributes')); }
    /** Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. anyOf[1] (Value): boolean. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCanRespondWithEvidence(): bool|null { return $this->get('can_respond_with_evidence'); }
    public function hasCanRespondWithEvidence(): bool { return $this->has('can_respond_with_evidence'); }
    /** Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[1] (Value): string. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCaseType(): string|null { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer on the disputed payment. Absent when the payment has none. anyOf[1] (Value): string. The customer on the disputed payment. Absent when the payment has none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Stable identifier of the dispute. anyOf[1] (Value): string. Stable identifier of the dispute. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeId(): string|null { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. anyOf[1] (Value): string. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvidenceDueAt(): string|null { return $this->get('evidence_due_at'); }
    public function hasEvidenceDueAt(): bool { return $this->has('evidence_due_at'); }
    /** How many times evidence was submitted for this dispute. 0 until you submit. anyOf[1] (Value): integer. How many times evidence was submitted for this dispute. 0 until you submit. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEvidenceSubmissionCount(): int|null { return $this->get('evidence_submission_count'); }
    public function hasEvidenceSubmissionCount(): bool { return $this->has('evidence_submission_count'); }
    /** The fraud warning the card network sent for this payment before the dispute. Absent when there was none. anyOf[1] (Value): string. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFraudWarningId(): string|null { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. anyOf[1] (Value): boolean. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getHasEvidence(): bool|null { return $this->get('has_evidence'); }
    public function hasHasEvidence(): bool { return $this->has('has_evidence'); }
    /** True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. anyOf[1] (Value): boolean. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsActionRequired(): bool|null { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. anyOf[1] (Value): boolean. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsEvidenceDeadlinePassed(): bool|null { return $this->get('is_evidence_deadline_passed'); }
    public function hasIsEvidenceDeadlinePassed(): bool { return $this->has('is_evidence_deadline_passed'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. anyOf[1] (Value): string. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNetworkReasonCode(): string|null { return $this->get('network_reason_code'); }
    public function hasNetworkReasonCode(): bool { return $this->has('network_reason_code'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. anyOf[1] (Value): string. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPaymentIntentSummaryPreviousAttributes|null
     */
    public function getPaymentIntent(): ExpandedPaymentIntentSummaryPreviousAttributes|null { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. anyOf[1] (Value): string. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. anyOf[1] (Value): string. How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentOption(): string|null { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[1] (Value): string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. [] enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[1] (Value): Array of string. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. [] enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[1][] (Value): string.  Value enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRecommendedEvidenceTypes(): array|null { return $this->get('recommended_evidence_types'); }
    public function hasRecommendedEvidenceTypes(): bool { return $this->has('recommended_evidence_types'); }
    /** Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable". anyOf[1] (Value): string. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResponseUnavailableReason(): string|null { return $this->get('response_unavailable_reason'); }
    public function hasResponseUnavailableReason(): bool { return $this->has('response_unavailable_reason'); }
    /** Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. anyOf[1] (Value): Array of {@see SplitReversalReferencePreviousAttributes}. Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. anyOf[1][] (Value): {@see SplitReversalReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SplitReversalReferencePreviousAttributes>|null
     */
    public function getSplitReversals(): array|null { return $this->get('split_reversals'); }
    public function hasSplitReversals(): bool { return $this->has('split_reversals'); }
    /** Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): string. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. anyOf[1] (Value): string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusChangedAt(): string|null { return $this->get('status_changed_at'); }
    public function hasStatusChangedAt(): bool { return $this->has('status_changed_at'); }
    /** Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. [] enum: "accept". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. [] enum: "accept". anyOf[1][] (Value): string.  Value enum: "accept". anyOf[2] (Value): null.
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
