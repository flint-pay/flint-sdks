[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentPreviousAttributesInput](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinput) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. |
| `buyer_refund_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who canceled the resolution. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputcancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `confirmed_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who confirmed the resolution. |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputcorrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who created the resolution. |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Credits added by the resolution's adjustments. |
| `deduction_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlockerPreviousAttributesInput](../models/ReturnResolutionExecutionBlockerPreviousAttributesInput.md#returnresolutionexecutionblockerpreviousattributesinput) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItemPreviousAttributesInput](../models/ReturnResolutionLineItemPreviousAttributesInput.md#returnresolutionlineitempreviousattributesinput) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputline_items). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputrefund_ids). |
| `refunds` | Optional | Array of [RefundPreviousAttributesInput](../models/RefundPreviousAttributesInput.md#refundpreviousattributesinput) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemPreviousAttributesInput](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinput) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreplacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total of the replacement items the buyer receives. |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_resolution_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Value of the returned units this resolution covers. |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputversion). |

### ReturnResolutionPreviousAttributesInput.action_reason

### ReturnResolutionPreviousAttributesInput.action_reason variant 1

anyOf variant 1: Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution..

- Value shape: string. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`.

### ReturnResolutionPreviousAttributesInput.action_reason variant 2

anyOf variant 2.

- Value shape: null. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. 

### ReturnResolutionPreviousAttributesInput.action_required_by

### ReturnResolutionPreviousAttributesInput.action_required_by variant 1

anyOf variant 1: Who has to act while the resolution's status is `requires_action`..

- Value shape: string. Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`.

### ReturnResolutionPreviousAttributesInput.action_required_by variant 2

anyOf variant 2.

- Value shape: null. Who has to act while the resolution's status is `requires_action`. 

### ReturnResolutionPreviousAttributesInput.adjustments

### ReturnResolutionPreviousAttributesInput.adjustments variant 1

anyOf variant 1: Fees and credits applied to the resolution's amounts..

- Value shape: Array of [ReturnResolutionAdjustmentPreviousAttributesInput](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinput). Fees and credits applied to the resolution's amounts. 

### ReturnResolutionPreviousAttributesInput.adjustments variant 2

anyOf variant 2.

- Value shape: null. Fees and credits applied to the resolution's amounts. 

### ReturnResolutionPreviousAttributesInput.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributesInput.cancellation_reason

### ReturnResolutionPreviousAttributesInput.cancellation_reason variant 1

anyOf variant 1: Why the resolution was canceled..

- Value shape: string. Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnResolutionPreviousAttributesInput.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the resolution was canceled. 

### ReturnResolutionPreviousAttributesInput.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnResolutionPreviousAttributesInput.confirmed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributesInput.corrects_return_resolution_id

### ReturnResolutionPreviousAttributesInput.corrects_return_resolution_id variant 1

anyOf variant 1: ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`..

- Value shape: string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionPreviousAttributesInput.corrects_return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnResolutionPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributesInput.execution_blockers

### ReturnResolutionPreviousAttributesInput.execution_blockers variant 1

anyOf variant 1: What a confirmed resolution is still waiting for. Empty when nothing is..

