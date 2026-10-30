<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read LineItemFulfillmentRequestInput|array<array-key, mixed>|\stdClass $fulfillment
 * @property-read GiftCardPurchaseRequestInput|array<array-key, mixed>|\stdClass $gift_card_purchase
 * @property-read ImageReferenceRequestInput|array<array-key, mixed>|\stdClass $image
 * @property-read list<OrderDraftLineItemInventoryDemandRequestInput|array<array-key, mixed>|\stdClass> $inventory_demands
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object> $modifiers
 * @property-read string $name
 * @property-read int $quantity
 * @property-read SubscribedLineRequestInput|array<array-key, mixed>|\stdClass $subscription
 * @property-read array{'calculation'?: OrderDraftLineItemTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'line_item_tax_category'?: string, 'taxable'?: bool}|object $tax
 * @property-read string $type
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $unit_dimensions
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $unit_weight
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateOrderLineItemVariantInput extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'fulfillment'?: LineItemFulfillmentRequestInput|array<array-key, mixed>|\stdClass, 'gift_card_purchase'?: GiftCardPurchaseRequestInput|array<array-key, mixed>|\stdClass, 'image'?: ImageReferenceRequestInput|array<array-key, mixed>|\stdClass, 'inventory_demands'?: list<OrderDraftLineItemInventoryDemandRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'modifiers'?: list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'subscription'?: SubscribedLineRequestInput|array<array-key, mixed>|\stdClass, 'tax'?: array{'calculation'?: OrderDraftLineItemTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'line_item_tax_category'?: string, 'taxable'?: bool}|object, 'type': string, 'unit_dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'unit_weight'?: WeightInput|array<array-key, mixed>|\stdClass, 'variant_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateOrderLineItemVariantInput')); }
    /** bundle_id
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** description
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.
     * @return LineItemFulfillmentRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.
     * @return GiftCardPurchaseRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_purchase is omitted; use hasGiftCardPurchase() or valueOrDefault().
     */
    public function getGiftCardPurchase(): mixed { return $this->get('gift_card_purchase'); }
    public function hasGiftCardPurchase(): bool { return $this->has('gift_card_purchase'); }
    /** A reference to an image by `url`, with optional `alt` text, used on an order line item.
     * @return ImageReferenceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /**  [] (Value): {@see OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.
     * @return list<OrderDraftLineItemInventoryDemandRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_demands is omitted; use hasInventoryDemands() or valueOrDefault().
     */
    public function getInventoryDemands(): array { return $this->get('inventory_demands'); }
    public function hasInventoryDemands(): bool { return $this->has('inventory_demands'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  [] (Value): {@see OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional): {@see MetadataRequestInput}. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. [].text (Optional): {@see TextModifierRequestInput}. Text a buyer entered for a text modifier group on an order line item. [].type (Required): string. Selects the type branch. Value enum: "catalog", "text". [].oneOf[1] (Value): {@see OrderLineItemModifierInputCatalogInput}. The `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@see OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     * @return list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': TextModifierRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.
     * @return SubscribedLineRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. calculation (Optional): {@see OrderDraftLineItemTaxCalculationRequestInput}. A tax calculation you supply for a draft order line item, made of tax components and a price mode. line_item_tax_category (Optional): string. Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods", "software", "saas", "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission". taxable (Optional): boolean.
     * @return array{'calculation'?: OrderDraftLineItemTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'line_item_tax_category'?: string, 'taxable'?: bool}|object
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Selects the type branch. Value enum: "variant".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_dimensions is omitted; use hasUnitDimensions() or valueOrDefault().
     */
    public function getUnitDimensions(): mixed { return $this->get('unit_dimensions'); }
    public function hasUnitDimensions(): bool { return $this->has('unit_dimensions'); }
    /** Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_weight is omitted; use hasUnitWeight() or valueOrDefault().
     */
    public function getUnitWeight(): mixed { return $this->get('unit_weight'); }
    public function hasUnitWeight(): bool { return $this->has('unit_weight'); }
    /** variant_id
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
