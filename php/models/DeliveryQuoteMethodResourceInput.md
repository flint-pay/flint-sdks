[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteMethodResourceInput

A delivery method offered in a delivery quote, with its name, type, display position, and revision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `description` | Optional | string |  |
| `display_position` | Required | integer | Format: `int32`. |
| `name` | Required | string |  |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |

