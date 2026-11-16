[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. |
| `dispute_id` | Optional | string or null or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. `dispute_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute_id). |
| `fraud_type` | Optional | string or null | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningupdatedmerchanteventdatapreviousattributes-fraud_type-values). `fraud_type`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_type). |
| `fraud_warning_id` | Optional | string or null | Unique identifier for this fraud warning, prefixed `frw_`. `fraud_warning_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_warning_id). |
| `is_actionable` | Optional | boolean or null | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. `is_actionable`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesis_actionable). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the warning is about. `payment_intent_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_summary` | Optional | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) or null | The payment's amount, buyer email, and card, for recognizing it. |
| `reported_at` | Optional | string or null | RFC3339 timestamp. `reported_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

#### FraudWarningUpdatedMerchantEventDataPreviousAttributes fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id variant 1

anyOf variant 1: The dispute that opened on this payment after the warning. `null` when no dispute has opened..

- Value shape: (string or null). The dispute that opened on this payment after the warning. `null` when no dispute has opened. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that opened on this payment after the warning. `null` when no dispute has opened. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type variant 1

anyOf variant 1: The kind of fraud the card network reported..

- Value shape: string. The kind of fraud the card network reported. Values: `"card_never_received"`, `"fraudulent_card_application"`, `"made_with_counterfeit_card"`, `"made_with_lost_card"`, `"made_with_stolen_card"`, `"unauthorized_use_of_card"`, `"other"`.

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type variant 2

anyOf variant 2.

- Value shape: null. The kind of fraud the card network reported. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id variant 1

anyOf variant 1: Unique identifier for this fraud warning, prefixed `frw_`..

- Value shape: string. Unique identifier for this fraud warning, prefixed `frw_`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this fraud warning, prefixed `frw_`. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable variant 1

anyOf variant 1: true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it..

- Value shape: boolean. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable variant 2

anyOf variant 2.

- Value shape: null. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the warning is about..

- Value shape: string. ID of the payment the warning is about. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the warning is about. 

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.reported_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

