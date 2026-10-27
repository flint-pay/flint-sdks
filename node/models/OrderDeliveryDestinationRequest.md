[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRequest

The delivery destination you set when creating or updating an order, with an address and an optional recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderDeliveryDestinationAddressRequest](../models/OrderDeliveryDestinationAddressRequest.md#orderdeliverydestinationaddressrequest) | The delivery address you supply on an order. Postal code and state are required for US addresses. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientRequest](../models/OrderDeliveryDestinationRecipientRequest.md#orderdeliverydestinationrecipientrequest) | The recipient name and phone you supply for an order delivery. Send null to clear a field. minProperties: `1`. |

