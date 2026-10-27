[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200

The response for: Create delivery preview.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | `data`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryPreviewsCreateResponse200.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Conditional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_location). |
| `choice_groups` | Conditional | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Conditional | Array of string |  |
| `destination_address` | Conditional | [DeliveryAddressResource](../models/DeliveryAddressResource.md#deliveryaddressresource) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. `destination_address`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1destination_address). |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) |  |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items). |
| `merchant_diagnostics` | Optional | Varies by condition |  |
| `mode` | Required | string |  |
| `pickup_location_id` | Conditional | string |  |
| `locations` | Conditional | Array of [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |

### DeliveryPreviewsCreateResponse200.data variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics..

- Required: `choice_groups`, `currency`, `delivery_method_ids`, `expires_at`, `line_items`.
- Optional: `buyer_location`, `destination_address`, `pickup_location_id`.
- Undeclared: `locations`.
- Constraints for `input_requirements`: Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids.
- Constraints for `merchant_diagnostics`: Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic). Present for merchant callers as an array, including when empty. Absent for buyer callers.
- Constraints for `mode`: The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`.

### DeliveryPreviewsCreateResponse200.data variant 2: `mode` = `"pickup_locations"`

oneOf variant 2: The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics..

- Required: `locations`.
- Undeclared: `buyer_location`, `choice_groups`, `currency`, `delivery_method_ids`, `destination_address`, `expires_at`, `line_items`, `pickup_location_id`.
- Constraints for `merchant_diagnostics`: Array of [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnostic.md#deliverypickupavailabilitydiagnostic). Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty.
- Constraints for `mode`: The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`.

### DeliveryPreviewsCreateResponse200.data variant 1.buyer_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressResource](../models/DeliveryAddressResource.md#deliveryaddressresource) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationaddress). |
| `coordinate` | Conditional | object | A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryPreviewsCreateResponse200.data variant 1.buyer_location variant 1: `type` = `"address"`

oneOf variant 1: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryPreviewsCreateResponse200.data variant 1.buyer_location variant 2: `type` = `"coordinate"`

oneOf variant 2: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryPreviewsCreateResponse200.data variant 1.buyer_location.address

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

### DeliveryPreviewsCreateResponse200.data variant 1.buyer_location.coordinate

A latitude and longitude.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | minimum: `-180`. maximum: `180`. |

### DeliveryPreviewsCreateResponse200.data variant 1.destination_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[]

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Conditional | object | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillment). |
| `gift_card_purchase` | Optional | object | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsgift_card_purchase). |
| `image` | Optional | object | A reference to an image by `url`, with optional `alt` text, used on an order line item. `image`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsimage). |
| `inventory_demands` | Optional | Array of object | `inventory_demands[]`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsinventory_demands). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsmodifiers). |
| `name` | Conditional | string |  |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | object | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. `subscription`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemssubscription). |
| `tax` | Optional | object | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1tax), [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-3tax). |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Conditional | string |  |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].fulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Items: minLength: `1`. |
| `combination_policy` | Optional | string | Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | object | Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. `origin_policy`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_itemsfulfillmentorigin_policy). |
| `requirement` | Required | string | Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].fulfillment.origin_policy

Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. |
| `origin_policy_type` | Required | string | Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | object | `face_value_money`: [field definitions](../models/GiftCardPurchaseSnapshotConsiderationMoney.md#giftcardpurchasesnapshotconsiderationmoney). |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].gift_card_purchase.face_value_money

Field definitions: [GiftCardPurchaseSnapshotConsiderationMoney](../models/GiftCardPurchaseSnapshotConsiderationMoney.md#giftcardpurchasesnapshotconsiderationmoney).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].image

A reference to an image by `url`, with optional `alt` text, used on an order line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. minLength: `1`. |
| `url` | Required | string | URL of the image. minLength: `1`. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].inventory_demands[]

The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.

Field definitions: [shared fields](OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. minLength: `1`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `text` | Conditional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | Text a buyer entered for a text modifier group on an order line item. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].modifiers[] variant 1

oneOf variant 1.

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].modifiers[] variant 2

oneOf variant 2.

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[].subscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequestInput.md#subscribedlinerequestinput).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200data-variant-1line_items-variant-1tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation

A tax calculation you supply for a draft order line item, made of tax components and a price mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of object | minItems: `1`. `components[]`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculationcomponents). |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation.components[]

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | object | The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation.components[].jurisdiction

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 2.tax

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1tax).

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 3.tax

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewscreateresponse200data-variant-1line_items-variant-3tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 3.tax line_item_tax_category values

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

### DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 3.tax.calculation

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items-variant-1taxcalculation).

