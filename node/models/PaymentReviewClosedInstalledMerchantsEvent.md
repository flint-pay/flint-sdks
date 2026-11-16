[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedInstalledMerchantsEvent

The `payment_review.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_review.closed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentReviewClosedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributes). |

### PaymentReviewClosedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PaymentReview.md#paymentreview).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.closed_by

Declared alternatives: [PaymentReview.closed_by](../models/PaymentReview.md#paymentreviewclosed_by).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.refunded_money

Declared alternatives: [PaymentReview.refunded_money](../models/PaymentReview.md#paymentreviewrefunded_money).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.resolution_started_by

Declared alternatives: [PaymentReview.resolution_started_by](../models/PaymentReview.md#paymentreviewresolution_started_by).

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null | RFC3339 timestamp. `null` when the review isn't closed. `closed_at`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesclosed_at). |
| `closed_by` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The credential that closed this payment review. Null when Flint closed it. |
| `closed_reason` | Optional | string or null | How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`. `closed_reason`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesclosed_reason). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer the payment was made for. `null` when the payment has no customer. `customer_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `ip_address` | Optional | string or null | The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. `ip_address`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesip_address). |
| `last_resolution_failure` | Optional | [PaymentReviewResolutionFailurePreviousAttributes](../models/PaymentReviewResolutionFailurePreviousAttributes.md#paymentreviewresolutionfailurepreviousattributes) or null | The most recent resolution attempt that failed. Set when a decline's refund failed and the review reopened. Null when no attempt has failed. |
| `matched_risk_rule_id` | Optional | string or null | ID of the risk rule with the review action that opened this review. `matched_risk_rule_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesmatched_risk_rule_id). |
| `opened_at` | Optional | string or null | RFC3339 timestamp. `opened_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `opened_reason` | Optional | string or null | Why Flint opened the review. Values: `"rule"`. `opened_reason`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesopened_reason). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. `order_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesorder_id). |
| `payment_flow` | Optional | string or null | How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. `payment_flow`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributespayment_flow). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent under review. `payment_intent_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributespayment_intent_id). |
| `payment_review_id` | Optional | string or null | Unique identifier for this payment review, prefixed `rev_`. `payment_review_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributespayment_review_id). |
| `payment_summary` | Optional | [PaymentReviewPaymentSummaryPreviousAttributes](../models/PaymentReviewPaymentSummaryPreviousAttributes.md#paymentreviewpaymentsummarypreviousattributes) or null | A snapshot of the payment as it was when the review opened. |
| `pending_action` | Optional | string or null | The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`. `pending_action`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributespending_action). |
| `refund_id` | Optional | string or null | The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. `refund_id`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesrefund_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refunded amount for this review. Null when no refund is recorded. `refunded_money`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesrefunded_money). |
| `resolution_started_at` | Optional | string or null | RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. `resolution_started_at`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesresolution_started_at). |
| `resolution_started_by` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The credential that started resolving this payment review, retained after closure. Null when no resolution has started or Flint started it. |
| `risk` | Optional | [PaymentReviewRiskPreviousAttributes](../models/PaymentReviewRiskPreviousAttributes.md#paymentreviewriskpreviousattributes) or null | The payment's risk level and score when the review opened. |
| `status` | Optional | string or null | Where the review is in its lifecycle. Values: `"open"`, `"resolving"`, `"closed"`. `status`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`. `supported_actions`: [declared alternatives](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_at

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when the review isn't closed..

- Value shape: string. RFC3339 timestamp. `null` when the review isn't closed. RFC3339 timestamp. `null` when the review isn't closed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when the review isn't closed. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 1

anyOf variant 1: How the review was resolved. `null` when the review isn't closed..

- Value shape: string. How the review was resolved. `null` when the review isn't closed. Values: `"approved"`, `"declined"`, `"refunded"`, `"disputed"`, `"payment_canceled"`, `"expired"`, `null`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the review was resolved. `null` when the review isn't closed. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.customer_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer the payment was made for. `null` when the payment has no customer..

- Value shape: string. ID of the customer the payment was made for. `null` when the payment has no customer. ID of the customer the payment was made for. `null` when the payment has no customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the payment was made for. `null` when the payment has no customer. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.ip_address

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.ip_address variant 1

anyOf variant 1: The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment..

- Value shape: string. The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.ip_address variant 2

anyOf variant 2.

- Value shape: null. The buyer's IP address recorded for the payment when it was confirmed. `null` when no buyer IP address was supplied for the payment. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.matched_risk_rule_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.matched_risk_rule_id variant 1

anyOf variant 1: ID of the risk rule with the review action that opened this review..

- Value shape: string. ID of the risk rule with the review action that opened this review. ID of the risk rule with the review action that opened this review. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.matched_risk_rule_id variant 2

anyOf variant 2.

- Value shape: null. ID of the risk rule with the review action that opened this review. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.opened_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.opened_reason

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.opened_reason variant 1

anyOf variant 1: Why Flint opened the review..

- Value shape: string. Why Flint opened the review. Values: `"rule"`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.opened_reason variant 2

anyOf variant 2.

- Value shape: null. Why Flint opened the review. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.order_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the order the payment belongs to. `null` when the payment doesn't belong to an order..

- Value shape: string. ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the payment belongs to. `null` when the payment doesn't belong to an order. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_flow

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_flow variant 1

anyOf variant 1: How the reviewed payment was started..

- Value shape: string. How the reviewed payment was started. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_flow variant 2

anyOf variant 2.

- Value shape: null. How the reviewed payment was started. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent under review..

- Value shape: string. ID of the payment intent under review. ID of the payment intent under review. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent under review. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_review_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_review_id variant 1

anyOf variant 1: Unique identifier for this payment review, prefixed `rev_`..

- Value shape: string. Unique identifier for this payment review, prefixed `rev_`. Unique identifier for this payment review, prefixed `rev_`. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment review, prefixed `rev_`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.pending_action

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.pending_action variant 1

anyOf variant 1: The decision being carried out. `null` when status isn't resolving..

- Value shape: string. The decision being carried out. `null` when status isn't resolving. Values: `"approve"`, `"decline"`, `"expire"`, `null`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.pending_action variant 2

anyOf variant 2.

- Value shape: null. The decision being carried out. `null` when status isn't resolving. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refund_id

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refund_id variant 1

anyOf variant 1: The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open..

- Value shape: string. The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. The refund created when the payment was declined. It can be set while status is resolving, before the refund finishes and the review closes. `null` when no refund exists for the review, including after a decline that needed none or when the review is open. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refunded_money

Refunded amount for this review. Null when no refund is recorded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Refunded amount for this review. Null when no refund is recorded. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.resolution_started_at

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.resolution_started_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it..

- Value shape: string. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.resolution_started_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when nobody has started approving or declining the review and Flint hasn't started expiring it. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.status

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the review is in its lifecycle..

- Value shape: string. Where the review is in its lifecycle. Values: `"open"`, `"resolving"`, `"closed"`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the review is in its lifecycle. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result..

- Value shape: Array of string. Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. Items values: `"approve"`, `"decline"`.

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted in the current stored review state. An action remains listed while it is processing or can be repeated without changing the result. 

### PaymentReviewClosedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentReviewClosedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

