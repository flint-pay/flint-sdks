<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $available
 * @property-read ?int $default_quantity
 * @property-read ?string $line_item_tax_category
 * @property-read string $modifier_id
 * @property-read string $name
 * @property-read ?int $position
 * @property-read ?bool $selected_by_default
 * @property-read ?bool $show_on_fulfillment
 * @property-read ?bool $show_on_receipt
 * @property-read ?bool $taxable
 * @property-read MoneyValue $unit_price_delta_money
 * Presence-aware response; omitted optional fields return null. */
final class PublicResolvedModifierOption extends Model {
    /** @param array{'available': bool, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'modifier_id': string, 'name': string, 'position'?: int, 'selected_by_default'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'taxable'?: bool, 'unit_price_delta_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicResolvedModifierOption')); }
    /** Whether the choice can be selected now.
     * @return bool
     */
    public function getAvailable(): bool { return $this->get('available'); }
    public function hasAvailable(): bool { return $this->has('available'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getDefaultQuantity(): ?int { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** ID of the modifier this choice selects.
     * @return string
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the choice.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Position of the choice within its group. Format: int32.
     * @return ?int
     */
    public function getPosition(): ?int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether the choice is selected when the buyer adds the item without choosing modifiers.
     * @return ?bool
     */
    public function getSelectedByDefault(): ?bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Whether the choice appears on fulfillment documents.
     * @return ?bool
     */
    public function getShowOnFulfillment(): ?bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether the choice appears on receipts.
     * @return ?bool
     */
    public function getShowOnReceipt(): ?bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Whether the choice's price is subject to tax.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** The amount the choice adds to the item's unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceDeltaMoney(): MoneyValue { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
