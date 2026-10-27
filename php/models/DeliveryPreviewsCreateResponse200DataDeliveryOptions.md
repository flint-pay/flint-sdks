[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptions

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_location). |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResource](../models/DeliveryPreviewChoiceGroupResource.md#deliverypreviewchoicegroupresource) |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `delivery_method_ids` | Required | Array of string |  |
| `destination_address` | Optional | [DeliveryAddressResource](../models/DeliveryAddressResource.md#deliveryaddressresource) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. `destination_address`: [field definitions](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1destination_address). |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string |  |

### DeliveryPreviewsCreateResponse200DataDeliveryOptions.buyer_location

Declared alternatives: [DeliveryPreviewsCreateResponse200.data variant 1.buyer_location](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1buyer_location).

### DeliveryPreviewsCreateResponse200DataDeliveryOptions.destination_address

Field definitions: [DeliveryPreviewsCreateResponse200.data variant 1.destination_address](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1destination_address).

### DeliveryPreviewsCreateResponse200DataDeliveryOptions.line_items[]

Declared alternatives: [DeliveryPreviewsCreateResponse200.data variant 1.line_items[]](../models/DeliveryPreviewsCreateResponse200.md#deliverypreviewscreateresponse200data-variant-1line_items).

