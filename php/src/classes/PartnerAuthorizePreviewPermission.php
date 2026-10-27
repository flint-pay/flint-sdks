<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read ?bool $optional
 * @property-read string $permission_id
 * @property-read list<string> $required_scopes
 * @property-read string $title
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAuthorizePreviewPermission extends Model {
    /** @param array{'description': string, 'optional'?: bool, 'permission_id': string, 'required_scopes': list<string>, 'title': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAuthorizePreviewPermission')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getOptional(): ?bool { return $this->get('optional'); }
    public function hasOptional(): bool { return $this->has('optional'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPermissionId(): string { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** Shape $ (Value): Array of string. Flint API scopes this permission grants. Flint defines them; the title and description come from the partner app. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getRequiredScopes(): array { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
