[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponse

The response for: Create delivery preview.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. `data`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryPreviewResponse.data

Resource, collection, or operation result returned by this request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Conditional | object and Alternative shapes (see declared variants) | Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the request sent none. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location). |
| `choice_groups` | Conditional | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) | Groups of order items that each choose their own delivery option. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Conditional | Array of string | Delivery methods the preview evaluated. |
| `destination_address` | Conditional | [Address](../models/Address.md#address) | Destination address used to evaluate shipment and local delivery options. Omitted when the request sent none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address). |
| `evaluated_at` | Required | string | Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Conditional | string | Request a new preview after this time, because prices and availability may have changed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Items the preview evaluated. `line_items[]`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items). |
| `merchant_diagnostics` | Optional | Varies by condition | `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics), [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-2merchant_diagnostics). |
| `mode` | Required | string |  |
| `pickup_location_id` | Conditional | string | ID of the Location at which pickup methods were priced. Omitted when the request sent none. |
| `locations` | Conditional | Array of [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |

### DeliveryPreviewResponse.data variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics..

- Required: `choice_groups`, `currency`, `delivery_method_ids`, `expires_at`, `line_items`.
- Optional: `buyer_location`, `destination_address`, `pickup_location_id`.
- Undeclared: `locations`.
- Constraints for `evaluated_at`: Time Flint computed this preview.
- Constraints for `evaluation_status`: How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`.
- Constraints for `input_requirements`: Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids.
- Constraints for `merchant_diagnostics`: Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic). Present for merchant callers as an array, including when empty. Absent for buyer callers.
- Constraints for `mode`: The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`.

### DeliveryPreviewResponse.data variant 2: `mode` = `"pickup_locations"`

oneOf with mode: "pickup_locations": The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics..

- Required: `locations`.
- Undeclared: `buyer_location`, `choice_groups`, `currency`, `delivery_method_ids`, `destination_address`, `expires_at`, `line_items`, `pickup_location_id`.
- Constraints for `evaluated_at`: Time Flint evaluated pickup availability.
- Constraints for `evaluation_status`: How completely Flint evaluated the pickup Locations. Values: `"complete"`, `"incomplete"`, `"degraded"`.
- Constraints for `input_requirements`: Inputs the pickup methods need before Flint can evaluate them.
- Constraints for `merchant_diagnostics`: Array of [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnostic.md#deliverypickupavailabilitydiagnostic). Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty.
- Constraints for `mode`: The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`.

### DeliveryPreviewResponse.data variant 1.buyer_location

Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the request sent none. The normalized buyer address or coordinate used for this quote.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [Address](../models/Address.md#address) | The buyer location as an address. Set only when `type` is `address`. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress). |
| `coordinate` | Conditional | object | The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationcoordinate). |
| `type` | Required | string | Whether the buyer location is an address or a coordinate. Values: `"address"`, `"coordinate"`. |

### DeliveryPreviewResponse.data variant 1.buyer_location variant 1: `type` = `"address"`

oneOf with type: "address": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryPreviewResponse.data variant 1.buyer_location variant 2: `type` = `"coordinate"`

oneOf with type: "coordinate": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryPreviewResponse.data variant 1.buyer_location.address

The buyer location as an address. Set only when `type` is `address`. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### DeliveryPreviewResponse.data variant 1.buyer_location.coordinate

The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude.

Field definitions: [shared fields](DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationAddressCoordinate.md#deliverypreviewresponsedatadeliveryoptionsbuyerlocationaddresscoordinate).

### DeliveryPreviewResponse.data variant 1.destination_address

Destination address used to evaluate shipment and local delivery options. Omitted when the request sent none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### DeliveryPreviewResponse.data variant 1.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryPreviewResponse.data variant 1.line_items[]

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | ID of the bundle to add. A catalog line item sends this or `variant_id`; a custom line item sends neither. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the item as it appears on the order. |
| `fulfillment` | Conditional | object | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. `fulfillment`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillment). |
| `gift_card_purchase` | Optional | object | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchase). |
| `image` | Optional | object | Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item. `image`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsimage). |
| `inventory_demands` | Optional | Array of object | Inventory items and quantities each unit of the line takes from stock. `inventory_demands[]`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsinventory_demands). |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `modifiers` | Optional | Array of (object and Alternative shapes (see declared variants)) | Modifiers sold with the item, each chosen from the catalog or typed as text. Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsmodifiers). |
| `name` | Conditional | string | Name of the item as it appears on the order. |
| `product_id` | Conditional | string | Parent product of variant_id, resolved by the preview. Required for variant lines; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Optional | integer | Number of units, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | object | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. `subscription`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemssubscription). |
| `tax` | Optional | object | How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1tax), [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-3tax). |
| `type` | Required | string | Selects the type branch. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Conditional | string | ID of the product variant to add. A catalog line item sends this or `bundle_id`; a custom line item sends neither. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### DeliveryPreviewResponse.data variant 1.line_items[] variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `product_id`, `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### DeliveryPreviewResponse.data variant 1.line_items[] variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `product_id`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### DeliveryPreviewResponse.data variant 1.line_items[] variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `CreateOrderLineItem`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `product_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### DeliveryPreviewResponse.data variant 1.line_items[].fulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} when nothing is delivered. For manual digital or service delivery, send requirement required, resolution_mode manual, and allowed_types containing digital or service. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | object | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. `origin_policy`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsfulfillmentorigin_policy). |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### DeliveryPreviewResponse.data variant 1.line_items[].fulfillment.origin_policy

Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

