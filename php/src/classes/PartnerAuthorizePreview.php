<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read int $partner_app_version
 * @property-read string $redirect_uri
 * @property-read list<string> $requested_permission_ids
 * @property-read list<PartnerAuthorizePreviewPermission> $requested_permissions
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAuthorizePreview extends Model {
    /** @param array{'client_id': string, 'mode': string, 'name': string, 'partner_app_id': string, 'partner_app_version': int, 'redirect_uri': string, 'requested_permission_ids': list<string>, 'requested_permissions': list<mixed>, ...}|object $values */
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
