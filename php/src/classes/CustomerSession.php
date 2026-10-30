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
 * Presence-aware response; omitted optional fields return null. */
final class CustomerSession extends Model {
    /** @param array{'created_at': string, 'customer_id': string, 'customer_session_id': string, 'expires_at': string, 'refresh_token_expires_at': string, 'revoked_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSession')); }
    /** When the session was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** customer_session_id
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
}
