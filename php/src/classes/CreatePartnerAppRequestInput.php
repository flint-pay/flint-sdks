<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $client_secret_enabled
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read list<PartnerAppPermissionManifestEntryRequestRequestInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read list<string> $redirect_uris
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppRequestInput extends Model {
    /** @param array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<PartnerAppPermissionManifestEntryRequestRequestInput|array<array-key, mixed>|\stdClass>, 'redirect_uris': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): boolean. Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: false.
     * @return bool
     * @throws SdkError When client_secret_enabled is omitted; use hasClientSecretEnabled() or valueOrDefault().
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of {@see PartnerAppPermissionManifestEntryRequestRequestInput}. Shape $[] (Value): {@see PartnerAppPermissionManifestEntryRequestRequestInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryRequestRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
}
