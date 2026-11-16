<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantity_adjustment
 * @property-read MoneyValue $base_subtotal_money
 * @property-read ?string $bundle_id
 * @property-read ?list<CategoryReference> $categories
 * @property-read ?string $description
 * @property-read ?Image $image
 * @property-read ?int $max_quantity
 * @property-read ?int $min_quantity
 * @property-read MoneyValue $modifier_total_money
 * @property-read ?list<BuyerOrderLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read ?string $product_id
 * @property-read int $quantity
 * @property-read ?list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read string $subscription_id
 * @property-read ?string $subscription_line_item_id
 * @property-read ?string $subscription_offer_id
 * @property-read ?string $subscription_plan_line_item_id
 * @property-read MoneyValue $subtotal_money
 * @property-read string $type
 * @property-read MoneyValue $unit_price_money
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionLineItem extends Model {
    /** @param array{'allow_quantity_adjustment': bool, 'base_subtotal_money': mixed, 'bundle_id'?: string, 'categories'?: list<mixed>, 'description'?: string, 'image'?: mixed, 'max_quantity'?: int, 'min_quantity'?: int, 'modifier_total_money': mixed, 'modifiers'?: list<mixed>, 'name': string, 'product_id'?: string, 'quantity': int, 'selected_options'?: list<mixed>, 'sku'?: string, 'subscription_id': string, 'subscription_line_item_id'?: string, 'subscription_offer_id'?: string, 'subscription_plan_line_item_id'?: string, 'subtotal_money': mixed, 'type': string, 'unit_price_money': mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionLineItem')); }
    /** Whether the frozen terms allow the buyer to adjust this line quantity.
     * @return bool
     */
    public function getAllowQuantityAdjustment(): bool { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBaseSubtotalMoney(): MoneyValue { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** ID of the bundle the line bills. Present on `bundle` lines.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item, recorded when the line joined the subscription. [] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return ?list<CategoryReference>
     */
    public function getCategories(): ?array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item, recorded when the line joined the subscription. Omitted when none was recorded.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Image of the item, recorded when the line joined the subscription. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * @return ?int
     */
    public function getMaxQuantity(): ?int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * @return ?int
     */
    public function getMinQuantity(): ?int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Sum of the line's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getModifierTotalMoney(): MoneyValue { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Modifiers selected on the line, with their prices. [] (Value): {@see BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     * @return ?list<BuyerOrderLineItemModifier>
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Variant options selected for the item, such as size and color. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return ?list<SelectedProductOption>
     */
    public function getSelectedOptions(): ?array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item, recorded when the line joined the subscription. Omitted when the item has none.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subscription that owns this line, including frozen lines in a scheduled plan change.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Unique identifier for this subscription line item, prefixed `sli_`.
     * @return ?string
     */
    public function getSubscriptionLineItemId(): ?string { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly.
     * @return ?string
     */
    public function getSubscriptionOfferId(): ?string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly.
     * @return ?string
     */
    public function getSubscriptionPlanLineItemId(): ?string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
