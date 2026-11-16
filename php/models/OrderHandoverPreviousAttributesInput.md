[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderHandoverPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string or null | Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. `location_id`: [declared alternatives](../models/OrderHandoverPreviousAttributesInput.md#orderhandoverpreviousattributesinputlocation_id). |

### OrderHandoverPreviousAttributesInput.location_id

### OrderHandoverPreviousAttributesInput.location_id variant 1

anyOf variant 1: Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there..

- Value shape: string. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderHandoverPreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. 

