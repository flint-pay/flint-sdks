<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $email_confirmation_required
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string $phone_last_digits
 * @property-read string $saved_with
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPaymentMethodSaveInput extends Model {
    /** @param array{'email_confirmation_required': bool, 'expires_at'?: string|\DateTimeInterface|null, 'phone_last_digits'?: string, 'saved_with'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPaymentMethodSaveInput')); }
    /** @return bool
     * @throws SdkError When email_confirmation_required is omitted; use hasEmailConfirmationRequired() or valueOrDefault().
     */
    public function getEmailConfirmationRequired(): bool { return $this->get('email_confirmation_required'); }
    public function hasEmailConfirmationRequired(): bool { return $this->has('email_confirmation_required'); }
    /** @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When phone_last_digits is omitted; use hasPhoneLastDigits() or valueOrDefault().
     */
    public function getPhoneLastDigits(): string { return $this->get('phone_last_digits'); }
    public function hasPhoneLastDigits(): bool { return $this->has('phone_last_digits'); }
    /** @return string
     * @throws SdkError When saved_with is omitted; use hasSavedWith() or valueOrDefault().
     */
    public function getSavedWith(): string { return $this->get('saved_with'); }
    public function hasSavedWith(): bool { return $this->has('saved_with'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
