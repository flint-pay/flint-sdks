[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesinspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItemPreviousAttributes](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributes) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_receipt_id). |
| `source_system` | Optional | Alternative shapes (see declared variants) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system). |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessuperseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessupersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion). |

### ReturnInspectionPreviousAttributes.correction_reason

### ReturnInspectionPreviousAttributes.correction_reason variant 1

anyOf variant 1: Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`..

- Value shape: string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`.

### ReturnInspectionPreviousAttributes.correction_reason variant 2

anyOf variant 2.

- Value shape: null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. 

### ReturnInspectionPreviousAttributes.correction_reason_message

### ReturnInspectionPreviousAttributes.correction_reason_message variant 1

anyOf variant 1: Detail about `correction_reason`..

- Value shape: string. Detail about `correction_reason`. 

### ReturnInspectionPreviousAttributes.correction_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `correction_reason`. 

### ReturnInspectionPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionPreviousAttributes.external_actor_id

### ReturnInspectionPreviousAttributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. 

### ReturnInspectionPreviousAttributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### ReturnInspectionPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnInspectionPreviousAttributes.generated_dispositions

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1

anyOf variant 1: Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`..

- Value shape: Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes). Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 2

anyOf variant 2.

- Value shape: null. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `canceled_by` | Optional | Alternative shapes (see declared variants) | Who canceled the disposition. Merchant reads only. `canceled_by`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescanceled_by). |
| `cancellation_reason` | Optional | string or null | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `created_by` | Optional | Alternative shapes (see declared variants) | Who created the disposition. `created_by`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescreated_by). |
| `disposition_type` | Optional | string or null | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. `disposition_type`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesdisposition_type). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. `failure_code`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed merchandise disposition, when available. `failure_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_message). |
| `inventory_location_id` | Optional | string or null | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. `inventory_location_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1inventory_location_id). |
| `inventory_movement_ids` | Optional | Array of string or null | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. `inventory_movement_ids`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1inventory_movement_ids). |
| `inventory_receipt_id` | Optional | string or null | ID of the inventory receipt the disposition recorded. Absent when it recorded none. `inventory_receipt_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1inventory_receipt_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `reason` | Optional | string or null | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. `reason`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message). |
| `replaced_by_return_disposition_id` | Optional | string or null | ID of the disposition that took over this one. Present when a replacement canceled it. `replaced_by_return_disposition_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1replaced_by_return_disposition_id). |
| `replaces_return_disposition_id` | Optional | string or null | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. `replaces_return_disposition_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1replaces_return_disposition_id). |
| `return_disposition_id` | Optional | string or null | Unique identifier for this return disposition, prefixed `retdsp_`. `return_disposition_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_disposition_id). |
| `return_id` | Optional | string or null | ID of the Return the disposition belongs to. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_id). |
| `return_inspection_id` | Optional | string or null or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | ID of the inspection line the disposition covers. Absent when it covers a receipt line. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units belong to. `return_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_line_item_id). |
| `return_receipt_id` | Optional | string or null or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line the disposition covers. Absent when it covers an inspection line. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1return_receipt_line_item_id). |
| `status` | Optional | string or null | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion). |

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.canceled_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.canceled_by

Declared alternatives: [ReturnDispositionPreviousAttributes.canceled_by](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescanceled_by).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.cancellation_reason

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.created_by

Declared alternatives: [ReturnDispositionPreviousAttributes.created_by](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescreated_by).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.disposition_type

Declared alternatives: [ReturnDispositionPreviousAttributes.disposition_type](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesdisposition_type).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.failure_code

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_code](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_code).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.failure_message

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_message).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_location_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_location_id variant 1

anyOf variant 1: ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types..

- Value shape: string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_movement_ids

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_movement_ids variant 1

anyOf variant 1: IDs of the inventory movements the disposition wrote. Empty when it moved no stock..

- Value shape: Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. Items: Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_movement_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_receipt_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_receipt_id variant 1

anyOf variant 1: ID of the inventory receipt the disposition recorded. Absent when it recorded none..

- Value shape: string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.inventory_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.occurred_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.reason

