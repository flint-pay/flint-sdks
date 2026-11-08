<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read bool $can_respond_with_evidence
 * @property-read string $case_type
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read string $dispute_id
 * @property-read string|\DateTimeInterface|null $evidence_due_at
 * @property-read int $evidence_submission_count
 * @property-read string $fraud_warning_id
 * @property-read bool $has_evidence
 * @property-read bool $is_action_required
 * @property-read bool $is_evidence_deadline_passed
 * @property-read string $merchant_id
 * @property-read string|null $network_reason_code
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null $payment_intent
 * @property-read string $payment_intent_id
 * @property-read string|null $payment_option
 * @property-read string $reason
 * @property-read list<string> $recommended_evidence_types
 * @property-read string $response_unavailable_reason
 * @property-read string $status
 * @property-read string|\DateTimeInterface $status_changed_at
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DisputeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'can_respond_with_evidence': bool, 'case_type': string, 'created_at': string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'dispute_id': string, 'evidence_due_at': string|\DateTimeInterface|null, 'evidence_submission_count': int, 'fraud_warning_id'?: string, 'has_evidence': bool, 'is_action_required': bool, 'is_evidence_deadline_passed': bool, 'merchant_id': string, 'network_reason_code': string|null, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'payment_intent'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null, 'payment_intent_id'?: string, 'payment_option': string|null, 'reason': string, 'recommended_evidence_types': list<string>, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string|\DateTimeInterface, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeInput')); }
    /** Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now.
     * @return bool
     * @throws SdkError When can_respond_with_evidence is omitted; use hasCanRespondWithEvidence() or valueOrDefault().
     */
    public function getCanRespondWithEvidence(): bool { return $this->get('can_respond_with_evidence'); }
    public function hasCanRespondWithEvidence(): bool { return $this->has('can_respond_with_evidence'); }
    /** Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Value enum: "inquiry", "chargeback", "compliance", "resolution", "block", "other", "bank_return".
     * @return string
     * @throws SdkError When case_type is omitted; use hasCaseType() or valueOrDefault().
     */
    public function getCaseType(): string { return $this->get('case_type'); }
    public function hasCaseType(): bool { return $this->has('case_type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer on the disputed payment. Absent when the payment has none. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Stable identifier of the dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When evidence_due_at is omitted; use hasEvidenceDueAt() or valueOrDefault().
     */
    public function getEvidenceDueAt(): string|\DateTimeInterface|null { return $this->get('evidence_due_at'); }
    public function hasEvidenceDueAt(): bool { return $this->has('evidence_due_at'); }
    /** How many times evidence was submitted for this dispute. 0 until you submit. Format: int32.
     * @return int
     * @throws SdkError When evidence_submission_count is omitted; use hasEvidenceSubmissionCount() or valueOrDefault().
     */
    public function getEvidenceSubmissionCount(): int { return $this->get('evidence_submission_count'); }
    public function hasEvidenceSubmissionCount(): bool { return $this->has('evidence_submission_count'); }
    /** The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
     * @return string
     * @throws SdkError When fraud_warning_id is omitted; use hasFraudWarningId() or valueOrDefault().
     */
    public function getFraudWarningId(): string { return $this->get('fraud_warning_id'); }
    public function hasFraudWarningId(): bool { return $this->has('fraud_warning_id'); }
    /** Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted.
     * @return bool
     * @throws SdkError When has_evidence is omitted; use hasHasEvidence() or valueOrDefault().
     */
    public function getHasEvidence(): bool { return $this->get('has_evidence'); }
    public function hasHasEvidence(): bool { return $this->has('has_evidence'); }
    /** True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event.
     * @return bool
     * @throws SdkError When is_action_required is omitted; use hasIsActionRequired() or valueOrDefault().
     */
    public function getIsActionRequired(): bool { return $this->get('is_action_required'); }
    public function hasIsActionRequired(): bool { return $this->has('is_action_required'); }
    /** Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event.
     * @return bool
     * @throws SdkError When is_evidence_deadline_passed is omitted; use hasIsEvidenceDeadlinePassed() or valueOrDefault().
     */
    public function getIsEvidenceDeadlinePassed(): bool { return $this->get('is_evidence_deadline_passed'); }
    public function hasIsEvidenceDeadlinePassed(): bool { return $this->has('is_evidence_deadline_passed'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: ^[A-Z0-9.]{1,8}$.
     * @return string|null
     * @throws SdkError When network_reason_code is omitted; use hasNetworkReasonCode() or valueOrDefault().
     */
    public function getNetworkReasonCode(): string|null { return $this->get('network_reason_code'); }
    public function hasNetworkReasonCode(): bool { return $this->has('network_reason_code'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. anyOf[1] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded. anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'order_id'?: string, 'payment_intent_id': string, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object|null
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", null.
     * @return string|null
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): string|null { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
    /** Why the payment was disputed. A reason Flint doesn't recognize is `other`. Value enum: "fraudulent", "unrecognized", "duplicate", "product_not_received", "product_not_as_described", "refund_not_processed", "subscription_canceled", "noncompliant", "insufficient_funds", "debit_not_authorized", "bank_account_not_found", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. [] enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy". [] (Value): string.  Value enum: "customer_details", "customer_communication", "customer_signature", "receipt", "shipping_documentation", "service_documentation", "access_activity_log", "product_description", "refund_policy", "duplicate_charge_documentation", "cancellation_policy".
     * @return list<string>
     * @throws SdkError When recommended_evidence_types is omitted; use hasRecommendedEvidenceTypes() or valueOrDefault().
     */
    public function getRecommendedEvidenceTypes(): array { return $this->get('recommended_evidence_types'); }
    public function hasRecommendedEvidenceTypes(): bool { return $this->has('recommended_evidence_types'); }
    /** Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Value enum: "bank_return_not_contestable", "response_window_unavailable".
     * @return string
     * @throws SdkError When response_unavailable_reason is omitted; use hasResponseUnavailableReason() or valueOrDefault().
     */
    public function getResponseUnavailableReason(): string { return $this->get('response_unavailable_reason'); }
    public function hasResponseUnavailableReason(): bool { return $this->has('response_unavailable_reason'); }
    /** Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Value enum: "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When status_changed_at is omitted; use hasStatusChangedAt() or valueOrDefault().
     */
    public function getStatusChangedAt(): string|\DateTimeInterface { return $this->get('status_changed_at'); }
    public function hasStatusChangedAt(): bool { return $this->has('status_changed_at'); }
    /** Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. [] enum: "accept". [] (Value): string.  Value enum: "accept".
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
