<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $current_return_policy_revision_id
 * @property-read ReturnPolicyRevision|null $current_revision
 * @property-read ?string $external_reference_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $return_policy_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPolicy extends Model {
    /** @param array{'created_at': string, 'current_return_policy_revision_id': string, 'current_revision'?: mixed, 'external_reference_id'?: string, 'metadata': \stdClass, 'name': string, 'return_policy_id': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPolicy')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCurrentReturnPolicyRevisionId(): string { return $this->get('current_return_policy_revision_id'); }
    public function hasCurrentReturnPolicyRevisionId(): bool { return $this->has('current_return_policy_revision_id'); }
    /** Shape $ (Value): {@see ReturnPolicyRevision} or null. Shape $.anyOf[1] (Value): {@see ReturnPolicyRevision}. A saved revision of a return policy. Shape $.anyOf[2] (Value): null.
     * @return ReturnPolicyRevision|null
     */
    public function getCurrentRevision(): ReturnPolicyRevision|null { return $this->get('current_revision'); }
    public function hasCurrentRevision(): bool { return $this->has('current_revision'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnPolicyId(): string { return $this->get('return_policy_id'); }
    public function hasReturnPolicyId(): bool { return $this->has('return_policy_id'); }
    /** Shape $ (Value): string. active policies apply to new Returns; inactive policies do not. Toggle active and inactive with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
