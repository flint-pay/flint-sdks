<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantity_adjustment
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $base_subtotal_money
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $categories
 * @property-read string|null $description
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read int|null $max_quantity
 * @property-read int|null $min_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $modifier_total_money
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read int|null $quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read string|null $subscription_offer_id
 * @property-read string|null $subscription_plan_line_item_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionLineItemPreviousAttributesInput extends Model {
    /** @param array{'allow_quantity_adjustment'?: bool|null, 'base_subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'bundle_components'?: list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'bundle_id'?: string|null, 'categories'?: list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'description'?: string|null, 'image'?: ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'max_quantity'?: int|null, 'min_quantity'?: int|null, 'modifier_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'product_id'?: string|null, 'quantity'?: int|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'subscription_id'?: string|null, 'subscription_line_item_id'?: string|null, 'subscription_offer_id'?: string|null, 'subscription_plan_line_item_id'?: string|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionLineItemPreviousAttributesInput')); }
    /** Whether the frozen terms allow the buyer to adjust this line quantity. anyOf[1] (Value): boolean. Whether the frozen terms allow the buyer to adjust this line quantity. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When allow_quantity_adjustment is omitted; use hasAllowQuantityAdjustment() or valueOrDefault().
     */
    public function getAllowQuantityAdjustment(): mixed { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Unit price multiplied by this line's `quantity`, before modifiers, discounts, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Components of a bundle line, recorded when the line joined the subscription. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributesInput}. Components of a bundle line, recorded when the line joined the subscription. anyOf[1][] (Value): {@see BundleComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): mixed { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line bills. Present on `bundle` lines. anyOf[1] (Value): string. ID of the bundle the line bills. Present on `bundle` lines. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item, recorded when the line joined the subscription. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributesInput}. Catalog categories of the item, recorded when the line joined the subscription. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): mixed { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. anyOf[1] (Value): string. Description of the item, recorded when the line joined the subscription. Omitted when none was recorded. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Image of the item, recorded when the line joined the subscription. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): mixed { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): mixed { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** Sum of the line's modifier totals. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When modifier_total_money is omitted; use hasModifierTotalMoney() or valueOrDefault().
     */
    public function getModifierTotalMoney(): mixed { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Modifiers selected on the line, with their prices. anyOf[1] (Value): Array of {@see OrderLineItemModifierPreviousAttributesInput}. Modifiers selected on the line, with their prices. anyOf[1][] (Value): {@see OrderLineItemModifierPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): mixed { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. anyOf[1] (Value): string. Name of the item, recorded when the line joined the subscription. Later catalog edits don't change it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
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
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. anyOf[1] (Value): string. SKU of the item, recorded when the line joined the subscription. Omitted when the item has none. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Subscription that owns this line, including frozen lines in a scheduled plan change. anyOf[1] (Value): string. Subscription that owns this line, including frozen lines in a scheduled plan change. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): mixed { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Unique identifier for this subscription line item, prefixed `sli_`. anyOf[1] (Value): string. Unique identifier for this subscription line item, prefixed `sli_`. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_line_item_id is omitted; use hasSubscriptionLineItemId() or valueOrDefault().
     */
    public function getSubscriptionLineItemId(): mixed { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. anyOf[1] (Value): string. ID of the subscription offer the line was bought under. Absent on plan-based subscriptions and on lines added to the subscription directly. Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): mixed { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. anyOf[1] (Value): string. ID of the subscription plan line this line was copied from. A variant swap keeps it. Absent on offer-based subscriptions and on lines added to the subscription directly. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_line_item_id is omitted; use hasSubscriptionPlanLineItemId() or valueOrDefault().
     */
    public function getSubscriptionPlanLineItemId(): mixed { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** Base subtotal plus modifier total, before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one unit before modifiers, discounts, and tax. A plan line keeps the price its plan set. A line added or swapped takes the variant's catalog price for the subscription's customer at that time, and keeps it until the line changes again. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. anyOf[1] (Value): string. ID of the catalog variant the line bills. Present on `variant` lines; a variant swap replaces it. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