Field definitions: [shared fields](LineItemFulfillmentOriginRequestInput.md#lineitemfulfillmentoriginrequestinput).

### DeliveryPreviewResponse.data variant 1.line_items[].gift_card_purchase

Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `face_value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Buyer-selected face value within the gift card offer's limits. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `recipient` | Optional | [GiftCardPurchaseRecipient](../models/GiftCardPurchaseRecipient.md#giftcardpurchaserecipient) | Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time. `recipient`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsgift_card_purchaserecipient). |

### DeliveryPreviewResponse.data variant 1.line_items[].gift_card_purchase.recipient

Who receives the gift card. `null` when no recipient was set. The recipient of a purchased gift card: `email`, optional `name` and `message`, and an optional `send_at` time.

Field definitions: [shared fields](GiftCardPurchaseRecipientInput.md#giftcardpurchaserecipientinput).

### DeliveryPreviewResponse.data variant 1.line_items[].image

Image of the item as it appears on the order. A reference to an image by `url`, with optional `alt` text, used on an order line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `alt` | Optional | string | Alternative text describing the image for accessibility. minLength: `1`. |
| `url` | Required | string | URL of the image. minLength: `1`. |

### DeliveryPreviewResponse.data variant 1.line_items[].inventory_demands[]

The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.

Field definitions: [shared fields](OrderDraftLineItemInventoryDemandRequestInput.md#orderdraftlineiteminventorydemandrequestinput).

### DeliveryPreviewResponse.data variant 1.line_items[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### DeliveryPreviewResponse.data variant 1.line_items[].modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned metadata for this selection, returned on the order line item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsmodifiersmetadata). |
| `modifier_id` | Conditional | string | ID of the existing modifier. Treated as an opaque resource reference; accepted spellings follow resource ID validation. Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `order_line_item_modifier_id` | Optional | string | Existing selection ID to retain during replacement. minLength: `1`. pattern: `^olim_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Conditional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier group on an order line item. `text`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_itemsmodifierstext). |
| `type` | Required | string | Selects the type branch. Values: `"catalog"`, `"text"`. |

### DeliveryPreviewResponse.data variant 1.line_items[].modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### DeliveryPreviewResponse.data variant 1.line_items[].modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`order_line_item_modifier_id`)).
- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### DeliveryPreviewResponse.data variant 1.line_items[].modifiers[].metadata

Value shape: Map of string. Caller-owned metadata for this selection, returned on the order line item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. 

### DeliveryPreviewResponse.data variant 1.line_items[].modifiers[].text

The text to use. Send it with a `text` modifier. Text a buyer entered for a text modifier group on an order line item.

Field definitions: [shared fields](TextModifierRequestInput.md#textmodifierrequestinput).

### DeliveryPreviewResponse.data variant 1.line_items[].subscription

Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval.

Field definitions: [shared fields](SubscribedLineRequestInput.md#subscribedlinerequestinput).

### DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewresponsedata-variant-1line_items-variant-1tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax line_item_tax_category values

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

### DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of object | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation.components[]

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | object | The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. `jurisdiction`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation.components[].jurisdiction

The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Field definitions: [shared fields](OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput).

### DeliveryPreviewResponse.data variant 1.line_items[] variant 2.tax

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1tax).

### DeliveryPreviewResponse.data variant 1.line_items[] variant 3.tax

How tax applies to this line item. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | object | The tax you supply for this line item. Used when the order's tax `mode` is `external`. A tax calculation you supply for a draft order line item, made of tax components and a price mode. `calculation`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#deliverypreviewresponsedata-variant-1line_items-variant-3tax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### DeliveryPreviewResponse.data variant 1.line_items[] variant 3.tax line_item_tax_category values

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

### DeliveryPreviewResponse.data variant 1.line_items[] variant 3.tax.calculation

Field definitions: [DeliveryPreviewResponse.data variant 1.line_items[] variant 1.tax.calculation](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items-variant-1taxcalculation).

### DeliveryPreviewResponse.data variant 1.merchant_diagnostics[]

Field definitions: [CheckoutSessionResponse.data.delivery.merchant_diagnostics[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics).

### DeliveryPreviewResponse.data variant 2.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryPreviewResponse.data variant 2.merchant_diagnostics[]

A merchant-only diagnostic about a configured pickup location that was left out of the results or cannot supply the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable reason a configured pickup location was left out of the results or cannot supply the order. - `pickup_location_inactive`: The Location is inactive, so it was left out. - `pickup_location_geography_unavailable`: The Location has no usable published geography, so it was left out. - `pickup_location_inventory_unavailable`: The Location does not allocate inventory, so it cannot supply the order's tracked items. It is listed with an unavailable outcome. Items without tracked inventory need no allocation. - `pickup_location_dependency_failure`: Flint could not resolve the configured Location. Values: [4 declared values](#deliverypreviewresponsedata-variant-2merchant_diagnostics-code-values). |
| `diagnostic_id` | Required | string | ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. |
| `location_id` | Required | string | ID of the Location that was evaluated. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `occurred_at` | Required | string | Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outcome` | Required | string | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"cannot_calculate"`. |
| `recommended_action` | Required | string | What the merchant can do to get an option. Values: `"review_configuration"`, `"retry"`. |
| `retryable` | Required | boolean | Whether trying again later can succeed. |
| `scope` | Required | string | What the diagnostic is about. Values: `"location"`. |
| `summary` | Required | string | Plain-language explanation for the merchant. |

#### DeliveryPreviewResponse.data variant 2.merchant_diagnostics[] code values

- `"pickup_location_inactive"`
- `"pickup_location_geography_unavailable"`
- `"pickup_location_inventory_unavailable"`
- `"pickup_location_dependency_failure"`

### DeliveryPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

