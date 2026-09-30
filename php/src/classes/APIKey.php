<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_key_id
 * @property-read string $created_at
 * @property-read string $expires_at
 * @property-read string $key_prefix
 * @property-read string $key_type
 * @property-read string $last_used_at
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $status
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class APIKey extends Model {
    /** @param array{'api_key_id': string, 'created_at'?: string, 'expires_at'?: string, 'key_prefix': string, 'key_type': string, 'last_used_at'?: string, 'merchant_id'?: string, 'name': string, 'sandbox_id'?: string, 'scopes': list<string>, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIKey')); }
    /** @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When key_prefix is omitted; use hasKeyPrefix() or valueOrDefault().
     */
    public function getKeyPrefix(): string { return $this->get('key_prefix'); }
    public function hasKeyPrefix(): bool { return $this->has('key_prefix'); }
    /** @return string
     * @throws SdkError When key_type is omitted; use hasKeyType() or valueOrDefault().
     */
    public function getKeyType(): string { return $this->get('key_type'); }
    public function hasKeyType(): bool { return $this->has('key_type'); }
    /** @return string
     * @throws SdkError When last_used_at is omitted; use hasLastUsedAt() or valueOrDefault().
     */
    public function getLastUsedAt(): string { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
