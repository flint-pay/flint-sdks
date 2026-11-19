[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderLineItemCustom







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. |
| `fulfillment` | Required | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. `fulfillment`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemfulfillment), [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2fulfillment). |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemgift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) | Inventory items and quantities each unit of the line takes from stock. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemmetadata). |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Modifiers sold with the item, each chosen from the catalog or typed as text. `modifiers[]`: [declared alternatives](../models/CreateOrderLineItem.md#createorderlineitemmodifiers), [declared alternatives](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2modifiers). |
| `name` | Required | string | Name of the item as it appears on the order. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. maxLength: `255`. |
| `product_id` | Optional | string | Parent product of variant_id, resolved by the preview. Required for variant lines; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. `subscription`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemsubscription), [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2subscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax applies to this line item. `tax`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-3tax), [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2tax). |
| `type` | Required | string | Selects the type branch. Values: `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_dimensions`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemunit_dimensions), [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2unit_dimensions). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. `unit_weight`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemunit_weight), [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2unit_weight). |
| `variant_id` | Optional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateOrderLineItemCustom variant 1: `type` = `"custom"`

anyOf CreateOrderLineItemCustom: Declared schema CreateOrderLineItemCustom. The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

### CreateOrderLineItemCustom variant 2: `type` = `"custom"`

anyOf CreateOrderLineItemCustom: Declared schema CreateOrderLineItemCustomRequest. The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Constraints for `modifiers`: Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

### CreateOrderLineItemCustom variant 1.fulfillment

Field definitions: [CreateOrderLineItem.fulfillment](../models/CreateOrderLineItem.md#createorderlineitemfulfillment).

### CreateOrderLineItemCustom.gift_card_purchase

Field definitions: [CreateOrderLineItem.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitemgift_card_purchase).

### CreateOrderLineItemCustom.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

### CreateOrderLineItemCustom variant 1.modifiers[]

Declared alternatives: [CreateOrderLineItem.modifiers[]](../models/CreateOrderLineItem.md#createorderlineitemmodifiers).

### CreateOrderLineItemCustom variant 1.subscription

Field definitions: [CreateOrderLineItem.subscription](../models/CreateOrderLineItem.md#createorderlineitemsubscription).

### CreateOrderLineItemCustom variant 1.tax

Field definitions: [CreateOrderLineItem variant 3.tax](../models/CreateOrderLineItem.md#createorderlineitem-variant-3tax).

### CreateOrderLineItemCustom variant 1.unit_dimensions

Field definitions: [CreateOrderLineItem.unit_dimensions](../models/CreateOrderLineItem.md#createorderlineitemunit_dimensions).

### CreateOrderLineItemCustom.unit_price_money

Field definitions: [CreateOrderLineItem.unit_price_money](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money).

### CreateOrderLineItemCustom variant 1.unit_weight

Field definitions: [CreateOrderLineItem.unit_weight](../models/CreateOrderLineItem.md#createorderlineitemunit_weight).

### CreateOrderLineItemCustom variant 2.fulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [LineItemFulfillmentOriginRequest](../models/LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest) | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. `origin_policy`: [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2fulfillmentorigin_policy). |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### CreateOrderLineItemCustom variant 2.fulfillment.origin_policy

Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

Field definitions: [shared fields](LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest).

### CreateOrderLineItemCustom variant 2.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequest.md#orderlineitemmodifierrequest).

### CreateOrderLineItemCustom variant 2.modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### CreateOrderLineItemCustom variant 2.modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### CreateOrderLineItemCustom variant 2.modifiers[].metadata

Field definitions: [CreateOrderLineItem.modifiers[].metadata](../models/CreateOrderLineItem.md#createorderlineitemmodifiersmetadata).

### CreateOrderLineItemCustom variant 2.modifiers[].text

Field definitions: [CreateOrderLineItem.modifiers[].text](../models/CreateOrderLineItem.md#createorderlineitemmodifierstext).

### CreateOrderLineItemCustom variant 2.subscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequest.md#subscribedlinerequest).

### CreateOrderLineItemCustom variant 2.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#createorderlineitemcustom-variant-2tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### CreateOrderLineItemCustom variant 2.tax line_item_tax_category values

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

### CreateOrderLineItemCustom variant 2.tax.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2taxcalculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### CreateOrderLineItemCustom variant 2.tax.calculation.components[]

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponentsflat_money). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/CreateOrderLineItemCustom.md#createorderlineitemcustom-variant-2taxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### CreateOrderLineItemCustom variant 2.tax.calculation.components[].flat_money

Field definitions: [CreateOrderLineItem variant 1.tax.calculation.components[].flat_money](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponentsflat_money).

### CreateOrderLineItemCustom variant 2.tax.calculation.components[].jurisdiction

The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestModelInput.md#orderdrafttaxjurisdictionrequestmodelinput).

### CreateOrderLineItemCustom variant 2.unit_dimensions

Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.

Field definitions: [shared fields](Dimensions.md#dimensions).

### CreateOrderLineItemCustom variant 2.unit_weight

Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Field definitions: [shared fields](Weight.md#weight).

