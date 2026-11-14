[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewResponse

A response containing `PaymentReview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentReview](../models/PaymentReview.md#paymentreview) | Resource, collection, or operation result returned by this request. A payment review requiring a merchant decision. `data`: [field definitions](../models/PaymentReviewResponse.md#paymentreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentReviewResponse.data

Resource, collection, or operation result returned by this request. A payment review requiring a merchant decision.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that closed this payment review. Null when Flint closed it. `closed_by`: [declared alternatives](../models/PaymentReviewResponse.md#paymentreviewresponsedataclosed_by). |
| `closed_reason` | Required | string or null | Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatacustomer). |
| `customer_id` | Required | string or null | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `ip_address` | Required | string or null |  |
| `last_resolution_failure` | Required | [PaymentReviewResolutionFailure](../models/PaymentReviewResolutionFailure.md#paymentreviewresolutionfailure) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. `last_resolution_failure`: [declared alternatives](../models/PaymentReviewResponse.md#paymentreviewresponsedatalast_resolution_failure). |
| `matched_risk_rule_id` | Required | string or null | Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |
| `opened_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `opened_reason` | Required | string | Values: `"rule"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Required | string or null | Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_flow` | Required | string | Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedatapayment_intent). |
| `payment_intent_id` | Required | string | Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_review_id` | Required | string | Unique identifier for this payment review, prefixed `rev_`. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `payment_summary` | Required | [PaymentReviewPaymentSummary](../models/PaymentReviewPaymentSummary.md#paymentreviewpaymentsummary) | The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email. `payment_summary`: [field definitions](../models/PaymentReviewResponse.md#paymentreviewresponsedatapayment_summary). |
| `pending_action` | Required | string or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. |
| `refund_id` | Required | string or null | The refund that closed this review. Null otherwise. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Refunded amount for this review. Null when no refund is recorded. |
| `resolution_started_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resolution_started_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. `resolution_started_by`: [declared alternatives](../models/PaymentReviewResponse.md#paymentreviewresponsedataresolution_started_by). |
| `risk` | Required | [PaymentReviewRisk](../models/PaymentReviewRisk.md#paymentreviewrisk) | The risk assessment shown on a review: a `level` and, when available, a numeric `score`. |
| `status` | Required | string | Values: `"open"`, `"resolving"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PaymentReviewResponse.data.closed_by

The credential that closed this payment review. Null when Flint closed it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Conditional | string | Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Conditional | string | Public resource kind identified by resource_id, such as payment_intent for a payment. Example: `"order"`. Values: [154 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

### PaymentReviewResponse.data.closed_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### PaymentReviewResponse.data.closed_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that closed this payment review. Null when Flint closed it. 

### PaymentReviewResponse.data.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### PaymentReviewResponse.data.last_resolution_failure

The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_id` | Conditional | string | Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |

### PaymentReviewResponse.data.last_resolution_failure variant 1

anyOf PaymentReviewResolutionFailure: A failed attempt to resolve a review by refund, with the `refund_id` and when it failed..

- Required: `failed_at`, `refund_id`.

### PaymentReviewResponse.data.last_resolution_failure variant 2

anyOf variant 2.

- Undeclared: `failed_at`, `refund_id`.
- Value shape: null. The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. 

### PaymentReviewResponse.data.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### PaymentReviewResponse.data.payment_intent

Declared alternatives: [DisputeResponse.data.payment_intent](../models/DisputeResponse.md#disputeresponsedatapayment_intent).

### PaymentReviewResponse.data.payment_summary

The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Required | string or null | Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `capture_method` | Required | string | Values: `"automatic"`, `"manual"`. |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

### PaymentReviewResponse.data.resolution_started_by

The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it.

Field definitions: [shared fields](#paymentreviewresponsedataclosed_by).

### PaymentReviewResponse.data.resolution_started_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### PaymentReviewResponse.data.resolution_started_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. 

### PaymentReviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

