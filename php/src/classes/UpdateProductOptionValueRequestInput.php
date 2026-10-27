<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $option_value_id
 * @property-read int $position
 * @property-read string $status
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateProductOptionValueRequestInput extends Model {
    /** @param array{'metadata'?: array<array-key, string|null>|\stdClass|null, 'option_value_id'?: string, 'position'?: int, 'status'?: string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateProductOptionValueRequestInput')); }
    /** Shape $ (Value): Map of (string or null) or null. Complete caller-owned metadata for this option value. Retained option values are replaced as members of the options array, so omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Identifier of an existing option value to retain. Omit it to create a new value. minLength: 1. pattern: ^optv_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When option_value_id is omitted; use hasOptionValueId() or valueOrDefault().
     */
    public function getOptionValueId(): string { return $this->get('option_value_id'); }
    public function hasOptionValueId(): bool { return $this->has('option_value_id'); }
    /** Shape $ (Value): integer. Display order among the option's values, starting at zero. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): string. Whether the value is active or inactive. Active variants cannot newly select an inactive value. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Option value shown to buyers, such as Medium. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
