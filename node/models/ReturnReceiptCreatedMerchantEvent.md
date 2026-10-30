[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptCreatedMerchantEvent

The `return_receipt.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ReturnReceiptCreatedInstalledMerchantsEvent.md#returnreceiptcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"return_receipt.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnReceiptCreatedMerchantEvent.data

Field definitions: [ReturnReceiptCreatedInstalledMerchantsEvent.data](../models/ReturnReceiptCreatedInstalledMerchantsEvent.md#returnreceiptcreatedinstalledmerchantseventdata).

### ReturnReceiptCreatedMerchantEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

