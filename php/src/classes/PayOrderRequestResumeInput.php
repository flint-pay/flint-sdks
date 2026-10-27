<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read string $order_payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestResumeInput extends Model {
    /** @param array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestResumeInput')); }
    /** Shape $ (Value): string.  Value enum: "resume".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): {@see CheckoutBuyerContactRequestInput}. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: 1. Shape $.email (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255. minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     * @return array{'email'?: string, 'phone'?: string}|object
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): array|object { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
}
