<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $api_version_changed_at
 * @property-read string $api_version_previous
 * @property-read string|\DateTimeInterface $api_version_rollback_expires_at
 * @property-read string $client_id
 * @property-read bool $client_secret_enabled
 * @property-read string|\DateTimeInterface|null $client_secret_last_used_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass $merchant_action_routing
 * @property-read string $merchant_action_url
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass $payment_splits
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read PartnerAppPlatformInput|array<array-key, mixed>|\stdClass $platform
 * @property-read PlatformFeeCapInput|array<array-key, mixed>|\stdClass $platform_fee_cap
 * @property-read PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass $platform_profile
 * @property-read string|\DateTimeInterface $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInput extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string|\DateTimeInterface, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'merchant_action_routing'?: PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass, 'merchant_action_url'?: string, 'name': string, 'partner_app_id': string, 'payment_splits'?: PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'platform': PartnerAppPlatformInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'platform_profile'?: PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInput')); }
    /** Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_scopes is omitted; use hasAllowedScopes() or valueOrDefault().
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** Default API version for requests without a Flint-Version header. Shared across live and test environments.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string|\DateTimeInterface { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Previous API version, present while a supported rollback is available.
     * @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** When the 72-hour rollback offer expires. Explicit changes to any supported version remain available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_rollback_expires_at is omitted; use hasApiVersionRollbackExpiresAt() or valueOrDefault().
     */
    public function getApiVersionRollbackExpiresAt(): string|\DateTimeInterface { return $this->get('api_version_rollback_expires_at'); }
    public function hasApiVersionRollbackExpiresAt(): bool { return $this->has('api_version_rollback_expires_at'); }
    /** Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. Example: "fpc_00112233445566778899aabbccddeeff".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When client_secret_last_used_at is omitted; use hasClientSecretLastUsedAt() or valueOrDefault().
     */
    public function getClientSecretLastUsedAt(): string|\DateTimeInterface|null { return $this->get('client_secret_last_used_at'); }
    public function hasClientSecretLastUsedAt(): bool { return $this->has('client_secret_last_used_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** Present only while a change to merchant_action_url or platform_profile.website_url is waiting to move routing to another registrable domain; omitted otherwise. url is the previous destination emails still use, and expires_at is when routing switches to the current merchant_action_url. While the app had no merchant action URL before the change, this is Flint's own page. The destination merchant emails keep using while a move to another registrable domain is pending.
     * @return PartnerAppMerchantActionRoutingInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_action_routing is omitted; use hasMerchantActionRouting() or valueOrDefault().
     */
    public function getMerchantActionRouting(): mixed { return $this->get('merchant_action_routing'); }
    public function hasMerchantActionRouting(): bool { return $this->has('merchant_action_routing'); }
    /** Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. Flint adds `flint_*` query parameters. Setting it requests the `create_merchants` platform capability, which merchant signups need. Absent until set. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When merchant_action_url is omitted; use hasMerchantActionUrl() or valueOrDefault().
     */
    public function getMerchantActionUrl(): string { return $this->get('merchant_action_url'); }
    public function hasMerchantActionUrl(): bool { return $this->has('merchant_action_url'); }
    /** The app's name, shown to merchants on the consent screen.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this partner app, prefixed `papp_`. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The app's declaration that its owner sends splits of the payments it collects to sellers that install the app. Every authorization of the app asks the merchant to approve receiving split funds under these seller terms, and the environment grant records the approval. Declaring it requests the payment_splits platform capability, which live splits need. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.
     * @return PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_splits is omitted; use hasPaymentSplits() or valueOrDefault().
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** Permissions the app can request from merchants. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** The app's platform onboarding: status, outstanding requirements, platform capabilities, terms acceptance, and once Flint approves or limits it, the platform's limits and reserve. The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event.
     * @return PartnerAppPlatformInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform is omitted; use hasPlatform() or valueOrDefault().
     */
    public function getPlatform(): mixed { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it for each mode they install. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     * @return PlatformFeeCapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** What the app told Flint for its platform review. Absent until set. What the platform tells Flint for its review. It is one value: a write replaces it whole.
     * @return PartnerAppPlatformProfileInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_profile is omitted; use hasPlatformProfile() or valueOrDefault().
     */
    public function getPlatformProfile(): mixed { return $this->get('platform_profile'); }
    public function hasPlatformProfile(): bool { return $this->has('platform_profile'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation, not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". [] (Value): string.  Value enum: "accept_platform_terms".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, its platform terms are accepted, Flint decides on its platform review or changes its platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's own onboarding don't change it. Send it as expected_version to apply an update only to the version you read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
