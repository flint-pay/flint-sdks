[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentFulfillmentHoldInput

A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason` | Required | string | Values: `"external_payment_hold"`, `"external_payment_hold_released"`. |
| `released_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `requested_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `required_action` | Required | string | Values: `"pause_fulfillment"`, `"reevaluate_fulfillment"`. |
| `status` | Required | string | Values: `"active"`, `"released"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

