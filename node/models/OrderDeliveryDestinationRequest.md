[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRequest

The delivery destination you set when creating or updating an order, with an address and an optional recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequest](../models/AddressRequest.md#addressrequest) | Address to deliver the order's items to. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientRequest](../models/OrderDeliveryDestinationRecipientRequest.md#orderdeliverydestinationrecipientrequest) | Who receives the order. The recipient name and phone you supply for an order delivery. Send null to clear a field. minProperties: `1`. |

