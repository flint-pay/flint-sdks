[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInventoryTransferRequestInput

The request body for: Create inventory transfer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination_location_id` | Required | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `lines` | Required | Array of [InventoryTransferLineRequestInput](../models/InventoryTransferLineRequestInput.md#inventorytransferlinerequestinput) | minItems: `1`. maxItems: `100`. |
| `note` | Optional | string | minLength: `1`. |
| `origin_location_id` | Required | string | minLength: `1`. |

