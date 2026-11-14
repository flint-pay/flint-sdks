[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderHandoverRequestInput

Request input. Response: [OrderHandover](../models/OrderHandover.md#orderhandover).

Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Active location with a complete address where the buyer receives the goods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

