[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceUpdatedEvent

The `merchant_billing_balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata). |
| `event_type` | Required | string | Values: `"merchant_billing_balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantBillingBalanceUpdatedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | Current Flint merchant billing balance for one billing account and currency. `object`: [field definitions](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdataobject). |

### MerchantBillingBalanceUpdatedEvent.data.object

Current Flint merchant billing balance for one billing account and currency.

Field definitions: [shared fields](MerchantBillingBalance.md#merchantbillingbalance).

### MerchantBillingBalanceUpdatedEvent.data.object.available_credit_money

Field definitions: [MerchantBillingBalance.available_credit_money](../models/MerchantBillingBalance.md#merchantbillingbalanceavailable_credit_money).

### MerchantBillingBalanceUpdatedEvent.data.object.outstanding_money

Field definitions: [MerchantBillingBalance.outstanding_money](../models/MerchantBillingBalance.md#merchantbillingbalanceoutstanding_money).

### MerchantBillingBalanceUpdatedEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

