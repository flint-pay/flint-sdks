[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptions

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location). |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string |  |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address). |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string |  |

### DeliveryPreviewResponseDataDeliveryOptions.buyer_location

Declared alternatives: [DeliveryPreviewResponse.data variant 1.buyer_location](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_location).

### DeliveryPreviewResponseDataDeliveryOptions.destination_address

Field definitions: [DeliveryPreviewResponse.data variant 1.destination_address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address).

### DeliveryPreviewResponseDataDeliveryOptions.line_items[]

Declared alternatives: [DeliveryPreviewResponse.data variant 1.line_items[]](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1line_items).

