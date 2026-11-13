<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read int $partner_app_version
 * @property-read ?PartnerAppPaymentSplits $payment_splits
 * @property-read ?PlatformFeeCap $platform_fee_cap
 * @property-read string $redirect_uri
 * @property-read list<string> $requested_permission_ids
 * @property-read list<PartnerAuthorizePreviewPermission> $requested_permissions
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAuthorizePreview extends Model {
    /** @param array{'client_id': string, 'mode': string, 'name': string, 'partner_app_id': string, 'partner_app_version': int, 'payment_splits'?: mixed, 'platform_fee_cap'?: mixed, 'redirect_uri': string, 'requested_permission_ids': list<string>, 'requested_permissions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAuthorizePreview')); }
    /** The app's client ID, as sent in the authorization request.
     * @return string
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Whether the install is for test or live mode. Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The app's current name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the partner app asking for access.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** The app’s version. It changes whenever the app is edited. Format: int64.
     * @return int
     */
    public function getPartnerAppVersion(): int { return $this->get('partner_app_version'); }
    public function hasPartnerAppVersion(): bool { return $this->has('partner_app_version'); }
    /** The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.
     * @return ?PartnerAppPaymentSplits
     */
    public function getPaymentSplits(): ?PartnerAppPaymentSplits { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     * @return ?PlatformFeeCap
     */
    public function getPlatformFeeCap(): ?PlatformFeeCap { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny.
     * @return string
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. [] (Value): string.
     * @return list<string>
     */
    public function getRequestedPermissionIds(): array { return $this->get('requested_permission_ids'); }
    public function hasRequestedPermissionIds(): bool { return $this->has('requested_permission_ids'); }
    /** The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. [] (Value): {@see PartnerAuthorizePreviewPermission}. One permission a partner app requests during authorization, with its title, description, and required scopes.
     * @return list<PartnerAuthorizePreviewPermission>
     */
    public function getRequestedPermissions(): array { return $this->get('requested_permissions'); }
    public function hasRequestedPermissions(): bool { return $this->has('requested_permissions'); }
}
