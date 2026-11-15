[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemInputVariant

The `variant` variant of `CreateOrderLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. minLength: `1`. |
| `fulfillment` | Optional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlefulfillment). |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlegift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/CreateBundleRequest.md#createbundlerequestmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers sold with the item, each chosen from the catalog or typed as text. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlemodifiers). |
| `name` | Optional | string | Name of the item as it appears on the order. minLength: `1`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. `subscription`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlesubscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. `unit_dimensions`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundleunit_dimensions). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. `unit_weight`: [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundleunit_weight). |
| `variant_id` | Required | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateOrderLineItemInputVariant.fulfillment

Field definitions: [CreateOrderLineItemInputBundle.fulfillment](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlefulfillment).

### CreateOrderLineItemInputVariant.gift_card_purchase

Field definitions: [CreateOrderLineItemInputBundle.gift_card_purchase](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlegift_card_purchase).

### CreateOrderLineItemInputVariant.metadata

Field definitions: [CreateBundleRequest.metadata](../models/CreateBundleRequest.md#createbundlerequestmetadata).

### CreateOrderLineItemInputVariant.modifiers[]

Declared alternatives: [CreateOrderLineItemInputBundle.modifiers[]](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlemodifiers).

### CreateOrderLineItemInputVariant.subscription

Field definitions: [CreateOrderLineItemInputBundle.subscription](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundlesubscription).

### CreateOrderLineItemInputVariant.tax

Field definitions: [CreateOrderLineItemInputBundle.tax](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletax).

### CreateOrderLineItemInputVariant.unit_dimensions

Field definitions: [CreateOrderLineItemInputBundle.unit_dimensions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundleunit_dimensions).

### CreateOrderLineItemInputVariant.unit_price_money

Field definitions: [CreateOrderLineItem.unit_price_money](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money).

### CreateOrderLineItemInputVariant.unit_weight

Field definitions: [CreateOrderLineItemInputBundle.unit_weight](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundleunit_weight).

