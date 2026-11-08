[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemBundle







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. |
| `fulfillment` | Optional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. `fulfillment`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillment), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment). |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers sold with the item, each chosen from the catalog or typed as text. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItem.md#createorderlineitem-variant-1modifiers), [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Optional | string | Name of the item as it appears on the order. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. `subscription`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1subscription), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax applies to this line item. `tax`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax). |
| `type` | Required | string | Selects the type branch. Values: `"bundle"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_dimensions`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_dimensions), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_weight`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_weight), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight). |
| `variant_id` | Optional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateOrderLineItemBundle variant 1: `type` = `"bundle"`

anyOf CreateOrderLineItemBundle: Declared schema CreateOrderLineItemBundle. The `bundle` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

### CreateOrderLineItemBundle variant 2: `type` = `"bundle"`

anyOf CreateOrderLineItemInputBundle: Declared schema CreateOrderLineItemInputBundle. The `bundle` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Constraints for `bundle_id`: minLength: `1`.
- Constraints for `description`: minLength: `1`.
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
- Constraints for `name`: minLength: `1`.
- Constraints for `variant_id`: minLength: `1`.

### CreateOrderLineItemBundle variant 1.fulfillment

Field definitions: [CreateOrderLineItem variant 1.fulfillment](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillment).

### CreateOrderLineItemBundle variant 1.gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### CreateOrderLineItemBundle variant 1.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### CreateOrderLineItemBundle variant 1.modifiers[]

Declared alternatives: [CreateOrderLineItem variant 1.modifiers[]](../models/CreateOrderLineItem.md#createorderlineitem-variant-1modifiers).

### CreateOrderLineItemBundle variant 1.subscription

Field definitions: [CreateOrderLineItem variant 1.subscription](../models/CreateOrderLineItem.md#createorderlineitem-variant-1subscription).

### CreateOrderLineItemBundle variant 1.tax

Field definitions: [CreateOrderLineItem variant 1.tax](../models/CreateOrderLineItem.md#createorderlineitem-variant-1tax).

### CreateOrderLineItemBundle variant 1.unit_dimensions

Field definitions: [CreateOrderLineItem variant 1.unit_dimensions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_dimensions).

### CreateOrderLineItemBundle.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[].unit_price_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money).

### CreateOrderLineItemBundle variant 1.unit_weight

Field definitions: [CreateOrderLineItem variant 1.unit_weight](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_weight).

### CreateOrderLineItemBundle variant 2.fulfillment

Field definitions: [AddLineItemsRequest.line_items[].fulfillment](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment).

### CreateOrderLineItemBundle variant 2.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItemBundle variant 2.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItemBundle variant 2.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### CreateOrderLineItemBundle variant 2.subscription

Field definitions: [AddLineItemsRequest.line_items[].subscription](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription).

### CreateOrderLineItemBundle variant 2.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItemBundle variant 2.unit_dimensions

Field definitions: [AddLineItemsRequest.line_items[].unit_dimensions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions).

### CreateOrderLineItemBundle variant 2.unit_weight

Field definitions: [AddLineItemsRequest.line_items[].unit_weight](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight).

