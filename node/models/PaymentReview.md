[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReview

A payment review requiring a merchant decision.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that closed this payment review. Null when Flint closed it. |
| `closed_reason` | Required | string or null | Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string or null | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `ip_address` | Required | string or null |  |
| `last_resolution_failure` | Required | [PaymentReviewResolutionFailure](../models/PaymentReviewResolutionFailure.md#paymentreviewresolutionfailure) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Required | string or null | Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |
| `opened_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `opened_reason` | Required | string | Values: `"rule"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string or null | Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_flow` | Required | string | Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Required | string | Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_review_id` | Required | string | Unique identifier for this payment review, prefixed `rev_`. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `payment_summary` | Required | [PaymentReviewPaymentSummary](../models/PaymentReviewPaymentSummary.md#paymentreviewpaymentsummary) | The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email. |
| `pending_action` | Required | string or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. |
| `refund_id` | Required | string or null | The refund that closed this review. Null otherwise. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Refunded amount for this review. Null when no refund is recorded. `refunded_money`: [declared alternatives](../models/PaymentReview.md#paymentreviewrefunded_money). |
| `resolution_started_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resolution_started_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. |
| `risk` | Required | [PaymentReviewRisk](../models/PaymentReviewRisk.md#paymentreviewrisk) | The risk assessment shown on a review: a `level` and, when available, a numeric `score`. |
| `status` | Required | string | Values: `"open"`, `"resolving"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### PaymentReview.refunded_money

Refunded amount for this review. Null when no refund is recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PaymentReview.refunded_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PaymentReview.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Refunded amount for this review. Null when no refund is recorded. 