Declared alternatives: [ReturnDispositionPreviousAttributes.reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaced_by_return_disposition_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaced_by_return_disposition_id variant 1

anyOf variant 1: ID of the disposition that took over this one. Present when a replacement canceled it..

- Value shape: string. ID of the disposition that took over this one. Present when a replacement canceled it. ID of the disposition that took over this one. Present when a replacement canceled it. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaced_by_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaces_return_disposition_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaces_return_disposition_id variant 1

anyOf variant 1: ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity..

- Value shape: string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.replaces_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_disposition_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_disposition_id variant 1

anyOf variant 1: Unique identifier for this return disposition, prefixed `retdsp_`..

- Value shape: string. Unique identifier for this return disposition, prefixed `retdsp_`. Unique identifier for this return disposition, prefixed `retdsp_`. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the Return the disposition belongs to..

- Value shape: string. ID of the Return the disposition belongs to. ID of the Return the disposition belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the disposition belongs to. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_id variant 1

anyOf variant 1: Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null..

- Value shape: (string or null). Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_line_item_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_line_item_id variant 1

anyOf variant 1: ID of the inspection line the disposition covers. Absent when it covers a receipt line..

- Value shape: string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_line_item_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units belong to..

- Value shape: string. ID of the Return line the units belong to. ID of the Return line the units belong to. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units belong to. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null..

- Value shape: (string or null). Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_line_item_id

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line the disposition covers. Absent when it covers an inspection line..

- Value shape: string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.status

Declared alternatives: [ReturnDispositionPreviousAttributes.status](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesstatus).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.supported_actions

Declared alternatives: [ReturnDispositionPreviousAttributes.supported_actions](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributessupported_actions).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

### ReturnInspectionPreviousAttributes.inspected_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionPreviousAttributes.inspection_location_id

### ReturnInspectionPreviousAttributes.inspection_location_id variant 1

anyOf variant 1: Location where the returned merchandise was inspected. Must match the receipt receiving_location_id..

- Value shape: string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionPreviousAttributes.inspection_location_id variant 2

anyOf variant 2.

- Value shape: null. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionPreviousAttributes.line_items

### ReturnInspectionPreviousAttributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnInspectionLineItemPreviousAttributes](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributes). The lines recorded. 

### ReturnInspectionPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_decided_at` | Optional | string or null | RFC3339 timestamp. `acceptance_decided_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `acceptance_decided_by` | Optional | Alternative shapes (see declared variants) | Who made the acceptance decision. `acceptance_decided_by`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decided_by). |
| `acceptance_decision_reason` | Optional | string or null | Why the units were accepted or rejected after review. Values: `"inspection_result"`, `"return_policy"`, `"manual_review"`, `"other"`. `acceptance_decision_reason`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason). |
| `acceptance_decision_reason_message` | Optional | string or null | Detail about `acceptance_decision_reason`. `acceptance_decision_reason_message`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason_message). |
| `acceptance_status` | Optional | string or null | Whether the inspected units were accepted, rejected, or need a merchant's decision. Values: `"accepted"`, `"rejected"`, `"review_required"`. `acceptance_status`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_status). |
| `available_disposition_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `available_disposition_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `condition` | Optional | string or null | `undetermined`: The item's condition could not be assessed. Values: `"new"`, `"unopened"`, `"opened"`, `"used"`, `"damaged"`, `"defective"`, `"incomplete"`, `"undetermined"`. `condition`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributescondition). |
| `finding_codes` | Optional | Array of string or null | What the inspection found. Up to 50 values, none repeated. Items values: `"matches_expected_item"`, `"wrong_item"`, `"damaged"`, `"defective"`, `"used"`, `"missing_parts"`, `"empty_package"`, `"counterfeit_suspected"`, `"other"`. `finding_codes`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesfinding_codes). |
| `internal_note` | Optional | string or null | Note for your own team about this line. `internal_note`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesinternal_note). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id). |
| `return_inspection_id` | Optional | string or null | ID of the inspection the line belongs to. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | Unique identifier for this return inspection line item, prefixed `retinli_`. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line inspected. `return_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_line_item_id). |
| `return_receipt_id` | Optional | string or null | Receipt that owns return_receipt_line_item_id. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line inspected. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_receipt_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. Items values: `"decide"`. `supported_actions`: [declared alternatives](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributessupported_actions). |

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.acceptance_decided_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.acceptance_decided_by

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.acceptance_decided_by](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decided_by).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.acceptance_decision_reason

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.acceptance_decision_reason_message

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.acceptance_decision_reason_message](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_decision_reason_message).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.acceptance_status

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.acceptance_status](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesacceptance_status).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.available_disposition_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.condition

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.condition](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributescondition).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.finding_codes

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.finding_codes](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesfinding_codes).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.internal_note

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.internal_note](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributesinternal_note).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id variant 1

anyOf variant 1: Return that owns return_line_item_id. `null` when return_line_item_id is null..

- Value shape: (string or null). Return that owns return_line_item_id. `null` when return_line_item_id is null. Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. Return that owns return_line_item_id. `null` when return_line_item_id is null. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_id variant 1

anyOf variant 1: ID of the inspection the line belongs to..

- Value shape: string. ID of the inspection the line belongs to. ID of the inspection the line belongs to. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection the line belongs to. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_line_item_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_line_item_id variant 1

anyOf variant 1: Unique identifier for this return inspection line item, prefixed `retinli_`..

- Value shape: string. Unique identifier for this return inspection line item, prefixed `retinli_`. Unique identifier for this return inspection line item, prefixed `retinli_`. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection line item, prefixed `retinli_`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line inspected..

- Value shape: string. ID of the Return line inspected. ID of the Return line inspected. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line inspected. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id..

- Value shape: string. Receipt that owns return_receipt_line_item_id. Receipt that owns return_receipt_line_item_id. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line inspected..

- Value shape: string. ID of the receipt line inspected. ID of the receipt line inspected. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line inspected. 

### ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.supported_actions

Declared alternatives: [ReturnInspectionLineItemPreviousAttributes.supported_actions](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributessupported_actions).

### ReturnInspectionPreviousAttributes.return_id

### ReturnInspectionPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return the goods belong to..

- Value shape: string. ID of the Return the goods belong to. 

### ReturnInspectionPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the goods belong to. 

### ReturnInspectionPreviousAttributes.return_inspection_id

### ReturnInspectionPreviousAttributes.return_inspection_id variant 1

anyOf variant 1: Unique identifier for this return inspection, prefixed `retins_`..

- Value shape: string. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionPreviousAttributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionPreviousAttributes.return_receipt_id

### ReturnInspectionPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt being inspected..

- Value shape: string. ID of the receipt being inspected. 

### ReturnInspectionPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt being inspected. 

### ReturnInspectionPreviousAttributes.source_system

System that recorded the observation. `null` when no source system was recorded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_source_id` | Conditional | string or null | Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. `external_source_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system-variant-1external_source_id). |
| `source_system_type` | Conditional | string or null | Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`. `source_system_type`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system-variant-1source_system_type). |

