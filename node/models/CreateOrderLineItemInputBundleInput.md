[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemInputBundleInput

Request input. Response: [CreateOrderLineItemBundle](../models/CreateOrderLineItemBundle.md#createorderlineitembundle).

The `bundle` variant of `CreateOrderLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `fulfillment` | Optional | [LineItemFulfillmentRequestInput](../models/LineItemFulfillmentRequestInput.md#lineitemfulfillmentrequestinput) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseDetailsRequestInput](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinput) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card. |
| `image` | Optional | [ImageReferenceRequestInput](../models/ImageReferenceRequestInput.md#imagereferencerequestinput) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequestInput](../models/OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput) |  |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInputBundleInput.md#createorderlineiteminputbundleinputmodifiers). |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/SubscribedLineRequestInput.md#subscribedlinerequestinput) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderDraftLineItemTaxRequestInput](../models/OrderDraftLineItemTaxRequestInput.md#orderdraftlineitemtaxrequestinput) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/CreateOrderLineItemInputBundleInput.md#createorderlineiteminputbundleinputtax). |
| `type` | Required | string | Selects the type branch. Values: `"bundle"`. |
| `unit_dimensions` | Optional | [DimensionsInput](../models/DimensionsInput.md#dimensionsinput) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightInput](../models/WeightInput.md#weightinput) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string | minLength: `1`. |

### CreateOrderLineItemInputBundleInput.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Conditional | [TextModifierRequestInput](../models/TextModifierRequestInput.md#textmodifierrequestinput) | Text a buyer entered for a text modifier group on an order line item. |
| `type` | Required | string | Selects the type branch. Values: `"catalog"`, `"text"`. |

### CreateOrderLineItemInputBundleInput.modifiers[] variant 1: `type` = `"catalog"`

oneOf variant 1: The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### CreateOrderLineItemInputBundleInput.modifiers[] variant 2: `type` = `"text"`

oneOf variant 2: The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### CreateOrderLineItemInputBundleInput.tax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderDraftLineItemTaxCalculationRequestInput](../models/OrderDraftLineItemTaxCalculationRequestInput.md#orderdraftlineitemtaxcalculationrequestinput) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineiteminputbundleinputtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### CreateOrderLineItemInputBundleInput.tax line_item_tax_category values

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

