[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteMethodResource

A delivery method offered in a delivery quote, with its name, type, display position, and revision.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | ID of the method revision that was evaluated. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `description` | Optional | string | Buyer-visible description of the method. Omitted when it has none. |
| `display_position` | Required | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `name` | Required | string | Buyer-visible name of the method. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `type` | Required | string | Delivery type of the method. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |

