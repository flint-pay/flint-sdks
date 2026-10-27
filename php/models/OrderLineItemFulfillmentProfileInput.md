[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentProfileInput

Whether an order line item requires fulfillment, and the fulfillment types it allows.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Required | Array of string | Fulfillment types allowed for this item. Empty when fulfillment is not required. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `requirement` | Required | string | Whether this item requires fulfillment. Values: `"none"`, `"required"`. |

