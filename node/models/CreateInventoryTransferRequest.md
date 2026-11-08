[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryTransferRequest

The request body for: Create inventory transfer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination_location_id` | Required | string | ID of the Location the stock goes to. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `lines` | Required | Array of [InventoryTransferLineRequest](../models/InventoryTransferLineRequest.md#inventorytransferlinerequest) | Items to transfer, from 1 to 100 lines. minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | Free-text note about the transfer. minLength: `1`. |
| `origin_location_id` | Required | string | ID of the Location the stock leaves. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

