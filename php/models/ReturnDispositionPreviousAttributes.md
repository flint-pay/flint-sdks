[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the disposition. Merchant reads only. `canceled_by`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescanceled_by). |
| `cancellation_reason` | Optional | string or null | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who created the disposition. `created_by`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescreated_by). |
| `disposition_type` | Optional | string or null | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. `disposition_type`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesdisposition_type). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. `failure_code`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed merchandise disposition, when available. `failure_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_message). |
| `inventory_location_id` | Optional | string or null | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. `inventory_location_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_location_id). |
| `inventory_movement_ids` | Optional | Array of string or null | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. `inventory_movement_ids`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_movement_ids). |
| `inventory_receipt_id` | Optional | string or null | ID of the inventory receipt the disposition recorded. Absent when it recorded none. `inventory_receipt_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_receipt_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `reason` | Optional | string or null | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. `reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message). |
| `replaced_by_return_disposition_id` | Optional | string or null | ID of the disposition that took over this one. Present when a replacement canceled it. `replaced_by_return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaced_by_return_disposition_id). |
| `replaces_return_disposition_id` | Optional | string or null | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. `replaces_return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaces_return_disposition_id). |
| `return_disposition_id` | Optional | string or null | Unique identifier for this return disposition, prefixed `retdsp_`. `return_disposition_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_disposition_id). |
| `return_id` | Optional | string or null | ID of the Return the disposition belongs to. `return_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. `return_inspection_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | ID of the inspection line the disposition covers. Absent when it covers a receipt line. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units belong to. `return_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. `return_receipt_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line the disposition covers. Absent when it covers an inspection line. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_line_item_id). |
| `status` | Optional | string or null | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion). |

### ReturnDispositionPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionPreviousAttributes.canceled_by

Who canceled the disposition. Merchant reads only.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnDispositionPreviousAttributes.canceled_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnDispositionPreviousAttributes.canceled_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who canceled the disposition. Merchant reads only. 

### ReturnDispositionPreviousAttributes.canceled_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnDispositionPreviousAttributes.canceled_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnDispositionPreviousAttributes.cancellation_reason

### ReturnDispositionPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the disposition was canceled..

- Value shape: string. Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`.

### ReturnDispositionPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was canceled. 

### ReturnDispositionPreviousAttributes.cancellation_reason_message

### ReturnDispositionPreviousAttributes.cancellation_reason_message variant 1

anyOf variant 1: Detail sent with the cancellation. Merchant reads only..

- Value shape: string. Detail sent with the cancellation. Merchant reads only. 

### ReturnDispositionPreviousAttributes.cancellation_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the cancellation. Merchant reads only. 

### ReturnDispositionPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionPreviousAttributes.created_by

Who created the disposition.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnDispositionPreviousAttributes.created_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnDispositionPreviousAttributes.created_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who created the disposition. 

### ReturnDispositionPreviousAttributes.created_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnDispositionPreviousAttributes.created_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnDispositionPreviousAttributes.disposition_type

### ReturnDispositionPreviousAttributes.disposition_type variant 1

anyOf variant 1: What happens to the received units..

- Value shape: string. What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`.

### ReturnDispositionPreviousAttributes.disposition_type variant 2

anyOf variant 2.

- Value shape: null. What happens to the received units. 

### ReturnDispositionPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnDispositionPreviousAttributes.failure_code

### ReturnDispositionPreviousAttributes.failure_code variant 1

anyOf variant 1: Reason code for a failed merchandise disposition, when available..

- Value shape: string. Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`.

### ReturnDispositionPreviousAttributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributes.failure_message

### ReturnDispositionPreviousAttributes.failure_message variant 1

anyOf variant 1: Explanation of a failed merchandise disposition, when available..

- Value shape: string. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionPreviousAttributes.inventory_location_id

### ReturnDispositionPreviousAttributes.inventory_location_id variant 1

anyOf variant 1: ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types..

- Value shape: string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionPreviousAttributes.inventory_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionPreviousAttributes.inventory_movement_ids

### ReturnDispositionPreviousAttributes.inventory_movement_ids variant 1

anyOf variant 1: IDs of the inventory movements the disposition wrote. Empty when it moved no stock..

- Value shape: Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionPreviousAttributes.inventory_movement_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionPreviousAttributes.inventory_receipt_id

### ReturnDispositionPreviousAttributes.inventory_receipt_id variant 1

anyOf variant 1: ID of the inventory receipt the disposition recorded. Absent when it recorded none..

- Value shape: string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionPreviousAttributes.inventory_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnDispositionPreviousAttributes.occurred_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnDispositionPreviousAttributes.reason

### ReturnDispositionPreviousAttributes.reason variant 1

anyOf variant 1: Why the disposition was made..

- Value shape: string. Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`.

### ReturnDispositionPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was made. 

### ReturnDispositionPreviousAttributes.reason_message

### ReturnDispositionPreviousAttributes.reason_message variant 1

anyOf variant 1: Optional detail about `reason`, kept with the record..

- Value shape: string. Optional detail about `reason`, kept with the record. 

### ReturnDispositionPreviousAttributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Optional detail about `reason`, kept with the record. 

### ReturnDispositionPreviousAttributes.replaced_by_return_disposition_id

### ReturnDispositionPreviousAttributes.replaced_by_return_disposition_id variant 1

anyOf variant 1: ID of the disposition that took over this one. Present when a replacement canceled it..

- Value shape: string. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionPreviousAttributes.replaced_by_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionPreviousAttributes.replaces_return_disposition_id

### ReturnDispositionPreviousAttributes.replaces_return_disposition_id variant 1

anyOf variant 1: ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity..

- Value shape: string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionPreviousAttributes.replaces_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionPreviousAttributes.return_disposition_id

### ReturnDispositionPreviousAttributes.return_disposition_id variant 1

anyOf variant 1: Unique identifier for this return disposition, prefixed `retdsp_`..

- Value shape: string. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionPreviousAttributes.return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionPreviousAttributes.return_id

### ReturnDispositionPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return the disposition belongs to..

- Value shape: string. ID of the Return the disposition belongs to. 

### ReturnDispositionPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the disposition belongs to. 

### ReturnDispositionPreviousAttributes.return_inspection_id

### ReturnDispositionPreviousAttributes.return_inspection_id variant 1

anyOf variant 1: Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null..

- Value shape: string. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionPreviousAttributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionPreviousAttributes.return_inspection_line_item_id

### ReturnDispositionPreviousAttributes.return_inspection_line_item_id variant 1

anyOf variant 1: ID of the inspection line the disposition covers. Absent when it covers a receipt line..

- Value shape: string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionPreviousAttributes.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionPreviousAttributes.return_line_item_id

### ReturnDispositionPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units belong to..

- Value shape: string. ID of the Return line the units belong to. 

### ReturnDispositionPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units belong to. 

### ReturnDispositionPreviousAttributes.return_receipt_id

### ReturnDispositionPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null..

- Value shape: string. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionPreviousAttributes.return_receipt_line_item_id

### ReturnDispositionPreviousAttributes.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line the disposition covers. Absent when it covers an inspection line..

- Value shape: string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionPreviousAttributes.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionPreviousAttributes.status

### ReturnDispositionPreviousAttributes.status variant 1

anyOf variant 1: Whether inventory has applied the disposition..

- Value shape: string. Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ReturnDispositionPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether inventory has applied the disposition. 

### ReturnDispositionPreviousAttributes.supported_actions

### ReturnDispositionPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`.

### ReturnDispositionPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. 

### ReturnDispositionPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDispositionPreviousAttributes.version

### ReturnDispositionPreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. 

### ReturnDispositionPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

