<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read ?string $api_version_changed_at
 * @property-read ?string $api_version_previous
 * @property-read string $client_id
 * @property-read bool $client_secret_enabled
 * @property-read string|null $client_secret_last_used_at
 * @property-read ?string $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read list<PartnerAppPermissionManifestEntry> $permission_manifest
 * @property-read ?string $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read int $version
 * @property-read string|null $client_secret
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppWithSecret extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string, 'api_version_previous'?: string, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|null, 'created_at'?: string, 'default_requested_permissions': list<string>, 'name': string, 'partner_app_id': string, 'permission_manifest': list<mixed>, 'previous_secret_expires_at'?: string, 'redirect_uris': list<string>, 'status': string, 'updated_at'?: string, 'version': int, 'client_secret': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppWithSecret')); }
    /** Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     * @return list<string>
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** API version for requests the app makes with its install tokens that send no Flint-Version header.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getApiVersionChangedAt(): ?string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Version the app used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version.
     * @return ?string
     */
    public function getApiVersionPrevious(): ?string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change.
     * @return string
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential.
     * @return bool
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|null
     */
    public function getClientSecretLastUsedAt(): string|null { return $this->get('client_secret_last_used_at'); }
    public function hasClientSecretLastUsedAt(): bool { return $this->has('client_secret_last_used_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. [] (Value): string.
     * @return list<string>
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** The app's name, shown to merchants on the consent screen.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** partner_app_id
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Permissions the app can request from merchants. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntry>
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getPreviousSecretExpiresAt(): ?string { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. [] (Value): string.
     * @return list<string>
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, or it is deleted. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** One-time client secret returned when enabled at creation. Null when client_secret_enabled is false.
     * @return string|null
     */
    public function getClientSecret(): string|null { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
}
