[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput

The `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method` | Required | [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput) | The request body for: Update delivery method. |
| `delivery_method_id` | Required | string | minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `mode` | Required | string | Values: `"delivery_method_update"`. |

