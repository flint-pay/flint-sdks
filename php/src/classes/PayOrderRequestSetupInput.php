<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read string $expected_version
 * @property-read PaymentSourceCredentialTokenInput|array<array-key, mixed>|\stdClass $setup_payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestSetupInput extends Model {
    /** @param array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'setup_payment_source': PaymentSourceCredentialTokenInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestSetupInput')); }
    /** Shape $ (Value): string.  Value enum: "setup".
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
    /** Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see PaymentSourceCredentialTokenInput}. The `token` variant of `PaymentSourceCredential`.
     * @return PaymentSourceCredentialTokenInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): mixed { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
