[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceUpdatedEvent

The `merchant_billing_balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [MerchantBillingBalanceUpdatedEventData](../models/MerchantBillingBalanceUpdatedEventData.md#merchantbillingbalanceupdatedeventdata) | `data`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"merchant_billing_balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantBillingBalanceUpdatedEventRequest](../models/MerchantBillingBalanceUpdatedEventRequest.md#merchantbillingbalanceupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantBillingBalanceUpdatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | Current Flint merchant billing balance for one billing account and currency. `object`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1object). |

### MerchantBillingBalanceUpdatedEvent.data fields 1.object

Current Flint merchant billing balance for one billing account and currency.

Field definitions: [shared fields](MerchantBillingBalanceResponse.md#merchantbillingbalanceresponsedata).

