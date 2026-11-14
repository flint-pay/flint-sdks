<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_use_email_code
 * @property-read string $channel
 * @property-read string $checkout_session_customer_verification_id
 * @property-read string $checkout_session_id
 * @property-read string $code_route
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $email
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $phone_last_digits
 * @property-read string $purpose
 * @property-read list<string> $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionCustomerVerificationInput extends Model {
    /** @param array{'can_use_email_code'?: bool, 'channel': string, 'checkout_session_customer_verification_id': string, 'checkout_session_id': string, 'code_route'?: string, 'created_at': string|\DateTimeInterface, 'email'?: string, 'expires_at': string|\DateTimeInterface, 'phone_last_digits'?: string, 'purpose': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionCustomerVerificationInput')); }
    /** Whether an emailed code would open saved details for this buyer in this checkout: cards saved by email at this merchant, or a Flint wallet where the checkout offers one. Offer the emailed code only when true. Set only for channel sms with purpose use_saved_payment_methods.
     * @return bool
     * @throws SdkError When can_use_email_code is omitted; use hasCanUseEmailCode() or valueOrDefault().
     */
    public function getCanUseEmailCode(): bool { return $this->get('can_use_email_code'); }
    public function hasCanUseEmailCode(): bool { return $this->has('can_use_email_code'); }
    /** How the code reached the buyer: email or sms. Value enum: "email", "sms".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** ID to confirm the code with. Example: "cscv_01KEZF7C00XW14W2FCVD5PH3Z9".
     * @return string
     * @throws SdkError When checkout_session_customer_verification_id is omitted; use hasCheckoutSessionCustomerVerificationId() or valueOrDefault().
     */
    public function getCheckoutSessionCustomerVerificationId(): string { return $this->get('checkout_session_customer_verification_id'); }
    public function hasCheckoutSessionCustomerVerificationId(): bool { return $this->has('checkout_session_customer_verification_id'); }
    /** The checkout session the code belongs to. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Whose saved number the text used. Present only for channel sms. flint_wallet means the request used the buyer's enrolled Flint wallet number, including when the store has the same number; store means it used a number saved at this business. Describes the request, not a guarantee of access after confirmation. Clients must tolerate unrecognized values. Value enum: "store", "flint_wallet".
     * @return string
     * @throws SdkError When code_route is omitted; use hasCodeRoute() or valueOrDefault().
     */
    public function getCodeRoute(): string { return $this->get('code_route'); }
    public function hasCodeRoute(): bool { return $this->has('code_route'); }
    /** When the code was requested. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The address the code is for, lowercased: the email the buyer typed, or for pay_to_new_address and emailed confirm_saved_payment_method codes, the customer's email masked to its first character and domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code. Only the create response carries the email as typed. Reads mask every email this way.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** When the code stops working: 15 minutes after the request for an emailed code, and 10 minutes after the text provider first sent a texted code, which a new request within them texts again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Last two digits of the number a texted code went to, so the buyer knows which phone to check. Set only for channel sms.
     * @return string
     * @throws SdkError When phone_last_digits is omitted; use hasPhoneLastDigits() or valueOrDefault().
     */
    public function getPhoneLastDigits(): string { return $this->get('phone_last_digits'); }
    public function hasPhoneLastDigits(): bool { return $this->has('phone_last_digits'); }
    /** Why the buyer asked for the code, as sent in the request. Value enum: "gift_card_purchase", "save_payment_method", "use_saved_payment_methods", "confirm_saved_payment_method", "pay_to_new_address".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Lifecycle actions available on this code request. Contains confirm before expires_at; empty once the code expires. A wrong code is refused without revealing whether a code was sent. [] enum: "confirm". [] (Value): string.  Value enum: "confirm".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
