[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentActivityInput

A read-only entry in a payment intent's human-readable history. Read the referenced resource for authoritative state.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | Values: [11 declared values](#paymentintentactivityinput-activity_type-values). |
| `checkout_session_id` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Required | string |  |
| `dispute_id` | Optional | string |  |
| `from_dispute_status` | Optional | string | Values: [10 declared values](#paymentintentactivityinput-from_dispute_status-values). |
| `from_status` | Optional | string | Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `order_id` | Optional | string |  |
| `payment_intent_activity_id` | Required | string |  |
| `refund_id` | Optional | string |  |
| `to_dispute_status` | Optional | string | Values: [10 declared values](#paymentintentactivityinput-to_dispute_status-values). |
| `to_status` | Optional | string | Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |

#### PaymentIntentActivityInput activity_type values

- `"other"`
- `"created"`
- `"updated"`
- `"status_changed"`
- `"failed"`
- `"canceled"`
- `"expired"`
- `"refund_created"`
- `"refund_status_changed"`
- `"dispute_status_changed"`
- `"receipt_sent"`

#### PaymentIntentActivityInput from_dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

#### PaymentIntentActivityInput to_dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

