[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliverySummary

Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Method used by governing_delivery_selection_id. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | Name, email and phone of the recipient recorded by the governing selection. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `type` | Required | string | How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`. |

