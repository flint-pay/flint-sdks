[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningCreatedInstalledMerchantsEventInput

The `fraud_warning.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FraudWarningCreatedInstalledMerchantsEventInput.md#fraudwarningcreatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fraud_warning.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### FraudWarningCreatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FraudWarningCreatedInstalledMerchantsEventInput.md#fraudwarningcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### FraudWarningCreatedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute` | Optional | [DisputeInput](../models/DisputeInput.md#disputeinput) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. |
| `dispute_id` | Required | string or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `fraud_type` | Required | string | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarningcreatedinstalledmerchantseventinputdataobject-fraud_type-values). |
| `fraud_warning_id` | Required | string | Unique identifier for this fraud warning, prefixed `frw_`. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `is_actionable` | Required | boolean | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Required | string | ID of the payment the warning is about. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_summary` | Required | [FraudWarningPaymentSummaryInput](../models/FraudWarningPaymentSummaryInput.md#fraudwarningpaymentsummaryinput) | The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### FraudWarningCreatedInstalledMerchantsEventInput.data.object fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### FraudWarningCreatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

