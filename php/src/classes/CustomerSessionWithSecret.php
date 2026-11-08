<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $customer_id
 * @property-read string $customer_session_id
 * @property-read string $expires_at
 * @property-read string $refresh_token_expires_at
 * @property-read ?string $revoked_at
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $refresh_token
 * @property-read string $secret
 * Presence-aware response; omitted optional fields return null. */
final class CustomerSessionWithSecret extends Model {
    /** @param array{'created_at': string, 'customer_id': string, 'customer_session_id': string, 'expires_at': string, 'refresh_token_expires_at': string, 'revoked_at'?: string, 'status': string, 'supported_actions': list<string>, 'refresh_token': string, 'secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionWithSecret')); }
    /** When the session was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** ID of the customer the session acts as.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ID of this session. Use it to tell sessions apart; it is not a credential.
     * @return string
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
    /** When the current secret stops authenticating account calls. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** When the refresh token expires. Format: date-time.
     * @return string
     */
    public function getRefreshTokenExpiresAt(): string { return $this->get('refresh_token_expires_at'); }
    public function hasRefreshTokenExpiresAt(): bool { return $this->has('refresh_token_expires_at'); }
    /** When the session was first revoked. Present exactly when status is revoked. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** active means the session can be refreshed and its secret works until expires_at; revoked means none of its credentials work. Value enum: "active", "revoked".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains revoke for active and revoked sessions because repeating a revocation succeeds. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Single-use refresh token. Returned only on create and refresh; retry rotation with the same Idempotency-Key.
     * @return string
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** Current server-held customer session secret. Returned only on create and refresh.
     * @return string
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
