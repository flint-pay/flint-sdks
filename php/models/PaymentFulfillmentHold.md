[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentFulfillmentHold

A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Why the hold exists, which follows its status. Values: `"external_payment_hold"`, `"external_payment_hold_released"`. |
| `released_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `requested_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `required_action` | Required | string | What to do with fulfillment for this payment now. It follows the hold's status. Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`. |
| `status` | Required | string | Whether the hold is in force. Values: `"active"`, `"released"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

