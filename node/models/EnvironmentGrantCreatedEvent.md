[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EnvironmentGrantCreatedEvent

The `environment_grant.created` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"partner_app"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"environment_grant.created"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### EnvironmentGrantCreatedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### EnvironmentGrantCreatedEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PartnerEnvironmentGrant.md#partnerenvironmentgrant).

### EnvironmentGrantCreatedEvent.data.object.granted_permissions[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput).

### EnvironmentGrantCreatedEvent.data.object.platform_fee_cap

The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today. `fixed_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | The maximum fee on one payment, keyed by currency code. Only USD today. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Required | number | The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone. minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### EnvironmentGrantCreatedEvent.data.object.platform_fee_cap.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### EnvironmentGrantCreatedEvent.data.object.platform_fee_cap.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### EnvironmentGrantCreatedEvent.source

The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events.

Field definitions: [shared fields](WebhookEventSource.md#webhookeventsource).

