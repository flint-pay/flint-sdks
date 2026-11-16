<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read bool|null $optional
 * @property-read string|null $permission_id
 * @property-read list<string>|null $required_scopes
 * @property-read string|null $title
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPermissionManifestEntryPreviousAttributesInput extends Model {
    /** @param array{'description'?: string|null, 'optional'?: bool|null, 'permission_id'?: string|null, 'required_scopes'?: list<string>|null, 'title'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPermissionManifestEntryPreviousAttributesInput')); }
    /** What the permission lets the app do, shown to merchants when they approve the install. anyOf[1] (Value): string. What the permission lets the app do, shown to merchants when they approve the install. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. anyOf[1] (Value): boolean. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When optional is omitted; use hasOptional() or valueOrDefault().
     */
    public function getOptional(): mixed { return $this->get('optional'); }
    public function hasOptional(): bool { return $this->has('optional'); }
    /** The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. anyOf[1] (Value): string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: 1. Example: "manage_orders". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When permission_id is omitted; use hasPermissionId() or valueOrDefault().
     */
    public function getPermissionId(): mixed { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. anyOf[1] (Value): Array of string. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When required_scopes is omitted; use hasRequiredScopes() or valueOrDefault().
     */
    public function getRequiredScopes(): mixed { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. anyOf[1] (Value): string. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): mixed { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
