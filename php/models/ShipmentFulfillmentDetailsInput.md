[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentFulfillmentDetailsInput

Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipped_at` | Optional | string | When the shipment was handed to the carrier. Format: `date-time`. |
| `timezone` | Optional | string | IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: `255`. |
| `window_end_at` | Optional | string | End of the scheduled shipping window. Format: `date-time`. |
| `window_start_at` | Optional | string | Start of the scheduled shipping window. Format: `date-time`. |

