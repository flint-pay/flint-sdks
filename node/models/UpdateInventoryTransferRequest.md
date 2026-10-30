[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryTransferRequest

The request body for: Update inventory transfer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Required when any of these fields is present: lines. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `lines` | Optional | Array of object | Replace the transfer's owned lines collection atomically. Lines have no lifecycle outside this transfer. Include every line to keep, with its inventory_transfer_line_id; omit it to remove it. Lines with departed or canceled quantity must remain. Requires expected_version when present. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/UpdateInventoryTransferRequest.md#updateinventorytransferrequestlines). |
| `note` | Optional | string or null | Send null to clear it. minLength: `1`. |

### UpdateInventoryTransferRequest.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string | Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `inventory_transfer_line_id` | Optional | string | Existing line in this transfer. Omit to add a line. minLength: `1`. |
| `requested_quantity` | Required | integer | Format: `int64`. minimum: `1`. |

