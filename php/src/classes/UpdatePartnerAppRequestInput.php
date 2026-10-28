<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read bool $client_secret_enabled
 * @property-read list<string> $default_requested_permissions
 * @property-read string $expected_api_version
 * @property-read string $expected_version
 * @property-read string $name
 * @property-read list<PartnerAppPermissionManifestEntryRequestRequestInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read list<string> $redirect_uris
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePartnerAppRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePartnerAppRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When client_secret_enabled is omitted; use hasClientSecretEnabled() or valueOrDefault().
     */
    public function getClientSecretEnabled(): bool { return $this->get('client_secret_enabled'); }
    public function hasClientSecretEnabled(): bool { return $this->has('client_secret_enabled'); }
    /** Shape $ (Value): Array of string. Replaces the default requested permission IDs. Each ID must exist in the manifest. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Shape $ (Value): string. Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     * @return string
     * @throws SdkError When expected_api_version is omitted; use hasExpectedApiVersion() or valueOrDefault().
     */
    public function getExpectedApiVersion(): string { return $this->get('expected_api_version'); }
    public function hasExpectedApiVersion(): bool { return $this->has('expected_api_version'); }
    /** Shape $ (Value): integer string. Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of {@see PartnerAppPermissionManifestEntryRequestRequestInput}. Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. Shape $[] (Value): {@see PartnerAppPermissionManifestEntryRequestRequestInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryRequestRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Shape $ (Value): Array of string. Replaces the entire list of registered redirect URIs. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
}
