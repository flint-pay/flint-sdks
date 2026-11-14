[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionRequestInput

The request body for: Create delivery selection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `choices` | Required | Array of [CreateDeliverySelectionChoiceRequestInput](../models/CreateDeliverySelectionChoiceRequestInput.md#createdeliveryselectionchoicerequestinput) | One chosen option for every required choice group in the quote. Use group and option IDs from this quote, not an earlier quote. |
| `delivery_quote_id` | Required | string | ID of the quote whose options to choose. The selection belongs to that quote's checkout session. minLength: `1`. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `destination_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Destination address for shipment or local delivery. When sent, it must be a complete address. When omitted, Flint keeps the quote's address, even when partial; missing members appear in input_requirements and must be supplied before payment. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `inventory_reservation_ids` | Optional | Array of string | Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to adopt atomically into the selection hold at the selected inventory items and locations. Only matching held units are released; unused units stay held, and any remaining demand uses available stock. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequestInput.md#deliveryselectionrecipientrequestinput) | Recipient details the chosen options ask for. Missing required fields are returned in input_requirements and must be supplied before payment. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |

