[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentActivityInput

A read-only entry in a payment intent's human-readable history. Read the referenced resource for authoritative state.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | Values: [11 declared values](#paymentintentactivityinput-activity_type-values). |
| `checkout_session_id` | Optional | string | Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string |  |
| `dispute_id` | Optional | string | ID of the dispute this entry is about. Present on dispute entries. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `from_dispute_status` | Optional | string | The payment's dispute status before the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivityinput-from_dispute_status-values). |
| `from_status` | Optional | string | Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `order_id` | Optional | string | Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_activity_id` | Required | string | Example: `"pact_01KEZF7C00D5EYVFWM20J9Z8EP"`. |
| `refund_id` | Optional | string | ID of the refund this entry is about. Present on refund entries. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `to_dispute_status` | Optional | string | The payment's dispute status after the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivityinput-to_dispute_status-values). |
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

