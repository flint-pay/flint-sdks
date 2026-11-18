[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyRestrictionInput

One occurrence of a cause keeping the key disabled.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the restriction took effect. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute_id` | Optional | string | The dispute that restricted the key. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `dispute_status` | Optional | string | Whether the dispute is open or lost. Values: `"open"`, `"lost"`. |
| `reason` | Optional | string | Reason for a merchant or subscription restriction. |
| `refund_id` | Optional | string | The refund that restricted the key. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `subscription_id` | Optional | string | The subscription that restricted the key. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `type` | Required | string | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`. |

