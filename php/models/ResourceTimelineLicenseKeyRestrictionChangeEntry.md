[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineLicenseKeyRestrictionChangeEntry

One restriction taking effect or being lifted on a license key.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | How this restriction changed. Values: `"added"`, `"lifted"`. |
| `dispute_id` | Optional | string | The dispute that caused this restriction, when applicable. |
| `entry_type` | Required | string | Always license_key_restriction_change for this kind of entry. Values: `"license_key_restriction_change"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `refund_id` | Optional | string | The refund that caused this restriction, when applicable. |
| `resource_timeline_entry_id` | Required | string | Stable ID of this restriction change. |
| `subscription_id` | Optional | string | The subscription that caused this restriction, when applicable. |
| `type` | Required | string | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`, `"payment_reversal"`. |

