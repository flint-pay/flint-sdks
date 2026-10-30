<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read string $organization_id
 * @property-read string $role
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $user_id
 * Presence-aware response; omitted optional fields return null. */
final class OrganizationMembership extends Model {
    /** @param array{'created_at'?: string, 'organization_id': string, 'role': string, 'status': string, 'updated_at'?: string, 'user_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationMembership')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** organization_id
     * @return string
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Value enum: "owner", "admin", "operator", "viewer".
     * @return string
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** Value enum: "active", "removed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** user_id
     * @return string
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}
