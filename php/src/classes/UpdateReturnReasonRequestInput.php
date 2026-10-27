<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read string|null $description
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read bool $is_note_required
 * @property-read string $name
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateReturnReasonRequestInput extends Model {
    /** @param array{'category_handles'?: list<string>, 'description'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'is_note_required'?: bool, 'name'?: string, 'status'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateReturnReasonRequestInput')); }
    /** Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Requires expected_version. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer string. Required when any of these fields is present: category_handles. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
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
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_note_required is omitted; use hasIsNoteRequired() or valueOrDefault().
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Set active to offer the reason or inactive to stop offering it. To archive a merchant reason, use DELETE. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
