<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read int|null $default_quantity
 * @property-read string|null $line_item_tax_category
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $modifier_group_id
 * @property-read string|null $modifier_id
 * @property-read string|null $name
 * @property-read int|null $position
 * @property-read bool|null $selected_by_default
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $status
 * @property-read bool|null $taxable
 * @property-read MoneyValuePreviousAttributes|null $unit_price_delta_money
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ModifierPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'default_quantity'?: mixed, 'line_item_tax_category'?: mixed, 'metadata'?: mixed, 'modifier_group_id'?: mixed, 'modifier_id'?: mixed, 'name'?: mixed, 'position'?: mixed, 'selected_by_default'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'status'?: mixed, 'taxable'?: mixed, 'unit_price_delta_money'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierPreviousAttributes')); }
    /** When the modifier was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDefaultQuantity(): int|null { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLineItemTaxCategory(): string|null { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. anyOf[1] (Value): string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupId(): string|null { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. anyOf[1] (Value): string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierId(): string|null { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the choice shown to buyers. anyOf[1] (Value): string. Name of the choice shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display position of the choice within its group; lower values appear first. anyOf[1] (Value): integer. Display position of the choice within its group; lower values appear first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. anyOf[1] (Value): boolean. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getSelectedByDefault(): bool|null { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Whether this modifier appears in fulfillment details. anyOf[1] (Value): boolean. Whether this modifier appears in fulfillment details. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnFulfillment(): bool|null { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this modifier appears on buyer receipts. anyOf[1] (Value): boolean. Whether this modifier appears on buyer receipts. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnReceipt(): bool|null { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this modifier's price is taxable. A modifier set can override this value. anyOf[1] (Value): boolean. Whether this modifier's price is taxable. A modifier set can override this value. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxable(): bool|null { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceDeltaMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
    /** When the modifier last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
