<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantity_adjustment
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $categories
 * @property-read string|null $description
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read int|null $max_quantity
 * @property-read int|null $min_quantity
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $subscription_plan_line_item_id
 * @property-read list<string>|null $swap_variant_ids
 * @property-read list<SubscriptionPlanSwapVariantPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $swap_variants
 * @property-read OrderLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlanLineItemPreviousAttributesInput extends Model {
    /** @param SubscriptionPlanLineItemVariantPreviousAttributesInput|array<array-key, mixed>|\stdClass|SubscriptionPlanLineItemBundlePreviousAttributesInput|array<array-key, mixed>|\stdClass|SubscriptionPlanLineItemCustomPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanLineItemPreviousAttributesInput')); }
    /** Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. anyOf[1] (Value): boolean. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: false. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When allow_quantity_adjustment is omitted; use hasAllowQuantityAdjustment() or valueOrDefault().
     */
    public function getAllowQuantityAdjustment(): mixed { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributesInput}. Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. anyOf[1][] (Value): {@see BundleComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): mixed { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the catalog bundle the line sells. Present on a bundle line. anyOf[1] (Value): string. ID of the catalog bundle the line sells. Present on a bundle line. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributesInput}. Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): mixed { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. anyOf[1] (Value): string. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. Default: 9999. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): mixed { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. Default: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): mixed { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributesInput}. Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. anyOf[1] (Value): string. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. anyOf[1] (Value): string. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Unique identifier for this subscription plan line item, prefixed `spli_`. anyOf[1] (Value): string. Unique identifier for this subscription plan line item, prefixed `spli_`. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_line_item_id is omitted; use hasSubscriptionPlanLineItemId() or valueOrDefault().
     */
    public function getSubscriptionPlanLineItemId(): mixed { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. anyOf[1] (Value): Array of string. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: 25. uniqueItems: true. anyOf[1][] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When swap_variant_ids is omitted; use hasSwapVariantIds() or valueOrDefault().
     */
    public function getSwapVariantIds(): mixed { return $this->get('swap_variant_ids'); }
    public function hasSwapVariantIds(): bool { return $this->has('swap_variant_ids'); }
    /** Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. anyOf[1] (Value): Array of {@see SubscriptionPlanSwapVariantPreviousAttributesInput}. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: 25. anyOf[1][] (Value): {@see SubscriptionPlanSwapVariantPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionPlanSwapVariantPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When swap_variants is omitted; use hasSwapVariants() or valueOrDefault().
     */
    public function getSwapVariants(): mixed { return $this->get('swap_variants'); }
    public function hasSwapVariants(): bool { return $this->has('swap_variants'); }
    /** How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. anyOf[1] (Value): {@see OrderLineItemTaxPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the catalog variant the line sells. Present on a variant line. anyOf[1] (Value): string. ID of the catalog variant the line sells. Present on a variant line. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
