[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItem







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. |
| `fulfillment` | Conditional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. `fulfillment`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillment), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment). |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers sold with the item, each chosen from the catalog or typed as text. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItem.md#createorderlineitem-variant-1modifiers), [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string | Name of the item as it appears on the order. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. `subscription`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1subscription), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax applies to this line item. `tax`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1tax), [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-3tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_dimensions`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_dimensions), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions). |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_weight`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_weight), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight). |
| `variant_id` | Conditional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateOrderLineItem variant 1: `type` = `"variant"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "variant": The `variant` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
- Constraints for `type`: Values: `"variant"`.

### CreateOrderLineItem variant 2: `type` = `"bundle"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "bundle": The `bundle` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
- Constraints for `type`: Values: `"bundle"`.

### CreateOrderLineItem variant 3: `type` = `"custom"`

anyOf variant 1: Declared schema CreateOrderLineItem. A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "custom": The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
- Constraints for `type`: Values: `"custom"`.

### CreateOrderLineItem variant 4: `type` = `"variant"`

anyOf variant 2: Declared schema CreateOrderLineItemRequest. A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price.; oneOf with type: "variant": The `variant` variant of `CreateOrderLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `bundle_id`: minLength: `1`.
- Constraints for `description`: minLength: `1`.
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
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
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
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
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
- Constraints for `name`: minLength: `1`.
- Constraints for `type`: Values: `"custom"`.
- Constraints for `variant_id`: minLength: `1`.

### CreateOrderLineItem variant 1.fulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [LineItemFulfillmentOriginRequest](../models/LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest) | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. `origin_policy`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillmentorigin_policy). |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### CreateOrderLineItem variant 1.fulfillment.origin_policy

Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

Field definitions: [shared fields](LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest).

### CreateOrderLineItem variant 1.gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `face_value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchaserecipient). |

### CreateOrderLineItem variant 1.gift_card_purchase.face_value_money

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase.face_value_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### CreateOrderLineItem variant 1.gift_card_purchase.recipient

Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Required | string | Email address the gift card is delivered to. Format: `email`. minLength: `1`. maxLength: `254`. Example: `"buyer@example.com"`. |
| `message` | Optional | string | Personal message included with the gift card. maxLength: `200`. |
| `name` | Optional | string | Name of the person receiving the gift card. maxLength: `255`. |
| `send_at` | Optional | string | Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### CreateOrderLineItem variant 1.metadata

Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### CreateOrderLineItem variant 1.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequest.md#orderlineitemmodifierrequest).

### CreateOrderLineItem variant 1.modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### CreateOrderLineItem variant 1.modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### CreateOrderLineItem variant 1.modifiers[].metadata

