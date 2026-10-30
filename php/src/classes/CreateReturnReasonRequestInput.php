<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $category_handles
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read bool $is_note_required
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateReturnReasonRequestInput extends Model {
    /** @param array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateReturnReasonRequestInput')); }
    /** Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. Repeated handles are dropped. maxItems: 100. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When category_handles is omitted; use hasCategoryHandles() or valueOrDefault().
     */
    public function getCategoryHandles(): array { return $this->get('category_handles'); }
    public function hasCategoryHandles(): bool { return $this->has('category_handles'); }
    /** Description, limited to 2048 bytes after trimming surrounding whitespace. minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Stable lower_snake_case identifier. After trimming surrounding whitespace, it must start with a lowercase letter and contain only lowercase letters, digits, and underscores, with 1 through 100 characters. minLength: 1.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Whether a Return line with this reason needs a buyer_note. Defaults to false. Default: false.
     * @return bool
     * @throws SdkError When is_note_required is omitted; use hasIsNoteRequired() or valueOrDefault().
     */
    public function getIsNoteRequired(): bool { return $this->get('is_note_required'); }
    public function hasIsNoteRequired(): bool { return $this->has('is_note_required'); }
    /** Display name, limited to 1 through 255 bytes after trimming surrounding whitespace. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
