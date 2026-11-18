[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeePayoutFailedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount transferred to your merchant balance. |
| `balance_transaction_id` | Optional | string or null | The credit on your merchant ledger. Flint checks daily for the credit, so this field can be absent even after the payout succeeds. Linking the credit sends no payout event and doesn't advance version. `balance_transaction_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesbalance_transaction_id). |
| `created_at` | Optional | string or null | When Flint prepared the payout. `created_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributescreated_at). |
| `failure_reason` | Optional | string or null | Why the payout failed. Present only when status is failed. Can gain values; treat unknown values as payout_failed. Values: `"merchant_cannot_receive"`, `"payout_failed"`. `failure_reason`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesfailure_reason). |
| `partner_app_id` | Optional | string or null | The partner app whose fee balance funded the payout. `partner_app_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributespartner_app_id). |
| `platform_fee_payout_id` | Optional | string or null | Unique identifier for the platform fee payout. `platform_fee_payout_id`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesplatform_fee_payout_id). |
| `status` | Optional | string or null | Where the payout stands. succeeded and failed are final. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesstatus). |
| `succeeded_at` | Optional | string or null | When the transfer succeeded. Present only when status is succeeded. `succeeded_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributessucceeded_at). |
| `updated_at` | Optional | string or null | When the payout's owned state last changed. Retry bookkeeping and observing the credit don't change it. `updated_at`: [declared alternatives](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### PlatformFeePayoutFailedEventDataPreviousAttributes.balance_transaction_id

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.balance_transaction_id](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesbalance_transaction_id).

### PlatformFeePayoutFailedEventDataPreviousAttributes.created_at

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.created_at](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributescreated_at).

### PlatformFeePayoutFailedEventDataPreviousAttributes.failure_reason

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.failure_reason](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesfailure_reason).

### PlatformFeePayoutFailedEventDataPreviousAttributes.partner_app_id

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.partner_app_id](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributespartner_app_id).

### PlatformFeePayoutFailedEventDataPreviousAttributes.platform_fee_payout_id

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.platform_fee_payout_id](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesplatform_fee_payout_id).

### PlatformFeePayoutFailedEventDataPreviousAttributes.status

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.status](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesstatus).

### PlatformFeePayoutFailedEventDataPreviousAttributes.succeeded_at

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.succeeded_at](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributessucceeded_at).

### PlatformFeePayoutFailedEventDataPreviousAttributes.updated_at

Declared alternatives: [PlatformFeePayoutFailedEvent.data fields 1.previous_attributes.updated_at](../models/PlatformFeePayoutFailedEvent.md#platformfeepayoutfailedeventdata-fields-1previous_attributesupdated_at).

### PlatformFeePayoutFailedEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

