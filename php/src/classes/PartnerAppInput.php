<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $app_type
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read list<string> $redirect_uris
 * @property-read string $visibility
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInput extends Model {
    /** @param array{'api_version': string, 'app_type': string, 'default_requested_permissions': list<string>, 'name': string, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'redirect_uris': list<string>, 'visibility': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInput')); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string
     * @throws SdkError When app_type is omitted; use hasAppType() or valueOrDefault().
     */
    public function getAppType(): string { return $this->get('app_type'); }
    public function hasAppType(): bool { return $this->has('app_type'); }
    /** @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** @return string
     * @throws SdkError When visibility is omitted; use hasVisibility() or valueOrDefault().
     */
    public function getVisibility(): string { return $this->get('visibility'); }
    public function hasVisibility(): bool { return $this->has('visibility'); }
}
