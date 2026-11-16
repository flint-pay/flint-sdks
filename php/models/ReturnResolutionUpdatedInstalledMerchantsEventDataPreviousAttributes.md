[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. |
| `buyer_refund_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesCanceledBy](../models/ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesCanceledBy.md#returnresolutionupdatedinstalledmerchantseventdatapreviousattributescanceledby) or null | Who canceled the resolution. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `confirmed_by` | Optional | [ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesConfirmedBy](../models/ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesConfirmedBy.md#returnresolutionupdatedinstalledmerchantseventdatapreviousattributesconfirmedby) or null | Who confirmed the resolution. |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescorrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_by` | Optional | [ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesCreatedBy](../models/ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributesCreatedBy.md#returnresolutionupdatedinstalledmerchantseventdatapreviousattributescreatedby) or null | Who created the resolution. |
| `credit_adjustment_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Credits added by the resolution's adjustments. |
| `deduction_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlocker](../models/ReturnResolutionExecutionBlocker.md#returnresolutionexecutionblocker) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [10 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesline_items). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefund_ids). |
| `refunds` | Optional | Array of [Refund](../models/Refund.md#refund) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Total of the replacement items the buyer receives. |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_id). |
| `return_policy_id` | Optional | string or null or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_resolution_id). |
| `returned_total_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Value of the returned units this resolution covers. |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesversion). |

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.action_reason

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.action_reason](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_reason).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.action_required_by

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.action_required_by](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesaction_required_by).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.adjustments

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.adjustments](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesadjustments).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.cancellation_reason

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescancellation_reason).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.corrects_return_resolution_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.corrects_return_resolution_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributescorrects_return_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.execution_blockers

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.execution_blockers](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesexecution_blockers).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.failure_code

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.failure_code](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_code).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.failure_message

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.failure_message](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfailure_message).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.fulfilled_at

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.fulfilled_at](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesfulfilled_at).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.gift_card_refund_destination

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.gift_card_refund_destination](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesgift_card_refund_destination).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.line_items

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.line_items](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesline_items).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.payment_intent_ids

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intent_ids).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.payment_intents

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.payment_intents](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespayment_intents).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.pricing_basis

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.pricing_basis](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributespricing_basis).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.refund_ids

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.refund_ids](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefund_ids).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.refunds

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.refunds](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesrefunds).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.replacement_line_items

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.replacement_line_items](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_line_items).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.replacement_order_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.replacement_order_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreplacement_order_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.resolution_type

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.resolution_type](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesresolution_type).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.return_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.return_policy_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_policy_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.return_policy_revision_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_policy_revision_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_policy_revision_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.return_resolution_id

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.return_resolution_id](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesreturn_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.status

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.status](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributesstatus).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.supported_actions

Declared alternatives: [ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/ReturnResolutionUpdatedMerchantEventDataPreviousAttributes.md#returnresolutionupdatedmerchanteventdatapreviousattributessupported_actions).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventDataPreviousAttributes.version

Declared alternatives: [ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.version](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesversion).

