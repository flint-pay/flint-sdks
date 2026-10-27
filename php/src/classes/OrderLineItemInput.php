<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $base_subtotal_money
 * @property-read list<BundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read list<CategoryReferenceInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass> $fulfillment_quantities
 * @property-read OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass $fulfillment_requirements
 * @property-read GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass $gift_card_purchase
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null $inventory_snapshot
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $modifier_total_money
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read string $product_id
 * @property-read list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass> $purchased_gift_cards
 * @property-read string $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read string $refunded_quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read string $source_type
 * @property-read SubscribedLineInput|array<array-key, mixed>|\stdClass $subscription
 * @property-read string $subscription_id
 * @property-read OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass $subscription_offer
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $unit_weight
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemInput extends Model {
    /** @param array{'base_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'bundle_components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'fulfillment_quantities'?: list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass>, 'fulfillment_requirements'?: OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass, 'gift_card_purchase'?: GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inventory_snapshot': array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null, 'metadata'?: array<array-key, string>|\stdClass, 'modifier_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'modifiers': list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'purchased_gift_cards': list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass>, 'quantity': string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refunded_quantity': string, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'source_type'?: string, 'subscription'?: SubscribedLineInput|array<array-key, mixed>|\stdClass, 'subscription_id'?: string, 'subscription_offer'?: OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax'?: OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Shape $ (Value): Array of {@see BundleComponentInput}. Shape $[] (Value): {@see BundleComponentInput}. An item included in a bundle.
     * @return list<BundleComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of {@see CategoryReferenceInput}. Shape $[] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): Array of {@see OrderLineItemFulfillmentQuantitiesInput}. Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. Shape $[] (Value): {@see OrderLineItemFulfillmentQuantitiesInput}. Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still unassigned for fulfillment.
     * @return list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillment_quantities is omitted; use hasFulfillmentQuantities() or valueOrDefault().
     */
    public function getFulfillmentQuantities(): array { return $this->get('fulfillment_quantities'); }
    public function hasFulfillmentQuantities(): bool { return $this->has('fulfillment_quantities'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentRequirementsInput}. Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.
     * @return OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment_requirements is omitted; use hasFulfillmentRequirements() or valueOrDefault().
     */
    public function getFulfillmentRequirements(): mixed { return $this->get('fulfillment_requirements'); }
    public function hasFulfillmentRequirements(): bool { return $this->has('fulfillment_requirements'); }
    /** Shape $ (Value): {@see GiftCardPurchaseSnapshotInput}. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.
     * @return GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_purchase is omitted; use hasGiftCardPurchase() or valueOrDefault().
     */
    public function getGiftCardPurchase(): mixed { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Shape $ (Value): {@see ImageInput}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): {@see LineItemInventorySnapshotInput} or null. Shape $.anyOf[1] (Value): {@see LineItemInventorySnapshotInput}. Whether an order line item tracks inventory, and the inventory item quantities each unit demands. Shape $.anyOf[2] (Value): null.
     * @return array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null
     * @throws SdkError When inventory_snapshot is omitted; use hasInventorySnapshot() or valueOrDefault().
     */
    public function getInventorySnapshot(): mixed { return $this->get('inventory_snapshot'); }
    public function hasInventorySnapshot(): bool { return $this->has('inventory_snapshot'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When modifier_total_money is omitted; use hasModifierTotalMoney() or valueOrDefault().
     */
    public function getModifierTotalMoney(): mixed { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifierInput}. Shape $[] (Value): {@see OrderLineItemModifierInput}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): Array of {@see PurchasedGiftCardInput}. Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. Shape $[] (Value): {@see PurchasedGiftCardInput}. A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.
     * @return list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When purchased_gift_cards is omitted; use hasPurchasedGiftCards() or valueOrDefault().
     */
    public function getPurchasedGiftCards(): array { return $this->get('purchased_gift_cards'); }
    public function hasPurchasedGiftCards(): bool { return $this->has('purchased_gift_cards'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When refunded_quantity is omitted; use hasRefundedQuantity() or valueOrDefault().
     */
    public function getRefundedQuantity(): string { return $this->get('refunded_quantity'); }
    public function hasRefundedQuantity(): bool { return $this->has('refunded_quantity'); }
    /** Shape $ (Value): Array of {@see SelectedProductOptionInput}. Shape $[] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle".
     * @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): {@see SubscribedLineInput}. Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount.
     * @return SubscribedLineInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Shape $ (Value): string. Subscription created for this line after the order is paid.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): {@see OrderLineSubscriptionOfferSummaryInput}. Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options.
     * @return OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_offer is omitted; use hasSubscriptionOffer() or valueOrDefault().
     */
    public function getSubscriptionOffer(): mixed { return $this->get('subscription_offer'); }
    public function hasSubscriptionOffer(): bool { return $this->has('subscription_offer'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see OrderCalculatedLineItemTaxInput}. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see SignedMoneyInput}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see DimensionsInput}. Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): {@see WeightInput}. Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
