<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read list<mixed> $modifiers
 * @property-read string $name
 * @property-read int $quantity
 * @property-read string $subscription_plan_line_item_id
 * @property-read list<string> $swap_variant_ids
 * @property-read OrderLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateSubscriptionPlanLineItemRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSubscriptionPlanLineItemRequestInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifierRequestInput}. Shape $[] (Value): {@see OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional): Map of string. Shape $[].metadata.* (Value): string. minLength: 1. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: 1. Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity (Optional): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $[].text (Optional): {@see TextModifierRequestInput}. Text a buyer entered for a text modifier group on an order line item. Shape $[].oneOf[1] (Value): any. Shape $[].oneOf[2] (Value): any.
     * @return list<mixed>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs from other plans are rejected. minLength: 1.
     * @return string
     * @throws SdkError When subscription_plan_line_item_id is omitted; use hasSubscriptionPlanLineItemId() or valueOrDefault().
     */
    public function getSubscriptionPlanLineItemId(): string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     * @throws SdkError When swap_variant_ids is omitted; use hasSwapVariantIds() or valueOrDefault().
     */
    public function getSwapVariantIds(): array { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** Shape $ (Value): {@see OrderLineItemTaxInput}. A line item's tax category and whether it is taxable.
     * @return OrderLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
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
}
