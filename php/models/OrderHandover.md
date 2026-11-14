[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderHandover

Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. |

