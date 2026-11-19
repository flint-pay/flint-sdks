[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentActivity

A read-only entry in a payment intent's human-readable history. Read the referenced resource for authoritative state.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What kind of change this entry records. Values: [13 declared values](#paymentintentactivity-activity_type-values). |
| `actor` | Required | [PaymentActivityActor](../models/PaymentActivityActor.md#paymentactivityactor) or null | Identity that initiated this action, with its label recorded at the time. Null when the action was automated or no initiating merchant identity was recorded. Refund creation retains its initiating actor when a worker processes it. Later processor updates are automated activity. |
| `checkout_session_id` | Optional | string | ID of the checkout session that created the payment intent. Present only on `created` entries, when the payment intent has no order. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Short human-readable summary of the change. It doesn't carry processor diagnostics, so read the referenced resource for details. |
| `dispute_id` | Optional | string | ID of the dispute this entry is about. Present on dispute entries. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `from_dispute_status` | Optional | string | The payment's dispute status before the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivity-from_dispute_status-values). |
| `from_status` | Optional | string | The payment intent's status before the change. Present on entries that record a status change. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `order_id` | Optional | string | ID of the order the payment intent belongs to. Present only on `created` entries, and only when the payment intent belongs to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_activity_id` | Required | string | Flint ID of this activity entry. Example: `"pact_01KEZF7C00D5EYVFWM20J9Z8EP"`. |
| `refund_id` | Optional | string | ID of the refund this entry is about. Present on refund entries. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
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
- `"receipt_queued"`
- `"receipt_delivery_failed"`

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

