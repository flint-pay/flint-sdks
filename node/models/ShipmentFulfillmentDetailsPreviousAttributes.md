[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentFulfillmentDetailsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipped_at` | Optional | string or null | When the shipment was handed to the carrier. `shipped_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributesshipped_at). |
| `timezone` | Optional | string or null | IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. `timezone`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributestimezone). |
| `window_end_at` | Optional | string or null | End of the scheduled shipping window. `window_end_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributeswindow_end_at). |
| `window_start_at` | Optional | string or null | Start of the scheduled shipping window. `window_start_at`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributeswindow_start_at). |

### ShipmentFulfillmentDetailsPreviousAttributes.shipped_at

### ShipmentFulfillmentDetailsPreviousAttributes.shipped_at variant 1

anyOf variant 1: When the shipment was handed to the carrier..

- Value shape: string. When the shipment was handed to the carrier. When the shipment was handed to the carrier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributes.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was handed to the carrier. 

### ShipmentFulfillmentDetailsPreviousAttributes.timezone

### ShipmentFulfillmentDetailsPreviousAttributes.timezone variant 1

anyOf variant 1: IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window..

- Value shape: string. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: `255`. 

### ShipmentFulfillmentDetailsPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. 

### ShipmentFulfillmentDetailsPreviousAttributes.window_end_at

### ShipmentFulfillmentDetailsPreviousAttributes.window_end_at variant 1

anyOf variant 1: End of the scheduled shipping window..

- Value shape: string. End of the scheduled shipping window. End of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributes.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the scheduled shipping window. 

### ShipmentFulfillmentDetailsPreviousAttributes.window_start_at

### ShipmentFulfillmentDetailsPreviousAttributes.window_start_at variant 1

anyOf variant 1: Start of the scheduled shipping window..

- Value shape: string. Start of the scheduled shipping window. Start of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ShipmentFulfillmentDetailsPreviousAttributes.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the scheduled shipping window. 

