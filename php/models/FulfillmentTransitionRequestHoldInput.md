[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestHoldInput

The `hold` variant of `FulfillmentTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"hold"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |

