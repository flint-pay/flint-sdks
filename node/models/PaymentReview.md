[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReview

A payment review requiring a merchant decision.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `closed_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that closed this payment review. Null when Flint closed it. `closed_by`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectclosed_by). |
| `closed_reason` | Required | string or null | Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Required | string or null |  |
| `ip_address` | Required | string or null |  |
| `last_resolution_failure` | Required | [PaymentReviewResolutionFailure](../models/PaymentReviewResolutionFailure.md#paymentreviewresolutionfailure) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Required | string or null |  |
| `opened_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `opened_reason` | Required | string | Values: `"rule"`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Required | string or null |  |
| `payment_flow` | Required | string | Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Required | string |  |
| `payment_review_id` | Required | string |  |
| `payment_summary` | Required | [PaymentReviewPaymentSummary](../models/PaymentReviewPaymentSummary.md#paymentreviewpaymentsummary) | The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email. |
| `pending_action` | Required | string or null | Values: `"approve"`, `"decline"`, `"expire"`, `null`. |
| `refund_id` | Required | string or null | The refund that closed this review. Null otherwise. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Refunded amount for this review. Null when no refund is recorded. `refunded_money`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectrefunded_money). |
| `resolution_started_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `resolution_started_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that started resolving this payment review. Null when Flint started it. `resolution_started_by`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectresolution_started_by). |
| `risk` | Required | [PaymentReviewRisk](../models/PaymentReviewRisk.md#paymentreviewrisk) | The risk assessment shown on a review: a `level` and, when available, a numeric `score`. |
| `status` | Required | string | Values: `"open"`, `"resolving"`, `"closed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### PaymentReview.closed_by

Declared alternatives: [IncomingWebhook019a504a3353Payload.data.object.closed_by](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectclosed_by).

### PaymentReview.refunded_money

Declared alternatives: [IncomingWebhook019a504a3353Payload.data.object.refunded_money](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectrefunded_money).

### PaymentReview.resolution_started_by

Declared alternatives: [IncomingWebhook019a504a3353Payload.data.object.resolution_started_by](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobjectresolution_started_by).

