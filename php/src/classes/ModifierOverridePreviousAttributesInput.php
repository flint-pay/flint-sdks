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
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_delta_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierOverridePreviousAttributesInput extends Model {
    /** @param array{'available'?: bool|null, 'default_quantity'?: int|null, 'line_item_tax_category'?: string|null, 'modifier_id'?: string|null, 'selected_by_default'?: bool|null, 'taxable'?: bool|null, 'unit_price_delta_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierOverridePreviousAttributesInput')); }
    /** Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. anyOf[1] (Value): boolean. Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: true. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When available is omitted; use hasAvailable() or valueOrDefault().
     */
    public function getAvailable(): mixed { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. anyOf[1] (Value): integer. Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When default_quantity is omitted; use hasDefaultQuantity() or valueOrDefault().
     */
    public function getDefaultQuantity(): mixed { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): mixed { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the list modifier these overrides apply to. anyOf[1] (Value): string. Identifier of the list modifier these overrides apply to. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): mixed { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. anyOf[1] (Value): boolean. Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When selected_by_default is omitted; use hasSelectedByDefault() or valueOrDefault().
     */
    public function getSelectedByDefault(): mixed { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. anyOf[1] (Value): boolean. Overrides the modifier's taxable for this set. Omit it to use the modifier's value. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
