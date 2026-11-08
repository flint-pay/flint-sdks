<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $verification_token
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingStartResult extends Model {
    /** @param array{'expires_at': string, 'verification_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartResult')); }
    /** Time the email verification expires. Start onboarding again to request a new code after this time. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Token identifying the email verification. Send it with the emailed code to POST /v1/onboarding/verify-email.
     * @return string
     */
    public function getVerificationToken(): string { return $this->get('verification_token'); }
    public function hasVerificationToken(): bool { return $this->has('verification_token'); }
}
