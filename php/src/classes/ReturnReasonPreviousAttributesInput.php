<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $category_handles
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $handle
 * @property-read bool|null $is_note_required
 * @property-read string|null $name
 * @property-read string|null $return_reason_id
 * @property-read string|null $source
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonPreviousAttributesInput extends Model {
    /** @param array{'category_handles'?: list<string>|null, 'created_at'?: string|\DateTimeInterface|null, 'description'?: string|null, 'external_reference_id'?: string|null, 'handle'?: string|null, 'is_note_required'?: bool|null, 'name'?: string|null, 'return_reason_id'?: string|null, 'source'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonPreviousAttributesInput')); }
    /** Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. anyOf[1] (Value): Array of string. Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): mixed { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. anyOf[1] (Value): string. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Longer explanation of when to use the reason. anyOf[1] (Value): string. Longer explanation of when to use the reason. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. anyOf[1] (Value): string. Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. minLength: 1. maxLength: 100. pattern: ^[a-z][a-z0-9_]{0,99}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): mixed { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Whether a Return line with this reason needs a buyer_note. anyOf[1] (Value): boolean. Whether a Return line with this reason needs a buyer_note. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When is_note_required is omitted; use hasIsNoteRequired() or valueOrDefault().
     */
    public function getIsNoteRequired(): mixed { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** Name buyers and staff see. anyOf[1] (Value): string. Name buyers and staff see. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Flint's ID for the reason. Send it as return_reason_id on a Return line. anyOf[1] (Value): string. Flint's ID for the reason. Send it as return_reason_id on a Return line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): mixed { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
    /** Whether Flint provides the reason or you created it. Value enum: "flint", "merchant". anyOf[1] (Value): string. Whether Flint provides the reason or you created it. Value enum: "flint", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active", "archived", "inactive". anyOf[1] (Value): string. Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active", "archived", "inactive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. anyOf[1] (Value): integer. Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
