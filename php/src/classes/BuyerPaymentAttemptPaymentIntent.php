<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?string $authorization_expires_at
 * @property-read ?MoneyValue $capturable_money
 * @property-read ?BuyerPaymentErrorSummary $last_payment_error
 * @property-read string $payment_intent_id
 * @property-read ?string $selected_payment_option
 * @property-read string $status
 * @property-read MoneyValue $tip_money
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPaymentAttemptPaymentIntent extends Model {
    /** @param array{'amount_money': mixed, 'authorization_expires_at'?: string, 'capturable_money'?: mixed, 'last_payment_error'?: mixed, 'payment_intent_id': string, 'selected_payment_option'?: string, 'status': string, 'tip_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPaymentAttemptPaymentIntent')); }
    /** Shape $ (Value): {@see MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Capture is unavailable at or after this time, even if the payment still has requires_capture status. Format: date-time.
     * @return ?string
     */
    public function getAuthorizationExpiresAt(): ?string { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCapturableMoney(): ?MoneyValue { return $this->get('capturable_money'); }
    public function hasCapturableMoney(): bool { return $this->has('capturable_money'); }
    /** Shape $ (Value): {@see BuyerPaymentErrorSummary}. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance.
     * @return ?BuyerPaymentErrorSummary
     */
    public function getLastPaymentError(): ?BuyerPaymentErrorSummary { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Shape $ (Value): string. Flint payment intent ID.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return ?string
     */
    public function getSelectedPaymentOption(): ?string { return $this->get('selected_payment_option'); }
    public function hasSelectedPaymentOption(): bool { return $this->has('selected_payment_option'); }
    /** Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTipMoney(): MoneyValue { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
