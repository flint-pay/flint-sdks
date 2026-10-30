[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewInput

A payment review requiring a merchant decision.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `closed_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The credential that closed this payment review. Null when Flint closed it. |
| `closed_reason` | Required | string or null | Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string or null |  |
| `ip_address` | Required | string or null |  |
| `last_resolution_failure` | Required | [PaymentReviewResolutionFailureInput](../models/PaymentReviewResolutionFailureInput.md#paymentreviewresolutionfailureinput) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Required | string or null |  |
| `opened_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `opened_reason` | Required | string | Values: `"rule"`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string or null |  |
| `payment_flow` | Required | string | Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Required | string |  |
| `payment_review_id` | Required | string |  |
| `payment_summary` | Required | [PaymentReviewPaymentSummaryInput](../models/PaymentReviewPaymentSummaryInput.md#paymentreviewpaymentsummaryinput) | The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email. |
| `pending_action` | Required | string or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. |
| `refund_id` | Required | string or null | The refund that closed this review. Null otherwise. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Refunded amount for this review. Null when no refund is recorded. |
| `resolution_started_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `resolution_started_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The credential that started resolving this payment review. Null when Flint started it. |
| `risk` | Required | [PaymentReviewRiskInput](../models/PaymentReviewRiskInput.md#paymentreviewriskinput) | The risk assessment shown on a review: a `level` and, when available, a numeric `score`. |
| `status` | Required | string | Values: `"open"`, `"resolving"`, `"closed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

