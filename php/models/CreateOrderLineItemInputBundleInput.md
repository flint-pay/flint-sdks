[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemInputBundleInput

The `bundle` variant of `CreateOrderLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `fulfillment` | Optional | [LineItemFulfillmentRequestInput](../models/LineItemFulfillmentRequestInput.md#lineitemfulfillmentrequestinput) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseDetailsRequestInput](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinput) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card. |
| `image` | Optional | [ImageReferenceRequestInput](../models/ImageReferenceRequestInput.md#imagereferencerequestinput) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequestInput](../models/OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput) |  |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInput.md#createorderlineiteminputmodifiers). |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/SubscribedLineRequestInput.md#subscribedlinerequestinput) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderDraftLineItemTaxRequestInput](../models/OrderDraftLineItemTaxRequestInput.md#orderdraftlineitemtaxrequestinput) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/CreateOrderLineItemInput.md#createorderlineiteminput-variant-1tax). |
| `type` | Required | string | Selects the type branch. Values: `"bundle"`. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string | minLength: `1`. |

### CreateOrderLineItemInputBundleInput.modifiers[]

Declared alternatives: [CreateOrderLineItemInput.modifiers[]](../models/CreateOrderLineItemInput.md#createorderlineiteminputmodifiers).

### CreateOrderLineItemInputBundleInput.tax

Field definitions: [CreateOrderLineItemInput variant 1.tax](../models/CreateOrderLineItemInput.md#createorderlineiteminput-variant-1tax).

