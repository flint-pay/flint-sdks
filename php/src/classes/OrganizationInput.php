<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $organization_id
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null $parent_organization
 * @property-read string $parent_organization_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'organization_id': string, 'parent_organization'?: array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Shape $ (Value): {@see ExpandedOrganizationSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrganizationSummaryInput}. An organization's summary fields, such as its name, status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'name': string, 'organization_id': string, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object|null
     * @throws SdkError When parent_organization is omitted; use hasParentOrganization() or valueOrDefault().
     */
    public function getParentOrganization(): mixed { return $this->get('parent_organization'); }
    public function hasParentOrganization(): bool { return $this->has('parent_organization'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When parent_organization_id is omitted; use hasParentOrganizationId() or valueOrDefault().
     */
    public function getParentOrganizationId(): string { return $this->get('parent_organization_id'); }
    public function hasParentOrganizationId(): bool { return $this->has('parent_organization_id'); }
    /** Shape $ (Value): string. Current status. Archived: deleted. API keys can no longer read or list the organization. Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted organization configuration and membership version. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
