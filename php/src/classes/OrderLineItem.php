<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $base_subtotal_money
 * @property-read list<BundleComponent> $bundle_components
 * @property-read ?string $bundle_id
 * @property-read list<CategoryReference> $categories
 * @property-read ?string $description
 * @property-read MoneyValue $discount_money
 * @property-read ?list<OrderLineItemFulfillmentQuantities> $fulfillment_quantities
 * @property-read ?OrderLineItemFulfillmentRequirements $fulfillment_requirements
 * @property-read ?GiftCardPurchaseSnapshot $gift_card_purchase
 * @property-read ?Image $image
 * @property-read LineItemInventorySnapshot|null $inventory_snapshot
 * @property-read ?array<array-key, string> $metadata
 * @property-read MoneyValue $modifier_total_money
 * @property-read list<OrderLineItemModifier> $modifiers
 * @property-read string $name
 * @property-read string $order_line_item_id
 * @property-read ?string $product_id
 * @property-read list<PurchasedGiftCard> $purchased_gift_cards
 * @property-read string $quantity
 * @property-read MoneyValue $refunded_money
 * @property-read string $refunded_quantity
 * @property-read list<SelectedProductOption> $selected_options
 * @property-read ?string $sku
 * @property-read ?string $source_type
 * @property-read ?SubscribedLine $subscription
 * @property-read ?string $subscription_id
 * @property-read ?OrderLineSubscriptionOfferSummary $subscription_offer
 * @property-read MoneyValue $subtotal_money
 * @property-read ?OrderCalculatedLineItemTax $tax
 * @property-read MoneyValue $tax_money
 * @property-read SignedMoney $total_money
 * @property-read ?Dimensions $unit_dimensions
 * @property-read MoneyValue $unit_price_money
 * @property-read ?Weight $unit_weight
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItem extends Model {
    /** @param array{'base_subtotal_money': mixed, 'bundle_components': list<mixed>, 'bundle_id'?: string, 'categories': list<mixed>, 'description'?: string, 'discount_money': mixed, 'fulfillment_quantities'?: list<mixed>, 'fulfillment_requirements'?: mixed, 'gift_card_purchase'?: mixed, 'image'?: mixed, 'inventory_snapshot': mixed, 'metadata'?: \stdClass, 'modifier_total_money': mixed, 'modifiers': list<mixed>, 'name': string, 'order_line_item_id': string, 'product_id'?: string, 'purchased_gift_cards': list<mixed>, 'quantity': string, 'refunded_money': mixed, 'refunded_quantity': string, 'selected_options': list<mixed>, 'sku'?: string, 'source_type'?: string, 'subscription'?: mixed, 'subscription_id'?: string, 'subscription_offer'?: mixed, 'subtotal_money': mixed, 'tax'?: mixed, 'tax_money': mixed, 'total_money': mixed, 'unit_dimensions'?: mixed, 'unit_price_money': mixed, 'unit_weight'?: mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItem')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getBaseSubtotalMoney(): MoneyValue { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** Shape $ (Value): Array of {@see BundleComponent}. Shape $[] (Value): {@see BundleComponent}. An item included in a bundle.
     * @return list<BundleComponent>
     */
    public function getBundleComponents(): array { return $this->get('bundle_components'); }
    public function hasBundleComponents(): bool { return $this->has('bundle_components'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of {@see CategoryReference}. Shape $[] (Value): {@see CategoryReference}. A reference to a product category by ID, handle, and name.
     * @return list<CategoryReference>
     */
    public function getCategories(): array { return $this->get('categories'); }
    public function hasCategories(): bool { return $this->has('categories'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Shape $ (Value): Array of {@see OrderLineItemFulfillmentQuantities}. Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. Shape $[] (Value): {@see OrderLineItemFulfillmentQuantities}. Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still unassigned for fulfillment.
     * @return ?list<OrderLineItemFulfillmentQuantities>
     */
    public function getFulfillmentQuantities(): ?array { return $this->get('fulfillment_quantities'); }
    public function hasFulfillmentQuantities(): bool { return $this->has('fulfillment_quantities'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentRequirements}. Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle.
     * @return ?OrderLineItemFulfillmentRequirements
     */
    public function getFulfillmentRequirements(): ?OrderLineItemFulfillmentRequirements { return $this->get('fulfillment_requirements'); }
    public function hasFulfillmentRequirements(): bool { return $this->has('fulfillment_requirements'); }
    /** Shape $ (Value): {@see GiftCardPurchaseSnapshot}. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient.
     * @return ?GiftCardPurchaseSnapshot
     */
    public function getGiftCardPurchase(): ?GiftCardPurchaseSnapshot { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Shape $ (Value): {@see Image}. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): {@see LineItemInventorySnapshot} or null. Shape $.anyOf[1] (Value): {@see LineItemInventorySnapshot}. Whether an order line item tracks inventory, and the inventory item quantities each unit demands. Shape $.anyOf[2] (Value): null.
     * @return LineItemInventorySnapshot|null
     */
    public function getInventorySnapshot(): LineItemInventorySnapshot|null { return $this->get('inventory_snapshot'); }
    public function hasInventorySnapshot(): bool { return $this->has('inventory_snapshot'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getModifierTotalMoney(): MoneyValue { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifier}. Shape $[] (Value): {@see OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price change, total, and display flags.
     * @return list<OrderLineItemModifier>
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): Array of {@see PurchasedGiftCard}. Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. Shape $[] (Value): {@see PurchasedGiftCard}. A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.
     * @return list<PurchasedGiftCard>
     */
    public function getPurchasedGiftCards(): array { return $this->get('purchased_gift_cards'); }
    public function hasPurchasedGiftCards(): bool { return $this->has('purchased_gift_cards'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getRefundedQuantity(): string { return $this->get('refunded_quantity'); }
    public function hasRefundedQuantity(): bool { return $this->has('refunded_quantity'); }
    /** Shape $ (Value): Array of {@see SelectedProductOption}. Shape $[] (Value): {@see SelectedProductOption}. An option and value chosen for a product variant, such as size Large.
     * @return list<SelectedProductOption>
     */
    public function getSelectedOptions(): array { return $this->get('selected_options'); }
    public function hasSelectedOptions(): bool { return $this->has('selected_options'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Shape $ (Value): string.  Value enum: "variant", "bundle".
     * @return ?string
     */
    public function getSourceType(): ?string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** Shape $ (Value): {@see SubscribedLine}. Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount.
     * @return ?SubscribedLine
     */
    public function getSubscription(): ?SubscribedLine { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Shape $ (Value): string. Subscription created for this line after the order is paid.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): {@see OrderLineSubscriptionOfferSummary}. Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options.
     * @return ?OrderLineSubscriptionOfferSummary
     */
    public function getSubscriptionOffer(): ?OrderLineSubscriptionOfferSummary { return $this->get('subscription_offer'); }
    public function hasSubscriptionOffer(): bool { return $this->has('subscription_offer'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** Shape $ (Value): {@see OrderCalculatedLineItemTax}. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return ?OrderCalculatedLineItemTax
     */
    public function getTax(): ?OrderCalculatedLineItemTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** Shape $ (Value): {@see SignedMoney}. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getTotalMoney(): SignedMoney { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): {@see Dimensions}. Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?Dimensions
     */
    public function getUnitDimensions(): ?Dimensions { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): {@see Weight}. Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?Weight
     */
    public function getUnitWeight(): ?Weight { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
