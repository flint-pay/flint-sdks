<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $option_value_id
 * @property-read int $position
 * @property-read ?string $status
 * @property-read ?string $updated_at
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class ProductOptionValue extends Model {
    /** @param array{'created_at'?: string, 'metadata'?: mixed, 'option_value_id': string, 'position': int, 'status'?: string, 'updated_at'?: string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductOptionValue')); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Stable identifier of the option value.
     * @return string
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Display order among the option's values, starting at zero. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Option value lifecycle status. Only active values can be newly selected by active variants. Value enum: "active", "inactive", "archived".
     * @return ?string
     */
    public function getStatus(): ?string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Option value shown to buyers, such as Medium.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
