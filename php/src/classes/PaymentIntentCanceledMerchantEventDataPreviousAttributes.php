<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $authorization_expires_at
 * @property-read string|null $authorized_at
 * @property-read MoneyValuePreviousAttributes|null $authorized_money
 * @property-read string|null $cancellation_reason
 * @property-read MoneyValuePreviousAttributes|null $capturable_money
 * @property-read string|null $capture_method
 * @property-read string|null $captured_at
 * @property-read MoneyValuePreviousAttributes|null $captured_money
 * @property-read MoneyValuePreviousAttributes|null $captured_tip_money
 * @property-read string|null $checkout_session_id
 * @property-read string|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $customer_presence
 * @property-read string|null $dispute_status
 * @property-read string|null $external_reference_id
 * @property-read int|null $failed_attempt_count
 * @property-read list<FailedPaymentAttemptPreviousAttributes>|null $failed_attempts
 * @property-read PaymentFulfillmentHoldPreviousAttributes|null $fulfillment_hold
 * @property-read string|null $idempotency_key
 * @property-read ExpandedInvoiceSummaryPreviousAttributes|null $invoice
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_schedule_entry_id
 * @property-read PaymentErrorSummaryPreviousAttributes|null $last_payment_error
 * @property-read string|null $latest_order_payment_attempt_id
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_edit_id
 * @property-read string|null $order_id
 * @property-read PaymentIntentOvercapturePreviousAttributes|null $overcapture
 * @property-read string|null $payment_flow
 * @property-read string|null $payment_intent_id
 * @property-read list<string>|null $payment_options
 * @property-read PaymentSourceSummaryPreviousAttributes|null $payment_source
 * @property-read PaymentIntentPlatformFeePreviousAttributes|null $platform_fee
 * @property-read string|null $reader_id
 * @property-read string|null $receipt_email
 * @property-read string|null $refund_expires_at
 * @property-read string|null $refund_status
 * @property-read MoneyValuePreviousAttributes|null $refunded_money
 * @property-read MoneyValuePreviousAttributes|null $released_money
 * @property-read bool|null $request_overcapture
 * @property-read string|null $return_id
 * @property-read string|null $return_resolution_id
 * @property-read PaymentRiskPreviousAttributes|null $risk
 * @property-read string|null $selected_payment_option
 * @property-read list<PaymentSplitPreviousAttributes>|null $splits
 * @property-read string|null $statement_descriptor
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read string|null $support_reference
 * @property-read list<string>|null $supported_actions
 * @property-read MoneyValuePreviousAttributes|null $tip_money
 * @property-read string|null $transaction_purpose
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentCanceledMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'authorization_expires_at'?: mixed, 'authorized_at'?: mixed, 'authorized_money'?: mixed, 'cancellation_reason'?: mixed, 'capturable_money'?: mixed, 'capture_method'?: mixed, 'captured_at'?: mixed, 'captured_money'?: mixed, 'captured_tip_money'?: mixed, 'checkout_session_id'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'customer_presence'?: mixed, 'dispute_status'?: mixed, 'external_reference_id'?: mixed, 'failed_attempt_count'?: mixed, 'failed_attempts'?: mixed, 'fulfillment_hold'?: mixed, 'idempotency_key'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'invoice_schedule_entry_id'?: mixed, 'last_payment_error'?: mixed, 'latest_order_payment_attempt_id'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_edit_id'?: mixed, 'order_id'?: mixed, 'overcapture'?: mixed, 'payment_flow'?: mixed, 'payment_intent_id'?: mixed, 'payment_options'?: mixed, 'payment_source'?: mixed, 'platform_fee'?: mixed, 'reader_id'?: mixed, 'receipt_email'?: mixed, 'refund_expires_at'?: mixed, 'refund_status'?: mixed, 'refunded_money'?: mixed, 'released_money'?: mixed, 'request_overcapture'?: mixed, 'return_id'?: mixed, 'return_resolution_id'?: mixed, 'risk'?: mixed, 'selected_payment_option'?: mixed, 'splits'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'support_reference'?: mixed, 'supported_actions'?: mixed, 'tip_money'?: mixed, 'transaction_purpose'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentCanceledMerchantEventDataPreviousAttributes')); }
    /** The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. anyOf[1] (Value): string. Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAuthorizationExpiresAt(): string|null { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** When the processor authorized the payment. Absent until then. anyOf[1] (Value): string. When the processor authorized the payment. Absent until then. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAuthorizedAt(): string|null { return $this->get('authorized_at'); }
    public function hasAuthorizedAt(): bool { return $this->has('authorized_at'); }
    /** The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAuthorizedMoney(): MoneyValuePreviousAttributes|null { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled", "payment_returned". anyOf[1] (Value): string. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. A cancellation without a specific reason returns payment_canceled. Absent while last_payment_error.code is payment_blocked and Flint has not identified money to return. Unknown processor values are returned as payment_canceled. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled", "payment_returned". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCapturableMoney(): MoneyValuePreviousAttributes|null { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". anyOf[1] (Value): string. When money is collected. Defaults to automatic. Value enum: "automatic", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCaptureMethod(): string|null { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. anyOf[1] (Value): string. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCapturedAt(): string|null { return $this->get('captured_at'); }
    public function hasCapturedAt(): bool { return $this->has('captured_at'); }
    /** The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCapturedMoney(): MoneyValuePreviousAttributes|null { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getCapturedTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('captured_tip_money'); }
    public function hasCapturedTipMoney(): bool { return $this->has('captured_tip_money'); }
    /** Flint checkout session ID associated with this payment, when present. anyOf[1] (Value): string. Flint checkout session ID associated with this payment, when present. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Customer linked to this payment intent. anyOf[1] (Value): string. Customer linked to this payment intent. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Value enum: "present", "absent". anyOf[1] (Value): string. Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Value enum: "present", "absent". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerPresence(): string|null { return $this->get('customer_presence'); }
    public function hasCustomerPresence(): bool { return $this->has('customer_presence'); }
    /** Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): string. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeStatus(): string|null { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. `null` when no external reference ID has been set on the payment intent. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. anyOf[1] (Value): integer. All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getFailedAttemptCount(): int|null { return $this->get('failed_attempt_count'); }
    public function hasFailedAttemptCount(): bool { return $this->has('failed_attempt_count'); }
    /** Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. anyOf[1] (Value): Array of {@see FailedPaymentAttemptPreviousAttributes}. Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be included in failed_attempt_count. anyOf[1][] (Value): {@see FailedPaymentAttemptPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<FailedPaymentAttemptPreviousAttributes>|null
     */
    public function getFailedAttempts(): array|null { return $this->get('failed_attempts'); }
    public function hasFailedAttempts(): bool { return $this->has('failed_attempts'); }
    /** Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. anyOf[1] (Value): {@see PaymentFulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentFulfillmentHoldPreviousAttributes|null
     */
    public function getFulfillmentHold(): PaymentFulfillmentHoldPreviousAttributes|null { return $this->get('fulfillment_hold'); }
    public function hasFulfillmentHold(): bool { return $this->has('fulfillment_hold'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@see ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedInvoiceSummaryPreviousAttributes|null
     */
    public function getInvoice(): ExpandedInvoiceSummaryPreviousAttributes|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Invoice this payment intent collects, when it pays an invoice. anyOf[1] (Value): string. Invoice this payment intent collects, when it pays an invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** The invoice installment this payment collects. anyOf[1] (Value): string. The invoice installment this payment collects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceScheduleEntryId(): string|null { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@see PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentErrorSummaryPreviousAttributes|null
     */
    public function getLastPaymentError(): PaymentErrorSummaryPreviousAttributes|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. anyOf[1] (Value): string. The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLatestOrderPaymentAttemptId(): string|null { return $this->get('latest_order_payment_attempt_id'); }
    public function hasLatestOrderPaymentAttemptId(): bool { return $this->has('latest_order_payment_attempt_id'); }
    /** Merchant that owns this payment intent. anyOf[1] (Value): string. Merchant that owns this payment intent. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Always present with merchant credentials. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. anyOf[1] (Value): string. The order edit whose balance this payment collects. Omitted when this payment doesn't collect an edit's balance. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderEditId(): string|null { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. anyOf[1] (Value): string. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. anyOf[1] (Value): {@see PaymentIntentOvercapturePreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentIntentOvercapturePreviousAttributes|null
     */
    public function getOvercapture(): PaymentIntentOvercapturePreviousAttributes|null { return $this->get('overcapture'); }
    public function hasOvercapture(): bool { return $this->has('overcapture'); }
    /** How the payment was started. Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[1] (Value): string. How the payment was started. Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentFlow(): string|null { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Flint payment intent ID. anyOf[1] (Value): string. Flint payment intent ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentIntentId(): string|null { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Payment options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[1] (Value): Array of string. Payment options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[1][] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentOptions(): array|null { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Summary of the card or bank account used for the payment. Absent until a payment source is attached. anyOf[1] (Value): {@see PaymentSourceSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentSourceSummaryPreviousAttributes|null
     */
    public function getPaymentSource(): PaymentSourceSummaryPreviousAttributes|null { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
    /** The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. anyOf[1] (Value): {@see PaymentIntentPlatformFeePreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentIntentPlatformFeePreviousAttributes|null
     */
    public function getPlatformFee(): PaymentIntentPlatformFeePreviousAttributes|null { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. anyOf[1] (Value): string. The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id and no payment_source.card.card_present, the payment is on that reader now. After a card is read, the payment can stay processing while Flint captures it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReaderId(): string|null { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. anyOf[1] (Value): string. Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt email has been set on the payment intent. Format: email. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceiptEmail(): string|null { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
    /** Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. anyOf[1] (Value): string. Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Always present with merchant credentials. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundExpiresAt(): string|null { return $this->get('refund_expires_at'); }
    public function hasRefundExpiresAt(): bool { return $this->has('refund_expires_at'); }
    /** How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundStatus(): string|null { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRefundedMoney(): MoneyValuePreviousAttributes|null { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getReleasedMoney(): MoneyValuePreviousAttributes|null { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. anyOf[1] (Value): boolean. Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequestOvercapture(): bool|null { return $this->get('request_overcapture'); }
    public function hasRequestOvercapture(): bool { return $this->has('request_overcapture'); }
    /** Flint return ID associated with this payment, when present. anyOf[1] (Value): string. Flint return ID associated with this payment, when present. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** The return resolution whose balance this payment collects. Set for exchange balances and corrections. anyOf[1] (Value): string. The return resolution whose balance this payment collects. Set for exchange balances and corrections. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Risk assessment. Always present with merchant credentials. `null` when the payment intent's latest payment attempt has no completed risk assessment, such as before its first confirmation. Omitted with the checkout credential. anyOf[1] (Value): {@see PaymentRiskPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentRiskPreviousAttributes|null
     */
    public function getRisk(): PaymentRiskPreviousAttributes|null { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[1] (Value): string. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSelectedPaymentOption(): string|null { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. anyOf[1] (Value): Array of {@see PaymentSplitPreviousAttributes}. Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. anyOf[1][] (Value): {@see PaymentSplitPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PaymentSplitPreviousAttributes>|null
     */
    public function getSplits(): array|null { return $this->get('splits'); }
    public function hasSplits(): bool { return $this->has('splits'); }
    /** The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. anyOf[1] (Value): string. The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. anyOf[1] (Value): string. The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Opaque payment reference to share with merchant support. Do not parse its format. anyOf[1] (Value): string. Opaque payment reference to share with merchant support. Do not parse its format. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportReference(): string|null { return $this->get('support_reference'); }
    public function hasSupportReference(): bool { return $this->has('support_reference'); }
    /** Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. [] enum: "confirm", "capture", "cancel". anyOf[1] (Value): Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. [] enum: "confirm", "capture", "cancel". anyOf[1][] (Value): string.  Value enum: "confirm", "capture", "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set, and for an order payment until its payment attempt has moved past requires_payment_method and requires_confirmation. An order payment without a tip can return an amount of 0 instead. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTipMoney(): MoneyValuePreviousAttributes|null { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services", "other". anyOf[1] (Value): string. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTransactionPurpose(): string|null { return $this->get('transaction_purpose'); }
    public function hasTransactionPurpose(): bool { return $this->has('transaction_purpose'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
