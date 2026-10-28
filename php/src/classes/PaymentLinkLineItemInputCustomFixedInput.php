<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantity_adjustment
 * @property-read bool $allow_unit_price_adjustment
 * @property-read string $bundle_id
 * @property-read string $default_variant_id
 * @property-read string $description
 * @property-read string $key
 * @property-read int $max_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $max_unit_price_money
 * @property-read int $min_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $min_unit_price_money
 * @property-read string $name
 * @property-read int $quantity
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $suggested_unit_price_money_options
 * @property-read OrderLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read string $type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * @property-read list<string> $variant_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkLineItemInputCustomFixedInput extends Model {
    /** @param array{'allow_quantity_adjustment'?: bool, 'allow_unit_price_adjustment'?: bool, 'bundle_id'?: string, 'default_variant_id'?: string, 'description'?: string, 'key'?: string, 'max_quantity'?: int, 'max_unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'min_quantity'?: int, 'min_unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'name': string, 'quantity'?: int, 'suggested_unit_price_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'tax'?: OrderLineItemTaxInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string, 'variant_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkLineItemInputCustomFixedInput')); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When allow_quantity_adjustment is omitted; use hasAllowQuantityAdjustment() or valueOrDefault().
     */
    public function getAllowQuantityAdjustment(): bool { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Shape $ (Value): boolean.  Value enum: false.
     * @return bool
     * @throws SdkError When allow_unit_price_adjustment is omitted; use hasAllowUnitPriceAdjustment() or valueOrDefault().
     */
    public function getAllowUnitPriceAdjustment(): bool { return $this->get('allow_unit_price_adjustment'); }
    public function hasAllowUnitPriceAdjustment(): bool { return $this->has('allow_unit_price_adjustment'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string. Variant selected when the page opens and used at resolve when the buyer omits a selection. Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When default_variant_id is omitted; use hasDefaultVariantId() or valueOrDefault().
     */
    public function getDefaultVariantId(): string { return $this->get('default_variant_id'); }
    public function hasDefaultVariantId(): bool { return $this->has('default_variant_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When max_unit_price_money is omitted; use hasMaxUnitPriceMoney() or valueOrDefault().
     */
    public function getMaxUnitPriceMoney(): mixed { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When min_unit_price_money is omitted; use hasMinUnitPriceMoney() or valueOrDefault().
     */
    public function getMinUnitPriceMoney(): mixed { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When suggested_unit_price_money_options is omitted; use hasSuggestedUnitPriceMoneyOptions() or valueOrDefault().
     */
    public function getSuggestedUnitPriceMoneyOptions(): array { return $this->get('suggested_unit_price_money_options'); }
    public function hasSuggestedUnitPriceMoneyOptions(): bool { return $this->has('suggested_unit_price_money_options'); }
    /** Shape $ (Value): {@see OrderLineItemTaxInput}. A line item's tax category and whether it is taxable.
     * @return OrderLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): string.  Value enum: "custom_fixed".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Shape $ (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active, sellable variants of one product in one currency. Available only on standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     * @throws SdkError When variant_ids is omitted; use hasVariantIds() or valueOrDefault().
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
}
