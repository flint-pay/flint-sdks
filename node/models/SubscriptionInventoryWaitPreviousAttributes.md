[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWaitPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Optional | string or null | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. `invoice_id`: [declared alternatives](../models/SubscriptionInventoryWaitPreviousAttributes.md#subscriptioninventorywaitpreviousattributesinvoice_id). |
| `order_id` | Optional | string or null | ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. `order_id`: [declared alternatives](../models/SubscriptionInventoryWaitPreviousAttributes.md#subscriptioninventorywaitpreviousattributesorder_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### SubscriptionInventoryWaitPreviousAttributes.invoice_id

### SubscriptionInventoryWaitPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials..

- Value shape: string. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### SubscriptionInventoryWaitPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Always present with merchant credentials. 

### SubscriptionInventoryWaitPreviousAttributes.order_id

### SubscriptionInventoryWaitPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials..

- Value shape: string. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### SubscriptionInventoryWaitPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the renewal order waiting for stock. Merchant credentials only. Always present with merchant credentials. 

### SubscriptionInventoryWaitPreviousAttributes.started_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

