<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read int|null $default_quantity
 * @property-read string|null $line_item_tax_category
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read string|null $modifier_group_id
 * @property-read string|null $modifier_id
 * @property-read string|null $name
 * @property-read int|null $position
 * @property-read bool|null $selected_by_default
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $status
 * @property-read bool|null $taxable
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_delta_money
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'default_quantity'?: int|null, 'line_item_tax_category'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_group_id'?: string|null, 'modifier_id'?: string|null, 'name'?: string|null, 'position'?: int|null, 'selected_by_default'?: bool|null, 'show_on_fulfillment'?: bool|null, 'show_on_receipt'?: bool|null, 'status'?: string|null, 'taxable'?: bool|null, 'unit_price_delta_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierPreviousAttributesInput')); }
    /** When the modifier was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When default_quantity is omitted; use hasDefaultQuantity() or valueOrDefault().
     */
    public function getDefaultQuantity(): mixed { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[1] (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): mixed { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. anyOf[1] (Value): string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): mixed { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. anyOf[1] (Value): string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): mixed { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the choice shown to buyers. anyOf[1] (Value): string. Name of the choice shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display position of the choice within its group; lower values appear first. anyOf[1] (Value): integer. Display position of the choice within its group; lower values appear first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. anyOf[1] (Value): boolean. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When selected_by_default is omitted; use hasSelectedByDefault() or valueOrDefault().
     */
    public function getSelectedByDefault(): mixed { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Whether this modifier appears in fulfillment details. anyOf[1] (Value): boolean. Whether this modifier appears in fulfillment details. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): mixed { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this modifier appears on buyer receipts. anyOf[1] (Value): boolean. Whether this modifier appears on buyer receipts. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): mixed { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this modifier's price is taxable. A modifier set can override this value. anyOf[1] (Value): boolean. Whether this modifier's price is taxable. A modifier set can override this value. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): mixed { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
    /** When the modifier last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When the modifier last changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
