<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $authorization_expires_at
 * @property-read string|\DateTimeInterface $authorized_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $authorized_money
 * @property-read string $cancellation_reason
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $capturable_money
 * @property-read string $capture_method
 * @property-read string|\DateTimeInterface $captured_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $captured_money
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string|null $external_reference_id
 * @property-read PaymentFulfillmentHoldInput|array<array-key, mixed>|\stdClass $fulfillment_hold
 * @property-read string $invoice_id
 * @property-read array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, ...}|object|null $last_payment_error
 * @property-read string $merchant_id
 * @property-read array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $payment_flow
 * @property-read string $payment_intent_id
 * @property-read list<string> $payment_options
 * @property-read PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass $payment_source
 * @property-read string|null $receipt_email
 * @property-read string $refund_status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $released_money
 * @property-read string $return_id
 * @property-read string $selected_payment_option
 * @property-read string $status
 * @property-read string $support_reference
 * @property-read list<string> $supported_actions
 * @property-read array{'amount': string, 'currency': string}|object|null $tip_money
 * @property-read string $transaction_purpose
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerPaymentIntentInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'authorization_expires_at'?: string|\DateTimeInterface, 'authorized_at'?: string|\DateTimeInterface, 'authorized_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'capturable_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'capture_method'?: string, 'captured_at'?: string|\DateTimeInterface, 'captured_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'checkout_session_id'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'external_reference_id'?: string|null, 'fulfillment_hold'?: PaymentFulfillmentHoldInput|array<array-key, mixed>|\stdClass, 'invoice_id'?: string, 'last_payment_error': array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, ...}|object|null, 'merchant_id'?: string, 'metadata': array<array-key, mixed>|\stdClass, 'order_id'?: string, 'payment_flow': string, 'payment_intent_id': string, 'payment_options': list<string>, 'payment_source'?: PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass, 'receipt_email'?: string|null, 'refund_status'?: string, 'refunded_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'released_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'return_id'?: string, 'selected_payment_option'?: string, 'status': string, 'support_reference': string, 'supported_actions': list<string>, 'tip_money'?: array{'amount': string, 'currency': string}|object|null, 'transaction_purpose'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentIntentInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. When the hold lapses if it hasn't been collected. Set when the hold is placed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When authorization_expires_at is omitted; use hasAuthorizationExpiresAt() or valueOrDefault().
     */
    public function getAuthorizationExpiresAt(): string|\DateTimeInterface { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Shape $ (Value): string. When the processor authorized the payment. Absent until then. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When authorized_at is omitted; use hasAuthorizedAt() or valueOrDefault().
     */
    public function getAuthorizedAt(): string|\DateTimeInterface { return $this->get('authorized_at'); }
    public function hasAuthorizedAt(): bool { return $this->has('authorized_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount the processor authorized. It always equals amount_money and doesn't change once set. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When authorized_money is omitted; use hasAuthorizedMoney() or valueOrDefault().
     */
    public function getAuthorizedMoney(): mixed { return $this->get('authorized_money'); }
    public function hasAuthorizedMoney(): bool { return $this->has('authorized_money'); }
    /** Shape $ (Value): string. Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of the authorization that can still be collected. Positive only while status is requires_capture, and zero after it is collected, released, or expires. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): mixed { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Shape $ (Value): string. When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** Shape $ (Value): string. When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When captured_at is omitted; use hasCapturedAt() or valueOrDefault().
     */
    public function getCapturedAt(): string|\DateTimeInterface { return $this->get('captured_at'); }
    public function hasCapturedAt(): bool { return $this->has('captured_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount collected from the buyer. Zero while a hold is open, and positive whenever status is succeeded. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When captured_money is omitted; use hasCapturedMoney() or valueOrDefault().
     */
    public function getCapturedMoney(): mixed { return $this->get('captured_money'); }
    public function hasCapturedMoney(): bool { return $this->has('captured_money'); }
    /** Shape $ (Value): string. Flint checkout session ID associated with this payment, when present.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Customer linked to this payment intent.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see PaymentFulfillmentHoldInput}. Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments are on hold. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.
     * @return PaymentFulfillmentHoldInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment_hold is omitted; use hasFulfillmentHold() or valueOrDefault().
     */
    public function getFulfillmentHold(): mixed { return $this->get('fulfillment_hold'); }
    public function hasFulfillmentHold(): bool { return $this->has('fulfillment_hold'); }
    /** Shape $ (Value): string. Bill this payment collects, when it pays a bill.
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): {@see PaymentErrorSummaryInput} or null. Most recent payment error. Null when no payment error is recorded. Shape $.anyOf[1] (Value): {@see PaymentErrorSummaryInput}. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. Shape $.anyOf[2] (Value): null.
     * @return array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, 'remediation': array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object|null, ...}|object|null
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Shape $ (Value): string. Merchant that owns this payment intent.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): object. Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. maxProperties: 0.
     * @return array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Order this payment belongs to.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. How the payment was started. Fixed when the payment is created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * @return string
     * @throws SdkError When payment_flow is omitted; use hasPaymentFlow() or valueOrDefault().
     */
    public function getPaymentFlow(): string { return $this->get('payment_flow'); }
    public function hasPaymentFlow(): bool { return $this->has('payment_flow'); }
    /** Shape $ (Value): string. Flint payment intent ID.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): Array of string. Payment options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When payment_options is omitted; use hasPaymentOptions() or valueOrDefault().
     */
    public function getPaymentOptions(): array { return $this->get('payment_options'); }
    public function hasPaymentOptions(): bool { return $this->has('payment_options'); }
    /** Shape $ (Value): {@see PaymentSourceSummaryInput}. Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details.
     * @return PaymentSourceSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_source is omitted; use hasPaymentSource() or valueOrDefault().
     */
    public function getPaymentSource(): mixed { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
    /** Shape $ (Value): string or null. Email address for this payment's receipt. When it isn't set, Flint uses the buyer's email. Format: email. maxLength: 255.
     * @return string|null
     * @throws SdkError When receipt_email is omitted; use hasReceiptEmail() or valueOrDefault().
     */
    public function getReceiptEmail(): string|null { return $this->get('receipt_email'); }
    public function hasReceiptEmail(): bool { return $this->has('receipt_email'); }
    /** Shape $ (Value): string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The part of the authorization returned to the buyer without being charged: the uncollected remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When released_money is omitted; use hasReleasedMoney() or valueOrDefault().
     */
    public function getReleasedMoney(): mixed { return $this->get('released_money'); }
    public function hasReleasedMoney(): bool { return $this->has('released_money'); }
    /** Shape $ (Value): string. Flint return ID associated with this payment, when present.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string. The payment option the most recent confirmation used. Absent until the payment intent is first confirmed.
     * @return string
     * @throws SdkError When selected_payment_option is omitted; use hasSelectedPaymentOption() or valueOrDefault().
     */
    public function getSelectedPaymentOption(): string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Opaque payment reference to share with merchant support. Do not parse its format.
     * @return string
     * @throws SdkError When support_reference is omitted; use hasSupportReference() or valueOrDefault().
     */
    public function getSupportReference(): string { return $this->get('support_reference'); }
    public function hasSupportReference(): bool { return $this->has('support_reference'); }
    /** Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum: "confirm", "capture", "cancel". Shape $[] (Value): string.  Value enum: "confirm", "capture", "cancel".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** Shape $ (Value): string. Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services", "other".
     * @return string
     * @throws SdkError When transaction_purpose is omitted; use hasTransactionPurpose() or valueOrDefault().
     */
    public function getTransactionPurpose(): string { return $this->get('transaction_purpose'); }
    public function hasTransactionPurpose(): bool { return $this->has('transaction_purpose'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
