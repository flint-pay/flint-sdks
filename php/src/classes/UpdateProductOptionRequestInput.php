<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $existing_variant_value
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read string $option_id
 * @property-read int $position
 * @property-read string $status
 * @property-read list<UpdateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateProductOptionRequestInput extends Model {
    /** @param array{'existing_variant_value'?: string, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name': string, 'option_id'?: string, 'position'?: int, 'status'?: string, 'values'?: list<UpdateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateProductOptionRequestInput')); }
    /** Value of this option given to every active variant that has no active value for it after this request, such as when you add an option to a product that already has active variants. It must match one of this option's active `values`, ignoring case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When existing_variant_value is omitted; use hasExistingVariantValue() or valueOrDefault().
     */
    public function getExistingVariantValue(): string { return $this->get('existing_variant_value'); }
    public function hasExistingVariantValue(): bool { return $this->has('existing_variant_value'); }
    /** Complete caller-owned metadata for this option. Retained options are replaced as members of the options array, so omitting metadata, sending null, or sending {} clears it. A null-valued key is omitted from the replacement. Values can't be empty strings. Keys starting with flint_ are reserved and cannot be written through the public API. * (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Identifier of an existing option to retain. Omit it to create a new option. minLength: 1. pattern: ^opt_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When option_id is omitted; use hasOptionId() or valueOrDefault().
     */
    public function getOptionId(): string { return $this->get('option_id'); }
    public function hasOptionId(): bool { return $this->has('option_id'); }
    /** Display order among the product's options, starting at zero. Defaults to the option's array index when omitted. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether the option is active or inactive. Active variants must select an active value for every active option. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Values offered for this option, such as Small, Medium, and Large for Size. [] (Value): {@see UpdateProductOptionValueRequestInput}. A value to keep or add on a product option when updating a product, with its position and status.
     * @return list<UpdateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
