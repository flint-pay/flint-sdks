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
    /** True from the moment status is pending when an emailed code is what finishes the save: the buyer gave no number, or the number alone can't save the card. An emailed code alone saves the card by email. If the buyer already confirmed the number by text, the emailed code saves the card with that number.
     * @return bool
     */
    public function getEmailConfirmationRequired(): bool { return $this->get('email_confirmation_required'); }
    public function hasEmailConfirmationRequired(): bool { return $this->has('email_confirmation_required'); }
    /** When a pending save stops waiting: 24 hours after the payment succeeded or was approved. `null` when the save is no longer pending. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Last two digits of the number the buyer gave, which a code is texted to. Set while status is pending and the buyer gave a number.
     * @return ?string
     */
    public function getPhoneLastDigits(): ?string { return $this->get('phone_last_digits'); }
    public function hasPhoneLastDigits(): bool { return $this->has('phone_last_digits'); }
    /** How the buyer confirmed the card: with a code texted to their phone or emailed to them. Value enum: "sms", "email".
     * @return ?string
     */
    public function getSavedWith(): ?string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** Whether the card is saved. Until `saved`, the card can't be used. Value enum: "pending", "saved", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
