[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRequestInput

The delivery destination you set when creating or updating an order, with an address and an optional recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderDeliveryDestinationAddressRequestInput](../models/OrderDeliveryDestinationAddressRequestInput.md#orderdeliverydestinationaddressrequestinput) | The delivery address you supply on an order. Postal code and state are required for US addresses. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientRequestInput](../models/OrderDeliveryDestinationRecipientRequestInput.md#orderdeliverydestinationrecipientrequestinput) | The recipient name and phone you supply for an order delivery. Send null to clear a field. minProperties: `1`. |

