<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $available
 * @property-read int|null $default_quantity
 * @property-read string|null $line_item_tax_category
 * @property-read string|null $modifier_id
 * @property-read bool|null $selected_by_default
 * @property-read bool|null $taxable
 * @property-read mixed $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class ModifierOverridePreviousAttributes extends Model {
    /** @param array{'available'?: mixed, 'default_quantity'?: mixed, 'line_item_tax_category'?: mixed, 'modifier_id'?: mixed, 'selected_by_default'?: mixed, 'taxable'?: mixed, 'unit_price_delta_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierOverridePreviousAttributes')); }
    /** Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. anyOf[1] (Value): boolean. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: true. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAvailable(): bool|null { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. anyOf[1] (Value): integer. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDefaultQuantity(): int|null { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLineItemTaxCategory(): string|null { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the list modifier these overrides apply to. anyOf[1] (Value): string. Identifier of the list modifier these overrides apply to. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierId(): string|null { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. anyOf[1] (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getSelectedByDefault(): bool|null { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. anyOf[1] (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
