<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $available
 * @property-read ?int $default_quantity
 * @property-read ?string $line_item_tax_category
 * @property-read string $modifier_id
 * @property-read ?bool $selected_by_default
 * @property-read ?bool $taxable
 * @property-read ?ModifierSetArchivedInstalledMerchantsEventDataObjectModifierGroupsItemInlineModifierOverridesItemUnitPriceDeltaMoney $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetArchivedInstalledMerchantsEventDataObjectModifierGroupsItemInlineModifierOverridesItem extends Model {
    /** @param array{'available'?: bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetArchivedInstalledMerchantsEventDataObjectModifierGroupsItemInlineModifierOverridesItem')); }
    /** Whether this modifier can be offered in this set. Defaults to true; the modifier must also have status active. Default: true.
     * @return ?bool
     */
    public function getAvailable(): ?bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getDefaultQuantity(): ?int { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Identifier of the list modifier these overrides apply to. minLength: 1.
     * @return string
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's value. Ignored when the choice is unavailable.
     * @return ?bool
     */
    public function getSelectedByDefault(): ?bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?ModifierSetArchivedInstalledMerchantsEventDataObjectModifierGroupsItemInlineModifierOverridesItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): ?ModifierSetArchivedInstalledMerchantsEventDataObjectModifierGroupsItemInlineModifierOverridesItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
