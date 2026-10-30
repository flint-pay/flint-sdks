<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $existing_variant_value
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $position
 * @property-read string $status
 * @property-read list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateProductOptionRequestInput extends Model {
    /** @param array{'existing_variant_value'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'position'?: int, 'status'?: string, 'values'?: list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateProductOptionRequestInput')); }
    /** Value of this option given to every active variant that has no active value for it after this request, such as when you add an option to a product that already has active variants. It must match one of this option's active `values`, ignoring case and surrounding whitespace. Not stored; the variants keep the value. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When existing_variant_value is omitted; use hasExistingVariantValue() or valueOrDefault().
     */
    public function getExistingVariantValue(): string { return $this->get('existing_variant_value'); }
    public function hasExistingVariantValue(): bool { return $this->has('existing_variant_value'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Option name, such as Size or Color. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display order among the product's options, starting at zero. Defaults to the option's array index when omitted. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether the option is active or inactive. Active variants must select an active value for every active option. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Values offered for this option, such as Small, Medium, and Large for Size. [] (Value): {@see CreateProductOptionValueRequestInput}. One value of a product option to create, such as a specific size, with its position and status.
     * @return list<CreateProductOptionValueRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
