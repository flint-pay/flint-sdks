<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $option_value_id
 * @property-read int|null $position
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read string|null $value
 * Presence-aware response; omitted optional fields return null. */
final class ProductOptionValuePreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'metadata'?: mixed, 'option_value_id'?: mixed, 'position'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'value'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductOptionValuePreviousAttributes')); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Stable identifier of the option value. anyOf[1] (Value): string. Stable identifier of the option value. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOptionValueId(): string|null { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Display order among the option's values, starting at zero. anyOf[1] (Value): integer. Display order among the option's values, starting at zero. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Option value lifecycle status. Only active values can be newly selected by active variants. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Option value lifecycle status. Only active values can be newly selected by active variants. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Option value shown to buyers, such as Medium. anyOf[1] (Value): string. Option value shown to buyers, such as Medium. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValue(): string|null { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
