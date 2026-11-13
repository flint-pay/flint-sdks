<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read string $permission_id
 * @property-read list<string> $required_scopes
 * @property-read string $title
 * Presence-aware response; omitted optional fields return null. */
final class MerchantSignupPermission extends Model {
    /** @param array{'description': string, 'permission_id': string, 'required_scopes': list<string>, 'title': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupPermission')); }
    /** The permission's description.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The manifest permission ID.
     * @return string
     */
    public function getPermissionId(): string { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** The Flint scopes the permission grants. [] (Value): string.
     * @return list<string>
     */
    public function getRequiredScopes(): array { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** The permission's title, as the code email showed it.
     * @return string
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
