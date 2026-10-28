[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemInput

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Conditional | [LineItemFulfillmentRequestInput](../models/LineItemFulfillmentRequestInput.md#lineitemfulfillmentrequestinput) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequestInput](../models/GiftCardPurchaseRequestInput.md#giftcardpurchaserequestinput) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. |
| `image` | Optional | [ImageReferenceRequestInput](../models/ImageReferenceRequestInput.md#imagereferencerequestinput) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequestInput](../models/OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput) |  |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInput.md#createorderlineiteminputmodifiers). |
| `name` | Conditional | string |  |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/SubscribedLineRequestInput.md#subscribedlinerequestinput) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderDraftLineItemTaxRequestInput](../models/OrderDraftLineItemTaxRequestInput.md#orderdraftlineitemtaxrequestinput) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/CreateOrderLineItemInput.md#createorderlineiteminput-variant-1tax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Conditional | string |  |

### CreateOrderLineItemInput variant 1: `type` = `"variant"`

oneOf variant 1: The `variant` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### CreateOrderLineItemInput variant 2: `type` = `"bundle"`

oneOf variant 2: The `bundle` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### CreateOrderLineItemInput variant 3: `type` = `"custom"`

oneOf variant 3: The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### CreateOrderLineItemInput.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput).

### CreateOrderLineItemInput.modifiers[] variant 1: `type` = `"catalog"`

oneOf variant 1: The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### CreateOrderLineItemInput.modifiers[] variant 2: `type` = `"text"`

oneOf variant 2: The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### CreateOrderLineItemInput variant 1.tax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderDraftLineItemTaxCalculationRequestInput](../models/OrderDraftLineItemTaxCalculationRequestInput.md#orderdraftlineitemtaxcalculationrequestinput) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineiteminput-variant-1tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### CreateOrderLineItemInput variant 1.tax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### CreateOrderLineItemInput variant 2.tax

Field definitions: [CreateOrderLineItemInput variant 1.tax](../models/CreateOrderLineItemInput.md#createorderlineiteminput-variant-1tax).

