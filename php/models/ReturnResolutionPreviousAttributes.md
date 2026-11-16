[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentPreviousAttributes](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributes) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. |
| `buyer_refund_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the resolution. Merchant reads only. `canceled_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescanceled_by). |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `confirmed_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who confirmed the resolution. `confirmed_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesconfirmed_by). |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescorrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who created the resolution. `created_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescreated_by). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credits added by the resolution's adjustments. |
| `deduction_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlockerPreviousAttributes](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributes) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItemPreviousAttributes](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributes) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefund_ids). |
| `refunds` | Optional | Array of [RefundPreviousAttributes](../models/RefundPreviousAttributes.md#refundpreviousattributes) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemPreviousAttributes](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributes) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. `replacement_order`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order). |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the replacement items the buyer receives. |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_resolution_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this resolution covers. |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion). |

### ReturnResolutionPreviousAttributes.action_reason

### ReturnResolutionPreviousAttributes.action_reason variant 1

anyOf variant 1: Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution..

- Value shape: string. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`.

### ReturnResolutionPreviousAttributes.action_reason variant 2

anyOf variant 2.

- Value shape: null. Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. 

### ReturnResolutionPreviousAttributes.action_required_by

### ReturnResolutionPreviousAttributes.action_required_by variant 1

anyOf variant 1: Who has to act while the resolution's status is `requires_action`..

- Value shape: string. Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`.

### ReturnResolutionPreviousAttributes.action_required_by variant 2

anyOf variant 2.

- Value shape: null. Who has to act while the resolution's status is `requires_action`. 

### ReturnResolutionPreviousAttributes.adjustments

### ReturnResolutionPreviousAttributes.adjustments variant 1

anyOf variant 1: Fees and credits applied to the resolution's amounts..

- Value shape: Array of [ReturnResolutionAdjustmentPreviousAttributes](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributes). Fees and credits applied to the resolution's amounts. 

### ReturnResolutionPreviousAttributes.adjustments variant 2

anyOf variant 2.

- Value shape: null. Fees and credits applied to the resolution's amounts. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Optional | string or null | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. `adjustment_type`: [declared alternatives](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type). |
| `applied_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. |
| `assessed_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. |
| `reason` | Optional | string or null | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. `reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_line_item_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_policy_revision_id). |
| `return_resolution_adjustment_id` | Optional | string or null | Unique identifier for this return resolution adjustment, prefixed `retadj_`. `return_resolution_adjustment_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_resolution_adjustment_id). |
| `status` | Optional | string or null | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. `status`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesstatus). |
| `value_effect` | Optional | string or null | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. `value_effect`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesvalue_effect). |
| `waived_at` | Optional | string or null | RFC3339 timestamp. `waived_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `waived_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who waived the adjustment. `waived_by`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaived_by). |
| `waiver_reason` | Optional | string or null | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. `waiver_reason`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason). |
| `waiver_reason_message` | Optional | string or null | Detail about `waiver_reason`. `waiver_reason_message`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason_message). |

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.adjustment_type

Declared alternatives: [ReturnPolicyAdjustmentProposalPreviousAttributes.adjustment_type](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributesadjustment_type).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.reason

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.reason](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreason).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_line_item_id

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole..

- Value shape: string. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_id

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_id variant 1

anyOf variant 1: Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null..

- Value shape: string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_revision_id

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons..

- Value shape: string. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for other reasons. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_resolution_adjustment_id

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_resolution_adjustment_id variant 1

anyOf variant 1: Unique identifier for this return resolution adjustment, prefixed `retadj_`..

- Value shape: string. Unique identifier for this return resolution adjustment, prefixed `retadj_`. Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example: `"retadj_01KEZF7C00EX1XSCX7WSCDKSZZ"`. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_resolution_adjustment_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution adjustment, prefixed `retadj_`. 

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.status

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.status](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesstatus).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.value_effect

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.value_effect](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesvalue_effect).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.waived_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.waived_by

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.waived_by](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaived_by).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.waiver_reason

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.waiver_reason](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason).

### ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.waiver_reason_message

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.waiver_reason_message](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributeswaiver_reason_message).

### ReturnResolutionPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionPreviousAttributes.canceled_by

Who canceled the resolution. Merchant reads only.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnResolutionPreviousAttributes.canceled_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnResolutionPreviousAttributes.canceled_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who canceled the resolution. Merchant reads only. 

### ReturnResolutionPreviousAttributes.canceled_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnResolutionPreviousAttributes.canceled_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnResolutionPreviousAttributes.cancellation_reason

### ReturnResolutionPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the resolution was canceled..

- Value shape: string. Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnResolutionPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the resolution was canceled. 

### ReturnResolutionPreviousAttributes.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnResolutionPreviousAttributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionPreviousAttributes.confirmed_by

Who confirmed the resolution.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnResolutionPreviousAttributes.confirmed_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnResolutionPreviousAttributes.confirmed_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who confirmed the resolution. 

### ReturnResolutionPreviousAttributes.confirmed_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnResolutionPreviousAttributes.confirmed_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id variant 1

anyOf variant 1: ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`..

- Value shape: string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnResolutionPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionPreviousAttributes.created_by

Who created the resolution.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnResolutionPreviousAttributes.created_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnResolutionPreviousAttributes.created_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who created the resolution. 

### ReturnResolutionPreviousAttributes.created_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnResolutionPreviousAttributes.created_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnResolutionPreviousAttributes.execution_blockers

### ReturnResolutionPreviousAttributes.execution_blockers variant 1

anyOf variant 1: What a confirmed resolution is still waiting for. Empty when nothing is..

- Value shape: Array of [ReturnResolutionExecutionBlockerPreviousAttributes](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributes). What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributes.execution_blockers variant 2

anyOf variant 2.

- Value shape: null. What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Values: [8 declared values](#returnresolutionpreviousattributesexecution_blockers-variant-1-fields-1-code-values). `code`: [declared alternatives](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributescode). |
| `linked_resource` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The resource the blocker waits on, such as a Refund or the replacement Order. `linked_resource`: [declared alternatives](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributeslinked_resource). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the blocker gates. Absent when it applies to the whole resolution. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers-variant-1-fields-1return_line_item_id). |

#### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1 code values

- `"handoff_pending"`
- `"receipt_pending"`
- `"inspection_pending"`
- `"manual_release_pending"`
- `"buyer_payment_pending"`
- `"refund_pending"`
- `"replacement_order_pending"`
- `"fulfillment_pending"`

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.code

Declared alternatives: [ReturnResolutionExecutionBlockerPreviousAttributes.code](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributescode).

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.linked_resource

Declared alternatives: [ReturnResolutionExecutionBlockerPreviousAttributes.linked_resource](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributeslinked_resource).

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id).

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.return_line_item_id

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the blocker gates. Absent when it applies to the whole resolution..

- Value shape: string. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionPreviousAttributes.execution_blockers variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. 

### ReturnResolutionPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnResolutionPreviousAttributes.failure_code

### ReturnResolutionPreviousAttributes.failure_code variant 1

anyOf variant 1: Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution..

- Value shape: string. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: `"gift_card_refund_destination_required"`, `"store_credit_unavailable"`, `"refund_creation_failed"`, `"refund_failed"`, `"refund_line_value_unavailable"`, `"payment_intent_creation_failed"`, `"payment_failed"`, `"replacement_order_creation_failed"`, `"replacement_fulfillment_canceled"`, `"resolution_effect_failed"`.

### ReturnResolutionPreviousAttributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. 

### ReturnResolutionPreviousAttributes.failure_message

### ReturnResolutionPreviousAttributes.failure_message variant 1

anyOf variant 1: Explanation of a failed Return resolution, when available..

- Value shape: string. Explanation of a failed Return resolution, when available. 

### ReturnResolutionPreviousAttributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed Return resolution, when available. 

### ReturnResolutionPreviousAttributes.fulfilled_at

### ReturnResolutionPreviousAttributes.fulfilled_at variant 1

anyOf variant 1: When the resolution completed..

- Value shape: string. When the resolution completed. When the resolution completed. Format: `date-time`. 

### ReturnResolutionPreviousAttributes.fulfilled_at variant 2

anyOf variant 2.

- Value shape: null. When the resolution completed. 

### ReturnResolutionPreviousAttributes.gift_card_refund_destination

### ReturnResolutionPreviousAttributes.gift_card_refund_destination variant 1

anyOf variant 1: Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt..

- Value shape: string. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`.

