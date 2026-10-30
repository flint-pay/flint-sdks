<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $api_version_changed_at
 * @property-read string $api_version_previous
 * @property-read string $client_id
 * @property-read bool $client_secret_enabled
 * @property-read string|\DateTimeInterface|null $client_secret_last_used_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read string|\DateTimeInterface $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * @property-read string|null $client_secret
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppWithSecretInput extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|\DateTimeInterface|null, 'created_at'?: string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'name': string, 'partner_app_id': string, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': int, 'client_secret': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppWithSecretInput')); }
    /** Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_scopes is omitted; use hasAllowedScopes() or valueOrDefault().
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** API version for requests the app makes with its install tokens that send no Flint-Version header.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string|\DateTimeInterface { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Version the app used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version.
     * @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change.
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential.
     * @return bool
     * @throws SdkError When client_secret_enabled is omitted; use hasClientSecretEnabled() or valueOrDefault().
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When client_secret_last_used_at is omitted; use hasClientSecretLastUsedAt() or valueOrDefault().
     */
    public function getClientSecretLastUsedAt(): string|\DateTimeInterface|null { return $this->get('client_secret_last_used_at'); }
    public function hasClientSecretLastUsedAt(): bool { return $this->has('client_secret_last_used_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. [] (Value): string.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** The app's name, shown to merchants on the consent screen.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Permissions the app can request from merchants. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When previous_secret_expires_at is omitted; use hasPreviousSecretExpiresAt() or valueOrDefault().
     */
    public function getPreviousSecretExpiresAt(): string|\DateTimeInterface { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. [] (Value): string.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, or it is deleted. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** One-time client secret returned when enabled at creation. Null when client_secret_enabled is false.
     * @return string|null
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): string|null { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
}
