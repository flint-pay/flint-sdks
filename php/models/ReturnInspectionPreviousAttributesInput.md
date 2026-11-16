[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributesInput](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinput) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesinspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItemPreviousAttributesInput](../models/ReturnInspectionLineItemPreviousAttributesInput.md#returninspectionlineitempreviousattributesinput) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_receipt_id). |
| `source_system` | Optional | ([ReturnSourceSystemPreviousAttributesInput](../models/ReturnSourceSystemPreviousAttributesInput.md#returnsourcesystempreviousattributesinput) or null) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessuperseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessupersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReturnInspectionPreviousAttributesInput.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason).

### ReturnInspectionPreviousAttributesInput.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message).

### ReturnInspectionPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionPreviousAttributesInput.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id).

### ReturnInspectionPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnInspectionPreviousAttributesInput.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions).

### ReturnInspectionPreviousAttributesInput.inspected_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionPreviousAttributesInput.inspection_location_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.inspection_location_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesinspection_location_id).

### ReturnInspectionPreviousAttributesInput.line_items

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.line_items](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesline_items).

### ReturnInspectionPreviousAttributesInput.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id).

### ReturnInspectionPreviousAttributesInput.return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_inspection_id).

### ReturnInspectionPreviousAttributesInput.return_receipt_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_receipt_id).

### ReturnInspectionPreviousAttributesInput.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus).

### ReturnInspectionPreviousAttributesInput.superseded_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionPreviousAttributesInput.superseded_by_return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.superseded_by_return_inspection_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessuperseded_by_return_inspection_id).

### ReturnInspectionPreviousAttributesInput.supersedes_return_inspection_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.supersedes_return_inspection_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessupersedes_return_inspection_id).

### ReturnInspectionPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionPreviousAttributesInput.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion).

