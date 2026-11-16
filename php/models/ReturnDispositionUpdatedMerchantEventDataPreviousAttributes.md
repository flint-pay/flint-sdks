[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who canceled the disposition. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who created the disposition. |
| `disposition_type` | Optional | string or null | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. `disposition_type`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesdisposition_type). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. `failure_code`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed merchandise disposition, when available. `failure_message`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesfailure_message). |
| `inventory_location_id` | Optional | string or null | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. `inventory_location_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesinventory_location_id). |
| `inventory_movement_ids` | Optional | Array of string or null | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. `inventory_movement_ids`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesinventory_movement_ids). |
| `inventory_receipt_id` | Optional | string or null | ID of the inventory receipt the disposition recorded. Absent when it recorded none. `inventory_receipt_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesinventory_receipt_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesquantity). |
| `reason` | Optional | string or null | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. `reason`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreason_message). |
| `replaced_by_return_disposition_id` | Optional | string or null | ID of the disposition that took over this one. Present when a replacement canceled it. `replaced_by_return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreplaced_by_return_disposition_id). |
| `replaces_return_disposition_id` | Optional | string or null | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. `replaces_return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreplaces_return_disposition_id). |
| `return_disposition_id` | Optional | string or null | Unique identifier for this return disposition, prefixed `retdsp_`. `return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_disposition_id). |
| `return_id` | Optional | string or null | ID of the Return the disposition belongs to. `return_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_id). |
| `return_inspection_id` | Optional | string or null or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. `return_inspection_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | ID of the inspection line the disposition covers. Absent when it covers a receipt line. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units belong to. `return_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. `return_receipt_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line the disposition covers. Absent when it covers an inspection line. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesreturn_receipt_line_item_id). |
| `status` | Optional | string or null | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.md#returndispositionupdatedmerchanteventdatapreviousattributesversion). |

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the disposition was canceled..

- Value shape: string. Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was canceled. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.disposition_type

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.disposition_type variant 1

anyOf variant 1: What happens to the received units..

- Value shape: string. What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.disposition_type variant 2

anyOf variant 2.

- Value shape: null. What happens to the received units. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_code

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_code variant 1

anyOf variant 1: Reason code for a failed merchandise disposition, when available..

- Value shape: string. Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_message

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_message variant 1

anyOf variant 1: Explanation of a failed merchandise disposition, when available..

- Value shape: string. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_location_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_location_id variant 1

anyOf variant 1: ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types..

- Value shape: string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_movement_ids

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_movement_ids variant 1

anyOf variant 1: IDs of the inventory movements the disposition wrote. Empty when it moved no stock..

- Value shape: Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_movement_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_receipt_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_receipt_id variant 1

anyOf variant 1: ID of the inventory receipt the disposition recorded. Absent when it recorded none..

- Value shape: string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.inventory_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.occurred_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.quantity

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Why the disposition was made..

- Value shape: string. Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was made. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason_message

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason_message variant 1

anyOf variant 1: Optional detail about `reason`, kept with the record..

- Value shape: string. Optional detail about `reason`, kept with the record. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Optional detail about `reason`, kept with the record. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaced_by_return_disposition_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaced_by_return_disposition_id variant 1

anyOf variant 1: ID of the disposition that took over this one. Present when a replacement canceled it..

- Value shape: string. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaced_by_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaces_return_disposition_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaces_return_disposition_id variant 1

anyOf variant 1: ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity..

- Value shape: string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.replaces_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_disposition_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_disposition_id variant 1

anyOf variant 1: Unique identifier for this return disposition, prefixed `retdsp_`..

- Value shape: string. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return the disposition belongs to..

- Value shape: string. ID of the Return the disposition belongs to. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the disposition belongs to. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_id variant 1

anyOf variant 1: Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null..

- Value shape: (string or null). Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_line_item_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_line_item_id variant 1

anyOf variant 1: ID of the inspection line the disposition covers. Absent when it covers a receipt line..

- Value shape: string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_line_item_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units belong to..

- Value shape: string. ID of the Return line the units belong to. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units belong to. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null..

- Value shape: (string or null). Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_line_item_id

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line the disposition covers. Absent when it covers an inspection line..

- Value shape: string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.status

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether inventory has applied the disposition..

- Value shape: string. Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether inventory has applied the disposition. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.supported_actions

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`.

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.version

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. 

### ReturnDispositionUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

