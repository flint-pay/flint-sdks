[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who canceled the disposition. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputcancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who created the disposition. |
| `disposition_type` | Optional | string or null | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. `disposition_type`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputdisposition_type). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. `failure_code`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed merchandise disposition, when available. `failure_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputfailure_message). |
| `inventory_location_id` | Optional | string or null | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. `inventory_location_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_location_id). |
| `inventory_movement_ids` | Optional | Array of string or null | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. `inventory_movement_ids`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_movement_ids). |
| `inventory_receipt_id` | Optional | string or null | ID of the inventory receipt the disposition recorded. Absent when it recorded none. `inventory_receipt_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_receipt_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `reason` | Optional | string or null | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. `reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason_message). |
| `replaced_by_return_disposition_id` | Optional | string or null | ID of the disposition that took over this one. Present when a replacement canceled it. `replaced_by_return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreplaced_by_return_disposition_id). |
| `replaces_return_disposition_id` | Optional | string or null | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. `replaces_return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreplaces_return_disposition_id). |
| `return_disposition_id` | Optional | string or null | Unique identifier for this return disposition, prefixed `retdsp_`. `return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_disposition_id). |
| `return_id` | Optional | string or null | ID of the Return the disposition belongs to. `return_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_id). |
| `return_inspection_id` | Optional | string or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. `return_inspection_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | ID of the inspection line the disposition covers. Absent when it covers a receipt line. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units belong to. `return_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. `return_receipt_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line the disposition covers. Absent when it covers an inspection line. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_receipt_line_item_id). |
| `status` | Optional | string or null | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputversion). |

### ReturnDispositionPreviousAttributesInput.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionPreviousAttributesInput.cancellation_reason

### ReturnDispositionPreviousAttributesInput.cancellation_reason variant 1

anyOf variant 1: Why the disposition was canceled..

- Value shape: string. Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`.

### ReturnDispositionPreviousAttributesInput.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was canceled. 

### ReturnDispositionPreviousAttributesInput.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnDispositionPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionPreviousAttributesInput.disposition_type

### ReturnDispositionPreviousAttributesInput.disposition_type variant 1

anyOf variant 1: What happens to the received units..

- Value shape: string. What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`.

### ReturnDispositionPreviousAttributesInput.disposition_type variant 2

anyOf variant 2.

- Value shape: null. What happens to the received units. 

### ReturnDispositionPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnDispositionPreviousAttributesInput.failure_code

### ReturnDispositionPreviousAttributesInput.failure_code variant 1

anyOf variant 1: Reason code for a failed merchandise disposition, when available..

- Value shape: string. Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`.

### ReturnDispositionPreviousAttributesInput.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributesInput.failure_message

### ReturnDispositionPreviousAttributesInput.failure_message variant 1

anyOf variant 1: Explanation of a failed merchandise disposition, when available..

- Value shape: string. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributesInput.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributesInput.inventory_location_id

### ReturnDispositionPreviousAttributesInput.inventory_location_id variant 1

anyOf variant 1: ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types..

- Value shape: string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnDispositionPreviousAttributesInput.inventory_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionPreviousAttributesInput.inventory_movement_ids

### ReturnDispositionPreviousAttributesInput.inventory_movement_ids variant 1

anyOf variant 1: IDs of the inventory movements the disposition wrote. Empty when it moved no stock..

- Value shape: Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. Items: Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### ReturnDispositionPreviousAttributesInput.inventory_movement_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionPreviousAttributesInput.inventory_receipt_id

### ReturnDispositionPreviousAttributesInput.inventory_receipt_id variant 1

anyOf variant 1: ID of the inventory receipt the disposition recorded. Absent when it recorded none..

- Value shape: string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. 

### ReturnDispositionPreviousAttributesInput.inventory_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionPreviousAttributesInput.occurred_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnDispositionPreviousAttributesInput.reason

### ReturnDispositionPreviousAttributesInput.reason variant 1

anyOf variant 1: Why the disposition was made..

- Value shape: string. Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`.

### ReturnDispositionPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was made. 

### ReturnDispositionPreviousAttributesInput.reason_message

### ReturnDispositionPreviousAttributesInput.reason_message variant 1

anyOf variant 1: Optional detail about `reason`, kept with the record..

- Value shape: string. Optional detail about `reason`, kept with the record. 

### ReturnDispositionPreviousAttributesInput.reason_message variant 2

anyOf variant 2.

- Value shape: null. Optional detail about `reason`, kept with the record. 

### ReturnDispositionPreviousAttributesInput.replaced_by_return_disposition_id

### ReturnDispositionPreviousAttributesInput.replaced_by_return_disposition_id variant 1

anyOf variant 1: ID of the disposition that took over this one. Present when a replacement canceled it..

- Value shape: string. ID of the disposition that took over this one. Present when a replacement canceled it. ID of the disposition that took over this one. Present when a replacement canceled it. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionPreviousAttributesInput.replaced_by_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionPreviousAttributesInput.replaces_return_disposition_id

### ReturnDispositionPreviousAttributesInput.replaces_return_disposition_id variant 1

anyOf variant 1: ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity..

- Value shape: string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionPreviousAttributesInput.replaces_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionPreviousAttributesInput.return_disposition_id

### ReturnDispositionPreviousAttributesInput.return_disposition_id variant 1

anyOf variant 1: Unique identifier for this return disposition, prefixed `retdsp_`..

- Value shape: string. Unique identifier for this return disposition, prefixed `retdsp_`. Unique identifier for this return disposition, prefixed `retdsp_`. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionPreviousAttributesInput.return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionPreviousAttributesInput.return_id

### ReturnDispositionPreviousAttributesInput.return_id variant 1

anyOf variant 1: ID of the Return the disposition belongs to..

- Value shape: string. ID of the Return the disposition belongs to. ID of the Return the disposition belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnDispositionPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the disposition belongs to. 

### ReturnDispositionPreviousAttributesInput.return_inspection_id

### ReturnDispositionPreviousAttributesInput.return_inspection_id variant 1

anyOf variant 1: Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null..

- Value shape: string. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnDispositionPreviousAttributesInput.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionPreviousAttributesInput.return_inspection_line_item_id

### ReturnDispositionPreviousAttributesInput.return_inspection_line_item_id variant 1

anyOf variant 1: ID of the inspection line the disposition covers. Absent when it covers a receipt line..

- Value shape: string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. 

### ReturnDispositionPreviousAttributesInput.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionPreviousAttributesInput.return_line_item_id

### ReturnDispositionPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units belong to..

- Value shape: string. ID of the Return line the units belong to. ID of the Return line the units belong to. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnDispositionPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units belong to. 

### ReturnDispositionPreviousAttributesInput.return_receipt_id

### ReturnDispositionPreviousAttributesInput.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null..

- Value shape: string. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnDispositionPreviousAttributesInput.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionPreviousAttributesInput.return_receipt_line_item_id

### ReturnDispositionPreviousAttributesInput.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line the disposition covers. Absent when it covers an inspection line..

- Value shape: string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnDispositionPreviousAttributesInput.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionPreviousAttributesInput.status

### ReturnDispositionPreviousAttributesInput.status variant 1

anyOf variant 1: Whether inventory has applied the disposition..

- Value shape: string. Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ReturnDispositionPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether inventory has applied the disposition. 

### ReturnDispositionPreviousAttributesInput.supported_actions

### ReturnDispositionPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`.

### ReturnDispositionPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. 

### ReturnDispositionPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionPreviousAttributesInput.version

### ReturnDispositionPreviousAttributesInput.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. 

### ReturnDispositionPreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

