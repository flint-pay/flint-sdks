<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read PartnerAppCredentialJWKSURLInput|array<array-key, mixed>|\stdClass $jwks_url
 * @property-read string|\DateTimeInterface|null $last_used_at
 * @property-read string|null $name
 * @property-read string $partner_app_credential_id
 * @property-read string $partner_app_id
 * @property-read PartnerAppCredentialPublicKeyInput|array<array-key, mixed>|\stdClass $public_key
 * @property-read string $status
 * @property-read string $type
 * @property-read PartnerAppCredentialWorkloadIdentityInput|array<array-key, mixed>|\stdClass $workload_identity
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'jwks_url'?: PartnerAppCredentialJWKSURLInput|array<array-key, mixed>|\stdClass, 'last_used_at': string|\DateTimeInterface|null, 'name': string|null, 'partner_app_credential_id': string, 'partner_app_id': string, 'public_key'?: PartnerAppCredentialPublicKeyInput|array<array-key, mixed>|\stdClass, 'status': string, 'type': string, 'workload_identity'?: PartnerAppCredentialWorkloadIdentityInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** A registered JWKS URL and its most recent successful fetch.
     * @return PartnerAppCredentialJWKSURLInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jwks_url is omitted; use hasJwksUrl() or valueOrDefault().
     */
    public function getJwksUrl(): mixed { return $this->get('jwks_url'); }
    public function hasJwksUrl(): bool { return $this->has('jwks_url'); }
    /** When the credential last authenticated the app. Updated at most once an hour, so it can lag the latest use by up to an hour. `null` when the credential has never been used. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_used_at is omitted; use hasLastUsedAt() or valueOrDefault().
     */
    public function getLastUsedAt(): string|\DateTimeInterface|null { return $this->get('last_used_at'); }
    public function hasLastUsedAt(): bool { return $this->has('last_used_at'); }
    /** Name given to the credential when it was created. `null` when it has no name.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** partner_app_credential_id
     * @return string
     * @throws SdkError When partner_app_credential_id is omitted; use hasPartnerAppCredentialId() or valueOrDefault().
     */
    public function getPartnerAppCredentialId(): string { return $this->get('partner_app_credential_id'); }
    public function hasPartnerAppCredentialId(): bool { return $this->has('partner_app_credential_id'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint.
     * @return PartnerAppCredentialPublicKeyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When public_key is omitted; use hasPublicKey() or valueOrDefault().
     */
    public function getPublicKey(): mixed { return $this->get('public_key'); }
    public function hasPublicKey(): bool { return $this->has('public_key'); }
    /** Value enum: "active", "removed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Credential type. Currently public_key, jwks_url, or workload_identity. Value enum: "public_key", "jwks_url", "workload_identity".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** The registered external OIDC issuer, exact subject, audience, and claim conditions.
     * @return PartnerAppCredentialWorkloadIdentityInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When workload_identity is omitted; use hasWorkloadIdentity() or valueOrDefault().
     */
    public function getWorkloadIdentity(): mixed { return $this->get('workload_identity'); }
    public function hasWorkloadIdentity(): bool { return $this->has('workload_identity'); }
}
