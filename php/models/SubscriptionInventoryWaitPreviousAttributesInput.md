[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionInventoryWaitPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice_id` | Optional | string or null | ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. `invoice_id`: [declared alternatives](../models/SubscriptionInventoryWaitPreviousAttributesInput.md#subscriptioninventorywaitpreviousattributesinputinvoice_id). |
| `order_id` | Optional | string or null | ID of the order waiting for stock, if one was created. Merchant credentials only. `order_id`: [declared alternatives](../models/SubscriptionInventoryWaitPreviousAttributesInput.md#subscriptioninventorywaitpreviousattributesinputorder_id). |
| `started_at` | Optional | string or null | RFC3339 timestamp. `started_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### SubscriptionInventoryWaitPreviousAttributesInput.invoice_id

### SubscriptionInventoryWaitPreviousAttributesInput.invoice_id variant 1

anyOf variant 1: ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only..

- Value shape: string. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### SubscriptionInventoryWaitPreviousAttributesInput.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. 

### SubscriptionInventoryWaitPreviousAttributesInput.order_id

### SubscriptionInventoryWaitPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order waiting for stock, if one was created. Merchant credentials only..

- Value shape: string. ID of the order waiting for stock, if one was created. Merchant credentials only. ID of the order waiting for stock, if one was created. Merchant credentials only. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### SubscriptionInventoryWaitPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order waiting for stock, if one was created. Merchant credentials only. 

### SubscriptionInventoryWaitPreviousAttributesInput.started_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

