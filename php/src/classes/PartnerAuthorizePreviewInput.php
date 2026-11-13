<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read int $partner_app_version
 * @property-read PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass $payment_splits
 * @property-read PlatformFeeCapInput|array<array-key, mixed>|\stdClass $platform_fee_cap
 * @property-read string $redirect_uri
 * @property-read list<string> $requested_permission_ids
 * @property-read list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass> $requested_permissions
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAuthorizePreviewInput extends Model {
    /** @param array{'client_id': string, 'mode': string, 'name': string, 'partner_app_id': string, 'partner_app_version': int, 'payment_splits'?: PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass, 'platform_fee_cap'?: PlatformFeeCapInput|array<array-key, mixed>|\stdClass, 'redirect_uri': string, 'requested_permission_ids': list<string>, 'requested_permissions': list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAuthorizePreviewInput')); }
    /** The app's client ID, as sent in the authorization request. Example: "fpc_00112233445566778899aabbccddeeff".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Whether the install is for test or live mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The app's current name.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the partner app asking for access. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The app’s version. It changes whenever the app is edited. Format: int64.
     * @return int
     * @throws SdkError When partner_app_version is omitted; use hasPartnerAppVersion() or valueOrDefault().
     */
    public function getPartnerAppVersion(): int { return $this->get('partner_app_version'); }
    public function hasPartnerAppVersion(): bool { return $this->has('partner_app_version'); }
    /** The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.
     * @return PartnerAppPaymentSplitsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_splits is omitted; use hasPaymentSplits() or valueOrDefault().
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     * @return PlatformFeeCapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny.
     * @return string
     * @throws SdkError When redirect_uri is omitted; use hasRedirectUri() or valueOrDefault().
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. [] (Value): string. Example: "manage_orders".
     * @return list<string>
     * @throws SdkError When requested_permission_ids is omitted; use hasRequestedPermissionIds() or valueOrDefault().
     */
    public function getRequestedPermissionIds(): array { return $this->get('requested_permission_ids'); }
    public function hasRequestedPermissionIds(): bool { return $this->has('requested_permission_ids'); }
    /** The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. [] (Value): {@see PartnerAuthorizePreviewPermissionInput}. One permission a partner app requests during authorization, with its title, description, and required scopes.
     * @return list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When requested_permissions is omitted; use hasRequestedPermissions() or valueOrDefault().
     */
    public function getRequestedPermissions(): array { return $this->get('requested_permissions'); }
    public function hasRequestedPermissions(): bool { return $this->has('requested_permissions'); }
}
