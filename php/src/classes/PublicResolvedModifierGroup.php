<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $allow_quantities
 * @property-read ?string $max_quantity
 * @property-read ?int $max_selected
 * @property-read ?string $max_total_quantity
 * @property-read ?string $min_quantity
 * @property-read ?int $min_selected
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_type
 * @property-read string $name
 * @property-read ?list<PublicResolvedModifierOption> $options
 * @property-read ?int $position
 * @property-read ?string $pricing_scope
 * @property-read ?bool $show_on_fulfillment
 * @property-read ?bool $show_on_receipt
 * @property-read ?PublicResolvedTextModifier $text
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedModifierGroup extends Model {
    /** @param array{'allow_quantities'?: bool, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_id': string, 'modifier_group_type': string, 'name': string, 'options'?: list<mixed>, 'position'?: int, 'pricing_scope'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'text'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedModifierGroup')); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getAllowQuantities(): ?bool { return $this->get('allow_quantities'); }
    public function hasAllowQuantities(): bool { return $this->has('allow_quantities'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getMaxQuantity(): ?string { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getMaxSelected(): ?int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getMaxTotalQuantity(): ?string { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getMinQuantity(): ?string { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getMinSelected(): ?int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string.  Value enum: "list", "text".
     * @return string
     */
    public function getModifierGroupType(): string { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of {@see PublicResolvedModifierOption}. Shape $[] (Value): {@see PublicResolvedModifierOption}. One selectable option in a resolved modifier group, with its price change, tax category, and whether it is available.
     * @return ?list<PublicResolvedModifierOption>
     */
    public function getOptions(): ?array { return $this->get('options'); }
    public function hasOptions(): bool { return $this->has('options'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getPosition(): ?int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): string.  Value enum: "per_item", "per_line".
     * @return ?string
     */
    public function getPricingScope(): ?string { return $this->get('pricing_scope'); }
    public function hasPricingScope(): bool { return $this->has('pricing_scope'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getShowOnFulfillment(): ?bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getShowOnReceipt(): ?bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): {@see PublicResolvedTextModifier}. Input rules for a free-text modifier group on a payment link line item: required, multiline, and length limits.
     * @return ?PublicResolvedTextModifier
     */
    public function getText(): ?PublicResolvedTextModifier { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
