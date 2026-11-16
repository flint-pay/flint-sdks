[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedInstalledMerchantsEventInput

The `return_resolution.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_resolution.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributes). |

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [ReturnResolutionCreatedInstalledMerchantsEventInput.data.object](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdataobject).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentInput](../models/ReturnResolutionAdjustmentInput.md#returnresolutionadjustmentinput) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. |
| `buyer_refund_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who canceled the resolution. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `confirmed_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who confirmed the resolution. |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributescorrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who created the resolution. |
| `credit_adjustment_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Credits added by the resolution's adjustments. |
| `deduction_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlockerInput](../models/ReturnResolutionExecutionBlockerInput.md#returnresolutionexecutionblockerinput) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesfulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributespayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributespricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesrefund_ids). |
| `refunds` | Optional | Array of [RefundInput](../models/RefundInput.md#refundinput) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreplacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Total of the replacement items the buyer receives. |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_policy_id` | Optional | string or null or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_resolution_id). |
| `returned_total_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Value of the returned units this resolution covers. |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_reason

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_reason variant 1

anyOf variant 1: Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution..

- Value shape: string. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_reason variant 2

anyOf variant 2.

- Value shape: null. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_required_by

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_required_by variant 1

anyOf variant 1: Who has to act while the resolution's status is `requires_action`..

- Value shape: string. Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_required_by variant 2

anyOf variant 2.

- Value shape: null. Who has to act while the resolution's status is `requires_action`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.adjustments

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.adjustments variant 1

anyOf variant 1: Fees and credits applied to the resolution's amounts..

- Value shape: Array of [ReturnResolutionAdjustmentInput](../models/ReturnResolutionAdjustmentInput.md#returnresolutionadjustmentinput). Fees and credits applied to the resolution's amounts. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.adjustments variant 2

anyOf variant 2.

- Value shape: null. Fees and credits applied to the resolution's amounts. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Why the resolution was canceled..

- Value shape: string. Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the resolution was canceled. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.corrects_return_resolution_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.corrects_return_resolution_id variant 1

anyOf variant 1: ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`..

- Value shape: string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.corrects_return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.execution_blockers

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.execution_blockers variant 1

anyOf variant 1: What a confirmed resolution is still waiting for. Empty when nothing is..

- Value shape: Array of [ReturnResolutionExecutionBlockerInput](../models/ReturnResolutionExecutionBlockerInput.md#returnresolutionexecutionblockerinput). What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.execution_blockers variant 2

anyOf variant 2.

- Value shape: null. What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code variant 1

anyOf variant 1: Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution..

- Value shape: string. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: `"gift_card_refund_destination_required"`, `"store_credit_unavailable"`, `"refund_creation_failed"`, `"refund_failed"`, `"refund_line_value_unavailable"`, `"payment_intent_creation_failed"`, `"payment_failed"`, `"replacement_order_creation_failed"`, `"replacement_fulfillment_canceled"`, `"resolution_effect_failed"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message variant 1

anyOf variant 1: Explanation of a failed Return resolution, when available..

- Value shape: string. Explanation of a failed Return resolution, when available. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed Return resolution, when available. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.fulfilled_at

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.fulfilled_at variant 1

anyOf variant 1: When the resolution completed..

- Value shape: string. When the resolution completed. When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.fulfilled_at variant 2

anyOf variant 2.

- Value shape: null. When the resolution completed. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_refund_destination

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_refund_destination variant 1

anyOf variant 1: Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt..

- Value shape: string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_refund_destination variant 2

anyOf variant 2.

- Value shape: null. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: Return lines and quantities the resolution covers. Absent on a correction..

- Value shape: Array of [ReturnResolutionLineItemInput](../models/ReturnResolutionLineItemInput.md#returnresolutionlineiteminput). Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists..

- Value shape: Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intents

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intents variant 1

anyOf variant 1: Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order..

- Value shape: Array of [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput). Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.pricing_basis

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.pricing_basis variant 1

anyOf variant 1: How replacement lines are priced. Present on exchanges and replacements..

- Value shape: string. How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.pricing_basis variant 2

anyOf variant 2.

- Value shape: null. How replacement lines are priced. Present on exchanges and replacements. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refund_ids

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 1

anyOf variant 1: IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists..

- Value shape: Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refunds

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refunds variant 1

anyOf variant 1: Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order..

- Value shape: Array of [RefundInput](../models/RefundInput.md#refundinput). Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refunds variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_line_items

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_line_items variant 1

anyOf variant 1: Merchandise the buyer receives instead, for an exchange or replacement..

- Value shape: Array of [ReturnReplacementLineItemInput](../models/ReturnReplacementLineItemInput.md#returnreplacementlineiteminput). Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_line_items variant 2

anyOf variant 2.

- Value shape: null. Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_order_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_order_id variant 1

anyOf variant 1: ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists..

- Value shape: string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.resolution_type

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.resolution_type variant 1

anyOf variant 1: What the buyer gets for the approved quantity..

- Value shape: string. What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.resolution_type variant 2

anyOf variant 2.

- Value shape: null. What the buyer gets for the approved quantity. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: ID of the Return the resolution belongs to..

- Value shape: string. ID of the Return the resolution belongs to. ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the resolution belongs to. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_id variant 1

anyOf variant 1: Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null..

- Value shape: (string or null). Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_revision_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections..

- Value shape: string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 1

anyOf variant 1: Unique identifier for this return resolution, prefixed `retres_`..

- Value shape: string. Unique identifier for this return resolution, prefixed `retres_`. Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable..

- Value shape: string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`.

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. 

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesversion).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

