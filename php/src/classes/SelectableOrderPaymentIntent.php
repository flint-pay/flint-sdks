<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read ?PaymentErrorSummary $last_payment_error
 * @property-read ?PaymentCollection $payment_collection
 * @property-read string $payment_intent_id
 * @property-read string $status
 * @property-read MoneyValue $tip_money
 * Presence-aware response; omitted optional fields return null. */
final class SelectableOrderPaymentIntent extends Model {
    /** @param array{'amount_money': mixed, 'last_payment_error'?: mixed, 'payment_collection'?: mixed, 'payment_intent_id': string, 'status': string, 'tip_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SelectableOrderPaymentIntent')); }
    /** Shape $ (Value): {@see MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): {@see PaymentErrorSummary}. Most recent payment failure, when one is recorded. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return ?PaymentErrorSummary
     */
    public function getLastPaymentError(): ?PaymentErrorSummary { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** Shape $ (Value): {@see PaymentCollection}. Client setup details for collecting this payment. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return ?PaymentCollection
     */
    public function getPaymentCollection(): ?PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** Shape $ (Value): string. Flint payment intent ID.
     * @return string
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Value enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see MoneyValue}. Portion of this payment's amount allocated to a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTipMoney(): MoneyValue { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
}
