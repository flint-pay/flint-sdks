[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DigitalFulfillmentDetails

Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string | When the digital goods were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_url` | Optional | string | URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. |

