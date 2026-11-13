[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryMethodUpdate

The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method` | Required | [UpdateDeliveryMethodRequest](../models/UpdateDeliveryMethodRequest.md#updatedeliverymethodrequest) | The edit to preview, in the same shape as an update to the delivery method. Flint saves nothing. The request body for: Update delivery method. minProperties: `1`. |
| `delivery_method_id` | Required | string | ID of the delivery method whose edit to preview. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `mode` | Required | string | Selects the delivery method update preview. Values: `"delivery_method_update"`. |

