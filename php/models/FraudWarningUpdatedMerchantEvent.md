[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedMerchantEvent

The `fraud_warning.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [FraudWarningUpdatedMerchantEventData](../models/FraudWarningUpdatedMerchantEventData.md#fraudwarningupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FraudWarningUpdatedMerchantEvent.md#fraudwarningupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fraud_warning.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FraudWarningUpdatedMerchantEventRequest](../models/FraudWarningUpdatedMerchantEventRequest.md#fraudwarningupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### FraudWarningUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/FraudWarningUpdatedMerchantEvent.md#fraudwarningupdatedmerchanteventdata-fields-1previous_attributes). |

### FraudWarningUpdatedMerchantEvent.data fields 1.object

Field definitions: [FraudWarningCreatedMerchantEvent.data fields 1.object](../models/FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1object).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. |
| `dispute_id` | Optional | string or null or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. `dispute_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute_id). |
| `fraud_type` | Optional | string or null | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningupdatedmerchanteventdata-fields-1previous_attributes-fraud_type-values). `fraud_type`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_type). |
| `fraud_warning_id` | Optional | string or null | Unique identifier for this fraud warning, prefixed `frw_`. `fraud_warning_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_warning_id). |
| `is_actionable` | Optional | boolean or null | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. `is_actionable`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesis_actionable). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the warning is about. `payment_intent_id`: [declared alternatives](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributespayment_intent_id). |
| `payment_summary` | Optional | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) or null | The payment's amount, buyer email, and card, for recognizing it. |
| `reported_at` | Optional | string or null | RFC3339 timestamp. `reported_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

#### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.dispute_id

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.dispute_id](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesdispute_id).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.fraud_type

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_type](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_type).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.fraud_warning_id

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.fraud_warning_id](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesfraud_warning_id).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.is_actionable

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.is_actionable](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributesis_actionable).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.payment_intent_id

Declared alternatives: [FraudWarningUpdatedMerchantEventDataPreviousAttributes.payment_intent_id](../models/FraudWarningUpdatedMerchantEventDataPreviousAttributes.md#fraudwarningupdatedmerchanteventdatapreviousattributespayment_intent_id).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.reported_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### FraudWarningUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

