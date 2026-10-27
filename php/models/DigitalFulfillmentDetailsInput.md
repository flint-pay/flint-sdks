[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DigitalFulfillmentDetailsInput

Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string | When the digital goods were delivered, in RFC3339 format. Format: `date-time`. |
| `delivery_url` | Optional | string | URL where the recipient can access the delivered digital goods. |

