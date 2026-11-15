[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingScheduleInputExternalInput

The `external` variant of `SubscriptionBillingScheduleInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `owner` | Required | string | Who supplies billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Values: `"external"`. |

