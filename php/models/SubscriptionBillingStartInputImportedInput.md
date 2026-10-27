[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartInputImportedInput

The `imported` variant of `SubscriptionBillingStartInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_cycles` | Optional | integer | Number of billing cycles already charged on the previous billing system, including the current imported period. The subscription's completed_cycles starts here, and the next renewal's subscription_cycle is this number plus one. minimum: `0`. Default: `0`. |
| `period_started_at` | Required | string | Start of the already-running billing period being imported. Format: `date-time`. minLength: `1`. |
| `type` | Required | string | Values: `"imported"`. |

