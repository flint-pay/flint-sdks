<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $option_id
 * @property-read int|null $position
 * @property-read string|null $product_id
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read list<ProductOptionValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $values
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductOptionPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'option_id'?: string|null, 'position'?: int|null, 'product_id'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'values'?: list<ProductOptionValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductOptionPreviousAttributesInput')); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Option name, such as Size or Color. anyOf[1] (Value): string. Option name, such as Size or Color. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stable identifier of the product option. anyOf[1] (Value): string. Stable identifier of the product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): mixed { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Display order among the product's options, starting at zero. anyOf[1] (Value): integer. Display order among the product's options, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this option belongs to. anyOf[1] (Value): string. Identifier of the product this option belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Option lifecycle status. Every active variant must select an active value for each active option. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Option lifecycle status. Every active variant must select an active value for each active option. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Values offered for this option, such as Small, Medium, and Large for Size. anyOf[1] (Value): Array of {@see ProductOptionValuePreviousAttributesInput}. Values offered for this option, such as Small, Medium, and Large for Size. anyOf[1][] (Value): {@see ProductOptionValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ProductOptionValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): mixed { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
