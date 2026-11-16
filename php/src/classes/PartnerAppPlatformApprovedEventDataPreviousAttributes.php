<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_scopes
 * @property-read string|null $api_version
 * @property-read string|null $api_version_changed_at
 * @property-read string|null $api_version_previous
 * @property-read string|null $api_version_rollback_expires_at
 * @property-read string|null $client_id
 * @property-read bool|null $client_secret_enabled
 * @property-read mixed $client_secret_last_used_at
 * @property-read string|null $created_at
 * @property-read list<string>|null $default_requested_permissions
 * @property-read mixed $merchant_action_routing
 * @property-read string|null $merchant_action_url
 * @property-read string|null $name
 * @property-read string|null $partner_app_id
 * @property-read mixed $payment_splits
 * @property-read list<PartnerAppPermissionManifestEntryPreviousAttributes>|null $permission_manifest
 * @property-read mixed $platform
 * @property-read mixed $platform_fee_cap
 * @property-read mixed $platform_profile
 * @property-read string|null $previous_secret_expires_at
 * @property-read list<string>|null $redirect_uris
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformApprovedEventDataPreviousAttributes extends Model {
    /** @param array{'allowed_scopes'?: mixed, 'api_version'?: mixed, 'api_version_changed_at'?: mixed, 'api_version_previous'?: mixed, 'api_version_rollback_expires_at'?: mixed, 'client_id'?: mixed, 'client_secret_enabled'?: mixed, 'client_secret_last_used_at'?: mixed, 'created_at'?: mixed, 'default_requested_permissions'?: mixed, 'merchant_action_routing'?: mixed, 'merchant_action_url'?: mixed, 'name'?: mixed, 'partner_app_id'?: mixed, 'payment_splits'?: mixed, 'permission_manifest'?: mixed, 'platform'?: mixed, 'platform_fee_cap'?: mixed, 'platform_profile'?: mixed, 'previous_secret_expires_at'?: mixed, 'redirect_uris'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformApprovedEventDataPreviousAttributes')); }
    /** Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. anyOf[1] (Value): Array of string. Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedScopes(): array|null { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments. anyOf[1] (Value): string. Default API version for requests without a Flint-Version header. Shared across live and test environments. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersion(): string|null { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionChangedAt(): string|null { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Previous API version, present while a supported rollback is available. anyOf[1] (Value): string. Previous API version, present while a supported rollback is available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionPrevious(): string|null { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. anyOf[1] (Value): string. When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getApiVersionRollbackExpiresAt(): string|null { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. anyOf[1] (Value): string. Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClientId(): string|null { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. anyOf[1] (Value): boolean. Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getClientSecretEnabled(): bool|null { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. anyOf[1] (Value): string or null. When a client secret last authenticated the app, updated at most once an hour, so it can lag the latest use by up to an hour. `null` when no client secret use has been recorded, including for an app that authenticates only with credentials. It isn't cleared when you disable the secret. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClientSecretLastUsedAt(): mixed { return $this->get('client_secret_last_used_at'); }
    public function hasClientSecretLastUsedAt(): bool { return $this->has('client_secret_last_used_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. anyOf[1] (Value): Array of string. IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDefaultRequestedPermissions(): array|null { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. anyOf[1] (Value): {@see PartnerAppMerchantActionRoutingPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMerchantActionRouting(): mixed { return $this->get('merchant_action_routing'); }
    public function hasMerchantActionRouting(): bool { return $this->has('merchant_action_routing'); }
    /** Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. anyOf[1] (Value): string. Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantActionUrl(): string|null { return $this->get('merchant_action_url'); }
    public function hasMerchantActionUrl(): bool { return $this->has('merchant_action_url'); }
    /** The app's name, shown to merchants on the consent screen. anyOf[1] (Value): string. The app's name, shown to merchants on the consent screen. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this partner app, prefixed `papp_`. anyOf[1] (Value): string. Unique identifier for this partner app, prefixed `papp_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppId(): string|null { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. anyOf[1] (Value): {@see PartnerAppPaymentSplitsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** Permissions the app can request from merchants. Each lists the Flint scopes it grants. anyOf[1] (Value): Array of {@see PartnerAppPermissionManifestEntryPreviousAttributes}. Permissions the app can request from merchants. Each lists the Flint scopes it grants. anyOf[1][] (Value): {@see PartnerAppPermissionManifestEntryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PartnerAppPermissionManifestEntryPreviousAttributes>|null
     */
    public function getPermissionManifest(): array|null { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. anyOf[1] (Value): {@see PartnerAppPlatformPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPlatform(): mixed { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. anyOf[1] (Value): {@see PlatformFeeCapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** What the app told Flint for its platform review. Absent until set. anyOf[1] (Value): {@see PartnerAppPlatformProfilePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPlatformProfile(): mixed { return $this->get('platform_profile'); }
    public function hasPlatformProfile(): bool { return $this->has('platform_profile'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPreviousSecretExpiresAt(): string|null { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. anyOf[1] (Value): Array of string. Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRedirectUris(): array|null { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** Where the app is in its lifecycle. Only an active app can be installed or used. Value enum: "active", "archived". anyOf[1] (Value): string. Where the app is in its lifecycle. Only an active app can be installed or used. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". anyOf[1][] (Value): string.  Value enum: "accept_platform_terms". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. anyOf[1] (Value): integer. Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
