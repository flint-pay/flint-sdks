[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodArchivedMerchantEvent

The `payment_method.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"payment_method.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentMethodArchivedMerchantEvent.data

Field definitions: [PaymentMethodActivatedInstalledMerchantsEvent.data](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdata).

### PaymentMethodArchivedMerchantEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

