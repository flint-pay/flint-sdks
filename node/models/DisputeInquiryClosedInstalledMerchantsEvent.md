[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeInquiryClosedInstalledMerchantsEvent

The `dispute.inquiry_closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"dispute.inquiry_closed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DisputeInquiryClosedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DisputeCreatedInstalledMerchantsEvent.md#disputecreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributes). |

### DisputeInquiryClosedInstalledMerchantsEvent.data.object

Field definitions: [DisputeCreatedInstalledMerchantsEvent.data.object](../models/DisputeCreatedInstalledMerchantsEvent.md#disputecreatedinstalledmerchantseventdataobject).

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. `amount_money`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesamount_money). |
| `can_respond_with_evidence` | Optional | boolean or null | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. `can_respond_with_evidence`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescan_respond_with_evidence). |
| `case_type` | Optional | string or null | Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. `case_type`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescase_type). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer on the disputed payment. Absent when the payment has none. `customer_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `dispute_id` | Optional | string or null | Stable identifier of the dispute. `dispute_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesdispute_id). |
| `evidence_due_at` | Optional | string or null or null | Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. `evidence_due_at`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_due_at). |
| `evidence_submission_count` | Optional | integer or null | How many times evidence was submitted for this dispute. 0 until you submit. `evidence_submission_count`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesevidence_submission_count). |
| `fraud_warning_id` | Optional | string or null | The fraud warning the card network sent for this payment before the dispute. Absent when there was none. `fraud_warning_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesfraud_warning_id). |
| `has_evidence` | Optional | boolean or null | Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. `has_evidence`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributeshas_evidence). |
| `is_action_required` | Optional | boolean or null | True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. `is_action_required`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_action_required). |
| `is_evidence_deadline_passed` | Optional | boolean or null | Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. `is_evidence_deadline_passed`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesis_evidence_deadline_passed). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `network_reason_code` | Optional | string or null or null | Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. `network_reason_code`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesnetwork_reason_code). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. `order_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. `payment_intent_id`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_intent_id). |
| `payment_option` | Optional | string or null or null | How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. `payment_option`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributespayment_option). |
| `reason` | Optional | string or null | Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: [12 declared values](Dispute.md#dispute-reason-values). `reason`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesreason). |
| `recommended_evidence_types` | Optional | Array of string or null | Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: [11 declared values](Dispute.md#dispute-recommended_evidence_types--values). `recommended_evidence_types`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesrecommended_evidence_types). |
| `response_unavailable_reason` | Optional | string or null | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. `response_unavailable_reason`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesresponse_unavailable_reason). |
| `split_reversals` | Optional | Array of [SplitReversalReference](../models/SplitReversalReference.md#splitreversalreference) or null | Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. `split_reversals`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessplit_reversals). |
| `status` | Optional | string or null | Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. `status`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus). |
| `status_changed_at` | Optional | string or null | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. `status_changed_at`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributesstatus_changed_at). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`. `supported_actions`: [declared alternatives](../models/DisputeInquiryClosedInstalledMerchantsEvent.md#disputeinquiryclosedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.amount_money

Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1

anyOf MoneyValue: Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money..

- Required: `amount`, `currency`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount in dispute. For a chargeback, this amount left your balance when the case opened; an inquiry moves no money. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.can_respond_with_evidence

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.can_respond_with_evidence variant 1

anyOf variant 1: Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now..

- Value shape: boolean. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.can_respond_with_evidence variant 2

anyOf variant 2.

- Value shape: null. Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.case_type

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.case_type variant 1

anyOf variant 1: Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed..

- Value shape: string. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.case_type variant 2

anyOf variant 2.

- Value shape: null. Kind of case the card network or bank opened. `status` and `is_action_required` say whether a response is needed. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.customer_id

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: The customer on the disputed payment. Absent when the payment has none..

- Value shape: string. The customer on the disputed payment. Absent when the payment has none. The customer on the disputed payment. Absent when the payment has none. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer on the disputed payment. Absent when the payment has none. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.dispute_id

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.dispute_id variant 1

anyOf variant 1: Stable identifier of the dispute..

- Value shape: string. Stable identifier of the dispute. Stable identifier of the dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the dispute. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_due_at

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_due_at variant 1

anyOf variant 1: Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for..

- Value shape: (string or null). Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_due_at variant 2

anyOf variant 2.

- Value shape: null. Deadline for submitting evidence. Respond before it when is_action_required is true. `null` when the dispute has no response window, such as a bank return or a case your processor gave no deadline for. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_submission_count

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_submission_count variant 1

anyOf variant 1: How many times evidence was submitted for this dispute. 0 until you submit..

- Value shape: integer. How many times evidence was submitted for this dispute. 0 until you submit. How many times evidence was submitted for this dispute. 0 until you submit. Format: `int32`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.evidence_submission_count variant 2

anyOf variant 2.

- Value shape: null. How many times evidence was submitted for this dispute. 0 until you submit. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.fraud_warning_id

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.fraud_warning_id variant 1

anyOf variant 1: The fraud warning the card network sent for this payment before the dispute. Absent when there was none..

- Value shape: string. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. The fraud warning the card network sent for this payment before the dispute. Absent when there was none. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.has_evidence

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.has_evidence variant 1

anyOf variant 1: Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted..

- Value shape: boolean. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.has_evidence variant 2

anyOf variant 2.

- Value shape: null. Whether evidence is saved for this dispute, submitted or not. In test mode this includes an unsubmitted draft Flint saves when the dispute first needs a response, so it doesn't mean someone started a response. evidence_submission_count says whether evidence was submitted. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_action_required

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_action_required variant 1

anyOf variant 1: True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event..

- Value shape: boolean. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_action_required variant 2

anyOf variant 2.

- Value shape: null. True when status is needs_response or inquiry_needs_response, can_respond_with_evidence is true, and evidence_due_at hasn't passed. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns false once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_evidence_deadline_passed

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_evidence_deadline_passed variant 1

anyOf variant 1: Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event..

- Value shape: boolean. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.is_evidence_deadline_passed variant 2

anyOf variant 2.

- Value shape: null. Whether evidence_due_at has passed on a dispute with a response window. Always false when can_respond_with_evidence is false. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns true once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.network_reason_code

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.network_reason_code variant 1

anyOf variant 1: Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape..

- Value shape: (string or null). Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. pattern: `^[A-Z0-9.]{1,8}$`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.network_reason_code variant 2

anyOf variant 2.

- Value shape: null. Opaque reason code assigned by the card network. Read it with the disputed payment's card brand; codes differ by network. `null` when the network supplied no code or the supplied code has an unsupported shape. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.order_id

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order..

- Value shape: string. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the disputed payment was for. Absent when Flint can't link the dispute to an order. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent..

- Value shape: string. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that took the disputed payment. Absent when Flint can't link the dispute to a payment intent. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_option

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_option variant 1

anyOf variant 1: How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option..

- Value shape: (string or null). How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.payment_option variant 2

anyOf variant 2.

- Value shape: null. How the buyer paid for the disputed payment. `null` when Flint hasn't linked the dispute to a payment intent that records a payment option. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.reason

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.reason variant 1

anyOf variant 1: Why the payment was disputed. A reason Flint doesn't recognize is `other`..

- Value shape: string. Why the payment was disputed. A reason Flint doesn't recognize is `other`. Values: `"fraudulent"`, `"unrecognized"`, `"duplicate"`, `"product_not_received"`, `"product_not_as_described"`, `"refund_not_processed"`, `"subscription_canceled"`, `"noncompliant"`, `"insufficient_funds"`, `"debit_not_authorized"`, `"bank_account_not_found"`, `"other"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the payment was disputed. A reason Flint doesn't recognize is `other`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.recommended_evidence_types

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.recommended_evidence_types variant 1

anyOf variant 1: Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change..

- Value shape: Array of string. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. Items values: `"customer_details"`, `"customer_communication"`, `"customer_signature"`, `"receipt"`, `"shipping_documentation"`, `"service_documentation"`, `"access_activity_log"`, `"product_description"`, `"refund_policy"`, `"duplicate_charge_documentation"`, `"cancellation_policy"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.recommended_evidence_types variant 2

anyOf variant 2.

- Value shape: null. Evidence types that usually answer this reason, chosen by Flint, most useful first. Use the ones that fit what you sold. Empty when Flint has no recommendation, including bank returns. Chosen from the stored reason and case_type; in a webhook, frozen when Flint records the change. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.response_unavailable_reason

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.response_unavailable_reason variant 1

anyOf variant 1: Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied..

- Value shape: string. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.response_unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.split_reversals

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.split_reversals variant 1

anyOf variant 1: Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts..

- Value shape: Array of [SplitReversalReference](../models/SplitReversalReference.md#splitreversalreference). Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.split_reversals variant 2

anyOf variant 2.

- Value shape: null. Fixed seller allocations on the payment, each naming its payment split and reversal. Present only when the payment has splits; an empty array means no seller share was allocated. Read PaymentSplit.reversals for status, shortfall, and reinstated amounts. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final..

- Value shape: string. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the dispute stands. `needs_response` and `inquiry_needs_response` ask you to respond; `inquiry_closed`, `won`, `lost`, and `prevented` are final. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status_changed_at

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status_changed_at variant 1

anyOf variant 1: Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time..

- Value shape: string. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.status_changed_at variant 2

anyOf variant 2.

- Value shape: null. Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. Items values: `"accept"`.

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Evaluated when the dispute is read; in a webhook payload, as of when Flint recorded the change. It turns empty once evidence_due_at has passed, with no event. 

### DisputeInquiryClosedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### DisputeInquiryClosedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