### ReturnResolutionPreviousAttributes.gift_card_refund_destination variant 2

anyOf variant 2.

- Value shape: null. Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. 

### ReturnResolutionPreviousAttributes.line_items

### ReturnResolutionPreviousAttributes.line_items variant 1

anyOf variant 1: Return lines and quantities the resolution covers. Absent on a correction..

- Value shape: Array of [ReturnResolutionLineItemPreviousAttributes](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributes). Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and quantities the resolution covers. Absent on a correction. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_timing` | Optional | string or null | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the resolution covers. `return_line_item_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items-variant-1-fields-1return_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items-variant-1-fields-1return_resolution_id). |
| `return_resolution_line_item_id` | Optional | string or null | ID of an existing resolution line to keep. Leave out to add a new line. `return_resolution_line_item_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items-variant-1-fields-1return_resolution_line_item_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this line covers. |

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.release_timing

Declared alternatives: [ReturnPolicyEvaluationLineItemPreviousAttributes.release_timing](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributesrelease_timing).

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_id).

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the resolution covers..

- Value shape: string. ID of the Return line the resolution covers. ID of the Return line the resolution covers. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the resolution covers. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_id

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_id variant 1

anyOf variant 1: ID of the resolution the line belongs to..

- Value shape: string. ID of the resolution the line belongs to. ID of the resolution the line belongs to. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution the line belongs to. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_line_item_id

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_line_item_id variant 1

anyOf variant 1: ID of an existing resolution line to keep. Leave out to add a new line..

- Value shape: string. ID of an existing resolution line to keep. Leave out to add a new line. ID of an existing resolution line to keep. Leave out to add a new line. Example: `"retresli_01KEZF7C00CR5NCDXRBP9W14CB"`. 

### ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of an existing resolution line to keep. Leave out to add a new line. 

### ReturnResolutionPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnResolutionPreviousAttributes.payment_intent_ids

### ReturnResolutionPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists..

- Value shape: Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. 

### ReturnResolutionPreviousAttributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. 

### ReturnResolutionPreviousAttributes.payment_intents

### ReturnResolutionPreviousAttributes.payment_intents variant 1

anyOf variant 1: Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order..

- Value shape: Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes). Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. 

### ReturnResolutionPreviousAttributes.payment_intents variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents-variant-1-fields-1).

### ReturnResolutionPreviousAttributes.pricing_basis

### ReturnResolutionPreviousAttributes.pricing_basis variant 1

anyOf variant 1: How replacement lines are priced. Present on exchanges and replacements..

- Value shape: string. How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`.

### ReturnResolutionPreviousAttributes.pricing_basis variant 2

anyOf variant 2.

- Value shape: null. How replacement lines are priced. Present on exchanges and replacements. 

### ReturnResolutionPreviousAttributes.refund_ids

### ReturnResolutionPreviousAttributes.refund_ids variant 1

anyOf variant 1: IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists..

- Value shape: Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. 

### ReturnResolutionPreviousAttributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. 

### ReturnResolutionPreviousAttributes.refunds

### ReturnResolutionPreviousAttributes.refunds variant 1

anyOf variant 1: Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order..

