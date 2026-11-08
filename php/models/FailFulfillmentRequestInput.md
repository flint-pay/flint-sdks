[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FailFulfillmentRequestInput

Records fulfillment failure and explicitly releases or preserves the allocated quantities.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `release_quantity` | Required | boolean | Whether the failed fulfillment releases its quantities for another fulfillment. false preserves the allocation. |

