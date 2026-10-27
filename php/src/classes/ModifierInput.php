<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $default_quantity
 * @property-read string $line_item_tax_category
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $modifier_group_id
 * @property-read string $modifier_id
 * @property-read string $name
 * @property-read int $position
 * @property-read bool $selected_by_default
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_delta_money
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'default_quantity'?: string, 'line_item_tax_category'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_group_id'?: string, 'modifier_id': string, 'name': string, 'position': int, 'selected_by_default': bool, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'status': string, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierInput')); }
    /** Shape $ (Value): string. When the modifier was created, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When default_quantity is omitted; use hasDefaultQuantity() or valueOrDefault().
     */
    public function getDefaultQuantity(): string { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Shape $ (Value): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Identifier of the group that owns this modifier. For an inline group, read the group through its modifier set.
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string. Stable identifier of the modifier. In a replacement request, include it to retain a modifier or omit it to create one.
     * @return string
     * @throws SdkError When modifier_id is omitted; use hasModifierId() or valueOrDefault().
     */
    public function getModifierId(): string { return $this->get('modifier_id'); }
    public function hasModifierId(): bool { return $this->has('modifier_id'); }
    /** Shape $ (Value): string. Name of the choice shown to buyers.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Display position of the choice within its group; lower values appear first. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default.
     * @return bool
     * @throws SdkError When selected_by_default is omitted; use hasSelectedByDefault() or valueOrDefault().
     */
    public function getSelectedByDefault(): bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details.
     * @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts.
     * @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can override this value.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
    /** Shape $ (Value): string. When the modifier last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
