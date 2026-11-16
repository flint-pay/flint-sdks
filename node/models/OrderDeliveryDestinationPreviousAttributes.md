[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Address the order's items are delivered to. |
| `delivery_selection_id` | Optional | string or null | Delivery selection that controls this destination, when checkout collected it. `delivery_selection_id`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesdelivery_selection_id). |
| `frozen_at` | Optional | string or null | Time payment froze this destination. `frozen_at`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesfrozen_at). |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientPreviousAttributes](../models/OrderDeliveryDestinationRecipientPreviousAttributes.md#orderdeliverydestinationrecipientpreviousattributes) or null | Who receives the order. Omitted when no recipient was saved. |
| `source` | Optional | string or null | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. `source`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributessource). |

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that controls this destination, when checkout collected it..

- Value shape: string. Delivery selection that controls this destination, when checkout collected it. Delivery selection that controls this destination, when checkout collected it. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that controls this destination, when checkout collected it. 

### OrderDeliveryDestinationPreviousAttributes.frozen_at

### OrderDeliveryDestinationPreviousAttributes.frozen_at variant 1

anyOf variant 1: Time payment froze this destination..

- Value shape: string. Time payment froze this destination. Time payment froze this destination. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderDeliveryDestinationPreviousAttributes.frozen_at variant 2

anyOf variant 2.

- Value shape: null. Time payment froze this destination. 

### OrderDeliveryDestinationPreviousAttributes.source

### OrderDeliveryDestinationPreviousAttributes.source variant 1

anyOf variant 1: Where the destination came from..

- Value shape: string. Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`.

### OrderDeliveryDestinationPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Where the destination came from. 

