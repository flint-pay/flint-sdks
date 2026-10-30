<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read bool $is_note_required
 * @property-read string $name
 * @property-read string $return_reason_id
 * @property-read string $source
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonInput extends Model {
    /** @param array{'category_handles': list<string>, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required': bool, 'name': string, 'return_reason_id': string, 'source': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonInput')); }
    /** Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. [] (Value): string.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Longer explanation of when to use the reason.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. minLength: 1. maxLength: 100. pattern: ^[a-z][a-z0-9_]{0,99}$.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Whether a Return line with this reason needs a buyer_note.
     * @return bool
     * @throws SdkError When is_note_required is omitted; use hasIsNoteRequired() or valueOrDefault().
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** Name buyers and staff see.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Flint's ID for the reason. Send it as return_reason_id on a Return line.
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Value enum: "flint", "merchant".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active", "archived", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
