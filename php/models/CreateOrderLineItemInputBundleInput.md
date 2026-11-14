[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemInputBundleInput

The `bundle` variant of `CreateOrderLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. minLength: `1`. |
| `fulfillment` | Optional | [LineItemFulfillmentRequestModelInput](../models/LineItemFulfillmentRequestModelInput.md#lineitemfulfillmentrequestmodelinput) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseDetailsRequestInput](../models/GiftCardPurchaseDetailsRequestInput.md#giftcardpurchasedetailsrequestinput) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card. |
| `image` | Optional | [ImageReferenceRequestInput](../models/ImageReferenceRequestInput.md#imagereferencerequestinput) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequestInput](../models/OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestModelInput](../models/OrderLineItemModifierRequestModelInput.md#orderlineitemmodifierrequestmodelinput) | Modifiers sold with the item, each chosen from the catalog or typed as text. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItemInputBundleInput.md#createorderlineiteminputbundleinputmodifiers). |
| `name` | Optional | string | Name of the item as it appears on the order. minLength: `1`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequestModelInput](../models/SubscribedLineRequestModelInput.md#subscribedlinerequestmodelinput) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderDraftLineItemTaxRequestModelInput](../models/OrderDraftLineItemTaxRequestModelInput.md#orderdraftlineitemtaxrequestmodelinput) | How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/CreateOrderLineItemInputBundleInput.md#createorderlineiteminputbundleinputtax). |
| `type` | Required | string | Selects the type branch. Values: `"bundle"`. |
| `unit_dimensions` | Optional | [DimensionsRequestInput](../models/DimensionsRequestInput.md#dimensionsrequestinput) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [WeightRequestInput](../models/WeightRequestInput.md#weightrequestinput) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateOrderLineItemInputBundleInput.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput).

### CreateOrderLineItemInputBundleInput.modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### CreateOrderLineItemInputBundleInput.modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### CreateOrderLineItemInputBundleInput.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderDraftLineItemTaxCalculationRequestModelInput](../models/OrderDraftLineItemTaxCalculationRequestModelInput.md#orderdraftlineitemtaxcalculationrequestmodelinput) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineiteminputbundleinputtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

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

