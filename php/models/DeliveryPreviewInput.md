[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewInput

The delivery options and prices Flint would offer for the supplied items and buyer location, with input requirements and merchant diagnostics.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationResourceInput](../models/DeliveryBuyerLocationResourceInput.md#deliverybuyerlocationresourceinput) | Buyer location used to evaluate delivery availability and pickup proximity. Omitted when the request sent none. The normalized buyer address or coordinate used for this quote. |
| `choice_groups` | Required | Array of [DeliveryPreviewChoiceGroupResourceInput](../models/DeliveryPreviewChoiceGroupResourceInput.md#deliverypreviewchoicegroupresourceinput) | Groups of order items that each choose their own delivery option. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Required | Array of string | Delivery methods the preview evaluated. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Destination address used to evaluate shipment and local delivery options. Omitted when the request sent none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `evaluated_at` | Required | string | Time Flint computed this preview. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Request a new preview after this time, because prices and availability may have changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `line_items` | Required | Array of [CreateOrderLineItemInput](../models/CreateOrderLineItemInput.md#createorderlineiteminput) | Items the preview evaluated. |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnosticInput](../models/DeliveryMerchantDiagnosticInput.md#deliverymerchantdiagnosticinput) | Present for merchant callers as an array, including when empty. Absent for buyer callers. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | ID of the Location at which pickup methods were priced. Omitted when the request sent none. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

