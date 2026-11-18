[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentPreviousAttributes](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributes) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. `buyer_payment_amount_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesbuyer_payment_amount_money). |
| `buyer_refund_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. `buyer_refund_amount_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesbuyer_refund_amount_money). |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the resolution. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `confirmed_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who confirmed the resolution. |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescorrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who created the resolution. |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credits added by the resolution's adjustments. `credit_adjustment_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescredit_adjustment_money). |
| `deduction_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. `deduction_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesdeduction_money). |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlockerPreviousAttributes](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributes) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [11 declared values](BuyerReturnResolution.md#buyerreturnresolution-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItemPreviousAttributes](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributes) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefund_ids). |
| `refunds` | Optional | Array of [RefundPreviousAttributes](../models/RefundPreviousAttributes.md#refundpreviousattributes) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemPreviousAttributes](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributes) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the replacement items the buyer receives. `replacement_total_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_total_money). |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_resolution_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this resolution covers. `returned_total_money`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturned_total_money). |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
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

### ReturnResolutionPreviousAttributes.buyer_payment_amount_money

Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.buyer_payment_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.buyer_payment_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. 

### ReturnResolutionPreviousAttributes.buyer_payment_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.buyer_payment_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnResolutionPreviousAttributes.buyer_refund_amount_money

Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.buyer_refund_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.buyer_refund_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. 

### ReturnResolutionPreviousAttributes.buyer_refund_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.buyer_refund_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnResolutionPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributes.cancellation_reason

### ReturnResolutionPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the resolution was canceled..

- Value shape: string. Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnResolutionPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the resolution was canceled. 

### ReturnResolutionPreviousAttributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason_message).

### ReturnResolutionPreviousAttributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id variant 1

anyOf variant 1: ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`..

- Value shape: string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionPreviousAttributes.corrects_return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnResolutionPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributes.credit_adjustment_money

Credits added by the resolution's adjustments.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.credit_adjustment_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.credit_adjustment_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Credits added by the resolution's adjustments. 

### ReturnResolutionPreviousAttributes.credit_adjustment_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.credit_adjustment_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnResolutionPreviousAttributes.deduction_money

Deductions taken by the resolution's adjustments, such as a restocking fee.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.deduction_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.deduction_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Deductions taken by the resolution's adjustments, such as a restocking fee. 

### ReturnResolutionPreviousAttributes.deduction_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.deduction_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnResolutionPreviousAttributes.execution_blockers

### ReturnResolutionPreviousAttributes.execution_blockers variant 1

anyOf variant 1: What a confirmed resolution is still waiting for. Empty when nothing is..

- Value shape: Array of [ReturnResolutionExecutionBlockerPreviousAttributes](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributes). What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributes.execution_blockers variant 2

anyOf variant 2.

- Value shape: null. What a confirmed resolution is still waiting for. Empty when nothing is. 

### ReturnResolutionPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnResolutionPreviousAttributes.failure_code

### ReturnResolutionPreviousAttributes.failure_code variant 1

anyOf variant 1: Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution..

- Value shape: string. Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: `"refund_payment_balance_unavailable"`, `"gift_card_refund_destination_required"`, `"store_credit_unavailable"`, `"refund_creation_failed"`, `"refund_failed"`, `"refund_line_value_unavailable"`, `"payment_intent_creation_failed"`, `"payment_failed"`, `"replacement_order_creation_failed"`, `"replacement_fulfillment_canceled"`, `"resolution_effect_failed"`.

### ReturnResolutionPreviousAttributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. 

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

- Value shape: string. When the resolution completed. When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

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

### ReturnResolutionPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### ReturnResolutionPreviousAttributes.payment_intent_ids

### ReturnResolutionPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists..

- Value shape: Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

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

- Value shape: Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

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

### ReturnResolutionPreviousAttributes.replacement_line_items

### ReturnResolutionPreviousAttributes.replacement_line_items variant 1

anyOf variant 1: Merchandise the buyer receives instead, for an exchange or replacement..

- Value shape: Array of [ReturnReplacementLineItemPreviousAttributes](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributes). Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributes.replacement_line_items variant 2

anyOf variant 2.

- Value shape: null. Merchandise the buyer receives instead, for an exchange or replacement. 

### ReturnResolutionPreviousAttributes.replacement_order_id

### ReturnResolutionPreviousAttributes.replacement_order_id variant 1

anyOf variant 1: ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists..

- Value shape: string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnResolutionPreviousAttributes.replacement_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnResolutionPreviousAttributes.replacement_total_money

Total of the replacement items the buyer receives.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.replacement_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.replacement_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total of the replacement items the buyer receives. 

### ReturnResolutionPreviousAttributes.replacement_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.replacement_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

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

- Value shape: string. ID of the Return the resolution belongs to. ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnResolutionPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the resolution belongs to. 

### ReturnResolutionPreviousAttributes.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id).

### ReturnResolutionPreviousAttributes.return_policy_revision_id

### ReturnResolutionPreviousAttributes.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections..

- Value shape: string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnResolutionPreviousAttributes.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnResolutionPreviousAttributes.return_resolution_id

### ReturnResolutionPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: Unique identifier for this return resolution, prefixed `retres_`..

- Value shape: string. Unique identifier for this return resolution, prefixed `retres_`. Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnResolutionPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnResolutionPreviousAttributes.returned_total_money

Value of the returned units this resolution covers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### ReturnResolutionPreviousAttributes.returned_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### ReturnResolutionPreviousAttributes.returned_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Value of the returned units this resolution covers. 

### ReturnResolutionPreviousAttributes.returned_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### ReturnResolutionPreviousAttributes.returned_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### ReturnResolutionPreviousAttributes.status

### ReturnResolutionPreviousAttributes.status variant 1

anyOf variant 1: completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable..

- Value shape: string. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`.

### ReturnResolutionPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. 

### ReturnResolutionPreviousAttributes.supported_actions

### ReturnResolutionPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order..

- Value shape: Array of string. Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`.

### ReturnResolutionPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. 

### ReturnResolutionPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionPreviousAttributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

