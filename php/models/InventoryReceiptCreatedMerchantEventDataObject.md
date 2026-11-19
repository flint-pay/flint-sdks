[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptCreatedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_receipt_id` | Required | string | Unique identifier for this inventory receipt, prefixed `invrec_`. |
| `lines` | Required | Array of [InventoryReceiptLine](../models/InventoryReceiptLine.md#inventoryreceiptline) | Received lines, each with the item, receiving Location, quantity, and disposition. `lines[]`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `return_disposition_id` | Optional | string | ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a Return. |
| `return_id` | Optional | string | ID of the Return these units came back on. Absent when the receipt isn't linked to a Return. |
| `source_system` | Required | [InventorySourceSystem](../models/InventorySourceSystem.md#inventorysourcesystem) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. |

### InventoryReceiptCreatedMerchantEventDataObject.lines[]

Field definitions: [InventoryReceiptResponse.data.lines[]](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines).

