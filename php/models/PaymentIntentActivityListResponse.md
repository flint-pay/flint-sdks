[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentActivityListResponse

A page of `PaymentIntentActivity` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PaymentIntentActivity](../models/PaymentIntentActivity.md#paymentintentactivity) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PaymentIntentActivityListResponse.md#paymentintentactivitylistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentIntentActivityListResponse.data[]

A read-only entry in a payment intent's human-readable history. Read the referenced resource for authoritative state.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `activity_type` | Required | string | What kind of change this entry records. Values: [13 declared values](#paymentintentactivitylistresponsedata-activity_type-values). |
| `actor` | Required | [PaymentActivityActor](../models/PaymentActivityActor.md#paymentactivityactor) or null | Identity that initiated this action, with its label recorded at the time. Null when the action was automated or no initiating merchant identity was recorded. Refund creation retains its initiating actor when a worker processes it. Later processor updates are automated activity. `actor`: [declared alternatives](../models/PaymentIntentActivityListResponse.md#paymentintentactivitylistresponsedataactor). |
| `checkout_session_id` | Optional | string | ID of the checkout session that created the payment intent. Present only on `created` entries, when the payment intent has no order. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Short human-readable summary of the change. It doesn't carry processor diagnostics, so read the referenced resource for details. |
| `dispute_id` | Optional | string | ID of the dispute this entry is about. Present on dispute entries. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `from_dispute_status` | Optional | string | The payment's dispute status before the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivitylistresponsedata-from_dispute_status-values). |
| `from_status` | Optional | string | The payment intent's status before the change. Present on entries that record a status change. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `order_id` | Optional | string | ID of the order the payment intent belongs to. Present only on `created` entries, and only when the payment intent belongs to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_activity_id` | Required | string | Flint ID of this activity entry. Example: `"pact_01KEZF7C00D5EYVFWM20J9Z8EP"`. |
| `refund_id` | Optional | string | ID of the refund this entry is about. Present on refund entries. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `to_dispute_status` | Optional | string | The payment's dispute status after the change. Present on `dispute_status_changed` entries. Values: [10 declared values](#paymentintentactivitylistresponsedata-to_dispute_status-values). |
| `to_status` | Optional | string | The payment intent's status after the change. Present on entries that record a status change. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |

#### PaymentIntentActivityListResponse.data[] activity_type values

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

#### PaymentIntentActivityListResponse.data[] from_dispute_status values

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

#### PaymentIntentActivityListResponse.data[] to_dispute_status values

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

### PaymentIntentActivityListResponse.data[].actor

Identity that initiated this action, with its label recorded at the time. Null when the action was automated or no initiating merchant identity was recorded. Refund creation retains its initiating actor when a worker processes it. Later processor updates are automated activity.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `label` | Conditional | string | Teammate name (or email), API key name, or app name. Empty when a display label was unavailable; use resource_id as a fallback. |
| `resource_id` | Conditional | string | Flint ID of the identity that initiated the action. Key creators and app installers are not the actor. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Conditional | string | The acting identity's resource type. Today one of `user` (a teammate acting through Dashboard or a CLI login), `api_key` (an API key, not its creator), `partner_app_install` (an installed partner app, not its installer), or `partner_app` (a partner app acting on its own resources). Accept other resource types. Values: [158 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

### PaymentIntentActivityListResponse.data[].actor variant 1

anyOf PaymentActivityActor: The teammate, API key, or app that initiated the action..

- Required: `label`, `resource_id`, `resource_type`.

### PaymentIntentActivityListResponse.data[].actor variant 2

anyOf variant 2.

- Undeclared: `label`, `resource_id`, `resource_type`.
- Value shape: null. Identity that initiated this action, with its label recorded at the time. Null when the action was automated or no initiating merchant identity was recorded. Refund creation retains its initiating actor when a worker processes it. Later processor updates are automated activity. 

### PaymentIntentActivityListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

