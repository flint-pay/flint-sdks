[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of delivery in this window. `amount_money`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesamount_money). |
| `delivery_window_id` | Optional | string or null | ID of this window. The buyer sends it to choose the window. `delivery_window_id`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesdelivery_window_id). |
| `end_at` | Optional | string or null | End of this delivery window. `end_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesend_at). |
| `expires_at` | Optional | string or null | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. `expires_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesexpires_at). |
| `start_at` | Optional | string or null | Start of this delivery window. `start_at`: [declared alternatives](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributesstart_at). |

### DeliveryWindowResourcePreviousAttributes.amount_money

Price of delivery in this window.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliveryWindowResourcePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliveryWindowResourcePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price of delivery in this window. 

### DeliveryWindowResourcePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### DeliveryWindowResourcePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### DeliveryWindowResourcePreviousAttributes.delivery_window_id

### DeliveryWindowResourcePreviousAttributes.delivery_window_id variant 1

anyOf variant 1: ID of this window. The buyer sends it to choose the window..

- Value shape: string. ID of this window. The buyer sends it to choose the window. ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliveryWindowResourcePreviousAttributes.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of this window. The buyer sends it to choose the window. 

### DeliveryWindowResourcePreviousAttributes.end_at

### DeliveryWindowResourcePreviousAttributes.end_at variant 1

anyOf variant 1: End of this delivery window..

- Value shape: string. End of this delivery window. End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributes.end_at variant 2

anyOf variant 2.

- Value shape: null. End of this delivery window. 

### DeliveryWindowResourcePreviousAttributes.expires_at

### DeliveryWindowResourcePreviousAttributes.expires_at variant 1

anyOf variant 1: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier..

- Value shape: string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. 

### DeliveryWindowResourcePreviousAttributes.start_at

### DeliveryWindowResourcePreviousAttributes.start_at variant 1

anyOf variant 1: Start of this delivery window..

- Value shape: string. Start of this delivery window. Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryWindowResourcePreviousAttributes.start_at variant 2

anyOf variant 2.

- Value shape: null. Start of this delivery window. 

