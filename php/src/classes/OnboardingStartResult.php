<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read bool $verification_started
 * @property-read string $verification_token
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingStartResult extends Model {
    /** @param array{'expires_at': string, 'verification_started': bool, 'verification_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartResult')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getVerificationStarted(): bool { return $this->get('verification_started'); }
    public function hasVerificationStarted(): bool { return $this->has('verification_started'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getVerificationToken(): string { return $this->get('verification_token'); }
    public function hasVerificationToken(): bool { return $this->has('verification_token'); }
}