### ReturnInspectionPreviousAttributes.source_system variant 1

anyOf variant 1: System that recorded the observation. `null` when no source system was recorded.; anyOf ReturnSourceSystemPreviousAttributes.

- Optional: `external_source_id`, `source_system_type`.

### ReturnInspectionPreviousAttributes.source_system variant 2, 3

anyOf variant 1: System that recorded the observation. `null` when no source system was recorded.; anyOf variant 2; anyOf variant 2.

- Undeclared: `external_source_id`, `source_system_type`.
- Value shape: null. System that recorded the observation. `null` when no source system was recorded. 

### ReturnInspectionPreviousAttributes.source_system variant 1.external_source_id

### ReturnInspectionPreviousAttributes.source_system variant 1.external_source_id variant 1

anyOf variant 1: Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field..

- Value shape: string. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. 

### ReturnInspectionPreviousAttributes.source_system variant 1.external_source_id variant 2

anyOf variant 2.

- Value shape: null. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. 

### ReturnInspectionPreviousAttributes.source_system variant 1.source_system_type

### ReturnInspectionPreviousAttributes.source_system variant 1.source_system_type variant 1

anyOf variant 1: Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses..

- Value shape: string. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Values: `"manual"`, `"pos"`, `"wms"`, `"erp"`, `"other"`, `"flint"`.

### ReturnInspectionPreviousAttributes.source_system variant 1.source_system_type variant 2

anyOf variant 2.

- Value shape: null. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. 

### ReturnInspectionPreviousAttributes.status

### ReturnInspectionPreviousAttributes.status variant 1

anyOf variant 1: Whether this is the current observation of these units or a correction replaced it..

- Value shape: string. Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`.

### ReturnInspectionPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this is the current observation of these units or a correction replaced it. 

### ReturnInspectionPreviousAttributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionPreviousAttributes.superseded_by_return_inspection_id

### ReturnInspectionPreviousAttributes.superseded_by_return_inspection_id variant 1

anyOf variant 1: ID of the inspection that corrected this one. Absent while it is current..

- Value shape: string. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionPreviousAttributes.superseded_by_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionPreviousAttributes.supersedes_return_inspection_id

### ReturnInspectionPreviousAttributes.supersedes_return_inspection_id variant 1

anyOf variant 1: ID of the inspection this one corrects..

- Value shape: string. ID of the inspection this one corrects. 

### ReturnInspectionPreviousAttributes.supersedes_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection this one corrects. 

### ReturnInspectionPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionPreviousAttributes.version

### ReturnInspectionPreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. 

### ReturnInspectionPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

