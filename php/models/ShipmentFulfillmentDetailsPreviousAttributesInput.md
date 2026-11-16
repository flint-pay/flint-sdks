[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentFulfillmentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipped_at` | Optional | string or null | When the shipment was handed to the carrier. `shipped_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributesInput.md#shipmentfulfillmentdetailspreviousattributesinputshipped_at). |
| `timezone` | Optional | string or null | IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. `timezone`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributesInput.md#shipmentfulfillmentdetailspreviousattributesinputtimezone). |
| `window_end_at` | Optional | string or null | End of the scheduled shipping window. `window_end_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributesInput.md#shipmentfulfillmentdetailspreviousattributesinputwindow_end_at). |
| `window_start_at` | Optional | string or null | Start of the scheduled shipping window. `window_start_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributesInput.md#shipmentfulfillmentdetailspreviousattributesinputwindow_start_at). |

### ShipmentFulfillmentDetailsPreviousAttributesInput.shipped_at

### ShipmentFulfillmentDetailsPreviousAttributesInput.shipped_at variant 1

anyOf variant 1: When the shipment was handed to the carrier..

- Value shape: string. When the shipment was handed to the carrier. When the shipment was handed to the carrier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was handed to the carrier. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.timezone

### ShipmentFulfillmentDetailsPreviousAttributesInput.timezone variant 1

anyOf variant 1: IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window..

- Value shape: string. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: `255`. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_end_at

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_end_at variant 1

anyOf variant 1: End of the scheduled shipping window..

- Value shape: string. End of the scheduled shipping window. End of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the scheduled shipping window. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_start_at

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_start_at variant 1

anyOf variant 1: Start of the scheduled shipping window..

- Value shape: string. Start of the scheduled shipping window. Start of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributesInput.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the scheduled shipping window. 

