[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MarkPackageShippedRequestInput

Records the package action mark_shipped.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | Carrier handling this package. minLength: `1`. maxLength: `100`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `service_code` | Optional | string | Carrier service used for this package. minLength: `1`. maxLength: `100`. |
| `tracking_number` | Optional | string | Carrier tracking number for this package. minLength: `1`. maxLength: `255`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. maxLength: `2048`. |

