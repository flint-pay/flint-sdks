<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $backordered_quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $base_subtotal_money
 * @property-read list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $bundle_components
 * @property-read string|null $bundle_id
 * @property-read CatalogPricingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $catalog_pricing
 * @property-read list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $categories
 * @property-read string|null $description
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount_money
 * @property-read string|null $expected_ship_date
 * @property-read list<OrderLineItemFulfillmentQuantitiesPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $fulfillment_quantities
 * @property-read OrderLineItemFulfillmentRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $fulfillment_requirements
 * @property-read GiftCardPurchaseSnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $gift_card_purchase
 * @property-read ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $image
 * @property-read LineItemInventorySnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $inventory_snapshot
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $modifier_total_money
 * @property-read list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifiers
 * @property-read string|null $name
 * @property-read string|null $order_edit_id
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $payment_link_line_item_key
 * @property-read string|null $product_id
 * @property-read string|null $product_type
 * @property-read list<PurchasedGiftCardPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $purchased_gift_cards
 * @property-read int|null $quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $refunded_money
 * @property-read int|null $refunded_quantity
 * @property-read string|null $release_date
 * @property-read int|null $removed_quantity
 * @property-read list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $selected_options
 * @property-read string|null $sku
 * @property-read SubscribedLinePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subscription
 * @property-read string|null $subscription_id
 * @property-read OrderLineSubscriptionOfferSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subscription_offer
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subtotal_money
 * @property-read OrderCalculatedLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_dimensions
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * @property-read WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_weight
 * @property-read string|null $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemPreviousAttributesInput extends Model {
    /** @param array{'backordered_quantity'?: int|null, 'base_subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'bundle_components'?: list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'bundle_id'?: string|null, 'catalog_pricing'?: CatalogPricingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'categories'?: list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'description'?: string|null, 'discount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'expected_ship_date'?: string|null, 'fulfillment_quantities'?: list<OrderLineItemFulfillmentQuantitiesPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'fulfillment_requirements'?: OrderLineItemFulfillmentRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_card_purchase'?: GiftCardPurchaseSnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'image'?: ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'inventory_snapshot'?: LineItemInventorySnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifiers'?: list<OrderLineItemModifierPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'name'?: string|null, 'order_edit_id'?: string|null, 'order_id'?: string|null, 'order_line_item_id'?: string|null, 'payment_link_line_item_key'?: string|null, 'product_id'?: string|null, 'product_type'?: string|null, 'purchased_gift_cards'?: list<PurchasedGiftCardPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'quantity'?: int|null, 'refunded_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'refunded_quantity'?: int|null, 'release_date'?: string|null, 'removed_quantity'?: int|null, 'selected_options'?: list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'sku'?: string|null, 'subscription'?: SubscribedLinePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subscription_id'?: string|null, 'subscription_offer'?: OrderLineSubscriptionOfferSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subtotal_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax'?: OrderCalculatedLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'unit_dimensions'?: DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'unit_weight'?: WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'variant_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemPreviousAttributesInput')); }
    /** Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When backordered_quantity is omitted; use hasBackorderedQuantity() or valueOrDefault().
     */
    public function getBackorderedQuantity(): mixed { return $this->get('backordered_quantity'); }
    public function hasBackorderedQuantity(): bool { return $this->has('backordered_quantity'); }
    /** Unit price multiplied by quantity, before modifiers, discounts, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): mixed { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. anyOf[1] (Value): Array of {@see BundleComponentPreviousAttributesInput}. Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. anyOf[1][] (Value): {@see BundleComponentPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<BundleComponentPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When bundle_components is omitted; use hasBundleComponents() or valueOrDefault().
     */
    public function getBundleComponents(): mixed { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): mixed { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. anyOf[1] (Value): {@see CatalogPricingPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CatalogPricingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When catalog_pricing is omitted; use hasCatalogPricing() or valueOrDefault().
     */
    public function getCatalogPricing(): mixed { return $this->get('catalog_pricing'); }
    public function hasCatalogPricing(): bool { return $this->has('catalog_pricing'); }
    /** Catalog categories of the item. anyOf[1] (Value): Array of {@see CategoryReferencePreviousAttributesInput}. Catalog categories of the item. anyOf[1][] (Value): {@see CategoryReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CategoryReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When categories is omitted; use hasCategories() or valueOrDefault().
     */
    public function getCategories(): mixed { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount value allocated to this line item. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. anyOf[1] (Value): string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When expected_ship_date is omitted; use hasExpectedShipDate() or valueOrDefault().
     */
    public function getExpectedShipDate(): mixed { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. anyOf[1] (Value): Array of {@see OrderLineItemFulfillmentQuantitiesPreviousAttributesInput}. Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. anyOf[1][] (Value): {@see OrderLineItemFulfillmentQuantitiesPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<OrderLineItemFulfillmentQuantitiesPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When fulfillment_quantities is omitted; use hasFulfillmentQuantities() or valueOrDefault().
     */
    public function getFulfillmentQuantities(): mixed { return $this->get('fulfillment_quantities'); }
    public function hasFulfillmentQuantities(): bool { return $this->has('fulfillment_quantities'); }
    /** Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. anyOf[1] (Value): {@see OrderLineItemFulfillmentRequirementsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentRequirementsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When fulfillment_requirements is omitted; use hasFulfillmentRequirements() or valueOrDefault().
     */
    public function getFulfillmentRequirements(): mixed { return $this->get('fulfillment_requirements'); }
    public function hasFulfillmentRequirements(): bool { return $this->has('fulfillment_requirements'); }
    /** Gift card details for a gift card purchase line. anyOf[1] (Value): {@see GiftCardPurchaseSnapshotPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return GiftCardPurchaseSnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When gift_card_purchase is omitted; use hasGiftCardPurchase() or valueOrDefault().
     */
    public function getGiftCardPurchase(): mixed { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Image of the item as sold. anyOf[1] (Value): {@see ImagePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ImagePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@see LineItemInventorySnapshotPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return LineItemInventorySnapshotPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When inventory_snapshot is omitted; use hasInventorySnapshot() or valueOrDefault().
     */
    public function getInventorySnapshot(): mixed { return $this->get('inventory_snapshot'); }
    public function hasInventorySnapshot(): bool { return $this->has('inventory_snapshot'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Sum of the line item's modifier totals. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
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
    /** Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The edit that added this line. Null when the line was not added by an order edit. anyOf[1] (Value): string. The edit that added this line. Null when the line was not added by an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_edit_id is omitted; use hasOrderEditId() or valueOrDefault().
     */
    public function getOrderEditId(): mixed { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** Order that owns this record or its referenced line item and charge. anyOf[1] (Value): string. Order that owns this record or its referenced line item and charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Unique identifier for this order line item, prefixed `li_`. anyOf[1] (Value): string. Unique identifier for this order line item, prefixed `li_`. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. anyOf[1] (Value): string. The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: 1. maxLength: 100. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_link_line_item_key is omitted; use hasPaymentLinkLineItemKey() or valueOrDefault().
     */
    public function getPaymentLinkLineItemKey(): mixed { return $this->get('payment_link_line_item_key'); }
    public function hasPaymentLinkLineItemKey(): bool { return $this->has('payment_link_line_item_key'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. anyOf[1] (Value): string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): mixed { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_type is omitted; use hasProductType() or valueOrDefault().
     */
    public function getProductType(): mixed { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. anyOf[1] (Value): Array of {@see PurchasedGiftCardPreviousAttributesInput}. Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. anyOf[1][] (Value): {@see PurchasedGiftCardPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PurchasedGiftCardPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When purchased_gift_cards is omitted; use hasPurchasedGiftCards() or valueOrDefault().
     */
    public function getPurchasedGiftCards(): mixed { return $this->get('purchased_gift_cards'); }
    public function hasPurchasedGiftCards(): bool { return $this->has('purchased_gift_cards'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount of this line already refunded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When refunded_quantity is omitted; use hasRefundedQuantity() or valueOrDefault().
     */
    public function getRefundedQuantity(): mixed { return $this->get('refunded_quantity'); }
    public function hasRefundedQuantity(): bool { return $this->has('refunded_quantity'); }
    /** Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. anyOf[1] (Value): string. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When release_date is omitted; use hasReleaseDate() or valueOrDefault().
     */
    public function getReleaseDate(): mixed { return $this->get('release_date'); }
    public function hasReleaseDate(): bool { return $this->has('release_date'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When removed_quantity is omitted; use hasRemovedQuantity() or valueOrDefault().
     */
    public function getRemovedQuantity(): mixed { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of {@see SelectedProductOptionPreviousAttributesInput}. Variant options selected for the item, such as size and color. anyOf[1][] (Value): {@see SelectedProductOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SelectedProductOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When selected_options is omitted; use hasSelectedOptions() or valueOrDefault().
     */
    public function getSelectedOptions(): mixed { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Recurring offer and cadence frozen for this line at signup. anyOf[1] (Value): {@see SubscribedLinePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscribedLinePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Subscription created for this line after the order is paid. anyOf[1] (Value): string. Subscription created for this line after the order is paid. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): mixed { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. anyOf[1] (Value): {@see OrderLineSubscriptionOfferSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineSubscriptionOfferSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subscription_offer is omitted; use hasSubscriptionOffer() or valueOrDefault().
     */
    public function getSubscriptionOffer(): mixed { return $this->get('subscription_offer'); }
    public function hasSubscriptionOffer(): bool { return $this->has('subscription_offer'); }
    /** Base subtotal plus modifier total, before discounts and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** How tax was calculated for this line item. anyOf[1] (Value): {@see OrderCalculatedLineItemTaxPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderCalculatedLineItemTaxPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for this line item, including any tax already included in its price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discounts, plus tax that is not already included in the price. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[1] (Value): string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. anyOf[1] (Value): {@see DimensionsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DimensionsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price of one unit before modifiers, discounts, and tax. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. anyOf[1] (Value): {@see WeightPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return WeightPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): mixed { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
