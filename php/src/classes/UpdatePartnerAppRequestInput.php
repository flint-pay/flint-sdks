<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $client_secret_enabled
 * @property-read list<string> $default_requested_permissions
 * @property-read string $expected_api_version
 * @property-read int $expected_version
 * @property-read string|null $merchant_action_url
 * @property-read string $name
 * @property-read array{'seller_terms_url': string}|object|null $payment_splits
 * @property-read list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read array{'fixed_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'maximum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'percent': int|float}|object|null $platform_fee_cap
 * @property-read array{'estimated_merchant_count': int, 'estimated_monthly_volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_description': string, 'merchant_onboarding_description': string, 'product_description': string, 'support_email': string, 'support_phone'?: string, 'website_url': string}|object|null $platform_profile
 * @property-read list<string> $redirect_uris
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePartnerAppRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePartnerAppRequestInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately.
     * @return bool
     * @throws SdkError When client_secret_enabled is omitted; use hasClientSecretEnabled() or valueOrDefault().
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** Replaces the default requested permission IDs. Each ID must exist in the manifest. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     * @return string
     * @throws SdkError When expected_api_version is omitted; use hasExpectedApiVersion() or valueOrDefault().
     */
    public function getExpectedApiVersion(): string { return $this->get('expected_api_version'); }
    public function hasExpectedApiVersion(): bool { return $this->has('expected_api_version'); }
    /** Apply only if this matches the app’s current version. Required with permission_manifest, platform_fee_cap, merchant_action_url and payment_splits; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. An absolute `https` URL of at most 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*` query parameters and replaces any it already has. Once the app has a `platform_profile`, its registrable domain must equal that of `platform_profile.website_url`, or the write fails with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants` platform capability. After Flint first approves or limits the platform, a change to another registrable domain routes after 72 hours, and every change is emailed to the owning merchant's owners and admins. Requires expected_version, because it decides where every merchant the app created is sent from Flint's emails. Send null to clear it: emails then lead to Flint, and new merchant signups are refused until you set it again. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     * @return string|null
     * @throws SdkError When merchant_action_url is omitted; use hasMerchantActionUrl() or valueOrDefault().
     */
    public function getMerchantActionUrl(): string|null { return $this->get('merchant_action_url'); }
    public function hasMerchantActionUrl(): bool { return $this->has('merchant_action_url'); }
    /** The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100 characters, without links or email addresses. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Replaces the whole payment_splits declaration. Sellers that already approved keep the seller terms they approved; merchants that authorize afterwards approve the new seller_terms_url. Send null to remove it, which ends every seller's approval at once: a seller must authorize the app again after you declare it again. Requires expected_version. Setting it doesn't need platform approval, and an unchanged declaration changes nothing. anyOf[1] (Value): {@see PartnerAppPaymentSplitsRequestInput}. The whole payment_splits declaration. Every field is required, and a write replaces the declaration whole. anyOf[2] (Value): null.
     * @return array{'seller_terms_url': string}|object|null
     * @throws SdkError When payment_splits is omitted; use hasPaymentSplits() or valueOrDefault().
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. [] (Value): {@see PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency, lowers the cap every merchant approved at once. Raising either, or adding a currency, changes no install: each merchant must authorize the app again to approve the higher cap. Send null to remove the cap from the app and every install. Requires expected_version. Setting it doesn't need platform approval, and an unchanged cap changes nothing. anyOf[1] (Value): {@see PlatformFeeCapRequestInput}. The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part. anyOf[2] (Value): null.
     * @return array{'fixed_fee_currency_options'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'maximum_fee_currency_options': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'percent': int|float}|object|null
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. anyOf[1] (Value): {@see PartnerAppPlatformProfileRequestInput}. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole. anyOf[2] (Value): null.
     * @return array{'estimated_merchant_count': int, 'estimated_monthly_volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_description': string, 'merchant_onboarding_description': string, 'product_description': string, 'support_email': string, 'support_phone'?: string, 'website_url': string}|object|null
     * @throws SdkError When platform_profile is omitted; use hasPlatformProfile() or valueOrDefault().
     */
    public function getPlatformProfile(): mixed { return $this->get('platform_profile'); }
    public function hasPlatformProfile(): bool { return $this->has('platform_profile'); }
    /** Replaces the entire list of registered redirect URIs. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
}
