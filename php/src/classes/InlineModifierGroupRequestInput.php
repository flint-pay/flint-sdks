<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantities
 * @property-read string $external_reference_id
 * @property-read string $max_quantity
 * @property-read int $max_selected
 * @property-read string $max_total_quantity
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $min_quantity
 * @property-read int $min_selected
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_type
 * @property-read list<ModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read TextModifierConfigRequestInput|array<array-key, mixed>|\stdClass $text
 * Presence-aware input; omitted fields throw when accessed. */
final class InlineModifierGroupRequestInput extends Model {
    /** @param array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_id'?: string, 'modifier_group_type'?: string, 'modifiers'?: list<ModifierRequestInput|array<array-key, mixed>|\stdClass>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: TextModifierConfigRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InlineModifierGroupRequestInput')); }
    /** Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier. Default: false.
     * @return bool
     * @throws SdkError When allow_quantities is omitted; use hasAllowQuantities() or valueOrDefault().
     */
    public function getAllowQuantities(): bool { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer string. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): string { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: int32.
     * @return int
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): string { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): integer string. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): string { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: int32.
     * @return int
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Shape $ (Value): string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. minLength: 1.
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Value enum: "list", "text".
     * @return string
     * @throws SdkError When modifier_group_type is omitted; use hasModifierGroupType() or valueOrDefault().
     */
    public function getModifierGroupType(): string { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** Shape $ (Value): Array of {@see ModifierRequestInput}. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. Shape $[] (Value): {@see ModifierRequestInput}. A modifier you supply when creating or updating a modifier group, such as an add-on with a price change.
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
    /** Shape $ (Value): {@see TextModifierConfigRequestInput}. Text entry rules for a text group. Use text.required to require a value; list groups use min_selected instead. Settings for a text modifier group when creating or updating one: required, multiline, and length limits.
     * @return TextModifierConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
