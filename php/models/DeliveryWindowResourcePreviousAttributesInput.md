[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of delivery in this window. |
| `delivery_window_id` | Optional | string or null | ID of this window. The buyer sends it to choose the window. `delivery_window_id`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinputdelivery_window_id). |
| `end_at` | Optional | string or null | End of this delivery window. `end_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinputend_at). |
| `expires_at` | Optional | string or null | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. `expires_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinputexpires_at). |
| `start_at` | Optional | string or null | Start of this delivery window. `start_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributesInput.md#deliverywindowresourcepreviousattributesinputstart_at). |

### DeliveryWindowResourcePreviousAttributesInput.delivery_window_id

### DeliveryWindowResourcePreviousAttributesInput.delivery_window_id variant 1

anyOf variant 1: ID of this window. The buyer sends it to choose the window..

- Value shape: string. ID of this window. The buyer sends it to choose the window. ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliveryWindowResourcePreviousAttributesInput.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of this window. The buyer sends it to choose the window. 

### DeliveryWindowResourcePreviousAttributesInput.end_at

### DeliveryWindowResourcePreviousAttributesInput.end_at variant 1

anyOf variant 1: End of this delivery window..

- Value shape: string. End of this delivery window. End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributesInput.end_at variant 2

anyOf variant 2.

- Value shape: null. End of this delivery window. 

### DeliveryWindowResourcePreviousAttributesInput.expires_at

### DeliveryWindowResourcePreviousAttributesInput.expires_at variant 1

anyOf variant 1: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier..

- Value shape: string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. 

### DeliveryWindowResourcePreviousAttributesInput.start_at

### DeliveryWindowResourcePreviousAttributesInput.start_at variant 1

anyOf variant 1: Start of this delivery window..

- Value shape: string. Start of this delivery window. Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributesInput.start_at variant 2

anyOf variant 2.

- Value shape: null. Start of this delivery window. 

