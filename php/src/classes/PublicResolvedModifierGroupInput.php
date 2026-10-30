<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantities
 * @property-read int $max_quantity
 * @property-read int $max_selected
 * @property-read int $max_total_quantity
 * @property-read int $min_quantity
 * @property-read int $min_selected
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_type
 * @property-read string $name
 * @property-read list<PublicResolvedModifierOptionInput|array<array-key, mixed>|\stdClass> $options
 * @property-read int $position
 * @property-read string $pricing_scope
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read PublicResolvedTextModifierInput|array<array-key, mixed>|\stdClass $text
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicResolvedModifierGroupInput extends Model {
    /** @param array{'allow_quantities'?: bool, 'max_quantity'?: int, 'max_selected'?: int, 'max_total_quantity'?: int, 'min_quantity'?: int, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'name': string, 'options'?: list<PublicResolvedModifierOptionInput|array<array-key, mixed>|\stdClass>, 'position'?: int, 'pricing_scope'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'text'?: PublicResolvedTextModifierInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedModifierGroupInput')); }
    /** allow_quantities
     * @return bool
     * @throws SdkError When allow_quantities is omitted; use hasAllowQuantities() or valueOrDefault().
     */
    public function getAllowQuantities(): bool { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): int { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** modifier_group_id
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Value enum: "list", "text".
     * @return string
     * @throws SdkError When modifier_group_type is omitted; use hasModifierGroupType() or valueOrDefault().
     */
    public function getModifierGroupType(): string { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /**  [] (Value): {@see PublicResolvedModifierOptionInput}. One selectable option in a resolved modifier group, with its price change, tax category, and whether it is available.
     * @return list<PublicResolvedModifierOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When options is omitted; use hasOptions() or valueOrDefault().
     */
    public function getOptions(): array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Value enum: "per_item", "per_line".
     * @return string
     * @throws SdkError When pricing_scope is omitted; use hasPricingScope() or valueOrDefault().
     */
    public function getPricingScope(): string { return $this->get('pricing_scope'); }
    public function hasPricingScope(): bool { return $this->has('pricing_scope'); }
    /** show_on_fulfillment
     * @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** show_on_receipt
     * @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits.
     * @return PublicResolvedTextModifierInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
