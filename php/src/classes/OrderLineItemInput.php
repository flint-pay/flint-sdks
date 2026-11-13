<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $backordered_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $base_subtotal_money
 * @property-read list<BundleComponentInput|array<array-key, mixed>|\stdClass> $bundle_components
 * @property-read string $bundle_id
 * @property-read CatalogPricingInput|array<array-key, mixed>|\stdClass $catalog_pricing
 * @property-read list<CategoryReferenceInput|array<array-key, mixed>|\stdClass> $categories
 * @property-read string $description
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read string|null $expected_ship_date
 * @property-read list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass> $fulfillment_quantities
 * @property-read OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass $fulfillment_requirements
 * @property-read GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass $gift_card_purchase
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $image
 * @property-read array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null $inventory_snapshot
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $modifier_total_money
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string|null $order_edit_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string|null $payment_link_line_item_key
 * @property-read string $product_id
 * @property-read list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass> $purchased_gift_cards
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * @property-read int $refunded_quantity
 * @property-read string|null $release_date
 * @property-read int $removed_quantity
 * @property-read list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass> $selected_options
 * @property-read string $sku
 * @property-read SubscribedLineInput|array<array-key, mixed>|\stdClass $subscription
 * @property-read string $subscription_id
 * @property-read OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass $subscription_offer
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * @property-read OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string $type
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $unit_weight
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemInput extends Model {
    /** @param array{'backordered_quantity': int, 'base_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'bundle_components': list<BundleComponentInput|array<array-key, mixed>|\stdClass>, 'bundle_id'?: string, 'catalog_pricing'?: CatalogPricingInput|array<array-key, mixed>|\stdClass, 'categories': list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>, 'description'?: string, 'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_ship_date': string|null, 'fulfillment_quantities'?: list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass>, 'fulfillment_requirements'?: OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass, 'gift_card_purchase'?: GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass, 'image'?: ImageInput|array<array-key, mixed>|\stdClass, 'inventory_snapshot': array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifier_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'modifiers': list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'order_edit_id': string|null, 'order_id': string, 'order_line_item_id': string, 'payment_link_line_item_key': string|null, 'product_id'?: string, 'purchased_gift_cards': list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refunded_quantity': int, 'release_date': string|null, 'removed_quantity': int, 'selected_options': list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>, 'sku'?: string, 'subscription'?: SubscribedLineInput|array<array-key, mixed>|\stdClass, 'subscription_id'?: string, 'subscription_offer'?: OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'tax'?: OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemInput')); }
    /** Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When backordered_quantity is omitted; use hasBackorderedQuantity() or valueOrDefault().
     */
    public function getBackorderedQuantity(): int { return $this->get('backordered_quantity'); }
    public function hasBackorderedQuantity(): bool { return $this->has('backordered_quantity'); }
    /** Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. [] (Value): {@see BundleComponentInput}. An item included in a bundle.
     * @return list<BundleComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. The source of a catalog variant line's selected net unit price.
     * @return CatalogPricingInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When catalog_pricing is omitted; use hasCatalogPricing() or valueOrDefault().
     */
    public function getCatalogPricing(): mixed { return $this->get('catalog_pricing'); }
    public function hasCatalogPricing(): bool { return $this->has('catalog_pricing'); }
    /** Catalog categories of the item. [] (Value): {@see CategoryReferenceInput}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReferenceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item as sold.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: date. Example: "2026-08-02".
     * @return string|null
     * @throws SdkError When expected_ship_date is omitted; use hasExpectedShipDate() or valueOrDefault().
     */
    public function getExpectedShipDate(): string|null { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. [] (Value): {@see OrderLineItemFulfillmentQuantitiesInput}. Counts of how much of an order line item is assigned, fulfilled, failed, canceled, removed, or still unassigned for fulfillment.
     * @return list<OrderLineItemFulfillmentQuantitiesInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillment_quantities is omitted; use hasFulfillmentQuantities() or valueOrDefault().
     */
    public function getFulfillmentQuantities(): array { return $this->get('fulfillment_quantities'); }
    public function hasFulfillmentQuantities(): bool { return $this->has('fulfillment_quantities'); }
    /** Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.
     * @return OrderLineItemFulfillmentRequirementsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment_requirements is omitted; use hasFulfillmentRequirements() or valueOrDefault().
     */
    public function getFulfillmentRequirements(): mixed { return $this->get('fulfillment_requirements'); }
    public function hasFulfillmentRequirements(): bool { return $this->has('fulfillment_requirements'); }
    /** Gift card details for a gift card purchase line. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.
     * @return GiftCardPurchaseSnapshotInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_purchase is omitted; use hasGiftCardPurchase() or valueOrDefault().
     */
    public function getGiftCardPurchase(): mixed { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Image of the item as sold. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@see LineItemInventorySnapshotInput}. Whether an order line item tracks inventory, and the inventory item quantities each unit demands. anyOf[2] (Value): null.
     * @return array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object|null
     * @throws SdkError When inventory_snapshot is omitted; use hasInventorySnapshot() or valueOrDefault().
     */
    public function getInventorySnapshot(): mixed { return $this->get('inventory_snapshot'); }
    public function hasInventorySnapshot(): bool { return $this->has('inventory_snapshot'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When modifier_total_money is omitted; use hasModifierTotalMoney() or valueOrDefault().
     */
    public function getModifierTotalMoney(): mixed { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Modifiers selected on the line, with their prices. [] (Value): {@see OrderLineItemModifierInput}. A modifier selected on an order line item.
     * @return list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item as sold.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The edit that added this line. Null when the line was not added by an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     * @return string|null
     * @throws SdkError When order_edit_id is omitted; use hasOrderEditId() or valueOrDefault().
     */
    public function getOrderEditId(): string|null { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** Order that owns this record or its referenced line item and charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Unique identifier for this order line item, prefixed `li_`. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When payment_link_line_item_key is omitted; use hasPaymentLinkLineItemKey() or valueOrDefault().
     */
    public function getPaymentLinkLineItemKey(): string|null { return $this->get('payment_link_line_item_key'); }
    public function hasPaymentLinkLineItemKey(): bool { return $this->has('payment_link_line_item_key'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. [] (Value): {@see PurchasedGiftCardInput}. A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.
     * @return list<PurchasedGiftCardInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When purchased_gift_cards is omitted; use hasPurchasedGiftCards() or valueOrDefault().
     */
    public function getPurchasedGiftCards(): array { return $this->get('purchased_gift_cards'); }
    public function hasPurchasedGiftCards(): bool { return $this->has('purchased_gift_cards'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount of this line already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When refunded_quantity is omitted; use hasRefundedQuantity() or valueOrDefault().
     */
    public function getRefundedQuantity(): int { return $this->get('refunded_quantity'); }
    public function hasRefundedQuantity(): bool { return $this->has('refunded_quantity'); }
    /** Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: date. Example: "2026-08-02".
     * @return string|null
     * @throws SdkError When release_date is omitted; use hasReleaseDate() or valueOrDefault().
     */
    public function getReleaseDate(): string|null { return $this->get('release_date'); }
    public function hasReleaseDate(): bool { return $this->has('release_date'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: int64.
     * @return int
     * @throws SdkError When removed_quantity is omitted; use hasRemovedQuantity() or valueOrDefault().
     */
    public function getRemovedQuantity(): int { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Variant options selected for the item, such as size and color. [] (Value): {@see SelectedProductOptionInput}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount.
     * @return SubscribedLineInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Subscription created for this line after the order is paid. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options.
     * @return OrderLineSubscriptionOfferSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_offer is omitted; use hasSubscriptionOffer() or valueOrDefault().
     */
    public function getSubscriptionOffer(): mixed { return $this->get('subscription_offer'); }
    public function hasSubscriptionOffer(): bool { return $this->has('subscription_offer'); }
    /** Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** How tax was calculated for this line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discounts, plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price of one unit before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
