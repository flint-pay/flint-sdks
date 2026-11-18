[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyRestriction

One occurrence of a cause keeping the key disabled.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the restriction took effect. Format: `date-time`. |
| `dispute_id` | Optional | string | The dispute that restricted the key. |
| `dispute_status` | Optional | string | Whether the dispute is open or lost. Values: `"open"`, `"lost"`. |
| `reason` | Optional | string | Reason for a merchant or subscription restriction. |
| `refund_id` | Optional | string | The refund that restricted the key. |
| `subscription_id` | Optional | string | The subscription that restricted the key. |
| `type` | Required | string | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`. |

