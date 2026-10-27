<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string $customer_session_id
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string|\DateTimeInterface $refresh_token_expires_at
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $status
 * @property-read string $refresh_token
 * @property-read string $secret
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionWithSecretInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'customer_id': string, 'customer_session_id': string, 'expires_at': string|\DateTimeInterface, 'refresh_token_expires_at': string|\DateTimeInterface, 'revoked_at'?: string|\DateTimeInterface, 'status': string, 'refresh_token': string, 'secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionWithSecretInput')); }
    /** Shape $ (Value): string. When the session was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_session_id is omitted; use hasCustomerSessionId() or valueOrDefault().
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
    /** Shape $ (Value): string. When the current secret stops authenticating account calls. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. When the refresh token expires. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When refresh_token_expires_at is omitted; use hasRefreshTokenExpiresAt() or valueOrDefault().
     */
    public function getRefreshTokenExpiresAt(): string|\DateTimeInterface { return $this->get('refresh_token_expires_at'); }
    public function hasRefreshTokenExpiresAt(): bool { return $this->has('refresh_token_expires_at'); }
    /** Shape $ (Value): string. When the session was first revoked. Present exactly when status is revoked. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): string. active means the session can be refreshed and its secret works until expires_at; revoked means none of its credentials work. Value enum: "active", "revoked".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Single-use refresh token. Returned only on create and refresh; retry rotation with the same Idempotency-Key.
     * @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** Shape $ (Value): string. Current server-held customer session secret. Returned only on create and refresh.
     * @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
