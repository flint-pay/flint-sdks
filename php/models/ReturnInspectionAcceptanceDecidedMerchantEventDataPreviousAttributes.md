[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesgenerated_dispositions). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesinspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_receipt_id). |
| `source_system` | Optional | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributessuperseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributessupersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesversion). |

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason variant 1

anyOf variant 1: Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`..

- Value shape: string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`.

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason variant 2

anyOf variant 2.

- Value shape: null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason_message

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason_message variant 1

anyOf variant 1: Detail about `correction_reason`..

- Value shape: string. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_actor_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions variant 1

anyOf variant 1: Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`..

- Value shape: Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition). Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions variant 2

anyOf variant 2.

- Value shape: null. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.inspected_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.inspection_location_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.inspection_location_id variant 1

anyOf variant 1: Location where the returned merchandise was inspected. Must match the receipt receiving_location_id..

- Value shape: string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.inspection_location_id variant 2

anyOf variant 2.

- Value shape: null. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.line_items

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem). The lines recorded. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return the goods belong to..

- Value shape: string. ID of the Return the goods belong to. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the goods belong to. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_inspection_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_inspection_id variant 1

anyOf variant 1: Unique identifier for this return inspection, prefixed `retins_`..

- Value shape: string. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_receipt_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt being inspected..

- Value shape: string. ID of the receipt being inspected. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt being inspected. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.status

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether this is the current observation of these units or a correction replaced it..

- Value shape: string. Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`.

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this is the current observation of these units or a correction replaced it. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.superseded_by_return_inspection_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.superseded_by_return_inspection_id variant 1

anyOf variant 1: ID of the inspection that corrected this one. Absent while it is current..

- Value shape: string. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.superseded_by_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.supersedes_return_inspection_id

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.supersedes_return_inspection_id variant 1

anyOf variant 1: ID of the inspection this one corrects..

- Value shape: string. ID of the inspection this one corrects. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.supersedes_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection this one corrects. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.version

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. 

### ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

