<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $verification_token
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingStartResultInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'verification_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartResultInput')); }
    /** Time the email verification expires. Start onboarding again to request a new code after this time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Token identifying the email verification. Send it with the emailed code to POST /v1/onboarding/verify-email.
     * @return string
     * @throws SdkError When verification_token is omitted; use hasVerificationToken() or valueOrDefault().
     */
    public function getVerificationToken(): string { return $this->get('verification_token'); }
    public function hasVerificationToken(): bool { return $this->has('verification_token'); }
}
