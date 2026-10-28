[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRequestInput

The delivery destination you set when creating or updating an order, with an address and an optional recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientRequestInput](../models/OrderDeliveryDestinationRecipientRequestInput.md#orderdeliverydestinationrecipientrequestinput) | The recipient name and phone you supply for an order delivery. Send null to clear a field. minProperties: `1`. |

