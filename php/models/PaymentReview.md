[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReview

A payment review requiring a merchant decision.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Required | string or null | RFC3339 timestamp. `null` when the review isn't closed. Format: `date-time`. |
| `closed_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that closed this payment review. Null when Flint closed it. |
| `closed_reason` | Required | string or null | How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string or null | ID of the customer the payment was made for. `null` when the payment has no customer. |
| `ip_address` | Required | string or null | The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. |
| `last_resolution_failure` | Required | [PaymentReviewResolutionFailure](../models/PaymentReviewResolutionFailure.md#paymentreviewresolutionfailure) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Required | string | ID of the risk rule with the review action that opened this review. |
| `opened_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `opened_reason` | Required | string | Why Flint opened the review. Values: `"rule"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string or null | ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. |
| `payment_flow` | Required | string | How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Required | string | ID of the payment intent under review. |
| `payment_review_id` | Required | string | Unique identifier for this payment review, prefixed `rev_`. |
| `payment_summary` | Required | [PaymentReviewPaymentSummary](../models/PaymentReviewPaymentSummary.md#paymentreviewpaymentsummary) | A snapshot of the payment as it was when the review opened. The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email. `payment_summary`: [field definitions](../models/PaymentReviewResponse.md#paymentreviewresponsedatapayment_summary). |
| `pending_action` | Required | string or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. |
| `refund_id` | Required | string or null | The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Refunded amount for this review. Null when no refund is recorded. |
| `resolution_started_at` | Required | string or null | RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. Format: `date-time`. |
| `resolution_started_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. |
| `risk` | Required | [PaymentReviewRisk](../models/PaymentReviewRisk.md#paymentreviewrisk) | The payment's risk level and score when the review opened. The risk assessment shown on a review: a `level` and, when available, a numeric `score`. |
| `status` | Required | string | Where the review is in its lifecycle. Values: `"open"`, `"resolving"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PaymentReview.payment_summary

Field definitions: [PaymentReviewResponse.data.payment_summary](../models/PaymentReviewResponse.md#paymentreviewresponsedatapayment_summary).

