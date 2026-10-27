<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass $accepted_gift_card_allocation
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read string $completion_behavior
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read string $expected_version
 * @property-read list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read bool $save_payment_method
 * @property-read string $save_payment_method_phone
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestConfirmPaymentIntentsInput extends Model {
    /** @param array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'completion_behavior'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'payment_intents': list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestConfirmPaymentIntentsInput')); }
    /** Shape $ (Value): {@see OrderGiftCardAllocationAcceptanceInput}. Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder.
     * @return OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When accepted_gift_card_allocation is omitted; use hasAcceptedGiftCardAllocation() or valueOrDefault().
     */
    public function getAcceptedGiftCardAllocation(): mixed { return $this->get('accepted_gift_card_allocation'); }
    public function hasAcceptedGiftCardAllocation(): bool { return $this->has('accepted_gift_card_allocation'); }
    /** Shape $ (Value): string.  Value enum: "confirm_payment_intents".
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
    /** Shape $ (Value): string.  Value enum: "complete_order", "partial_payment".
     * @return string
     * @throws SdkError When completion_behavior is omitted; use hasCompletionBehavior() or valueOrDefault().
     */
    public function getCompletionBehavior(): string { return $this->get('completion_behavior'); }
    public function hasCompletionBehavior(): bool { return $this->has('completion_behavior'); }
    /** Shape $ (Value): {@see MoneyValueInput}. The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): Array of {@see OrderPaymentIntentSelectionInput}. minItems: 1. Shape $[] (Value): {@see OrderPaymentIntentSelectionInput}. Identifies a payment intent to confirm for an order and the credential to use: a token, a saved payment method, a Stripe confirmation token, or the attached source.
     * @return list<OrderPaymentIntentSelectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Shape $ (Value): boolean. The buyer's choice to save the card they typed for faster checkout at this merchant. Send true only from the checkout session's own credential, when the session's can_save_payment_method is true and save_payment_method_requires_verification is false, for one newly collected card sent as stripe.confirmation_token created with setup_future_usage on_session. The card is saved with usage on_session once the payment succeeds, for the customer the checkout acts for: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides it. A checkout that acts for no customer refuses the save until the buyer confirms their email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by a texted code saves the card with that number. A checkout whose buyer confirmed the customer's email can also send save_payment_method_phone, to save the card with a number the buyer confirms by text after paying. A checkout can send the buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm, in stripe.confirmation_token created with no setup_future_usage, pays without the save, and the payment attempt's payment_method_save reports not_saved with reason payment_method_not_saveable. The session's save_payment_method_types lists what is saved. Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must then have no setup_future_usage. Default: false.
     * @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
    /** Shape $ (Value): string. A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a card saved while the checkout acts for no customer, or for the customer whose email the buyer confirmed in it. Send it with save_payment_method: true only from the checkout session's own credential, when the session's can_save_payment_method_with_phone is true. The card is kept for the customer the checkout acts for, or else the merchant's customer with the buyer's email, once the payment succeeds, or once it is approved when the merchant captures later, but works for nothing until the buyer confirms it within 24 hours, with a code texted to this number or, when the customer's email is the email of the payment, emailed there instead: request the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method, and read payment_method_save on the checkout session. A card saved with the number makes it the customer's saved number, and the cards saved with the number it replaces are removed. A card not confirmed in time is not saved. minLength: 1. maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     * @return string
     * @throws SdkError When save_payment_method_phone is omitted; use hasSavePaymentMethodPhone() or valueOrDefault().
     */
    public function getSavePaymentMethodPhone(): string { return $this->get('save_payment_method_phone'); }
    public function hasSavePaymentMethodPhone(): bool { return $this->has('save_payment_method_phone'); }
}
