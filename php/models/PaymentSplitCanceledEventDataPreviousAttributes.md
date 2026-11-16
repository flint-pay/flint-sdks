[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitCanceledEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The admitted amount, or its final amount set at capture. |
| `canceled_reason` | Optional | string or null | Present when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"fully_reversed"`. `canceled_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescanceled_reason). |
| `collecting_merchant_id` | Optional | string or null | The merchant of record that collected the payment. `collecting_merchant_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescollecting_merchant_id). |
| `created_at` | Optional | string or null | When the payment's create recorded the split. `created_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescreated_at). |
| `description` | Optional | string or null | The collecting merchant's description, shown to the seller. `description`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. `external_reference_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Present when status is failed. Can gain values; unknown reasons use split_failed. Values: `"seller_cannot_receive"`, `"split_failed"`. `failure_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfailure_reason). |
| `funds_available_at` | Optional | string or null | When the funds become available on Flint's balance. Null when Stripe has not reported it or the payment never succeeded. Can move later after a won dispute; frozen at release. `funds_available_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfunds_available_at). |
| `partner_app_id` | Optional | string or null | The collecting merchant's partner app. `partner_app_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | The seller's install of the app. `partner_app_install_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespartner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The collecting merchant's payment. Sellers can read the split, but not the payment. `payment_intent_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespayment_intent_id). |
| `payment_split_id` | Optional | string or null | Unique identifier for the split. `payment_split_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespayment_split_id). |
| `pending_reason` | Optional | string or null | Present when status is pending. Can gain values. Values: `"awaiting_payment"`, `"dispute_open"`, `"reversals_pending"`, `"awaiting_funds"`. `pending_reason`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespending_reason). |
| `reversals` | Optional | Array of [PaymentSplitReversalPreviousAttributes](../models/PaymentSplitReversalPreviousAttributes.md#paymentsplitreversalpreviousattributes) or null | Read-only nested children created by Flint, embedded whole. Empty when none. At most one per refund and one per dispute. `reversals`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals). |
| `reversed_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversals' total amount minus their reinstated amounts. |
| `seller_merchant_id` | Optional | string or null | The merchant receiving the split. `seller_merchant_id`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesseller_merchant_id). |
| `shortfall_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Reversed funds the collecting merchant covered for the seller, less reinstatements. The seller's net is amount_money minus reversed_money plus shortfall_money. |
| `status` | Optional | string or null | The split lifecycle status. Values: `"pending"`, `"processing"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesstatus). |
| `succeeded_at` | Optional | string or null | When the split reached the seller's balance. Present when succeeded. `succeeded_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributessucceeded_at). |
| `updated_at` | Optional | string or null | When the split last changed. `updated_at`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### PaymentSplitCanceledEventDataPreviousAttributes.canceled_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.canceled_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescanceled_reason).

### PaymentSplitCanceledEventDataPreviousAttributes.collecting_merchant_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.collecting_merchant_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescollecting_merchant_id).

### PaymentSplitCanceledEventDataPreviousAttributes.created_at

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.created_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributescreated_at).

### PaymentSplitCanceledEventDataPreviousAttributes.description

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.description](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesdescription).

### PaymentSplitCanceledEventDataPreviousAttributes.external_reference_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.external_reference_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesexternal_reference_id).

### PaymentSplitCanceledEventDataPreviousAttributes.failure_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.failure_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfailure_reason).

### PaymentSplitCanceledEventDataPreviousAttributes.funds_available_at

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.funds_available_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesfunds_available_at).

### PaymentSplitCanceledEventDataPreviousAttributes.partner_app_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespartner_app_id).

### PaymentSplitCanceledEventDataPreviousAttributes.partner_app_install_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.partner_app_install_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespartner_app_install_id).

### PaymentSplitCanceledEventDataPreviousAttributes.payment_intent_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_intent_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespayment_intent_id).

### PaymentSplitCanceledEventDataPreviousAttributes.payment_split_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.payment_split_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespayment_split_id).

### PaymentSplitCanceledEventDataPreviousAttributes.pending_reason

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.pending_reason](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributespending_reason).

### PaymentSplitCanceledEventDataPreviousAttributes.reversals

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.reversals](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesreversals).

### PaymentSplitCanceledEventDataPreviousAttributes.seller_merchant_id

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.seller_merchant_id](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesseller_merchant_id).

### PaymentSplitCanceledEventDataPreviousAttributes.status

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.status](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesstatus).

### PaymentSplitCanceledEventDataPreviousAttributes.succeeded_at

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.succeeded_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributessucceeded_at).

### PaymentSplitCanceledEventDataPreviousAttributes.updated_at

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.updated_at](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesupdated_at).

### PaymentSplitCanceledEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

