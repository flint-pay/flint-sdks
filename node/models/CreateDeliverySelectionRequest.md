[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionRequest

The request body for: Create delivery selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `choices` | Required | Array of [CreateDeliverySelectionChoiceRequest](../models/CreateDeliverySelectionChoiceRequest.md#createdeliveryselectionchoicerequest) |  |
| `delivery_quote_id` | Required | string | minLength: `1`. |
| `destination_address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequest](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |

