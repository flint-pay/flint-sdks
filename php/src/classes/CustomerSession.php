<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $account_url
 * @property-read string|null $account_url_expires_at
 * @property-read string $customer_id
 * @property-read string $customer_session_id
 * @property-read string $expires_at
 * @property-read string $refresh_token
 * @property-read string $refresh_token_expires_at
 * @property-read string $secret
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerSession extends Model {
    /** @param array{'account_url'?: string, 'account_url_expires_at'?: string|null, 'customer_id': string, 'customer_session_id': string, 'expires_at': string, 'refresh_token': string, 'refresh_token_expires_at': string, 'secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSession')); }
    /** @return string
     * @throws SdkError When account_url is omitted; use hasAccountUrl() or valueOrDefault().
     */
    public function getAccountUrl(): string { return $this->get('account_url'); }
    public function hasAccountUrl(): bool { return $this->has('account_url'); }
    /** @return string|null
     * @throws SdkError When account_url_expires_at is omitted; use hasAccountUrlExpiresAt() or valueOrDefault().
     */
    public function getAccountUrlExpiresAt(): string|null { return $this->get('account_url_expires_at'); }
    public function hasAccountUrlExpiresAt(): bool { return $this->has('account_url_expires_at'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When customer_session_id is omitted; use hasCustomerSessionId() or valueOrDefault().
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** @return string
     * @throws SdkError When refresh_token_expires_at is omitted; use hasRefreshTokenExpiresAt() or valueOrDefault().
     */
    public function getRefreshTokenExpiresAt(): string { return $this->get('refresh_token_expires_at'); }
    public function hasRefreshTokenExpiresAt(): bool { return $this->has('refresh_token_expires_at'); }
    /** @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
