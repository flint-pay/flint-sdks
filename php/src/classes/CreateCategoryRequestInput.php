<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCategoryRequestInput extends Model {
    /** @param array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCategoryRequestInput')); }
    /** Shape $ (Value): string. Description of the category. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Unique category handle, using lowercase letters, digits, and single hyphens between words. Cannot be changed after creation. minLength: 1. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Category name shown to buyers. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
