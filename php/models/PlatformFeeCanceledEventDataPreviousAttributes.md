[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCanceledEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee Flint will charge until the payment succeeds, then the fee charged. Flint lowers it at confirm and capture to fit the merchant's cap and Flint's own fees; 0 once canceled. |
| `canceled_reason` | Optional | string or null | Why Flint collected no fee. Present only when status is canceled. Can gain values. Values: `"payment_not_completed"`, `"install_revoked"`, `"platform_capability_inactive"`, `"uncollectible"`. `canceled_reason`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescanceled_reason). |
| `checkout_session_id` | Optional | string or null | The checkout session the payment came from. Absent when the fee was sent with the payment itself. `checkout_session_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescheckout_session_id). |
| `collected_at` | Optional | string or null | When Flint collected the fee with the payment. Absent unless status is succeeded. `collected_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescollected_at). |
| `created_at` | Optional | string or null | When the payment's create recorded the fee. `created_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescreated_at). |
| `merchant_id` | Optional | string or null | The installed merchant charged the fee, as on the install. `merchant_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesmerchant_id). |
| `partner_app_id` | Optional | string or null | The partner app that charged the fee. `partner_app_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespartner_app_id). |
| `partner_app_install_id` | Optional | string or null | The install whose partner app token created the payment. `partner_app_install_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespartner_app_install_id). |
| `payment_intent_id` | Optional | string or null | The payment the fee rides on, owned by the installed merchant. After that merchant resets the sandbox the payment was in, the ID no longer resolves. `payment_intent_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespayment_intent_id). |
| `platform_fee_id` | Optional | string or null | Unique identifier for the platform fee, the payment intent's platform_fee.platform_fee_id. `platform_fee_id`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee debited from the platform for returns so far, including opted-in payment refunds and returns of the whole application fee. Matches the platform ledger, including returns awaiting completion; reversals reduce the total. 0 when nothing has been debited. |
| `requested_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee the request asked for. |
| `reserve_available_at` | Optional | string or null | When the held share is due to return to your available balance. Absent until the fee posts, and when nothing was held. Setting it sends no event. `reserve_available_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesreserve_available_at). |
| `reserve_hold_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The share of the fee Flint held in your reserve when it posted the fee to your ledger. Absent until then. A snapshot: loss coverage draws on the reserve as a whole, so read PlatformFeeBalance.reserve_money for what is held now. Setting it sends no event. |
| `status` | Optional | string or null | Where the fee stands. canceled is final. Values: `"pending"`, `"succeeded"`, `"canceled"`. `status`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesstatus). |
| `updated_at` | Optional | string or null | When the fee last changed. `updated_at`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### PlatformFeeCanceledEventDataPreviousAttributes.canceled_reason

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.canceled_reason](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescanceled_reason).

### PlatformFeeCanceledEventDataPreviousAttributes.checkout_session_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.checkout_session_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescheckout_session_id).

### PlatformFeeCanceledEventDataPreviousAttributes.collected_at

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.collected_at](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescollected_at).

### PlatformFeeCanceledEventDataPreviousAttributes.created_at

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.created_at](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributescreated_at).

### PlatformFeeCanceledEventDataPreviousAttributes.merchant_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.merchant_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesmerchant_id).

### PlatformFeeCanceledEventDataPreviousAttributes.partner_app_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespartner_app_id).

### PlatformFeeCanceledEventDataPreviousAttributes.partner_app_install_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.partner_app_install_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespartner_app_install_id).

### PlatformFeeCanceledEventDataPreviousAttributes.payment_intent_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.payment_intent_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributespayment_intent_id).

### PlatformFeeCanceledEventDataPreviousAttributes.platform_fee_id

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_id](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_id).

### PlatformFeeCanceledEventDataPreviousAttributes.reserve_available_at

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.reserve_available_at](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesreserve_available_at).

### PlatformFeeCanceledEventDataPreviousAttributes.status

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.status](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesstatus).

### PlatformFeeCanceledEventDataPreviousAttributes.updated_at

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.updated_at](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesupdated_at).

### PlatformFeeCanceledEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

