<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read ?int $default_quantity
 * @property-read ?string $line_item_tax_category
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?string $modifier_group_id
 * @property-read string $modifier_id
 * @property-read string $name
 * @property-read int $position
 * @property-read bool $selected_by_default
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read ?bool $taxable
 * @property-read ?ModifierSetUpdatedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItemUnitPriceDeltaMoney $unit_price_delta_money
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetUpdatedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItem extends Model {
    /** @param array{'created_at'?: string, 'default_quantity'?: int, 'line_item_tax_category'?: string, 'metadata'?: mixed, 'modifier_group_id'?: string, 'modifier_id': string, 'name': string, 'position': int, 'selected_by_default': bool, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'taxable'?: bool, 'unit_price_delta_money'?: mixed, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetUpdatedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItem')); }
    /** When the modifier was created, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getDefaultQuantity(): ?int { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return ?string
     */
    public function getLineItemTaxCategory(): ?string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. * (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set.
     * @return ?string
     */
    public function getModifierGroupId(): ?string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one.
     * @return string
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Name of the choice shown to buyers.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display position of the choice within its group; lower values appear first. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default.
     * @return bool
     */
    public function getSelectedByDefault(): bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Whether this modifier appears in fulfillment details.
     * @return bool
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this modifier appears on buyer receipts.
     * @return bool
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this modifier's price is taxable. A modifier set can override this value.
     * @return ?bool
     */
    public function getTaxable(): ?bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?ModifierSetUpdatedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItemUnitPriceDeltaMoney
     */
    public function getUnitPriceDeltaMoney(): ?ModifierSetUpdatedMerchantEventDataObjectModifierGroupsItemExistingModifierGroupModifiersItemUnitPriceDeltaMoney { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
    /** When the modifier last changed, as an RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