- Value shape: Array of [ReturnResolutionExecutionBlockerPreviousAttributesInput](../models/ReturnResolutionExecutionBlockerPreviousAttributesInput.md#returnresolutionexecutionblockerpreviousattributesinput). What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributesInput.execution_blockers variant 2

anyOf variant 2.

- Value shape: null. What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnResolutionPreviousAttributesInput.failure_code

### ReturnResolutionPreviousAttributesInput.failure_code variant 1

anyOf variant 1: Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution..

- Value shape: string. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: `"gift_card_refund_destination_required"`, `"store_credit_unavailable"`, `"refund_creation_failed"`, `"refund_failed"`, `"refund_line_value_unavailable"`, `"payment_intent_creation_failed"`, `"payment_failed"`, `"replacement_order_creation_failed"`, `"replacement_fulfillment_canceled"`, `"resolution_effect_failed"`.

### ReturnResolutionPreviousAttributesInput.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. 

### ReturnResolutionPreviousAttributesInput.failure_message

### ReturnResolutionPreviousAttributesInput.failure_message variant 1

anyOf variant 1: Explanation of a failed Return resolution, when available..

- Value shape: string. Explanation of a failed Return resolution, when available. 

### ReturnResolutionPreviousAttributesInput.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed Return resolution, when available. 

### ReturnResolutionPreviousAttributesInput.fulfilled_at

### ReturnResolutionPreviousAttributesInput.fulfilled_at variant 1

anyOf variant 1: When the resolution completed..

- Value shape: string. When the resolution completed. When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnResolutionPreviousAttributesInput.fulfilled_at variant 2

anyOf variant 2.

- Value shape: null. When the resolution completed. 

### ReturnResolutionPreviousAttributesInput.gift_card_refund_destination

### ReturnResolutionPreviousAttributesInput.gift_card_refund_destination variant 1

anyOf variant 1: Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt..

- Value shape: string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`.

### ReturnResolutionPreviousAttributesInput.gift_card_refund_destination variant 2

anyOf variant 2.

- Value shape: null. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. 

### ReturnResolutionPreviousAttributesInput.line_items

### ReturnResolutionPreviousAttributesInput.line_items variant 1

anyOf variant 1: Return lines and quantities the resolution covers. Absent on a correction..

- Value shape: Array of [ReturnResolutionLineItemPreviousAttributesInput](../models/ReturnResolutionLineItemPreviousAttributesInput.md#returnresolutionlineitempreviousattributesinput). Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionPreviousAttributesInput.payment_intent_ids

### ReturnResolutionPreviousAttributesInput.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists..

- Value shape: Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### ReturnResolutionPreviousAttributesInput.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. 

### ReturnResolutionPreviousAttributesInput.payment_intents

### ReturnResolutionPreviousAttributesInput.payment_intents variant 1

anyOf variant 1: Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order..

- Value shape: Array of [ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput). Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionPreviousAttributesInput.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionPreviousAttributesInput.pricing_basis

### ReturnResolutionPreviousAttributesInput.pricing_basis variant 1

anyOf variant 1: How replacement lines are priced. Present on exchanges and replacements..

- Value shape: string. How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`.

### ReturnResolutionPreviousAttributesInput.pricing_basis variant 2

anyOf variant 2.

- Value shape: null. How replacement lines are priced. Present on exchanges and replacements. 

### ReturnResolutionPreviousAttributesInput.refund_ids

### ReturnResolutionPreviousAttributesInput.refund_ids variant 1

anyOf variant 1: IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists..

- Value shape: Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### ReturnResolutionPreviousAttributesInput.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. 

### ReturnResolutionPreviousAttributesInput.refunds

### ReturnResolutionPreviousAttributesInput.refunds variant 1

anyOf variant 1: Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order..

- Value shape: Array of [RefundPreviousAttributesInput](../models/RefundPreviousAttributesInput.md#refundpreviousattributesinput). Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionPreviousAttributesInput.refunds variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionPreviousAttributesInput.replacement_line_items

### ReturnResolutionPreviousAttributesInput.replacement_line_items variant 1

anyOf variant 1: Merchandise the buyer receives instead, for an exchange or replacement..

- Value shape: Array of [ReturnReplacementLineItemPreviousAttributesInput](../models/ReturnReplacementLineItemPreviousAttributesInput.md#returnreplacementlineitempreviousattributesinput). Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributesInput.replacement_line_items variant 2

anyOf variant 2.

- Value shape: null. Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributesInput.replacement_order_id

### ReturnResolutionPreviousAttributesInput.replacement_order_id variant 1

anyOf variant 1: ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists..

- Value shape: string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnResolutionPreviousAttributesInput.replacement_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnResolutionPreviousAttributesInput.resolution_type

### ReturnResolutionPreviousAttributesInput.resolution_type variant 1

anyOf variant 1: What the buyer gets for the approved quantity..

- Value shape: string. What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`.

### ReturnResolutionPreviousAttributesInput.resolution_type variant 2

anyOf variant 2.

- Value shape: null. What the buyer gets for the approved quantity. 

### ReturnResolutionPreviousAttributesInput.return_id

### ReturnResolutionPreviousAttributesInput.return_id variant 1

anyOf variant 1: ID of the Return the resolution belongs to..

- Value shape: string. ID of the Return the resolution belongs to. ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnResolutionPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the resolution belongs to. 

### ReturnResolutionPreviousAttributesInput.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_policy_id).

### ReturnResolutionPreviousAttributesInput.return_policy_revision_id

### ReturnResolutionPreviousAttributesInput.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections..

- Value shape: string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnResolutionPreviousAttributesInput.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnResolutionPreviousAttributesInput.return_resolution_id

### ReturnResolutionPreviousAttributesInput.return_resolution_id variant 1

anyOf variant 1: Unique identifier for this return resolution, prefixed `retres_`..

- Value shape: string. Unique identifier for this return resolution, prefixed `retres_`. Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionPreviousAttributesInput.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnResolutionPreviousAttributesInput.status

### ReturnResolutionPreviousAttributesInput.status variant 1

anyOf variant 1: completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable..

- Value shape: string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`.

### ReturnResolutionPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. 

### ReturnResolutionPreviousAttributesInput.supported_actions

### ReturnResolutionPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`.

### ReturnResolutionPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. 

### ReturnResolutionPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributesInput.version

Declared alternatives: [ReturnDispositionPreviousAttributesInput.version](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputversion).

