[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddLineItemsRequest

The request body for: Add line items.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | Line items to add to the order. minItems: `1`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |

### AddLineItemsRequest.line_items[]

A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. minLength: `1`. |
| `fulfillment` | Conditional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment). |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers sold with the item, each chosen from the catalog or typed as text. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string | Name of the item as it appears on the order. minLength: `1`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. `subscription`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. `unit_dimensions`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions). |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. `unit_weight`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight). |
| `variant_id` | Conditional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### AddLineItemsRequest.line_items[] variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### AddLineItemsRequest.line_items[] variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### AddLineItemsRequest.line_items[] variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### AddLineItemsRequest.line_items[].fulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [LineItemFulfillmentOriginRequest](../models/LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest) | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. `origin_policy`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillmentorigin_policy). |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### AddLineItemsRequest.line_items[].fulfillment.origin_policy

Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

Field definitions: [shared fields](LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest).

### AddLineItemsRequest.line_items[].gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details you supply for an order line item: the `face_value_money` and the `recipient` who receives the card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `face_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaserecipient). |

### AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money

Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### AddLineItemsRequest.line_items[].gift_card_purchase.recipient

Who receives the gift card. `null` when no recipient was set. Recipient of a gift card purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at` time.

Field definitions: [shared fields](GiftCardPurchaseRecipientRequestInput.md#giftcardpurchaserecipientrequestinput).

### AddLineItemsRequest.line_items[].metadata

Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. 

### AddLineItemsRequest.line_items[].modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequest.md#orderlineitemmodifierrequest).

### AddLineItemsRequest.line_items[].modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### AddLineItemsRequest.line_items[].modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### AddLineItemsRequest.line_items[].modifiers[].metadata

Value shape: Map of string. Caller-owned metadata for this selection, returned on the order line item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. 

### AddLineItemsRequest.line_items[].modifiers[].text

The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier group on an order line item.

Field definitions: [shared fields](TextModifierRequestInput.md#textmodifierrequestinput).

### AddLineItemsRequest.line_items[].subscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequest.md#subscribedlinerequest).

### AddLineItemsRequest.line_items[] variant 1.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#addlineitemsrequestline_items-variant-1tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### AddLineItemsRequest.line_items[] variant 1.tax line_item_tax_category values

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

### AddLineItemsRequest.line_items[] variant 1.tax.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[]

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money

Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].jurisdiction

The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestModelInput.md#orderdrafttaxjurisdictionrequestmodelinput).

### AddLineItemsRequest.line_items[].unit_dimensions

Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.

Field definitions: [shared fields](Dimensions.md#dimensions).

### AddLineItemsRequest.line_items[].unit_price_money

Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### AddLineItemsRequest.line_items[].unit_weight

Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Field definitions: [shared fields](Weight.md#weight).

### AddLineItemsRequest.line_items[] variant 2.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### AddLineItemsRequest.line_items[] variant 3.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#addlineitemsrequestline_items-variant-3tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### AddLineItemsRequest.line_items[] variant 3.tax line_item_tax_category values

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

### AddLineItemsRequest.line_items[] variant 3.tax.calculation

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculation).

