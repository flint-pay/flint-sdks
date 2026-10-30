<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $email_confirmation_required
 * @property-read string|null $expires_at
 * @property-read ?string $phone_last_digits
 * @property-read ?string $saved_with
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPaymentMethodSave extends Model {
    /** @param array{'email_confirmation_required': bool, 'expires_at'?: string|null, 'phone_last_digits'?: string, 'saved_with'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentMethodSave')); }
    /** True while status is pending after the buyer confirmed the number by text, when the number alone can't save the card: the customer with the buyer's email existed before this payment, the buyer did not confirm that email in this checkout, and the number isn't already the customer's saved number with an active card saved with it. The buyer confirms the email with an emailed code to finish; the card is then saved with the number, which replaces the customer's saved number.
     * @return bool
     */
    public function getEmailConfirmationRequired(): bool { return $this->get('email_confirmation_required'); }
    public function hasEmailConfirmationRequired(): bool { return $this->has('email_confirmation_required'); }
    /** When a pending save stops waiting: 24 hours after the payment succeeded or was approved. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Last two digits of the number the buyer gave, which a code is texted to. Set while status is pending.
     * @return ?string
     */
    public function getPhoneLastDigits(): ?string { return $this->get('phone_last_digits'); }
    public function hasPhoneLastDigits(): bool { return $this->has('phone_last_digits'); }
    /** Value enum: "sms", "email".
     * @return ?string
     */
    public function getSavedWith(): ?string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** Value enum: "pending", "saved", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
