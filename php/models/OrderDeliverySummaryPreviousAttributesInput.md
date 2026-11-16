[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliverySummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Optional | string or null | Method used by governing_delivery_selection_id. `delivery_method_id`: [declared alternatives](../models/OrderDeliverySummaryPreviousAttributesInput.md#orderdeliverysummarypreviousattributesinputdelivery_method_id). |
| `recipient` | Optional | [DeliveryRecipientResourcePreviousAttributesInput](../models/DeliveryRecipientResourcePreviousAttributesInput.md#deliveryrecipientresourcepreviousattributesinput) or null | Name, email and phone of the recipient recorded by the governing selection. |
| `type` | Optional | string or null | How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/OrderDeliverySummaryPreviousAttributesInput.md#orderdeliverysummarypreviousattributesinputtype). |

### OrderDeliverySummaryPreviousAttributesInput.delivery_method_id

### OrderDeliverySummaryPreviousAttributesInput.delivery_method_id variant 1

anyOf variant 1: Method used by governing_delivery_selection_id..

- Value shape: string. Method used by governing_delivery_selection_id. Method used by governing_delivery_selection_id. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### OrderDeliverySummaryPreviousAttributesInput.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method used by governing_delivery_selection_id. 

### OrderDeliverySummaryPreviousAttributesInput.type

### OrderDeliverySummaryPreviousAttributesInput.type variant 1

anyOf variant 1: How the governing selection delivers this order..

- Value shape: string. How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`.

### OrderDeliverySummaryPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How the governing selection delivers this order. 

