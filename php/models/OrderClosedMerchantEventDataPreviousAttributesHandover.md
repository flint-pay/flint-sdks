[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedMerchantEventDataPreviousAttributesHandover

Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. |

