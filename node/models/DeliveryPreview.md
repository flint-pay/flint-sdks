[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreview

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreview.md#deliverypreviewbuyer_location). |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Required | Array of string |  |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. `destination_address`: [field definitions](../models/DeliveryPreview.md#deliverypreviewdestination_address). |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | `line_items[]`: [declared alternatives](../models/DeliveryPreview.md#deliverypreviewline_items). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string |  |

### DeliveryPreview.buyer_location

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `coordinate` | Conditional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryPreview.buyer_location variant 1: `type` = `"address"`

oneOf variant 1: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryPreview.buyer_location variant 2: `type` = `"coordinate"`

oneOf variant 2: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryPreview.buyer_location.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

### DeliveryPreview.buyer_location.coordinate

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate).

### DeliveryPreview.destination_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressRequest.md#deliveryaddressrequest).

### DeliveryPreview.line_items[]

A line item in a delivery preview: a catalog variant, a bundle, or a custom item with a name and unit price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `fulfillment` | Conditional | [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest) | Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseRequest](../models/GiftCardPurchaseRequest.md#giftcardpurchaserequest) | Buyer-selected face value and recipient for a gift_card variant. The server freezes the offer and resolves consideration per unit. Omit to purchase the reference denomination without a recipient. Gift card details for an order line item: the `face_value_money` and the `recipient` who receives the card. `gift_card_purchase`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase). |
| `image` | Optional | [ImageReferenceRequest](../models/ImageReferenceRequest.md#imagereferencerequest) | A reference to an image by `url`, with optional `alt` text, used on an order line item. |
| `inventory_demands` | Optional | Array of [OrderDraftLineItemInventoryDemandRequest](../models/OrderDraftLineItemInventoryDemandRequest.md#orderdraftlineiteminventorydemandrequest) |  |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. `modifiers[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers). |
| `name` | Conditional | string |  |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) | Selected recurring terms for this variant. Lines with the same cadence start one subscription after payment. Makes an order line a subscription purchase, with the subscription offer and billing interval. |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation. `tax`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax). |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit. Accepted only for custom lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit. Accepted only for custom lines without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Conditional | string |  |

### DeliveryPreview.line_items[] variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `fulfillment`, `name`, `unit_price_money`.

### DeliveryPreview.line_items[] variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`unit_weight`); present(`unit_dimensions`); present(`description`); present(`image`); present(`inventory_demands`); present(`fulfillment`); present(`gift_card_purchase`))).
- Required: `bundle_id`.
- Optional: `fulfillment`, `name`, `unit_price_money`, `variant_id`.

### DeliveryPreview.line_items[] variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`); present(`gift_card_purchase`))).
- Required: `fulfillment`, `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.

### DeliveryPreview.line_items[].gift_card_purchase

Field definitions: [CreateOrderLineItem variant 1.gift_card_purchase](../models/CreateOrderLineItem.md#createorderlineitem-variant-1gift_card_purchase).

### DeliveryPreview.line_items[].modifiers[]

Declared alternatives: [AddLineItemsRequest.line_items[].modifiers[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmodifiers).

### DeliveryPreview.line_items[] variant 1.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### DeliveryPreview.line_items[].unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPreview.line_items[] variant 2.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1tax).

### DeliveryPreview.line_items[] variant 3.tax

Field definitions: [AddLineItemsRequest.line_items[] variant 3.tax](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-3tax).

