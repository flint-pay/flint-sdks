[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedInstalledMerchantsEventInput

The `fraud_warning.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fraud_warning.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### FraudWarningUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FraudWarningCreatedInstalledMerchantsEventInput.md#fraudwarningcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributes). |

### FraudWarningUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [FraudWarningCreatedInstalledMerchantsEventInput.data.object](../models/FraudWarningCreatedInstalledMerchantsEventInput.md#fraudwarningcreatedinstalledmerchantseventinputdataobject).

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `dispute` | Optional | ([DisputePreviousAttributesInput](../models/DisputePreviousAttributesInput.md#disputepreviousattributesinput) or null) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. |
| `dispute_id` | Optional | string or null or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. `dispute_id`: [declared alternatives](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributesdispute_id). |
| `fraud_type` | Optional | string or null | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributes-fraud_type-values). `fraud_type`: [declared alternatives](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributesfraud_type). |
| `fraud_warning_id` | Optional | string or null | Unique identifier for this fraud warning, prefixed `frw_`. `fraud_warning_id`: [declared alternatives](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributesfraud_warning_id). |
| `is_actionable` | Optional | boolean or null | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. `is_actionable`: [declared alternatives](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributesis_actionable). |
| `payment_intent` | Optional | ([ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput) or null) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the warning is about. `payment_intent_id`: [declared alternatives](../models/FraudWarningUpdatedInstalledMerchantsEventInput.md#fraudwarningupdatedinstalledmerchantseventinputdataprevious_attributespayment_intent_id). |
| `payment_summary` | Optional | [FraudWarningPaymentSummaryPreviousAttributesInput](../models/FraudWarningPaymentSummaryPreviousAttributesInput.md#fraudwarningpaymentsummarypreviousattributesinput) or null | The payment's amount, buyer email, and card, for recognizing it. |
| `reported_at` | Optional | string or null | RFC3339 timestamp. `reported_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

#### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.dispute_id

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.dispute_id variant 1

anyOf variant 1: The dispute that opened on this payment after the warning. `null` when no dispute has opened..

- Value shape: (string or null). The dispute that opened on this payment after the warning. `null` when no dispute has opened. The dispute that opened on this payment after the warning. `null` when no dispute has opened. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that opened on this payment after the warning. `null` when no dispute has opened. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_type

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_type variant 1

anyOf variant 1: The kind of fraud the card network reported..

- Value shape: string. The kind of fraud the card network reported. Values: `"card_never_received"`, `"fraudulent_card_application"`, `"made_with_counterfeit_card"`, `"made_with_lost_card"`, `"made_with_stolen_card"`, `"unauthorized_use_of_card"`, `"other"`.

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_type variant 2

anyOf variant 2.

- Value shape: null. The kind of fraud the card network reported. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_warning_id

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_warning_id variant 1

anyOf variant 1: Unique identifier for this fraud warning, prefixed `frw_`..

- Value shape: string. Unique identifier for this fraud warning, prefixed `frw_`. Unique identifier for this fraud warning, prefixed `frw_`. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.fraud_warning_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this fraud warning, prefixed `frw_`. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.is_actionable

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.is_actionable variant 1

anyOf variant 1: true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it..

- Value shape: boolean. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.is_actionable variant 2

anyOf variant 2.

- Value shape: null. true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the warning is about..

- Value shape: string. ID of the payment the warning is about. ID of the payment the warning is about. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the warning is about. 

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.reported_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### FraudWarningUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### FraudWarningUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

