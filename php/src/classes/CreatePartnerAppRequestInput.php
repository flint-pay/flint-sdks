<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $client_secret_enabled
 * @property-read list<string> $default_requested_permissions
 * @property-read string $merchant_action_url
 * @property-read string $name
 * @property-read PartnerAppPaymentSplitsRequestInput|array<array-key, mixed>|\stdClass $payment_splits
 * @property-read list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read PlatformFeeCapRequestInput|array<array-key, mixed>|\stdClass $platform_fee_cap
 * @property-read PartnerAppPlatformProfileRequestInput|array<array-key, mixed>|\stdClass $platform_profile
 * @property-read list<string> $redirect_uris
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppRequestInput extends Model {
    /** @param array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'merchant_action_url'?: string, 'name': string, 'payment_splits'?: PartnerAppPaymentSplitsRequestInput|array<array-key, mixed>|\stdClass, 'permission_manifest': list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass>, 'platform_fee_cap'?: PlatformFeeCapRequestInput|array<array-key, mixed>|\stdClass, 'platform_profile'?: PartnerAppPlatformProfileRequestInput|array<array-key, mixed>|\stdClass, 'redirect_uris': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppRequestInput')); }
    /** API version for requests the app makes with its install tokens that send no Flint-Version header. Defaults to the version of this request and can't be newer than it. minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: false.
     * @return bool
     * @throws SdkError When client_secret_enabled is omitted; use hasClientSecretEnabled() or valueOrDefault().
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** IDs of the permissions requested when an authorization request sends no scope. Each must be in permission_manifest. Defaults to every permission that isn't optional. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. An absolute `https` URL of at most 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*` query parameters and replaces any it already has. Once the app has a `platform_profile`, its registrable domain must equal that of `platform_profile.website_url`, or the write fails with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants` platform capability. After Flint first approves or limits the platform, a change to another registrable domain routes after 72 hours, and every change is emailed to the owning merchant's owners and admins. Optional; set it now or later with PATCH. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When merchant_action_url is omitted; use hasMerchantActionUrl() or valueOrDefault().
     */
    public function getMerchantActionUrl(): string { return $this->get('merchant_action_url'); }
    public function hasMerchantActionUrl(): bool { return $this->has('merchant_action_url'); }
    /** The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100 characters, without links or email addresses. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Declares that the app's owner sends splits of the payments it collects to sellers that install the app, with the seller terms sellers approve on the consent screen. Optional. Setting it doesn't need platform approval, so test installs can use it right away; it requests the payment_splits platform capability, which live splits need. The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole.
     * @return PartnerAppPaymentSplitsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_splits is omitted; use hasPaymentSplits() or valueOrDefault().
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** The most a platform fee can take from one payment the app creates with a partner app token. Merchants see it on the consent screen and approve it when they install the app. Optional. Setting it doesn't need platform approval, so test installs can use it right away. The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part.
     * @return PlatformFeeCapRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** The platform profile Flint reviews before it approves the app as a platform. Optional; set it now or later with PATCH. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole.
     * @return PartnerAppPlatformProfileRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_profile is omitted; use hasPlatformProfile() or valueOrDefault().
     */
    public function getPlatformProfile(): mixed { return $this->get('platform_profile'); }
    public function hasPlatformProfile(): bool { return $this->has('platform_profile'); }
    /** Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
}
