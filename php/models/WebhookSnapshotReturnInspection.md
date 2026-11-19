[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookSnapshotReturnInspection

An assessment of the condition of returned items.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `generated_dispositions` | Required | Array of [WebhookSnapshotReturnDisposition](../models/WebhookSnapshotReturnDisposition.md#webhooksnapshotreturndisposition) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions[]`: [field definitions](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inspected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. |
| `line_items` | Required | Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem) | The lines recorded. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items). |
| `return_id` | Required | string | ID of the Return the goods belong to. |
| `return_inspection_id` | Required | string | Unique identifier for this return inspection, prefixed `retins_`. |
| `return_receipt_id` | Required | string | ID of the receipt being inspected. |
| `source_system` | Required | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `superseded_by_return_inspection_id` | Optional | string | ID of the inspection that corrected this one. Absent while it is current. |
| `supersedes_return_inspection_id` | Optional | string | ID of the inspection this one corrects. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

### WebhookSnapshotReturnInspection.generated_dispositions[]

A decision about how returned merchandise will be handled.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `canceled_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscanceled_by). |
| `cancellation_reason` | Optional | string | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who created the disposition. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `created_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscreated_by). |
| `disposition_type` | Required | string | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_code` | Optional | string | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. |
| `failure_message` | Optional | string | Explanation of a failed merchandise disposition, when available. |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inventory_location_id` | Optional | string | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `inventory_movement_ids` | Required | Array of string | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. Items: Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. |
| `inventory_receipt_id` | Optional | string | ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `reason` | Required | string | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `replaced_by_return_disposition_id` | Optional | string | ID of the disposition that took over this one. Present when a replacement canceled it. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `replaces_return_disposition_id` | Optional | string | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_disposition_id` | Required | string | Unique identifier for this return disposition, prefixed `retdsp_`. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_id` | Required | string | ID of the Return the disposition belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_inspection_id` | Required | string or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `return_inspection_line_item_id` | Optional | string | ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. |
| `return_line_item_id` | Optional | string | ID of the Return line the units belong to. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_receipt_id` | Required | string or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `return_receipt_line_item_id` | Optional | string | ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. |
| `status` | Required | string | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### WebhookSnapshotReturnInspection.generated_dispositions[].canceled_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscanceled_by).

### WebhookSnapshotReturnInspection.generated_dispositions[].created_by

Field definitions: [CancelReturnResponse.data.return_dispositions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositionscreated_by).

### WebhookSnapshotReturnInspection.generated_dispositions[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### WebhookSnapshotReturnInspection.line_items[]

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

