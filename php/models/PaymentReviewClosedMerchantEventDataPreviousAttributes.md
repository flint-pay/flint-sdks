[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null or null | RFC3339 timestamp. `null` when the review isn't closed. `closed_at`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_at). |
| `closed_by` | Optional | Alternative shapes (see declared variants) or null | The credential that closed this payment review. Null when Flint closed it. `closed_by`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_by). |
| `closed_reason` | Optional | string or null or null | How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. `closed_reason`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesclosed_reason). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null or null | ID of the customer the payment was made for. `null` when the payment has no customer. `customer_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributescustomer_id). |
| `ip_address` | Optional | string or null or null | The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. `ip_address`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesip_address). |
| `last_resolution_failure` | Optional | Alternative shapes (see declared variants) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. `last_resolution_failure`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributeslast_resolution_failure). |
| `matched_risk_rule_id` | Optional | string or null | ID of the risk rule with the review action that opened this review. `matched_risk_rule_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesmatched_risk_rule_id). |
| `opened_at` | Optional | string or null | RFC3339 timestamp. `opened_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `opened_reason` | Optional | string or null | Why Flint opened the review. Values: `"rule"`. `opened_reason`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesopened_reason). |
| `order` | Optional | Alternative shapes (see declared variants) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null or null | ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. `order_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesorder_id). |
| `payment_flow` | Optional | string or null | How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_flow). |
| `payment_intent` | Optional | ([ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment intent under review. `payment_intent_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_review_id` | Optional | string or null | Unique identifier for this payment review, prefixed `rev_`. `payment_review_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_review_id). |
| `payment_summary` | Optional | Alternative shapes (see declared variants) | A snapshot of the payment as it was when the review opened. `payment_summary`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary). |
| `pending_action` | Optional | string or null or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. `pending_action`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespending_action). |
| `refund_id` | Optional | string or null or null | The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. `refund_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesrefund_id). |
| `refunded_money` | Optional | ([MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null) or null | Refunded amount for this review. Null when no refund is recorded. |
| `resolution_started_at` | Optional | string or null or null | RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. `resolution_started_at`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesresolution_started_at). |
| `resolution_started_by` | Optional | Alternative shapes (see declared variants) or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. `resolution_started_by`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesresolution_started_by). |
| `risk` | Optional | Alternative shapes (see declared variants) | The payment's risk level and score when the review opened. `risk`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesrisk). |
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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by

The credential that closed this payment review. Null when Flint closed it.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by variant 1

anyOf variant 1: The credential that closed this payment review. Null when Flint closed it.; anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by variant 2, 3

anyOf variant 1: The credential that closed this payment review. Null when Flint closed it.; anyOf variant 2; anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that closed this payment review. Null when Flint closed it. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_by variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason variant 1

anyOf variant 1: How the review was resolved. `null` when the review isn't closed..

- Value shape: (string or null). How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the review was resolved. `null` when the review isn't closed. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure

The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Conditional | string or null | RFC3339 timestamp. `failed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `refund_id` | Conditional | string or null | ID of the refund that failed and reopened the review. `refund_id`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributeslast_resolution_failure-variant-1refund_id). |

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 1

anyOf variant 1: The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed.; anyOf PaymentReviewResolutionFailurePreviousAttributes.

- Optional: `failed_at`, `refund_id`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 2, 3

anyOf variant 1: The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed.; anyOf variant 2; anyOf variant 2.

- Undeclared: `failed_at`, `refund_id`.
- Value shape: null. The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 1.failed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 1.refund_id

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 1.refund_id variant 1

anyOf variant 1: ID of the refund that failed and reopened the review..

- Value shape: string. ID of the refund that failed and reopened the review. ID of the refund that failed and reopened the review. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.last_resolution_failure variant 1.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund that failed and reopened the review. 

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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary

A snapshot of the payment as it was when the review opened.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The payment's requested amount when it was confirmed. |
| `authorization_expires_at` | Conditional | string or null or null | Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. `authorization_expires_at`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary-variant-1authorization_expires_at). |
| `capture_method` | Conditional | string or null | Whether the payment collects when confirmed or holds the funds for a later capture. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary-variant-1capture_method). |
| `email` | Conditional | string or null | The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. `email`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary-variant-1email). |
| `last4` | Conditional | string or null | Last four digits of the card number. Empty when the payment has no card details. `last4`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary-variant-1last4). |
| `payment_method_brand` | Conditional | string or null | The card network, as recorded when the payment was confirmed. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`. `payment_method_brand`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributespayment_summary-variant-1payment_method_brand). |

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1

