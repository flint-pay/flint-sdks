<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $authorization_expires_at
 * @property-read ?string $authorized_at
 * @property-read ?MoneyValue $authorized_money
 * @property-read ?string $cancellation_reason
 * @property-read ?MoneyValue $capturable_money
 * @property-read ?string $capture_method
 * @property-read ?string $captured_at
 * @property-read ?MoneyValue $captured_money
 * @property-read ?MoneyValue $captured_tip_money
 * @property-read ?string $checkout_session_id
 * @property-read ?string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read string $customer_presence
 * @property-read ?string $dispute_status
 * @property-read string|null $external_reference_id
 * @property-read ?PaymentFulfillmentHold $fulfillment_hold
 * @property-read ExpandedInvoiceSummary|null $invoice
 * @property-read ?string $invoice_id
 * @property-read PaymentErrorSummary|null $last_payment_error
 * @property-read string|null $latest_order_payment_attempt_id
 * @property-read ?string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read ?string $order_id
 * @property-read ?PaymentIntentOvercapture $overcapture
 * @property-read string $payment_flow
 * @property-read string $payment_intent_id
 * @property-read list<string> $payment_options
 * @property-read ?PaymentSourceSummary $payment_source
 * @property-read ?PaymentIntentPlatformFee $platform_fee
 * @property-read ?string $reader_id
 * @property-read string|null $receipt_email
 * @property-read string|null $refund_expires_at
 * @property-read ?string $refund_status
 * @property-read ?MoneyValue $refunded_money
 * @property-read ?MoneyValue $released_money
 * @property-read ?bool $request_overcapture
 * @property-read ?string $return_id
 * @property-read ?string $return_resolution_id
 * @property-read PaymentRisk|null $risk
 * @property-read ?string $selected_payment_option
 * @property-read ?list<PaymentSplit> $splits
 * @property-read string|null $statement_descriptor
 * @property-read string $status
 * @property-read ?string $subscription_id
 * @property-read string $support_reference
 * @property-read list<string> $supported_actions
 * @property-read MoneyValue|null $tip_money
 * @property-read ?string $transaction_purpose
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentAuthorizationExpiringMerchantEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'authorization_expires_at'?: string, 'authorized_at'?: string, 'authorized_money'?: mixed, 'cancellation_reason'?: string, 'capturable_money'?: mixed, 'capture_method'?: string, 'captured_at'?: string, 'captured_money'?: mixed, 'captured_tip_money'?: mixed, 'checkout_session_id'?: string, 'created_at'?: string, 'customer'?: mixed, 'customer_id'?: string, 'customer_presence': string, 'dispute_status'?: string, 'external_reference_id'?: string|null, 'fulfillment_hold'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'last_payment_error': mixed, 'latest_order_payment_attempt_id'?: string|null, 'merchant_id'?: string, 'metadata': mixed, 'order'?: mixed, 'order_id'?: string, 'overcapture'?: mixed, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: mixed, 'platform_fee'?: mixed, 'reader_id'?: string, 'receipt_email'?: string|null, 'refund_expires_at': string|null, 'refund_status'?: string, 'refunded_money'?: mixed, 'released_money'?: mixed, 'request_overcapture'?: bool, 'return_id'?: string, 'return_resolution_id'?: string, 'risk'?: mixed, 'selected_payment_option'?: string, 'splits'?: list<mixed>, 'statement_descriptor': string|null, 'status': string, 'subscription_id'?: string, 'support_reference': string, 'supported_actions': list<string>, 'tip_money'?: mixed, 'transaction_purpose'?: string, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentAuthorizationExpiringMerchantEventDataObject')); }
    /** The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Effective Flint deadline to capture a manual-capture hold: the earlier of the provider capture deadline and any order resource guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end earlier. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: date-time.
     * @return ?string
     */
    public function getAuthorizationExpiresAt(): ?string { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** When the processor authorized the payment. Absent until then. Format: date-time.
     * @return ?string
     */
    public function getAuthorizedAt(): ?string { return $this->get('authorized_at'); }
    public function hasAuthorizedAt(): bool { return $this->has('authorized_at'); }
    /** The amount the processor authorized. It always equals amount_money and doesn't change once set, even when a capture collects more. On a payment intent canceled with cancellation_reason payment_returned, it equals the authorization Flint released instead. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAuthorizedMoney(): ?MoneyValue { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled", "payment_returned".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturableMoney(): ?MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
     * @return ?string
     */
    public function getCaptureMethod(): ?string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * @return ?string
     */
    public function getCapturedAt(): ?string { return $this->get('captured_at'); }
    public function hasCapturedAt(): bool { return $this->has('captured_at'); }
    /** The amount collected from the buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. After an overcapture it is above authorized_money. Also positive on a payment intent canceled with cancellation_reason payment_returned: Flint captured the money and is returning it through a refund with reason payment_returned. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturedMoney(): ?MoneyValue { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** The part of captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip the authorization carried. Refunds return it last. Absent until the payment is captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturedTipMoney(): ?MoneyValue { return $this->get('captured_tip_money'); }
    public function hasCapturedTipMoney(): bool { return $this->has('captured_tip_money'); }
    /** Flint checkout session ID associated with this payment, when present.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Customer linked to this payment intent.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Whether the customer was present for the most recent confirmation. absent means Flint charged a saved card without them, as a merchant-initiated payment on its stored credential. Subscription renewals and automatic invoice charges are absent, and other payments are absent only when confirmed or paid with customer_presence absent. A customer who pays any of them with a card they enter makes it present. Each confirmation sets it again. Value enum: "present", "absent".
     * @return string
     */
    public function getCustomerPresence(): string { return $this->get('customer_presence'); }
    public function hasCustomerPresence(): bool { return $this->has('customer_presence'); }
    /** Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return ?string
     */
    public function getDisputeStatus(): ?string { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Caller-owned identifier for this resource in an external system. Null when no external reference is recorded. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.
     * @return ?PaymentFulfillmentHold
     */
    public function getFulfillmentHold(): ?PaymentFulfillmentHold { return $this->get('fulfillment_hold'); }
    public function hasFulfillmentHold(): bool { return $this->has('fulfillment_hold'); }
    /** The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@see ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
     * @return ExpandedInvoiceSummary|null
     */
    public function getInvoice(): ExpandedInvoiceSummary|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Invoice this payment intent collects, when it pays an invoice.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@see PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     * @return PaymentErrorSummary|null
     */
    public function getLastPaymentError(): PaymentErrorSummary|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** The order payment attempt that most recently used this payment intent. Start times count to the second; of attempts that started in the same second, the one with the highest order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for payment intents without an order. It changes only when an attempt starts using this payment intent, which advances version. Returned with merchant credentials; omitted with buyer and checkout credentials.
     * @return string|null
     */
    public function getLatestOrderPaymentAttemptId(): string|null { return $this->get('latest_order_payment_attempt_id'); }
    public function hasLatestOrderPaymentAttemptId(): bool { return $this->has('latest_order_payment_attempt_id'); }
    /** Merchant that owns this payment intent.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Whether one capture can collect more than the authorization, and the most it can collect. Present once a payment with request_overcapture true is authorized. Read it to show the limit; capture enforces it. Whether one capture can collect more than the authorization.
     * @return ?PaymentIntentOvercapture
     */
    public function getOvercapture(): ?PaymentIntentOvercapture { return $this->get('overcapture'); }
    public function hasOvercapture(): bool { return $this->has('overcapture'); }
    /** How the payment was started. Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return string
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Flint payment intent ID.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Payment options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * @return list<string>
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details.
     * @return ?PaymentSourceSummary
     */
    public function getPaymentSource(): ?PaymentSourceSummary { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
    /** The platform fee a partner app charges on this payment, when it created the payment with an install token and a fee. Absent when the payment carries none. Returned only to merchant credentials; omitted for buyer and checkout credentials. The platform fee a partner app charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
     * @return ?PaymentIntentPlatformFee
     */
    public function getPlatformFee(): ?PaymentIntentPlatformFee { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now.
     * @return ?string
     */
    public function getReaderId(): ?string { return $this->get('reader_id'); }
    public function hasReaderId(): bool { return $this->has('reader_id'); }
    /** Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Null when no receipt email address is recorded on the payment. Format: email. maxLength: 255.
     * @return string|null
     */
    public function getReceiptEmail(): string|null { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
    /** Last time Flint can refund this payment through the original payment method. A refund submitted at exactly this time is accepted; after it, refunds through the original payment method are refused. Today only Affirm has a refund window: 120 days after the payment settles. `null` when the method has no refund window, the payment has not succeeded with captured money, or its capture time is missing. Format: date-time.
     * @return string|null
     */
    public function getRefundExpiresAt(): string|null { return $this->get('refund_expires_at'); }
    public function hasRefundExpiresAt(): bool { return $this->has('refund_expires_at'); }
    /** How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     * @return ?string
     */
    public function getRefundStatus(): ?string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRefundedMoney(): ?MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Zero after a capture at or above the authorization. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getReleasedMoney(): ?MoneyValue { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Whether one capture may collect more than the authorization where the card network allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and checkout credentials.
     * @return ?bool
     */
    public function getRequestOvercapture(): ?bool { return $this->get('request_overcapture'); }
    public function hasRequestOvercapture(): bool { return $this->has('request_overcapture'); }
    /** Flint return ID associated with this payment, when present.
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** The return resolution whose balance this payment collects. Set for exchange balances and corrections.
     * @return ?string
     */
    public function getReturnResolutionId(): ?string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Risk assessment. Always present with merchant credentials. Null when no risk assessment is available. Omitted with the checkout credential. anyOf[1] (Value): {@see PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome, and any matched rule or review. anyOf[2] (Value): null.
     * @return PaymentRisk|null
     */
    public function getRisk(): PaymentRisk|null { return $this->get('risk'); }
    public function hasRisk(): bool { return $this->has('risk'); }
    /** The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * @return ?string
     */
    public function getSelectedPaymentOption(): ?string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** Top-level PaymentSplit children in their current state, embedded whole. Empty when the payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer and checkout credentials. [] (Value): {@see PaymentSplit}. A top-level child of a payment intent dividing the collecting merchant's payment funds with one seller. Both parties read this same resource with their own credentials.
     * @return ?list<PaymentSplit>
     */
    public function getSplits(): ?array { return $this->get('splits'); }
    public function hasSplits(): bool { return $this->has('splits'); }
    /** The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The subscription whose billing charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout payment that created a subscription.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Opaque payment reference to share with merchant support. Do not parse its format.
     * @return string
     */
    public function getSupportReference(): string { return $this->get('support_reference'); }
    public function hasSupportReference(): bool { return $this->has('support_reference'); }
    /** Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. [] enum: "confirm", "capture", "cancel". [] (Value): string.  Value enum: "confirm", "capture", "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Null when no tip is recorded. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getTipMoney(): MoneyValue|null { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services", "other".
     * @return ?string
     */
    public function getTransactionPurpose(): ?string { return $this->get('transaction_purpose'); }
    public function hasTransactionPurpose(): bool { return $this->has('transaction_purpose'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
