<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $backordered_quantity
 * @property-read MoneyValue $base_subtotal_money
 * @property-read list<BundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read list<CategoryReference> $categories
 * @property-read ?string $description
 * @property-read MoneyValue $discount_money
 * @property-read string|null $expected_ship_date
 * @property-read ?list<OrderLineItemFulfillmentQuantities> $fulfillment_quantities
 * @property-read ?OrderLineItemFulfillmentRequirements $fulfillment_requirements
 * @property-read ?GiftCardPurchaseSnapshot $gift_card_purchase
 * @property-read ?Image $image
 * @property-read LineItemInventorySnapshot|null $inventory_snapshot
 * @property-read MoneyValue $modifier_total_money
 * @property-read list<BuyerOrderLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read string|null $order_edit_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string|null $payment_link_line_item_key
 * @property-read ?string $product_id
 * @property-read string|null $product_type
 * @property-read list<PurchasedGiftCard> $purchased_gift_cards
 * @property-read int $quantity
 * @property-read MoneyValue $refunded_money
 * @property-read int $refunded_quantity
 * @property-read string|null $release_date
 * @property-read int $removed_quantity
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read ?SubscribedLine $subscription
 * @property-read ?string $subscription_id
 * @property-read ?OrderLineSubscriptionOfferSummary $subscription_offer
 * @property-read MoneyValue $subtotal_money
 * @property-read ?OrderCalculatedLineItemTax $tax
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read ?Dimensions $unit_dimensions
 * @property-read MoneyValue $unit_price_money
 * @property-read ?Weight $unit_weight
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerOrderLineItem extends Model {
    /** @param array{'backordered_quantity': int, 'base_subtotal_money': mixed, 'bundle_components': list<mixed>, 'bundle_id'?: string, 'categories': list<mixed>, 'description'?: string, 'discount_money': mixed, 'expected_ship_date': string|null, 'fulfillment_quantities'?: list<mixed>, 'fulfillment_requirements'?: mixed, 'gift_card_purchase'?: mixed, 'image'?: mixed, 'inventory_snapshot': mixed, 'modifier_total_money': mixed, 'modifiers': list<mixed>, 'name': string, 'order_edit_id': string|null, 'order_id': string, 'order_line_item_id': string, 'payment_link_line_item_key': string|null, 'product_id'?: string, 'product_type': string|null, 'purchased_gift_cards': list<mixed>, 'quantity': int, 'refunded_money': mixed, 'refunded_quantity': int, 'release_date': string|null, 'removed_quantity': int, 'selected_options': list<mixed>, 'sku'?: string, 'subscription'?: mixed, 'subscription_id'?: string, 'subscription_offer'?: mixed, 'subtotal_money': mixed, 'tax'?: mixed, 'tax_money': mixed, 'total_money': mixed, 'type': string, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderLineItem')); }
    /** Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     */
    public function getBackorderedQuantity(): int { return $this->get('backordered_quantity'); }
    public function hasBackorderedQuantity(): bool { return $this->has('backordered_quantity'); }
    /** Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBaseSubtotalMoney(): MoneyValue { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. [] (Value): {@see BundleComponent}. An item included in a bundle.
     * @return list<BundleComponent>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** ID of the bundle the line was sold from.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Catalog categories of the item. [] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReference>
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Description of the item as sold.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: date.
     * @return string|null
     */
    public function getExpectedShipDate(): string|null { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. [] (Value): {@see OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned, fulfilled, failed, canceled, removed, or still unassigned for fulfillment.
     * @return ?list<OrderLineItemFulfillmentQuantities>
     */
    public function getFulfillmentQuantities(): ?array { return $this->get('fulfillment_quantities'); }
    public function hasFulfillmentQuantities(): bool { return $this->has('fulfillment_quantities'); }
    /** Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.
     * @return ?OrderLineItemFulfillmentRequirements
     */
    public function getFulfillmentRequirements(): ?OrderLineItemFulfillmentRequirements { return $this->get('fulfillment_requirements'); }
    public function hasFulfillmentRequirements(): bool { return $this->has('fulfillment_requirements'); }
    /** Gift card details for a gift card purchase line. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.
     * @return ?GiftCardPurchaseSnapshot
     */
    public function getGiftCardPurchase(): ?GiftCardPurchaseSnapshot { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Image of the item as sold. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. anyOf[1] (Value): {@see LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory item quantities each unit demands. anyOf[2] (Value): null.
     * @return LineItemInventorySnapshot|null
     */
    public function getInventorySnapshot(): LineItemInventorySnapshot|null { return $this->get('inventory_snapshot'); }
    public function hasInventorySnapshot(): bool { return $this->has('inventory_snapshot'); }
    /** Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getModifierTotalMoney(): MoneyValue { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Modifiers selected on the line, with their prices. [] (Value): {@see BuyerOrderLineItemModifier}. A modifier selected on an order line item.
     * @return list<BuyerOrderLineItemModifier>
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Name of the item as sold.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The edit that added this line. Null when the line was not added by an order edit.
     * @return string|null
     */
    public function getOrderEditId(): string|null { return $this->get('order_edit_id'); }
    public function hasOrderEditId(): bool { return $this->has('order_edit_id'); }
    /** Order that owns this record or its referenced line item and charge.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Unique identifier for this order line item, prefixed `li_`.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: 1. maxLength: 100.
     * @return string|null
     */
    public function getPaymentLinkLineItemKey(): string|null { return $this->get('payment_link_line_item_key'); }
    public function hasPaymentLinkLineItemKey(): bool { return $this->has('payment_link_line_item_key'); }
    /** ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Value enum: "physical", "service", "fee", "digital", "gift_card", null.
     * @return string|null
     */
    public function getProductType(): string|null { return $this->get('product_type'); }
    public function hasProductType(): bool { return $this->has('product_type'); }
    /** Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. [] (Value): {@see PurchasedGiftCard}. A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.
     * @return list<PurchasedGiftCard>
     */
    public function getPurchasedGiftCards(): array { return $this->get('purchased_gift_cards'); }
    public function hasPurchasedGiftCards(): bool { return $this->has('purchased_gift_cards'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Amount of this line already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getRefundedQuantity(): int { return $this->get('refunded_quantity'); }
    public function hasRefundedQuantity(): bool { return $this->has('refunded_quantity'); }
    /** Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: date.
     * @return string|null
     */
    public function getReleaseDate(): string|null { return $this->get('release_date'); }
    public function hasReleaseDate(): bool { return $this->has('release_date'); }
    /** Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: int64.
     * @return int
     */
    public function getRemovedQuantity(): int { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Variant options selected for the item, such as size and color. [] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** SKU of the item as sold.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount.
     * @return ?SubscribedLine
     */
    public function getSubscription(): ?SubscribedLine { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Subscription created for this line after the order is paid.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options.
     * @return ?OrderLineSubscriptionOfferSummary
     */
    public function getSubscriptionOffer(): ?OrderLineSubscriptionOfferSummary { return $this->get('subscription_offer'); }
    public function hasSubscriptionOffer(): bool { return $this->has('subscription_offer'); }
    /** Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** How tax was calculated for this line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return ?OrderCalculatedLineItemTax
     */
    public function getTax(): ?OrderCalculatedLineItemTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Subtotal minus discounts, plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line was sold from a catalog variant, a bundle, or a custom item. Value enum: "variant", "bundle", "custom".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?Dimensions
     */
    public function getUnitDimensions(): ?Dimensions { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price of one unit before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?Weight
     */
    public function getUnitWeight(): ?Weight { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** ID of the catalog variant the item was sold from.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
