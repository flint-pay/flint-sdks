<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $option_id
 * @property-read int $position
 * @property-read string $product_id
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read ?list<ProductOptionValue> $values
 * Presence-aware response; omitted optional fields return null. */
final class ProductOption extends Model {
    /** @param array{'created_at'?: string, 'metadata'?: \stdClass, 'name': string, 'option_id': string, 'position': int, 'product_id': string, 'status': string, 'updated_at'?: string, 'values'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductOption')); }
    /** Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Option name, such as Size or Color.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Stable identifier of the product option.
     * @return string
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Shape $ (Value): integer. Display order among the product's options, starting at zero. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): string. Identifier of the product this option belongs to.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string. Option lifecycle status. Every active variant must select an active value for each active option. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): Array of {@see ProductOptionValue}. Values offered for this option, such as Small, Medium, and Large for Size. Shape $[] (Value): {@see ProductOptionValue}. One value of a product option, such as a size or color, with its position and status.
     * @return ?list<ProductOptionValue>
     */
    public function getValues(): ?array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
