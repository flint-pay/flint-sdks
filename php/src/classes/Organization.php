<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $organization_id
 * @property-read ExpandedOrganizationSummary|null $parent_organization
 * @property-read string $parent_organization_id
 * @property-read string $status
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class Organization extends Model {
    /** @param array{'created_at'?: string, 'metadata'?: \stdClass, 'name': string, 'organization_id': string, 'parent_organization'?: mixed, 'parent_organization_id'?: string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Organization')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** @return ExpandedOrganizationSummary|null
     * @throws SdkError When parent_organization is omitted; use hasParentOrganization() or valueOrDefault().
     */
    public function getParentOrganization(): ExpandedOrganizationSummary|null { return $this->get('parent_organization'); }
    public function hasParentOrganization(): bool { return $this->has('parent_organization'); }
    /** @return string
     * @throws SdkError When parent_organization_id is omitted; use hasParentOrganizationId() or valueOrDefault().
     */
    public function getParentOrganizationId(): string { return $this->get('parent_organization_id'); }
    public function hasParentOrganizationId(): bool { return $this->has('parent_organization_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
