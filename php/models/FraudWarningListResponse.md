[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningListResponse

A page of `FraudWarning` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [FraudWarning](../models/FraudWarning.md#fraudwarning) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/FraudWarningListResponse.md#fraudwarninglistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FraudWarningListResponse.data[]

A notice that a payment may be fraudulent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. `dispute`: [declared alternatives](../models/FraudWarningResponse.md#fraudwarningresponsedatadispute). |
| `dispute_id` | Required | string or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `fraud_type` | Required | string | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarninglistresponsedata-fraud_type-values). |
| `fraud_warning_id` | Required | string | Unique identifier for this fraud warning, prefixed `frw_`. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `is_actionable` | Required | boolean | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
| `payment_intent_id` | Required | string | ID of the payment the warning is about. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_summary` | Required | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) | The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### FraudWarningListResponse.data[] fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningListResponse.data[].dispute

Declared alternatives: [FraudWarningResponse.data.dispute](../models/FraudWarningResponse.md#fraudwarningresponsedatadispute).

### FraudWarningListResponse.data[].payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### FraudWarningListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

