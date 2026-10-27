[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDigitalFulfillmentDetails

Digital fulfillment fields to change when updating a fulfillment: delivery time and URL. Send null to clear a field.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `delivery_url` | Optional | string or null | Send null to clear it. minLength: `1`. |

