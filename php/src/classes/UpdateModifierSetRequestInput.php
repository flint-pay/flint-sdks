<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read list<ModifierSetGroupRequestInput|array<array-key, mixed>|\stdClass> $modifier_groups
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateModifierSetRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifier_groups'?: list<ModifierSetGroupRequestInput|array<array-key, mixed>|\stdClass>, 'name'?: string, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateModifierSetRequestInput')); }
    /** Shape $ (Value): integer string. Modifier set version last read by the caller. Required when modifier_groups is present. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): Array of {@see ModifierSetGroupRequestInput}. Replaces the set's group entries atomically. Include modifier_set_group_id to retain an entry or omit it to create one. Entries omitted from the array are removed. Omit the array to leave entries unchanged; send [] to clear them. Shape $[] (Value): {@see ModifierSetGroupRequestInput}. A modifier group you add to a modifier set, either an existing group by ID or a new inline group, with selection limits and overrides.
     * @return list<ModifierSetGroupRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifier_groups is omitted; use hasModifierGroups() or valueOrDefault().
     */
    public function getModifierGroups(): array { return $this->get('modifier_groups'); }
    public function hasModifierGroups(): bool { return $this->has('modifier_groups'); }
    /** Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
