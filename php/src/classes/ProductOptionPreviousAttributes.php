<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read mixed $metadata
 * @property-read string|null $name
 * @property-read string|null $option_id
 * @property-read int|null $position
 * @property-read string|null $product_id
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read list<ProductOptionValuePreviousAttributes>|null $values
 * Presence-aware response; omitted optional fields return null. */
final class ProductOptionPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'option_id'?: mixed, 'position'?: mixed, 'product_id'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'values'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductOptionPreviousAttributes')); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Option name, such as Size or Color. anyOf[1] (Value): string. Option name, such as Size or Color. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Stable identifier of the product option. anyOf[1] (Value): string. Stable identifier of the product option. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOptionId(): string|null { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Display order among the product's options, starting at zero. anyOf[1] (Value): integer. Display order among the product's options, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Identifier of the product this option belongs to. anyOf[1] (Value): string. Identifier of the product this option belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Option lifecycle status. Every active variant must select an active value for each active option. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Option lifecycle status. Every active variant must select an active value for each active option. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Values offered for this option, such as Small, Medium, and Large for Size. anyOf[1] (Value): Array of {@see ProductOptionValuePreviousAttributes}. Values offered for this option, such as Small, Medium, and Large for Size. anyOf[1][] (Value): {@see ProductOptionValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ProductOptionValuePreviousAttributes>|null
     */
    public function getValues(): array|null { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
