[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptSupersededMerchantEventDataPreviousAttributes

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
| `line_items` | Optional | Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributesline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributesreceiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributesreturn_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributesshipment_id). |
| `source_system` | Optional | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributessuperseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededMerchantEventDataPreviousAttributes.md#returnreceiptsupersededmerchanteventdatapreviousattributessupersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesversion). |

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributescorrection_reason_message).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.external_actor_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.external_actor_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesexternal_actor_id).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesgenerated_dispositions).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.line_items

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem). The lines recorded. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_receipts[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.receiving_location_id

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.return_id](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesreturn_id).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.return_receipt_id

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.shipment_id

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.status](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesstatus).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.superseded_by_return_receipt_id

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.supersedes_return_receipt_id

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptSupersededMerchantEventDataPreviousAttributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.version](../models/ReturnInspectionAcceptanceDecidedMerchantEventDataPreviousAttributes.md#returninspectionacceptancedecidedmerchanteventdatapreviousattributesversion).

