[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineLicenseKeyRestrictionChangeEntry

One restriction taking effect or being lifted on a license key.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | How this restriction changed. Values: `"added"`, `"lifted"`. |
| `dispute_id` | Optional | string | The dispute that caused this restriction, when applicable. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `entry_type` | Required | string | Always license_key_restriction_change for this kind of entry. Values: `"license_key_restriction_change"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_id` | Optional | string | The refund that caused this restriction, when applicable. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `resource_timeline_entry_id` | Required | string | Stable ID of this restriction change. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `subscription_id` | Optional | string | The subscription that caused this restriction, when applicable. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `type` | Required | string | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`, `"payment_reversal"`. |

