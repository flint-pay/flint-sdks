<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $app_type
 * @property-read string $client_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read string $redirect_uri
 * @property-read list<string> $requested_permission_ids
 * @property-read list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass> $requested_permissions
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAuthorizePreviewInput extends Model {
    /** @param array{'app_type': string, 'client_id': string, 'mode': string, 'name': string, 'partner_app_id': string, 'redirect_uri': string, 'requested_permission_ids': list<string>, 'requested_permissions': list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAuthorizePreviewInput')); }
    /** @return string
     * @throws SdkError When app_type is omitted; use hasAppType() or valueOrDefault().
     */
    public function getAppType(): string { return $this->get('app_type'); }
    public function hasAppType(): bool { return $this->has('app_type'); }
    /** @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** @return string
     * @throws SdkError When redirect_uri is omitted; use hasRedirectUri() or valueOrDefault().
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** @return list<string>
     * @throws SdkError When requested_permission_ids is omitted; use hasRequestedPermissionIds() or valueOrDefault().
     */
    public function getRequestedPermissionIds(): array { return $this->get('requested_permission_ids'); }
    public function hasRequestedPermissionIds(): bool { return $this->has('requested_permission_ids'); }
    /** @return list<PartnerAuthorizePreviewPermissionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When requested_permissions is omitted; use hasRequestedPermissions() or valueOrDefault().
     */
    public function getRequestedPermissions(): array { return $this->get('requested_permissions'); }
    public function hasRequestedPermissions(): bool { return $this->has('requested_permissions'); }
}
