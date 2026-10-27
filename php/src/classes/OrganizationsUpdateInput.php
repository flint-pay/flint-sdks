<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $organization_id
 * @property-read array{'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'parent_organization_id'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsUpdateInput extends Model {
    /** @param array{'organization_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'parent_organization_id'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsUpdateInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update organization. minProperties: 1.
     * @return array{'expected_version'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'parent_organization_id'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
