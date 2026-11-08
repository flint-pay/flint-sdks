<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read ?string $api_version_changed_at
 * @property-read ?string $api_version_previous
 * @property-read ?string $api_version_rollback_expires_at
 * @property-read string $client_id
 * @property-read bool $client_secret_enabled
 * @property-read string|null $client_secret_last_used_at
 * @property-read string $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read list<PartnerAppPermissionManifestEntry> $permission_manifest
 * @property-read PartnerAppPlatform $platform
 * @property-read ?PartnerAppPlatformProfile $platform_profile
 * @property-read ?string $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformRejectedEventDataObject extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|null, 'created_at': string, 'default_requested_permissions': list<string>, 'name': string, 'partner_app_id': string, 'permission_manifest': list<mixed>, 'platform': mixed, 'platform_profile'?: mixed, 'previous_secret_expires_at'?: string, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformRejectedEventDataObject')); }
    /** Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     * @return list<string>
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getApiVersionChangedAt(): ?string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Previous API version, present while a supported rollback is available.
     * @return ?string
     */
    public function getApiVersionPrevious(): ?string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time.
     * @return ?string
     */
    public function getApiVersionRollbackExpiresAt(): ?string { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
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
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
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
    /** Unique identifier for this partner app, prefixed `papp_`.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Permissions the app can request from merchants. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntry>
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event.
     * @return PartnerAppPlatform
     */
    public function getPlatform(): PartnerAppPlatform { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole.
     * @return ?PartnerAppPlatformProfile
     */
    public function getPlatformProfile(): ?PartnerAppPlatformProfile { return $this->get('platform_profile'); }
    public function hasPlatformProfile(): bool { return $this->has('platform_profile'); }
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
    /** Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". [] (Value): string.  Value enum: "accept_platform_terms".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
