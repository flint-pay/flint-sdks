<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $client_secret_enabled
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read list<string> $redirect_uris
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppRequestInput extends Model {
    /** @param array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass>, 'redirect_uris': list<string>}|object $values */
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
    /** The app's name, shown to merchants on the consent screen. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. [] (Value): {@see PartnerAppPermissionManifestEntryRequestInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
}
