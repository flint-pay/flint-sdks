<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantities
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $max_quantity
 * @property-read int|null $max_selected
 * @property-read string|null $max_total_quantity
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $min_quantity
 * @property-read int|null $min_selected
 * @property-read list<ModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null $text
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateModifierGroupRequestInput extends Model {
    /** @param array{'allow_quantities'?: bool, 'expected_version'?: string, 'external_reference_id'?: string|null, 'max_quantity'?: string|null, 'max_selected'?: int|null, 'max_total_quantity'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: string|null, 'min_selected'?: int|null, 'modifiers'?: list<ModifierRequestInput|array<array-key, mixed>|\stdClass>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateModifierGroupRequestInput')); }
    /** Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * @return bool
     * @throws SdkError When allow_quantities is omitted; use hasAllowQuantities() or valueOrDefault().
     */
    public function getAllowQuantities(): bool { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** Shape $ (Value): integer string. Modifier group version last read by the caller. Required when modifiers is present. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer string or null. Maximum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): string|null { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Shape $ (Value): integer or null. Maximum number of distinct list modifiers buyers can select. Omit it to keep the current value; send null to remove the limit. Format: int32.
     * @return int|null
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): int|null { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Shape $ (Value): integer string or null. Maximum combined whole-number quantity across selected list modifiers. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): string|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Shape $ (Value): Map of (string or null) or null. Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): integer string or null. Minimum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): string|null { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Shape $ (Value): integer or null. Minimum number of distinct list modifiers buyers must select. Omit it to keep the current value; send null to remove the minimum. Format: int32.
     * @return int|null
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): int|null { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Shape $ (Value): Array of {@see ModifierRequestInput}. Replaces all modifiers atomically. Include modifier_id to retain an existing modifier, omit the ID to create one, and omit a previous modifier to archive it. Omit the array to leave modifiers unchanged. An empty array clears modifiers when the group rules permit it. Null is not accepted. Shape $[] (Value): {@see ModifierRequestInput}. A modifier you supply when creating or updating a modifier group, such as an add-on with a price change.
     * @return list<ModifierRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set.
     * @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set.
     * @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see TextModifierConfigPatchRequestInput} or null. Patch text entry rules by field. Omitted fields keep their current values; null clears the text configuration when the group rules permit it. An empty object is invalid. Shape $.anyOf[1] (Value): {@see TextModifierConfigPatchRequestInput}. Send only text fields to change. Omitted fields keep their stored values. null clears min_length or max_length. An empty object is invalid. The merged configuration is validated. minProperties: 1. Shape $.anyOf[2] (Value): null.
     * @return array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
