[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionCreatedMerchantEventInput

The `return_resolution.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"return_resolution.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEventInput.md#balancetransactioncreatedeventinputrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnResolutionCreatedMerchantEventInput.data

Field definitions: [ReturnResolutionCreatedInstalledMerchantsEventInput.data](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdata).

### ReturnResolutionCreatedMerchantEventInput.request

Field definitions: [BalanceTransactionCreatedEventInput.request](../models/BalanceTransactionCreatedEventInput.md#balancetransactioncreatedeventinputrequest).

