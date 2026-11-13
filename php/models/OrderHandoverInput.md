[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderHandoverInput

Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

