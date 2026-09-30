<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available
 * @property-read string $default_quantity
 * @property-read bool $hidden
 * @property-read string $line_item_tax_category
 * @property-read string $modifier_id
 * @property-read bool $selected_by_default
 * @property-read bool $taxable
 * @property-read MoneyValue $unit_price_delta_money
 * Presence-aware response; omitted fields throw when accessed. */
final class ModifierOverride extends Model {
    /** @param array{'available'?: bool, 'default_quantity'?: string, 'hidden'?: bool, 'line_item_tax_category'?: string, 'modifier_id': string, 'selected_by_default'?: bool, 'taxable'?: bool, 'unit_price_delta_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierOverride')); }
    /** @return bool
     * @throws SdkError When available is omitted; use hasAvailable() or valueOrDefault().
     */
    public function getAvailable(): bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** @return string
     * @throws SdkError When default_quantity is omitted; use hasDefaultQuantity() or valueOrDefault().
     */
    public function getDefaultQuantity(): string { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** @return bool
     * @throws SdkError When hidden is omitted; use hasHidden() or valueOrDefault().
     */
    public function getHidden(): bool { return $this->get('hidden'); }
    public function hasHidden(): bool { return $this->has('hidden'); }
    /** @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** @return string
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** @return bool
     * @throws SdkError When selected_by_default is omitted; use hasSelectedByDefault() or valueOrDefault().
     */
    public function getSelectedByDefault(): bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** @return MoneyValue
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): MoneyValue { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
