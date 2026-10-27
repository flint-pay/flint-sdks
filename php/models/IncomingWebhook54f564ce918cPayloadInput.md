[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook54f564ce918cPayloadInput

The `merchant_billing_balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook54f564ce918cPayloadInput.md#incomingwebhook54f564ce918cpayloadinputdata). |
| `event_type` | Required | string | Values: `"merchant_billing_balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook54f564ce918cPayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingBalanceInput](../models/MerchantBillingBalanceInput.md#merchantbillingbalanceinput) | Current Flint merchant billing balance for one billing account and currency. `object`: [field definitions](../models/IncomingWebhook54f564ce918cPayloadInput.md#incomingwebhook54f564ce918cpayloadinputdataobject). |

### IncomingWebhook54f564ce918cPayloadInput.data.object

Current Flint merchant billing balance for one billing account and currency.

Field definitions: [shared fields](MerchantBillingBalanceInput.md#merchantbillingbalanceinput).

### IncomingWebhook54f564ce918cPayloadInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

