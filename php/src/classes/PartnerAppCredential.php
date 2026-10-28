<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?PartnerAppCredentialJWKSURL $jwks_url
 * @property-read string|null $last_used_at
 * @property-read string|null $name
 * @property-read string $partner_app_credential_id
 * @property-read string $partner_app_id
 * @property-read ?PartnerAppCredentialPublicKey $public_key
 * @property-read string $status
 * @property-read string $type
 * @property-read ?PartnerAppCredentialWorkloadIdentity $workload_identity
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppCredential extends Model {
    /** @param array{'created_at': string, 'jwks_url'?: mixed, 'last_used_at': string|null, 'name': string|null, 'partner_app_credential_id': string, 'partner_app_id': string, 'public_key'?: mixed, 'status': string, 'type': string, 'workload_identity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredential')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see PartnerAppCredentialJWKSURL}. A registered JWKS URL and its most recent successful fetch.
     * @return ?PartnerAppCredentialJWKSURL
     */
    public function getJwksUrl(): ?PartnerAppCredentialJWKSURL { return $this->get('jwks_url'); }
    public function hasJwksUrl(): bool { return $this->has('jwks_url'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getLastUsedAt(): string|null { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppCredentialId(): string { return $this->get('partner_app_credential_id'); }
    public function hasPartnerAppCredentialId(): bool { return $this->has('partner_app_credential_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): {@see PartnerAppCredentialPublicKey}. A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint.
     * @return ?PartnerAppCredentialPublicKey
     */
    public function getPublicKey(): ?PartnerAppCredentialPublicKey { return $this->get('public_key'); }
    public function hasPublicKey(): bool { return $this->has('public_key'); }
    /** Shape $ (Value): string.  Value enum: "active", "removed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Credential type. Currently public_key, jwks_url, or workload_identity. Value enum: "public_key", "jwks_url", "workload_identity".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see PartnerAppCredentialWorkloadIdentity}. The registered external OIDC issuer, exact subject, audience, and claim conditions.
     * @return ?PartnerAppCredentialWorkloadIdentity
     */
    public function getWorkloadIdentity(): ?PartnerAppCredentialWorkloadIdentity { return $this->get('workload_identity'); }
    public function hasWorkloadIdentity(): bool { return $this->has('workload_identity'); }
}
