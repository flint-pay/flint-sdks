[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null or null | RFC3339 timestamp. `null` when the review isn't closed. `closed_at`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_at). |
| `closed_by` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) or null or null | The credential that closed this payment review. Null when Flint closed it. |
| `closed_reason` | Optional | string or null or null | How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. `closed_reason`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_reason). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null or null | ID of the customer the payment was made for. `null` when the payment has no customer. `customer_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributescustomer_id). |
| `ip_address` | Optional | string or null or null | The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. `ip_address`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesip_address). |
| `last_resolution_failure` | Optional | [PaymentReviewResolutionFailure](../models/PaymentReviewResolutionFailure.md#paymentreviewresolutionfailure) or null or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Optional | string or null | ID of the risk rule with the review action that opened this review. `matched_risk_rule_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesmatched_risk_rule_id). |
| `opened_at` | Optional | string or null | RFC3339 timestamp. `opened_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `opened_reason` | Optional | string or null | Why Flint opened the review. Values: `"rule"`. `opened_reason`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesopened_reason). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null or null | ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. `order_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesorder_id). |
| `payment_flow` | Optional | string or null | How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_flow). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent under review. `payment_intent_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_review_id` | Optional | string or null | Unique identifier for this payment review, prefixed `rev_`. `payment_review_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_review_id). |
| `payment_summary` | Optional | [PaymentReviewPaymentSummary](../models/PaymentReviewPaymentSummary.md#paymentreviewpaymentsummary) or null | A snapshot of the payment as it was when the review opened. |
| `pending_action` | Optional | string or null or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. `pending_action`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespending_action). |
| `refund_id` | Optional | string or null or null | The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. `refund_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesrefund_id). |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | Refunded amount for this review. Null when no refund is recorded. |
| `resolution_started_at` | Optional | string or null or null | RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. `resolution_started_at`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesresolution_started_at). |
| `resolution_started_by` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) or null or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. |
| `risk` | Optional | [PaymentReviewRisk](../models/PaymentReviewRisk.md#paymentreviewrisk) or null | The payment's risk level and score when the review opened. |
| `status` | Optional | string or null | Where the review is in its lifecycle. Values: `"open"`, `"resolving"`, `"closed"`. `status`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`. `supported_actions`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_at

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when the review isn't closed..

- Value shape: (string or null). RFC3339 timestamp. `null` when the review isn't closed. RFC3339 timestamp. `null` when the review isn't closed. Format: `date-time`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when the review isn't closed. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason variant 1

anyOf variant 1: How the review was resolved. `null` when the review isn't closed..

- Value shape: (string or null). How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the review was resolved. `null` when the review isn't closed. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.customer_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer the payment was made for. `null` when the payment has no customer..

- Value shape: (string or null). ID of the customer the payment was made for. `null` when the payment has no customer. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the payment was made for. `null` when the payment has no customer. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.ip_address

### PaymentReviewClosedMerchantEventDataPreviousAttributes.ip_address variant 1

anyOf variant 1: The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment..

- Value shape: (string or null). The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.ip_address variant 2

anyOf variant 2.

- Value shape: null. The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.matched_risk_rule_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.matched_risk_rule_id variant 1

anyOf variant 1: ID of the risk rule with the review action that opened this review..

- Value shape: string. ID of the risk rule with the review action that opened this review. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.matched_risk_rule_id variant 2

anyOf variant 2.

- Value shape: null. ID of the risk rule with the review action that opened this review. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.opened_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.opened_reason

### PaymentReviewClosedMerchantEventDataPreviousAttributes.opened_reason variant 1

anyOf variant 1: Why Flint opened the review..

- Value shape: string. Why Flint opened the review. Values: `"rule"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.opened_reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint opened the review. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.order_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order the payment belongs to. `null` when the payment doesn't belong to an order..

- Value shape: (string or null). ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_flow

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_flow variant 1

anyOf variant 1: How the reviewed payment was started..

- Value shape: string. How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_flow variant 2

anyOf variant 2.

- Value shape: null. How the reviewed payment was started. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_intent_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent under review..

- Value shape: string. ID of the payment intent under review. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent under review. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_review_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_review_id variant 1

anyOf variant 1: Unique identifier for this payment review, prefixed `rev_`..

- Value shape: string. Unique identifier for this payment review, prefixed `rev_`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment review, prefixed `rev_`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.pending_action

### PaymentReviewClosedMerchantEventDataPreviousAttributes.pending_action variant 1

anyOf variant 1: The decision being carried out. `null` when status isn't resolving..

- Value shape: (string or null). The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.pending_action variant 2

anyOf variant 2.

- Value shape: null. The decision being carried out. `null` when status isn't resolving. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.refund_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.refund_id variant 1

anyOf variant 1: The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open..

- Value shape: (string or null). The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_at

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it..

- Value shape: (string or null). RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. Format: `date-time`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.status

### PaymentReviewClosedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the review is in its lifecycle..

- Value shape: string. Where the review is in its lifecycle. Values: `"open"`, `"resolving"`, `"closed"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the review is in its lifecycle. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.supported_actions

### PaymentReviewClosedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result..

- Value shape: Array of string. Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

