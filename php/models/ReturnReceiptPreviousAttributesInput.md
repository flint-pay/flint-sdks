[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributesInput](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinput) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `line_items` | Optional | Array of [ReturnReceiptLineItemPreviousAttributesInput](../models/ReturnReceiptLineItemPreviousAttributesInput.md#returnreceiptlineitempreviousattributesinput) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputreceiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputreturn_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputshipment_id). |
| `source_system` | Optional | [ReturnSourceSystemPreviousAttributesInput](../models/ReturnSourceSystemPreviousAttributesInput.md#returnsourcesystempreviousattributesinput) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputsuperseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputsupersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReturnReceiptPreviousAttributesInput.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason).

### ReturnReceiptPreviousAttributesInput.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message).

### ReturnReceiptPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributesInput.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id).

### ReturnReceiptPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnReceiptPreviousAttributesInput.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions).

### ReturnReceiptPreviousAttributesInput.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### ReturnReceiptPreviousAttributesInput.line_items

### ReturnReceiptPreviousAttributesInput.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnReceiptLineItemPreviousAttributesInput](../models/ReturnReceiptLineItemPreviousAttributesInput.md#returnreceiptlineitempreviousattributesinput). The lines recorded. 

### ReturnReceiptPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnReceiptPreviousAttributesInput.received_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributesInput.receiving_location_id

### ReturnReceiptPreviousAttributesInput.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnReceiptPreviousAttributesInput.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnReceiptPreviousAttributesInput.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id).

### ReturnReceiptPreviousAttributesInput.return_receipt_id

### ReturnReceiptPreviousAttributesInput.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributesInput.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptPreviousAttributesInput.shipment_id

### ReturnReceiptPreviousAttributesInput.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ReturnReceiptPreviousAttributesInput.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptPreviousAttributesInput.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus).

### ReturnReceiptPreviousAttributesInput.superseded_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributesInput.superseded_by_return_receipt_id

### ReturnReceiptPreviousAttributesInput.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributesInput.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptPreviousAttributesInput.supersedes_return_receipt_id

### ReturnReceiptPreviousAttributesInput.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributesInput.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnReceiptPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributesInput.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion).

