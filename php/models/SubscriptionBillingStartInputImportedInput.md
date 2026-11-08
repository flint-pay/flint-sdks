[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionBillingStartInputImportedInput

The `imported` variant of `SubscriptionBillingStartInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_cycles` | Optional | integer | Billing cycles already charged on the previous billing system, including the current imported period. Defaults to 1 and must be at least 1. The subscription starts with this completed_cycles count; its next renewal has subscription_cycle one higher. minimum: `1`. Default: `1`. |
| `period_started_at` | Required | string | Start of the already-running billing period being imported. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | Continues a billing period already paid for on another system. Values: `"imported"`. |

