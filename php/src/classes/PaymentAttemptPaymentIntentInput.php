<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $authorization_expires_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $capturable_money
 * @property-read PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass $last_payment_error
 * @property-read string $payment_intent_id
 * @property-read string $selected_payment_option
 * @property-read string $status
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentAttemptPaymentIntentInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'authorization_expires_at'?: string|\DateTimeInterface, 'capturable_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'payment_intent_id': string, 'selected_payment_option'?: string, 'status': string, 'tip_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentAttemptPaymentIntentInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Capture is unavailable at or after this time, even if the payment still has requires_capture status. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When authorization_expires_at is omitted; use hasAuthorizationExpiresAt() or valueOrDefault().
     */
    public function getAuthorizationExpiresAt(): string|\DateTimeInterface { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When capturable_money is omitted; use hasCapturableMoney() or valueOrDefault().
     */
    public function getCapturableMoney(): mixed { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Shape $ (Value): {@see PaymentErrorSummaryInput}. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Shape $ (Value): string. Flint payment intent ID.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     * @throws SdkError When selected_payment_option is omitted; use hasSelectedPaymentOption() or valueOrDefault().
     */
    public function getSelectedPaymentOption(): string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
