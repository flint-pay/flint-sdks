[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderHandover







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

### OrderHandover variant 1

anyOf variant 1: Declared schema OrderHandover. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection..

- Constraints for `location_id`: Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there.

### OrderHandover variant 2

anyOf variant 2: Declared schema OrderHandoverRequest. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection..

- Constraints for `location_id`: Active location with a complete address where the buyer receives the goods. minLength: `1`.

