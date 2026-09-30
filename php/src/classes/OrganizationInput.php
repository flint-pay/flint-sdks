<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $parent_organization_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationInput extends Model {
    /** @param array{'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'parent_organization_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationInput')); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When parent_organization_id is omitted; use hasParentOrganizationId() or valueOrDefault().
     */
    public function getParentOrganizationId(): string { return $this->get('parent_organization_id'); }
    public function hasParentOrganizationId(): bool { return $this->has('parent_organization_id'); }
}
