[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerDigitalFulfillmentDetailsInput

Buyer-facing details of a digital fulfillment: when it was delivered and the download link, which is `null` once the buyer no longer has download access.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string | When the digital goods were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_url` | Optional | string or null | URL where the buyer can access the delivered digital goods. Omitted when the merchant hasn't set one. `null` when the buyer no longer has download access, for example after the covered lines are refunded. |

