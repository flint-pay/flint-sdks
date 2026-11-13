[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionDeliveryMigrationRequestInput

The request body for: Move subscribers to another delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `from_delivery_method_id` | Required | string | ID of the delivery method whose subscriptions to move. One migration can run for a method at a time. minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `subscription_plan_id` | Optional | string | Limit the migration to this plan's live subscriptions. minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `to_delivery_method_id` | Required | string | ID of the active delivery method to move them to. A subscription the new method can't serve is reported as a failure and keeps its current method. minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |

