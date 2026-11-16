[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The admitted amount, or its final amount set at capture. `amount_money`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesamount_money). |
| `canceled_reason` | Optional | string or null | Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`. `canceled_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescanceled_reason). |
| `collecting_merchant_id` | Optional | string or null | The merchant of record that collected the payment. `collecting_merchant_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescollecting_merchant_id). |
| `created_at` | Optional | string or null | When the payment's create recorded the split. `created_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | The collecting merchant's description, shown to the seller. `description`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. `external_reference_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`. `failure_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesfailure_reason). |
| `funds_available_at` | Optional | string or null or null | When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. `funds_available_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesfunds_available_at). |
| `partner_app_id` | Optional | string or null | The collecting merchant's partner app. `partner_app_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | The seller's install of the app. `partner_app_install_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespartner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The collecting merchant's payment. Sellers can read the split, but not the payment. `payment_intent_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespayment_intent_id). |
| `payment_split_id` | Optional | string or null | Unique identifier for the split. `payment_split_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespayment_split_id). |
| `pending_reason` | Optional | string or null | Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`. `pending_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespending_reason). |
| `reversals` | Optional | Array of [PaymentSplitReversalPreviousAttributes](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributes) or null | Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. `reversals`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesreversals). |
| `reversed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversals' total amount minus their reinstated amounts. `reversed_money`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesreversed_money). |
| `seller_merchant_id` | Optional | string or null | The merchant receiving the split. `seller_merchant_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesseller_merchant_id). |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. `shortfall_money`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesshortfall_money). |
| `status` | Optional | string or null | The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesstatus). |
| `succeeded_at` | Optional | string or null | When the split reached the seller's balance. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributessucceeded_at). |
| `updated_at` | Optional | string or null | When the split last changed. `updated_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

### PaymentSplitPreviousAttributes.amount_money

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.amount_money](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesamount_money).

### PaymentSplitPreviousAttributes.canceled_reason

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.canceled_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescanceled_reason).

### PaymentSplitPreviousAttributes.collecting_merchant_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.collecting_merchant_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescollecting_merchant_id).

### PaymentSplitPreviousAttributes.created_at

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.created_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributescreated_at).

### PaymentSplitPreviousAttributes.description

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.description](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesdescription).

### PaymentSplitPreviousAttributes.external_reference_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.external_reference_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesexternal_reference_id).

### PaymentSplitPreviousAttributes.failure_reason

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.failure_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesfailure_reason).

### PaymentSplitPreviousAttributes.funds_available_at

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.funds_available_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesfunds_available_at).

### PaymentSplitPreviousAttributes.partner_app_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.partner_app_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespartner_app_id).

### PaymentSplitPreviousAttributes.partner_app_install_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.partner_app_install_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespartner_app_install_id).

### PaymentSplitPreviousAttributes.payment_intent_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.payment_intent_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespayment_intent_id).

### PaymentSplitPreviousAttributes.payment_split_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.payment_split_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespayment_split_id).

### PaymentSplitPreviousAttributes.pending_reason

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.pending_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributespending_reason).

### PaymentSplitPreviousAttributes.reversals

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.reversals](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesreversals).

### PaymentSplitPreviousAttributes.reversed_money

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.reversed_money](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesreversed_money).

### PaymentSplitPreviousAttributes.seller_merchant_id

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.seller_merchant_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesseller_merchant_id).

### PaymentSplitPreviousAttributes.shortfall_money

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.shortfall_money](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesshortfall_money).

### PaymentSplitPreviousAttributes.status

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.status](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesstatus).

### PaymentSplitPreviousAttributes.succeeded_at

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.succeeded_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributessucceeded_at).

### PaymentSplitPreviousAttributes.updated_at

Declared alternatives: [PaymentSplitCanceledEvent.data.previous_attributes.updated_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdataprevious_attributesupdated_at).

### PaymentSplitPreviousAttributes.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion).

