<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read ?string $description
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment $fulfillment
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase $gift_card_purchase
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleImage $image
 * @property-read ?list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleInventoryDemandsItem> $inventory_demands
 * @property-read ?array<array-key, string> $metadata
 * @property-read list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleModifiersItemCatalog|DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleModifiersItemText|\stdClass>|null $modifiers
 * @property-read ?string $name
 * @property-read ?int $quantity
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleSubscription $subscription
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax $tax
 * @property-read string $type
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitDimensions $unit_dimensions
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitPriceMoney $unit_price_money
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight $unit_weight
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle extends Model {
    /** @param array{'bundle_id': string, 'description'?: string, 'fulfillment'?: mixed, 'gift_card_purchase'?: mixed, 'image'?: mixed, 'inventory_demands'?: list<mixed>, 'metadata'?: mixed, 'modifiers'?: list<\stdClass>, 'name'?: string, 'quantity'?: int, 'subscription'?: mixed, 'tax'?: mixed, 'type': string, 'unit_dimensions'?: mixed, 'unit_price_money'?: mixed, 'unit_weight'?: mixed, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundle')); }
    /** bundle_id
     * @return string
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment
     */
    public function getFulfillment(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase
     */
    public function getGiftCardPurchase(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleGiftCardPurchase { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleImage
     */
    public function getImage(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleImage { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /**  [] (Value): {@see DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleInventoryDemandsItem}. The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.
     * @return ?list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleInventoryDemandsItem>
     */
    public function getInventoryDemands(): ?array { return $this->get('inventory_demands'); }
    public function hasInventoryDemands(): bool { return $this->has('inventory_demands'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. * (Value): string. maxLength: 4096.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  [] (Value): {@see OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@see MetadataRequest}. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. [].text (Optional): {@see TextModifierRequest}. Text a buyer entered for a text modifier group on an order line item. [].type (Required): string. Selects the type branch. Value enum: "catalog", "text". [].oneOf[1] (Value): {@see OrderLineItemModifierInputCatalog}. The `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@see OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     * @return list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleModifiersItemCatalog|DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleModifiersItemText|\stdClass>|null
     */
    public function getModifiers(): ?array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     * @return ?int
     */
    public function getQuantity(): ?int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleSubscription
     */
    public function getSubscription(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleSubscription { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax
     */
    public function getTax(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Selects the type branch. Value enum: "bundle".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitDimensions
     */
    public function getUnitDimensions(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitDimensions { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitPriceMoney
     */
    public function getUnitPriceMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitPriceMoney { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight
     */
    public function getUnitWeight(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleUnitWeight { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** variant_id
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