anyOf PaymentReviewPaymentSummaryPreviousAttributes.

- Optional: `amount_money`, `authorization_expires_at`, `capture_method`, `email`, `last4`, `payment_method_brand`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 2

anyOf variant 2.

- Undeclared: `amount_money`, `authorization_expires_at`, `capture_method`, `email`, `last4`, `payment_method_brand`.
- Value shape: null. A snapshot of the payment as it was when the review opened. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.authorization_expires_at

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.authorization_expires_at variant 1

anyOf variant 1: Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline..

- Value shape: (string or null). Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.authorization_expires_at variant 2

anyOf variant 2.

- Value shape: null. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.capture_method

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.capture_method variant 1

anyOf variant 1: Whether the payment collects when confirmed or holds the funds for a later capture..

- Value shape: string. Whether the payment collects when confirmed or holds the funds for a later capture. Values: `"automatic"`, `"manual"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.capture_method variant 2

anyOf variant 2.

- Value shape: null. Whether the payment collects when confirmed or holds the funds for a later capture. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.email

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.email variant 1

anyOf variant 1: The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known..

- Value shape: string. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.last4

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.last4 variant 1

anyOf variant 1: Last four digits of the card number. Empty when the payment has no card details..

- Value shape: string. Last four digits of the card number. Empty when the payment has no card details. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card number. Empty when the payment has no card details. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.payment_method_brand

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.payment_method_brand variant 1

anyOf variant 1: The card network, as recorded when the payment was confirmed..

- Value shape: string. The card network, as recorded when the payment was confirmed. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.payment_summary variant 1.payment_method_brand variant 2

anyOf variant 2.

- Value shape: null. The card network, as recorded when the payment was confirmed. 

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

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by

The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by variant 1

anyOf variant 1: The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it.; anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by variant 2, 3

anyOf variant 1: The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it.; anyOf variant 2; anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.resolution_started_by variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk

The payment's risk level and score when the review opened.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `level` | Conditional | string or null | Fraud risk level from the card processor's screening, recorded when the review opened. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. `level`: [declared alternatives](../models/PaymentReviewClosedMerchantEventDataPreviousAttributes.md#paymentreviewclosedmerchanteventdatapreviousattributesrisk-variant-1level). |
| `score` | Conditional | integer or null | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. `score`: [declared alternatives](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk-variant-1score). |

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 1

anyOf PaymentReviewRiskPreviousAttributes.

- Optional: `level`, `score`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 2

anyOf variant 2.

- Undeclared: `level`, `score`.
- Value shape: null. The payment's risk level and score when the review opened. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 1.level

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 1.level variant 1

anyOf variant 1: Fraud risk level from the card processor's screening, recorded when the review opened..

- Value shape: string. Fraud risk level from the card processor's screening, recorded when the review opened. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`.

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 1.level variant 2

anyOf variant 2.

- Value shape: null. Fraud risk level from the card processor's screening, recorded when the review opened. 

### PaymentReviewClosedMerchantEventDataPreviousAttributes.risk variant 1.score

Declared alternatives: [PaymentIntentCanceledMerchantEventDataPreviousAttributes.risk variant 1.score](../models/PaymentIntentCanceledMerchantEventDataPreviousAttributes.md#paymentintentcanceledmerchanteventdatapreviousattributesrisk-variant-1score).

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

