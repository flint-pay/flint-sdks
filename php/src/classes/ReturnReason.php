<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read string $created_at
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read string $handle
 * @property-read bool $is_note_required
 * @property-read string $name
 * @property-read string $return_reason_id
 * @property-read string $source
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReason extends Model {
    /** @param array{'category_handles': list<string>, 'created_at': string, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, 'source': string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReason')); }
    /** Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Shape $ (Value): string.  Value enum: "flint", "merchant".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): string. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active", "archived", "inactive".
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