- Value shape: Array of [RefundPreviousAttributes](../models/RefundPreviousAttributes.md#refundpreviousattributes). Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionPreviousAttributes.refunds variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. 

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1credit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1customer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1invoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationPreviousAttributes](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributes) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1merchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. `payment_intent`: [declared alternatives](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent). |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1payment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefundPreviousAttributes](../models/PaymentRefundPreviousAttributes.md#paymentrefundpreviousattributes) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds-variant-1-fields-1payment_review_id). |
| `pending_reason` | Optional | string or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by). |
| `reason` | Optional | string or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). `reason`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refunded_at). |
| `refunded_tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1succeeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundPreviousAttributes](../models/RefundTaxBreakdownRefundPreviousAttributes.md#refundtaxbreakdownrefundpreviousattributes) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationPreviousAttributes](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributes) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryPreviousAttributes](../models/RefundUnissuedGiftCardRecoveryPreviousAttributes.md#refundunissuedgiftcardrecoverypreviousattributes) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.credit_note_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.credit_note_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1credit_note_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.customer_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.customer_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1customer_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.failure_reason

Declared alternatives: [BuyerPaymentRefundPreviousAttributes.failure_reason](../models/BuyerPaymentRefundPreviousAttributes.md#buyerpaymentrefundpreviousattributesfailure_reason).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.idempotency_key

Declared alternatives: [BuyerRefundPreviousAttributes.idempotency_key](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesidempotency_key).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.initiated_by

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.initiated_by](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesinitiated_by).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.invoice_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.invoice_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1invoice_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.line_item_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.merchant_id

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute variant 1.merchant_id](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute-variant-1merchant_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.order_edit_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_edit_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_edit_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.order_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.order_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1order_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_intent

Declared alternatives: [DisputeInquiryClosedMerchantEventDataPreviousAttributes.payment_intent](../models/DisputeInquiryClosedMerchantEventDataPreviousAttributes.md#disputeinquiryclosedmerchanteventdatapreviousattributespayment_intent).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_intent_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.payment_intent_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1payment_intent_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_refunds

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.payment_refunds](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributespayment_refunds).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_review_id

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.pending_reason

Declared alternatives: [BuyerRefundPreviousAttributes.pending_reason](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributespending_reason).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.processed_by

Declared alternatives: [BuyerRefundPreviousAttributes.processed_by](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesprocessed_by).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.reason

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.reason](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesreason).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.reason_message

Declared alternatives: [BuyerRefundPreviousAttributes.reason_message](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesreason_message).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.refund_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refund_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refund_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.refund_platform_fee

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.refund_platform_fee](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesrefund_platform_fee).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.refund_reference

Declared alternatives: [BuyerRefundPreviousAttributes.refund_reference](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesrefund_reference).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.refunded_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.refunded_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1refunded_at).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.return_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.return_resolution_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.return_resolution_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1return_resolution_id).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.status

Declared alternatives: [BuyerRefundPreviousAttributes.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesstatus).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.succeeded_at

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.refunds variant 1.[] fields 1.succeeded_at](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesrefunds-variant-1-fields-1succeeded_at).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.tax_breakdown_refunds

Declared alternatives: [BuyerRefundPreviousAttributes.tax_breakdown_refunds](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestax_breakdown_refunds).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.tender_allocations

Declared alternatives: [BuyerRefundPreviousAttributes.tender_allocations](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributestender_allocations).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.unissued_gift_card_recoveries

Declared alternatives: [RefundFailedMerchantEventDataPreviousAttributes.unissued_gift_card_recoveries](../models/RefundFailedMerchantEventDataPreviousAttributes.md#refundfailedmerchanteventdatapreviousattributesunissued_gift_card_recoveries).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnResolutionPreviousAttributes.refunds variant 1.[] fields 1.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

### ReturnResolutionPreviousAttributes.replacement_line_items

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1

anyOf variant 1: Merchandise the buyer receives instead, for an exchange or replacement..

- Value shape: Array of [ReturnReplacementLineItemPreviousAttributes](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributes). Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 2

anyOf variant 2.

- Value shape: null. Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | ID of the bundle the replacement line is for. `bundle_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items-variant-1-fields-1bundle_id). |
| `description` | Optional | string or null | Description of the replacement item. `description`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount on the replacement units. |
| `name` | Optional | string or null | Name of the replacement item. `name`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesname). |
| `product_id` | Optional | string or null | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. `product_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_replacement_line_item_id` | Optional | string or null | Unique identifier for this return replacement line item, prefixed `retrepli_`. `return_replacement_line_item_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items-variant-1-fields-1return_replacement_line_item_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution the line belongs to. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items-variant-1-fields-1return_resolution_id). |
| `sku` | Optional | string or null | SKU of the replacement item. `sku`: [declared alternatives](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal of the replacement units, before discount and tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the replacement units. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discount, plus tax. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one replacement unit. |
| `variant_id` | Optional | string or null | ID of the variant the replacement line is for. `variant_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items-variant-1-fields-1variant_id). |

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.bundle_id

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the bundle the replacement line is for..

