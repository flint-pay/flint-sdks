<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $device_code
 * @property-read int $expires_in
 * @property-read int $interval
 * @property-read string $user_code
 * @property-read string $verification_uri
 * @property-read string $verification_uri_complete
 * Presence-aware response; omitted optional fields return null. */
final class CLIDeviceResponse extends Model {
    /** @param array{'device_code': string, 'expires_in': int, 'interval': int, 'user_code': string, 'verification_uri': string, 'verification_uri_complete': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIDeviceResponse')); }
    /** minLength: 1. maxLength: 4096.
     * @return string
     */
    public function getDeviceCode(): string { return $this->get('device_code'); }
    public function hasDeviceCode(): bool { return $this->has('device_code'); }
    /** minimum: 1. maximum: 1800.
     * @return int
     */
    public function getExpiresIn(): int { return $this->get('expires_in'); }
    public function hasExpiresIn(): bool { return $this->has('expires_in'); }
    /** minimum: 1. maximum: 60.
     * @return int
     */
    public function getInterval(): int { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** minLength: 4. maxLength: 32. pattern: ^[!-~]+$.
     * @return string
     */
    public function getUserCode(): string { return $this->get('user_code'); }
    public function hasUserCode(): bool { return $this->has('user_code'); }
    /** verification_uri
     * @return string
     */
    public function getVerificationUri(): string { return $this->get('verification_uri'); }
    public function hasVerificationUri(): bool { return $this->has('verification_uri'); }
    /** verification_uri_complete
     * @return string
     */
    public function getVerificationUriComplete(): string { return $this->get('verification_uri_complete'); }
    public function hasVerificationUriComplete(): bool { return $this->has('verification_uri_complete'); }
}
