<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass $accepted_gift_card_allocation
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read string $buyer_ip_address
 * @property-read string $client_action_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read int $expected_version
 * @property-read string $payment_return_url
 * @property-read PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass $payment_source
 * @property-read PlatformFeeRequestInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read bool $save_payment_method
 * @property-read string $save_payment_method_phone
 * @property-read list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass> $splits
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestPayInput extends Model {
    /** @param array{'accepted_gift_card_allocation'?: OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass, 'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'buyer_ip_address'?: string, 'client_action_type'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'payment_return_url'?: string, 'payment_source'?: PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: PlatformFeeRequestInput|array<array-key, mixed>|\stdClass, 'save_payment_method'?: bool, 'save_payment_method_phone'?: string, 'splits'?: list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestPayInput')); }
    /** Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * @return OrderGiftCardAllocationAcceptanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When accepted_gift_card_allocation is omitted; use hasAcceptedGiftCardAllocation() or valueOrDefault().
     */
    public function getAcceptedGiftCardAllocation(): mixed { return $this->get('accepted_gift_card_allocation'); }
    public function hasAcceptedGiftCardAllocation(): bool { return $this->has('accepted_gift_card_allocation'); }
    /** Value enum: "pay".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: 1. email (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional): (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     * @return array{'email'?: string, 'phone'?: string}|object
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): array|object { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only. minLength: 1. maxLength: 64.
     * @return string
     * @throws SdkError When buyer_ip_address is omitted; use hasBuyerIpAddress() or valueOrDefault().
     */
    public function getBuyerIpAddress(): string { return $this->get('buyer_ip_address'); }
    public function hasBuyerIpAddress(): bool { return $this->has('buyer_ip_address'); }
    /** How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value enum: "url", "stripe".
     * @return string
     * @throws SdkError When client_action_type is omitted; use hasClientActionType() or valueOrDefault().
     */
    public function getClientActionType(): string { return $this->get('client_action_type'); }
    public function hasClientActionType(): bool { return $this->has('client_action_type'); }
    /** The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** A saved card on a checkout whose customer came from a code requires a code confirmed with this credential in the last 15 minutes when the order ships to a new address. Otherwise pay returns 409 ACTION_NOT_ALLOWED with reason verification_required and a next action to request purpose pay_to_new_address. Known addresses are saved addresses or destinations of earlier paid orders for this customer at this business; for a Flint wallet card, wallet addresses count too. Pickup and orders that ship nothing never require it. A merchant-named customer, typed card, Apple Pay, and Google Pay are unaffected. The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
     * @return PaymentSourceCredentialInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_source is omitted; use hasPaymentSource() or valueOrDefault().
     */
    public function getPaymentSource(): mixed { return $this->get('payment_source'); }
    public function hasPaymentSource(): bool { return $this->has('payment_source'); }
    /** A platform fee your partner app charges on the processor payment pay creates, checked against what that payment collects after gift cards. A pay that gift cards or a zero balance settle creates no processor payment and charges no fee. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     * @return PlatformFeeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee is omitted; use hasPlatformFee() or valueOrDefault().
     */
    public function getPlatformFee(): mixed { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** The buyer's choice to save the card they typed for faster checkout at this merchant. Send true only from the checkout session's own credential, when the session's can_save_payment_method is true, for one newly collected card sent as stripe.confirmation_token created with setup_future_usage on_session. The card is saved with usage on_session once the payment succeeds, for the customer the checkout acts for: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email is required. The card is kept pending for the customer with that email, creating one if needed, and opens nothing until confirmed on the receipt within 24 hours. Without save_payment_method_phone, payment_method_save.email_confirmation_required is true and an emailed code confirms the save with purpose confirm_saved_payment_method and channel email. The code goes only to the email given with the payment. Subscription signup and setup still require email verification before collection when the email belongs to an existing customer. A checkout the buyer bound by a texted code saves the card with that number. A checkout whose buyer confirmed the customer's email can also send save_payment_method_phone, to save the card with a number the buyer confirms by text after paying. A checkout can send the buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm, in stripe.confirmation_token created with no setup_future_usage, pays without the save, and the payment attempt's payment_method_save reports not_saved with reason payment_method_not_saveable. The session's save_payment_method_types lists what is saved. Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must then have no setup_future_usage. Default: false.
     * @return bool
     * @throws SdkError When save_payment_method is omitted; use hasSavePaymentMethod() or valueOrDefault().
     */
    public function getSavePaymentMethod(): bool { return $this->get('save_payment_method'); }
    public function hasSavePaymentMethod(): bool { return $this->has('save_payment_method'); }
    /** A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a card saved while the checkout acts for no customer, or for the customer whose email the buyer confirmed in it. Send it with save_payment_method: true only from the checkout session's own credential, when the session's can_save_payment_method_with_phone is true. The card is kept for the customer the checkout acts for, or else the merchant's customer with the buyer's email, once the payment succeeds, or once it is approved when the merchant captures later, but works for nothing until the buyer confirms it within 24 hours, with a code texted to this number or, when the customer's email is the email of the payment, emailed there instead: request the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method, and read payment_method_save on the checkout session. A card saved with the number makes it the customer's saved number, and the cards saved with the number it replaces are removed. A card not confirmed in time is not saved. minLength: 1. maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     * @return string
     * @throws SdkError When save_payment_method_phone is omitted; use hasSavePaymentMethodPhone() or valueOrDefault().
     */
    public function getSavePaymentMethodPhone(): string { return $this->get('save_payment_method_phone'); }
    public function hasSavePaymentMethodPhone(): bool { return $this->has('save_payment_method_phone'); }
    /** Divide this payment's funds between the collecting merchant and sellers; this is separate from split tender, where a buyer uses several payment methods. Only the collecting merchant's own credentials can send splits. Each install must belong to the same app owned by the collecting merchant, with the seller's approval in this mode and readiness to receive payouts. Test mode needs no platform review; live mode requires the app's active payment_splits capability and Flint support for the collecting account. Can't be combined with platform_fee or saved payment credentials. The total must fit after the largest Flint fee for the offered payment options, leaving one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after create, except capture's final amounts. Part of the idempotency fingerprint. On pay, the total must fit the processor payment after gift cards. A payment funded entirely by gift cards can't have splits. minItems: 1. maxItems: 25. [] (Value): {@see PaymentSplitRequestInput}. A seller's fixed share of one payment, created with that payment. This divides the payment's funds; split tender divides how the buyer pays.
     * @return list<PaymentSplitRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When splits is omitted; use hasSplits() or valueOrDefault().
     */
    public function getSplits(): array { return $this->get('splits'); }
    public function hasSplits(): bool { return $this->has('splits'); }
}
