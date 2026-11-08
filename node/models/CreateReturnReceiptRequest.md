[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnReceiptRequest

The request body for: Create return receipt.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. minLength: `1`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `line_items` | Required | Array of [ReturnReceiptLineItemRequest](../models/ReturnReceiptLineItemRequest.md#returnreceiptlineitemrequest) | The lines recorded. minItems: `1`. |
| `received_at` | Required | string | When the event occurred, at most 5 minutes in the future. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `shipment_id` | Optional | string | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. minLength: `1`. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `source_system` | Optional | [ReturnSourceSystemRequest](../models/ReturnSourceSystemRequest.md#returnsourcesystemrequest) | System that recorded the observation. `null` when no source system was recorded. The system a return event came from, such as a point of sale or warehouse system, with its own identifier. |
| `supersedes_return_receipt_id` | Optional | string | ID of the receipt this one corrects. minLength: `1`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |

