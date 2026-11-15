[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentActivity

A read-only entry in a payment intent's human-readable history. Read the referenced resource for authoritative state.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What kind of change this entry records. Values: [11 declared values](#paymentintentactivity-activity_type-values). |
| `checkout_session_id` | Optional | string | ID of the checkout session that created the payment intent. Present only on `created` entries, when the payment intent has no order. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Required | string | Short human-readable summary of the change. It doesn't carry processor diagnostics, so read the referenced resource for details. |
| `dispute_id` | Optional | string | ID of the dispute this entry is about. Present on dispute entries. |
| `from_dispute_status` | Optional | string | The payment's dispute status before the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivity-from_dispute_status-values). |
| `from_status` | Optional | string | The payment intent's status before the change. Present on entries that record a status change. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `order_id` | Optional | string | ID of the order the payment intent belongs to. Present only on `created` entries, and only when the payment intent belongs to an order. |
| `payment_intent_activity_id` | Required | string | Flint ID of this activity entry. |
| `refund_id` | Optional | string | ID of the refund this entry is about. Present on refund entries. |
| `to_dispute_status` | Optional | string | The payment's dispute status after the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivity-to_dispute_status-values). |
| `to_status` | Optional | string | The payment intent's status after the change. Present on entries that record a status change. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |

#### PaymentIntentActivity activity_type values

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

#### PaymentIntentActivity from_dispute_status values

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

#### PaymentIntentActivity to_dispute_status values

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

