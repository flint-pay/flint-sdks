<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read bool $verification_started
 * @property-read string $verification_token
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingStartResultInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'verification_started': bool, 'verification_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartResultInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return bool
     * @throws SdkError When verification_started is omitted; use hasVerificationStarted() or valueOrDefault().
     */
    public function getVerificationStarted(): bool { return $this->get('verification_started'); }
    public function hasVerificationStarted(): bool { return $this->has('verification_started'); }
    /** @return string
     * @throws SdkError When verification_token is omitted; use hasVerificationToken() or valueOrDefault().
     */
    public function getVerificationToken(): string { return $this->get('verification_token'); }
    public function hasVerificationToken(): bool { return $this->has('verification_token'); }
}
