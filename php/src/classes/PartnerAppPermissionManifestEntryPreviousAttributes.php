<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read bool|null $optional
 * @property-read string|null $permission_id
 * @property-read list<string>|null $required_scopes
 * @property-read string|null $title
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPermissionManifestEntryPreviousAttributes extends Model {
    /** @param array{'description'?: mixed, 'optional'?: mixed, 'permission_id'?: mixed, 'required_scopes'?: mixed, 'title'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPermissionManifestEntryPreviousAttributes')); }
    /** What the permission lets the app do, shown to merchants when they approve the install. anyOf[1] (Value): string. What the permission lets the app do, shown to merchants when they approve the install. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. anyOf[1] (Value): boolean. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getOptional(): bool|null { return $this->get('optional'); }
    public function hasOptional(): bool { return $this->has('optional'); }
    /** The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. anyOf[1] (Value): string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPermissionId(): string|null { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. anyOf[1] (Value): Array of string. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRequiredScopes(): array|null { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. anyOf[1] (Value): string. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTitle(): string|null { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
