<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $checkout_session_customer_verification_id
 * @property-read string $checkout_session_id
 * @property-read string $created_at
 * @property-read ?string $email
 * @property-read string $expires_at
 * @property-read ?string $phone_last_digits
 * @property-read string $purpose
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionCustomerVerification extends Model {
    /** @param array{'channel': string, 'checkout_session_customer_verification_id': string, 'checkout_session_id': string, 'created_at': string, 'email'?: string, 'expires_at': string, 'phone_last_digits'?: string, 'purpose': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionCustomerVerification')); }
    /** How the code reached the buyer: email or sms. Value enum: "email", "sms".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** ID to confirm the code with.
     * @return string
     */
    public function getCheckoutSessionCustomerVerificationId(): string { return $this->get('checkout_session_customer_verification_id'); }
    public function hasCheckoutSessionCustomerVerificationId(): bool { return $this->has('checkout_session_customer_verification_id'); }
    /** The checkout session the code belongs to.
     * @return string
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** When the code was requested. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The address the code is for, lowercased: the email the buyer typed, or for an emailed confirm_saved_payment_method code, the customer's email masked to its first character and domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code.
     * @return ?string
     */
    public function getEmail(): ?string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** When the code stops working: 15 minutes after the request for an emailed code, and 10 minutes after the text provider first sent a texted code, which a new request within them texts again. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Last two digits of the number a texted code went to, so the buyer knows which phone to check. Set only for channel sms.
     * @return ?string
     */
    public function getPhoneLastDigits(): ?string { return $this->get('phone_last_digits'); }
    public function hasPhoneLastDigits(): bool { return $this->has('phone_last_digits'); }
    /** Why the buyer asked for the code, as sent in the request. Value enum: "gift_card_purchase", "save_payment_method", "use_saved_payment_methods", "confirm_saved_payment_method".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
