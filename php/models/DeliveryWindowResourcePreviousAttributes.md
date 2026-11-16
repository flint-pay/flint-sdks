[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of delivery in this window. |
| `delivery_window_id` | Optional | string or null | ID of this window. The buyer sends it to choose the window. `delivery_window_id`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesdelivery_window_id). |
| `end_at` | Optional | string or null | End of this delivery window. `end_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesend_at). |
| `expires_at` | Optional | string or null | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. `expires_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesexpires_at). |
| `start_at` | Optional | string or null | Start of this delivery window. `start_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesstart_at). |

### DeliveryWindowResourcePreviousAttributes.delivery_window_id

### DeliveryWindowResourcePreviousAttributes.delivery_window_id variant 1

anyOf variant 1: ID of this window. The buyer sends it to choose the window..

- Value shape: string. ID of this window. The buyer sends it to choose the window. 

### DeliveryWindowResourcePreviousAttributes.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of this window. The buyer sends it to choose the window. 

### DeliveryWindowResourcePreviousAttributes.end_at

### DeliveryWindowResourcePreviousAttributes.end_at variant 1

anyOf variant 1: End of this delivery window..

- Value shape: string. End of this delivery window. End of this delivery window. Format: `date-time`. 

### DeliveryWindowResourcePreviousAttributes.end_at variant 2

anyOf variant 2.

- Value shape: null. End of this delivery window. 

### DeliveryWindowResourcePreviousAttributes.expires_at

### DeliveryWindowResourcePreviousAttributes.expires_at variant 1

anyOf variant 1: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier..

- Value shape: string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. 

### DeliveryWindowResourcePreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. 

### DeliveryWindowResourcePreviousAttributes.start_at

### DeliveryWindowResourcePreviousAttributes.start_at variant 1

anyOf variant 1: Start of this delivery window..

- Value shape: string. Start of this delivery window. Start of this delivery window. Format: `date-time`. 

### DeliveryWindowResourcePreviousAttributes.start_at variant 2

anyOf variant 2.

- Value shape: null. Start of this delivery window. 

