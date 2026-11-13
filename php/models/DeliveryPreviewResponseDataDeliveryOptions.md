[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptions

Resource, collection, or operation result returned by this request.

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the request sent none. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location). |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) | Groups of order items that each choose their own delivery option. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the preview evaluated. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Destination address used to evaluate shipment and local delivery options. Omitted when the request sent none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address). |
| `evaluated_at` | Required | string | Time Flint computed this preview. Format: `date-time`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Request a new preview after this time, because prices and availability may have changed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `line_items` | Required | Array of (object and Alternative shapes (see declared variants)) | Items the preview evaluated. `line_items[]`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | ID of the Location at which pickup methods were priced. Omitted when the request sent none. |

### DeliveryPreviewResponseDataDeliveryOptions.buyer_location

Declared alternatives: [DeliveryPreviewResponse.data variant 1.buyer_location](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location).

### DeliveryPreviewResponseDataDeliveryOptions.destination_address

Field definitions: [DeliveryPreviewResponse.data variant 1.destination_address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address).

### DeliveryPreviewResponseDataDeliveryOptions.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliveryPreviewResponseDataDeliveryOptions.line_items[]

Declared alternatives: [DeliveryPreviewResponse.data variant 1.line_items[]](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items).

### DeliveryPreviewResponseDataDeliveryOptions.merchant_diagnostics[]

Field definitions: [CheckoutSessionResponse.data.delivery.merchant_diagnostics[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics).

