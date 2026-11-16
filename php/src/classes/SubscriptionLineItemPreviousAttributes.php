<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantity_adjustment
 * @property-read mixed $base_subtotal_money
 * @property-read list<BundleComponentPreviousAttributes>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributes>|null $categories
 * @property-read string|null $description
 * @property-read mixed $image
 * @property-read int|null $max_quantity
 * @property-read int|null $min_quantity
 * @property-read mixed $modifier_total_money
 * @property-read list<OrderLineItemModifierPreviousAttributes>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read list<SelectedProductOptionPreviousAttributes>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read string|null $subscription_offer_id
 * @property-read string|null $subscription_plan_line_item_id
 * @property-read mixed $subtotal_money
 * @property-read string|null $type
 * @property-read mixed $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionLineItemPreviousAttributes extends Model {
    /** @param array{'allow_quantity_adjustment'?: mixed, 'base_subtotal_money'?: mixed, 'bundle_components'?: mixed, 'bundle_id'?: mixed, 'categories'?: mixed, 'description'?: mixed, 'image'?: mixed, 'max_quantity'?: mixed, 'min_quantity'?: mixed, 'modifier_total_money'?: mixed, 'modifiers'?: mixed, 'name'?: mixed, 'product_id'?: mixed, 'quantity'?: mixed, 'selected_options'?: mixed, 'sku'?: mixed, 'subscription_id'?: mixed, 'subscription_line_item_id'?: mixed, 'subscription_offer_id'?: mixed, 'subscription_plan_line_item_id'?: mixed, 'subtotal_money'?: mixed, 'type'?: mixed, 'unit_price_money'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionLineItemPreviousAttributes')); }
    /** Whether the frozen terms allow the buyer to adjust this line quantity. anyOf[1] (Value): boolean. Whether the frozen terms allow the buyer to adjust this line quantity. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAllowQuantityAdjustment(): bool|null { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Components of a bundle line, recorded when the line joined the subscription. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributes}. Components of a bundle line, recorded when the line joined the subscription. anyOf[1][] (Value): {@see BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributes>|null
     */
    public function getBundleComponents(): array|null { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line bills. Present on `bundle` lines. anyOf[1] (Value): string. ID of the bundle the line bills. Present on `bundle` lines. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleId(): string|null { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item, recorded when the line joined the subscription. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributes}. Catalog categories of the item, recorded when the line joined the subscription. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributes>|null
     */
    public function getCategories(): array|null { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. anyOf[1] (Value): string. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Image of the item, recorded when the line joined the subscription. anyOf[1] (Value): {@see ImagePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxQuantity(): int|null { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinQuantity(): int|null { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Sum of the line's modifier totals. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getModifierTotalMoney(): mixed { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Modifiers selected on the line, with their prices. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributes}. Modifiers selected on the line, with their prices. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributes>|null
     */
    public function getModifiers(): array|null { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. anyOf[1] (Value): string. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributes>|null
     */
    public function getSelectedOptions(): array|null { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. anyOf[1] (Value): string. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subscription that owns this line, including frozen lines in a scheduled plan change. anyOf[1] (Value): string. Subscription that owns this line, including frozen lines in a scheduled plan change. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Unique identifier for this subscription line item, prefixed `sli_`. anyOf[1] (Value): string. Unique identifier for this subscription line item, prefixed `sli_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionLineItemId(): string|null { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. anyOf[1] (Value): string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionOfferId(): string|null { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. anyOf[1] (Value): string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanLineItemId(): string|null { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Base subtotal plus modifier total, before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. anyOf[1] (Value): string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
