[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItem







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Conditional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) |  |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string |  |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Conditional | string |  |

### CreateOrderLineItem variant 1: `type` = `"variant"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "variant": The `variant` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### CreateOrderLineItem variant 2: `type` = `"bundle"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "bundle": The `bundle` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### CreateOrderLineItem variant 3: `type` = `"custom"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "custom": The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### CreateOrderLineItem variant 4: `type` = `"variant"`

anyOf variant 2: Declared schema CreateOrderLineItemRequest. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "variant": The `variant` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `bundle_id`: minLength: `1`.
- Constraints for `description`: minLength: `1`.
- Constraints for `name`: minLength: `1`.
- Constraints for `type`: Values: `"variant"`.
- Constraints for `variant_id`: minLength: `1`.

### CreateOrderLineItem variant 5: `type` = `"bundle"`

anyOf variant 2: Declared schema CreateOrderLineItemRequest. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "bundle": The `bundle` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `bundle_id`: minLength: `1`.
- Constraints for `description`: minLength: `1`.
- Constraints for `name`: minLength: `1`.
- Constraints for `type`: Values: `"bundle"`.
- Constraints for `variant_id`: minLength: `1`.

### CreateOrderLineItem variant 6: `type` = `"custom"`

anyOf variant 2: Declared schema CreateOrderLineItemRequest. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "custom": The `custom` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `bundle_id`: minLength: `1`.
- Constraints for `description`: minLength: `1`.
- Constraints for `name`: minLength: `1`.
- Constraints for `type`: Values: `"custom"`.
- Constraints for `variant_id`: minLength: `1`.

### CreateOrderLineItem variant 1.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | object | Buyer-selected face value within the gift card offer's limits. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. `face_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |

### CreateOrderLineItem variant 1.gift_card_purchase.face_value_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### CreateOrderLineItem variant 1.gift_card_purchase.recipient

The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Format: `email`. minLength: `1`. maxLength: `254`. |
| `message` | Optional | string | maxLength: `200`. |
| `name` | Optional | string | maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. |

### CreateOrderLineItem variant 1.metadata

Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### CreateOrderLineItem.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### CreateOrderLineItem variant 1.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[].unit_price_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money).

### CreateOrderLineItem variant 2.gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### CreateOrderLineItem variant 2.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### CreateOrderLineItem variant 2.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem variant 3.gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### CreateOrderLineItem variant 3.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### CreateOrderLineItem variant 3.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 3.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax).

### CreateOrderLineItem variant 4.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 4.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 4.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem variant 5.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 5.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 5.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem variant 6.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 6.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 6.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 3.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax).

