<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $organization_id
 * @property-read ExpandedOrganizationSummary|null $parent_organization
 * @property-read ?string $parent_organization_id
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Organization extends Model {
    /** @param array{'created_at'?: string, 'metadata'?: mixed, 'name': string, 'organization_id': string, 'parent_organization'?: mixed, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Organization')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Shape $ (Value): {@see ExpandedOrganizationSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrganizationSummary}. An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrganizationSummary|null
     */
    public function getParentOrganization(): ExpandedOrganizationSummary|null { return $this->get('parent_organization'); }
    public function hasParentOrganization(): bool { return $this->has('parent_organization'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getParentOrganizationId(): ?string { return $this->get('parent_organization_id'); }
    public function hasParentOrganizationId(): bool { return $this->has('parent_organization_id'); }
    /** Shape $ (Value): string. Current status. Archived: deleted. API keys can no longer read or list the organization. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted organization configuration and membership version. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
