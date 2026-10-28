<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_id
 * @property-read ?string $description
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment $fulfillment
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase $gift_card_purchase
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage $image
 * @property-read ?list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem> $inventory_demands
 * @property-read ?array<array-key, string> $metadata
 * @property-read list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog|DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemText|\stdClass>|null $modifiers
 * @property-read ?string $name
 * @property-read ?string $quantity
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription $subscription
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax $tax
 * @property-read string $type
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions $unit_dimensions
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney $unit_price_money
 * @property-read ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight $unit_weight
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'fulfillment'?: mixed, 'gift_card_purchase'?: mixed, 'image'?: mixed, 'inventory_demands'?: list<mixed>, 'metadata'?: mixed, 'modifiers'?: list<\stdClass>, 'name'?: string, 'quantity'?: string, 'subscription'?: mixed, 'tax'?: mixed, 'type': string, 'unit_dimensions'?: mixed, 'unit_price_money'?: mixed, 'unit_weight'?: mixed, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariant')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleId(): ?string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment}. Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment
     */
    public function getFulfillment(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillment { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase}. Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase
     */
    public function getGiftCardPurchase(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantGiftCardPurchase { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage}. A reference to an image by `url`, with optional `alt` text, used on an order line item.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage
     */
    public function getImage(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): Array of ({@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem} and {@see OrderDraftLineItemInventoryDemandRequest}). Shape $[] (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem}. The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.
     * @return ?list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantInventoryDemandsItem>
     */
    public function getInventoryDemands(): ?array { return $this->get('inventory_demands'); }
    public function hasInventoryDemands(): bool { return $this->has('inventory_demands'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Shape $.* (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifierRequest}. Shape $[] (Value): {@see OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional): {@see MetadataRequest}. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Shape $[].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: 1. Shape $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity (Optional): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape $[].text (Optional): {@see TextModifierRequest}. Text a buyer entered for a text modifier group on an order line item. Shape $[].type (Required): string. Selects the type branch. Value enum: "catalog", "text". Shape $[].oneOf[1] (Value): {@see OrderLineItemModifierInputCatalog}. The `catalog` variant of `OrderLineItemModifierInput`. Shape $[].oneOf[2] (Value): {@see OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     * @return list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemCatalog|DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantModifiersItemText|\stdClass>|null
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     * @return ?string
     */
    public function getQuantity(): ?string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription}. Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription
     */
    public function getSubscription(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax}. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax
     */
    public function getTax(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): string. Selects the type branch. Value enum: "variant".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions}. Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions
     */
    public function getUnitDimensions(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitDimensions { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney
     */
    public function getUnitPriceMoney(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Shape $ (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight}. Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight
     */
    public function getUnitWeight(): ?DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantUnitWeight { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