Field definitions: [AddLineItemsRequest.line_items[].modifiers[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiersmetadata).

### CreateOrderLineItem variant 1.modifiers[].text

Field definitions: [AddLineItemsRequest.line_items[].modifiers[].text](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifierstext).

### CreateOrderLineItem variant 1.subscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequest.md#subscribedlinerequest).

### CreateOrderLineItem variant 1.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineitem-variant-1tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### CreateOrderLineItem variant 1.tax line_item_tax_category values

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

### CreateOrderLineItem variant 1.tax.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### CreateOrderLineItem variant 1.tax.calculation.components[]

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### CreateOrderLineItem variant 1.tax.calculation.components[].flat_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CreateOrderLineItem variant 1.tax.calculation.components[].jurisdiction

The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestModelInput.md#orderdrafttaxjurisdictionrequestmodelinput).

### CreateOrderLineItem variant 1.unit_dimensions

Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.

Field definitions: [shared fields](Dimensions.md#dimensions).

### CreateOrderLineItem.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[].unit_price_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money).

### CreateOrderLineItem variant 1.unit_weight

Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Field definitions: [shared fields](Weight.md#weight).

### CreateOrderLineItem variant 2.fulfillment

Field definitions: [CreateOrderLineItem variant 1.fulfillment](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillment).

### CreateOrderLineItem variant 2.gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### CreateOrderLineItem variant 2.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### CreateOrderLineItem variant 2.modifiers[]

Declared alternatives: [CreateOrderLineItem variant 1.modifiers[]](../models/CreateOrderLineItem.md#createorderlineitem-variant-1modifiers).

### CreateOrderLineItem variant 2.subscription

Field definitions: [CreateOrderLineItem variant 1.subscription](../models/CreateOrderLineItem.md#createorderlineitem-variant-1subscription).

### CreateOrderLineItem variant 2.tax

Field definitions: [CreateOrderLineItem variant 1.tax](../models/CreateOrderLineItem.md#createorderlineitem-variant-1tax).

### CreateOrderLineItem variant 2.unit_dimensions

Field definitions: [CreateOrderLineItem variant 1.unit_dimensions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_dimensions).

### CreateOrderLineItem variant 2.unit_weight

Field definitions: [CreateOrderLineItem variant 1.unit_weight](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_weight).

### CreateOrderLineItem variant 3.fulfillment

Field definitions: [CreateOrderLineItem variant 1.fulfillment](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillment).

### CreateOrderLineItem variant 3.gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### CreateOrderLineItem variant 3.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### CreateOrderLineItem variant 3.modifiers[]

Declared alternatives: [CreateOrderLineItem variant 1.modifiers[]](../models/CreateOrderLineItem.md#createorderlineitem-variant-1modifiers).

### CreateOrderLineItem variant 3.subscription

Field definitions: [CreateOrderLineItem variant 1.subscription](../models/CreateOrderLineItem.md#createorderlineitem-variant-1subscription).

### CreateOrderLineItem variant 3.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineitem-variant-3tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### CreateOrderLineItem variant 3.tax line_item_tax_category values

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

### CreateOrderLineItem variant 3.tax.calculation

Field definitions: [CreateOrderLineItem variant 1.tax.calculation](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculation).

### CreateOrderLineItem variant 3.unit_dimensions

Field definitions: [CreateOrderLineItem variant 1.unit_dimensions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_dimensions).

### CreateOrderLineItem variant 3.unit_weight

Field definitions: [CreateOrderLineItem variant 1.unit_weight](../models/CreateOrderLineItem.md#createorderlineitem-variant-1unit_weight).

### CreateOrderLineItem variant 4.fulfillment

Field definitions: [AddLineItemsRequest.line_items[].fulfillment](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment).

### CreateOrderLineItem variant 4.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 4.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 4.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### CreateOrderLineItem variant 4.subscription

Field definitions: [AddLineItemsRequest.line_items[].subscription](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription).

### CreateOrderLineItem variant 4.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem variant 4.unit_dimensions

Field definitions: [AddLineItemsRequest.line_items[].unit_dimensions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions).

### CreateOrderLineItem variant 4.unit_weight

Field definitions: [AddLineItemsRequest.line_items[].unit_weight](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight).

### CreateOrderLineItem variant 5.fulfillment

Field definitions: [AddLineItemsRequest.line_items[].fulfillment](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment).

### CreateOrderLineItem variant 5.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 5.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 5.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### CreateOrderLineItem variant 5.subscription

Field definitions: [AddLineItemsRequest.line_items[].subscription](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription).

### CreateOrderLineItem variant 5.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### CreateOrderLineItem variant 5.unit_dimensions

Field definitions: [AddLineItemsRequest.line_items[].unit_dimensions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions).

### CreateOrderLineItem variant 5.unit_weight

Field definitions: [AddLineItemsRequest.line_items[].unit_weight](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight).

### CreateOrderLineItem variant 6.fulfillment

Field definitions: [AddLineItemsRequest.line_items[].fulfillment](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillment).

### CreateOrderLineItem variant 6.gift_card_purchase

Field definitions: [AddLineItemsRequest.line_items[].gift_card_purchase](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchase).

### CreateOrderLineItem variant 6.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateOrderLineItem variant 6.modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### CreateOrderLineItem variant 6.subscription

Field definitions: [AddLineItemsRequest.line_items[].subscription](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemssubscription).

### CreateOrderLineItem variant 6.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 3.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax).

### CreateOrderLineItem variant 6.unit_dimensions

Field definitions: [AddLineItemsRequest.line_items[].unit_dimensions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_dimensions).

### CreateOrderLineItem variant 6.unit_weight

Field definitions: [AddLineItemsRequest.line_items[].unit_weight](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_weight).

