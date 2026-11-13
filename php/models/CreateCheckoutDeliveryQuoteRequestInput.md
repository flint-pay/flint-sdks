[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutDeliveryQuoteRequestInput

The request body for: Create delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | ID of an earlier delivery quote for this checkout session to price from again, such as to add caller-supplied rates. minLength: `1`. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | Buyer location used to evaluate pickup and local delivery. Send it when a method needs it. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `checkout_session_id` | Required | string | Checkout session to quote. With a checkout credential, this must be the credential's own checkout session; any other ID is refused as not found. minLength: `1`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | Address used to price shipment or local delivery. Partial is fine: send what the buyer has entered, at least country. A selection that sends destination_address must send a complete address; a selection that omits it keeps this partial address, and its input_requirements lists missing members that must be supplied before payment. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequestInput.md#deliveryinventoryassignmentrequestinput) | Locations your integration assigns stock from. The assignments for an inventory demand together cover its quantity, and a demand can have several. maxItems: `1000`. |
| `inventory_reservation_ids` | Optional | Array of string | Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to credit when routing this quote, without changing their holds. Pass the same IDs when creating the delivery selection to adopt matching held units. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequestInput.md#callersupplieddeliverymethodresultrequestinput) | Rates your integration supplies for methods with caller-supplied pricing. |
| `pickup_location_id` | Optional | string | ID of the Location at which to price pickup methods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `tier_key` | Optional | integer | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: `int64`. minimum: `0`. |

