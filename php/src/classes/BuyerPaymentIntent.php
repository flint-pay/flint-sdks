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
 * @property-read ?string $customer_id
 * @property-read string $customer_presence
 * @property-read ?PaymentFulfillmentHold $fulfillment_hold
 * @property-read ?string $invoice_id
 * @property-read PaymentErrorSummary|null $last_payment_error
 * @property-read ?string $merchant_id
 * @property-read ?string $order_id
 * @property-read string $payment_flow
 * @property-read string $payment_intent_id
 * @property-read list<string> $payment_options
 * @property-read ?PaymentSourceSummary $payment_source
 * @property-read string|null $receipt_email
 * @property-read ?string $refund_status
 * @property-read ?MoneyValue $refunded_money
 * @property-read ?MoneyValue $released_money
 * @property-read ?string $return_id
 * @property-read ?string $return_resolution_id
 * @property-read ?string $selected_payment_option
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
final class BuyerPaymentIntent extends Model {
    /** @param array{'amount_money': mixed, 'authorization_expires_at'?: string, 'authorized_at'?: string, 'authorized_money'?: mixed, 'cancellation_reason'?: string, 'capturable_money'?: mixed, 'capture_method'?: string, 'captured_at'?: string, 'captured_money'?: mixed, 'captured_tip_money'?: mixed, 'checkout_session_id'?: string, 'created_at'?: string, 'customer_id'?: string, 'customer_presence': string, 'fulfillment_hold'?: mixed, 'invoice_id'?: string, 'last_payment_error': mixed, 'merchant_id'?: string, 'order_id'?: string, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: mixed, 'receipt_email'?: string|null, 'refund_status'?: string, 'refunded_money'?: mixed, 'released_money'?: mixed, 'return_id'?: string, 'return_resolution_id'?: string, 'selected_payment_option'?: string, 'statement_descriptor': string|null, 'status': string, 'subscription_id'?: string, 'support_reference': string, 'supported_actions': list<string>, 'tip_money'?: mixed, 'transaction_purpose'?: string, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentIntent')); }
    /** The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the hold lapses if it hasn't been collected: the earlier of the payment provider's deadline and any guarantee for reserved resources. Omitted until a hold is placed. Format: date-time.
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
    /** The part of the authorization that can still be collected. Positive only while status is requires_capture, and zero after it is collected, released, or expires. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** The amount collected from the buyer. Zero while a hold is open, and positive whenever status is succeeded. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturedMoney(): ?MoneyValue { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** The part of captured_money that is a tip. Absent until the payment is collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
    /** Customer linked to this payment intent.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Whether you took part in the latest charge. absent means the store charged your saved card while you weren't there, such as for a renewal or a fee. Each payment attempt sets it again. Value enum: "present", "absent".
     * @return string
     */
    public function getCustomerPresence(): string { return $this->get('customer_presence'); }
    public function hasCustomerPresence(): bool { return $this->has('customer_presence'); }
    /** Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.
     * @return ?PaymentFulfillmentHold
     */
    public function getFulfillmentHold(): ?PaymentFulfillmentHold { return $this->get('fulfillment_hold'); }
    public function hasFulfillmentHold(): bool { return $this->has('fulfillment_hold'); }
    /** Bill this payment collects, when it pays a bill.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@see PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     * @return PaymentErrorSummary|null
     */
    public function getLastPaymentError(): PaymentErrorSummary|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Merchant that owns this payment intent.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Order this payment belongs to.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** How the payment was started. Fixed when the payment is created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
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
    /** Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email. Format: email. maxLength: 255.
     * @return string|null
     */
    public function getReceiptEmail(): string|null { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
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
    /** The part of the authorization returned to the buyer without being charged: the uncollected remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getReleasedMoney(): ?MoneyValue { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
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
    /** The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * @return ?string
     */
    public function getSelectedPaymentOption(): ?string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** The text shown on the buyer's card or bank statement for this payment. `null` until the charge is created. `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * @return string|null
     */
    public function getStatementDescriptor(): string|null { return $this->get('statement_descriptor'); }
    public function hasStatementDescriptor(): bool { return $this->has('statement_descriptor'); }
    /** Lifecycle status. requires_payment_method covers both a new payment and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
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
    /** Always empty for buyer credentials. maxItems: 0. [] enum: "confirm", "capture", "cancel". [] (Value): string.  Value enum: "confirm", "capture", "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
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
