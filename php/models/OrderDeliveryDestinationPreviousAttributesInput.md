[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Address the order's items are delivered to. |
| `delivery_selection_id` | Optional | string or null | Delivery selection that controls this destination, when checkout collected it. `delivery_selection_id`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributesInput.md#orderdeliverydestinationpreviousattributesinputdelivery_selection_id). |
| `frozen_at` | Optional | string or null | Time payment froze this destination. `frozen_at`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributesInput.md#orderdeliverydestinationpreviousattributesinputfrozen_at). |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientPreviousAttributesInput](../models/OrderDeliveryDestinationRecipientPreviousAttributesInput.md#orderdeliverydestinationrecipientpreviousattributesinput) or null | Who receives the order. Omitted when no recipient was saved. |
| `source` | Optional | string or null | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. `source`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributesInput.md#orderdeliverydestinationpreviousattributesinputsource). |

### OrderDeliveryDestinationPreviousAttributesInput.delivery_selection_id

### OrderDeliveryDestinationPreviousAttributesInput.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that controls this destination, when checkout collected it..

- Value shape: string. Delivery selection that controls this destination, when checkout collected it. Delivery selection that controls this destination, when checkout collected it. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### OrderDeliveryDestinationPreviousAttributesInput.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that controls this destination, when checkout collected it. 

### OrderDeliveryDestinationPreviousAttributesInput.frozen_at

### OrderDeliveryDestinationPreviousAttributesInput.frozen_at variant 1

anyOf variant 1: Time payment froze this destination..

- Value shape: string. Time payment froze this destination. Time payment froze this destination. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderDeliveryDestinationPreviousAttributesInput.frozen_at variant 2

anyOf variant 2.

- Value shape: null. Time payment froze this destination. 

### OrderDeliveryDestinationPreviousAttributesInput.source

### OrderDeliveryDestinationPreviousAttributesInput.source variant 1

anyOf variant 1: Where the destination came from..

- Value shape: string. Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`.

### OrderDeliveryDestinationPreviousAttributesInput.source variant 2

anyOf variant 2.

- Value shape: null. Where the destination came from. 

