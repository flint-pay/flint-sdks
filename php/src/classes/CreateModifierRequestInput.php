<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $default_quantity
 * @property-read string $line_item_tax_category
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $position
 * @property-read bool $selected_by_default
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $status
 * @property-read bool $taxable
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_delta_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateModifierRequestInput extends Model {
    /** @param array{'default_quantity'?: int, 'line_item_tax_category'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'position'?: int, 'selected_by_default'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'taxable'?: bool, 'unit_price_delta_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateModifierRequestInput')); }
    /** Whole-number quantity selected by default. Used only when the choice is available and selected_by_default is true. A modifier set can override this value; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When default_quantity is omitted; use hasDefaultQuantity() or valueOrDefault().
     */
    public function getDefaultQuantity(): int { return $this->get('default_quantity'); }
    public function hasDefaultQuantity(): bool { return $this->has('default_quantity'); }
    /** Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     * @return string
     * @throws SdkError When line_item_tax_category is omitted; use hasLineItemTaxCategory() or valueOrDefault().
     */
    public function getLineItemTaxCategory(): string { return $this->get('line_item_tax_category'); }
    public function hasLineItemTaxCategory(): bool { return $this->has('line_item_tax_category'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Display position of the choice within its group; lower values appear first. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whether this choice is selected when the buyer has not supplied selections for the group. A modifier set can override this value; unavailable choices are never selected by default. Default: false.
     * @return bool
     * @throws SdkError When selected_by_default is omitted; use hasSelectedByDefault() or valueOrDefault().
     */
    public function getSelectedByDefault(): bool { return $this->get('selected_by_default'); }
    public function hasSelectedByDefault(): bool { return $this->has('selected_by_default'); }
    /** Whether this modifier appears in fulfillment details.
     * @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Whether this modifier appears on buyer receipts.
     * @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether this modifier's price is taxable. A modifier set can override this value.
     * @return bool
     * @throws SdkError When taxable is omitted; use hasTaxable() or valueOrDefault().
     */
    public function getTaxable(): bool { return $this->get('taxable'); }
    public function hasTaxable(): bool { return $this->has('taxable'); }
    /** Amount added to the item's unit price for each unit of this modifier. A modifier set can override this value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_delta_money is omitted; use hasUnitPriceDeltaMoney() or valueOrDefault().
     */
    public function getUnitPriceDeltaMoney(): mixed { return $this->get('unit_price_delta_money'); }
    public function hasUnitPriceDeltaMoney(): bool { return $this->has('unit_price_delta_money'); }
}