- Value shape: string. ID of the bundle the replacement line is for. ID of the bundle the replacement line is for. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle the replacement line is for. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.description

Declared alternatives: [ReturnReplacementLineItemPreviousAttributes.description](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesdescription).

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.name

Declared alternatives: [ReturnReplacementLineItemPreviousAttributes.name](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributesname).

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.product_id

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items..

- Value shape: string. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.return_replacement_line_item_id

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.return_replacement_line_item_id variant 1

anyOf variant 1: Unique identifier for this return replacement line item, prefixed `retrepli_`..

- Value shape: string. Unique identifier for this return replacement line item, prefixed `retrepli_`. Unique identifier for this return replacement line item, prefixed `retrepli_`. Example: `"retrepli_01KEZF7C00F6P8VWG80G0JC8W2"`. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.return_replacement_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return replacement line item, prefixed `retrepli_`. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items-variant-1-fields-1return_resolution_id).

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.sku

Declared alternatives: [ReturnReplacementLineItemPreviousAttributes.sku](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributessku).

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.variant_id

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the variant the replacement line is for..

- Value shape: string. ID of the variant the replacement line is for. ID of the variant the replacement line is for. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant the replacement line is for. 

### ReturnResolutionPreviousAttributes.replacement_order

Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### ReturnResolutionPreviousAttributes.replacement_order variant 1

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### ReturnResolutionPreviousAttributes.replacement_order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. 

### ReturnResolutionPreviousAttributes.replacement_order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

### ReturnResolutionPreviousAttributes.replacement_order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

### ReturnResolutionPreviousAttributes.replacement_order_id

### ReturnResolutionPreviousAttributes.replacement_order_id variant 1

anyOf variant 1: ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists..

- Value shape: string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnResolutionPreviousAttributes.replacement_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnResolutionPreviousAttributes.resolution_type

### ReturnResolutionPreviousAttributes.resolution_type variant 1

anyOf variant 1: What the buyer gets for the approved quantity..

- Value shape: string. What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`.

### ReturnResolutionPreviousAttributes.resolution_type variant 2

anyOf variant 2.

- Value shape: null. What the buyer gets for the approved quantity. 

### ReturnResolutionPreviousAttributes.return_id

### ReturnResolutionPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return the resolution belongs to..

- Value shape: string. ID of the Return the resolution belongs to. 

### ReturnResolutionPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the resolution belongs to. 

### ReturnResolutionPreviousAttributes.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id).

### ReturnResolutionPreviousAttributes.return_policy_revision_id

### ReturnResolutionPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections..

- Value shape: string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnResolutionPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnResolutionPreviousAttributes.return_resolution_id

### ReturnResolutionPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: Unique identifier for this return resolution, prefixed `retres_`..

- Value shape: string. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnResolutionPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnResolutionPreviousAttributes.status

### ReturnResolutionPreviousAttributes.status variant 1

anyOf variant 1: completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable..

- Value shape: string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`.

### ReturnResolutionPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. 

### ReturnResolutionPreviousAttributes.supported_actions

### ReturnResolutionPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`.

### ReturnResolutionPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. 

### ReturnResolutionPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionPreviousAttributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

