[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions). |
| `line_items` | Optional | Array of [ReturnReceiptLineItemPreviousAttributes](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributes) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreceiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreturn_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesshipment_id). |
| `source_system` | Optional | ([ReturnSourceSystemPreviousAttributes](../models/ReturnSourceSystemPreviousAttributes.md#returnsourcesystempreviousattributes) or null) or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessuperseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessupersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion). |

### ReturnReceiptPreviousAttributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason).

### ReturnReceiptPreviousAttributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message).

### ReturnReceiptPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributes.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributes.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id).

### ReturnReceiptPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnReceiptPreviousAttributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions).

### ReturnReceiptPreviousAttributes.line_items

### ReturnReceiptPreviousAttributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnReceiptLineItemPreviousAttributes](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributes). The lines recorded. 

### ReturnReceiptPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnReceiptPreviousAttributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributes.receiving_location_id

### ReturnReceiptPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnReceiptPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnReceiptPreviousAttributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id).

### ReturnReceiptPreviousAttributes.return_receipt_id

### ReturnReceiptPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptPreviousAttributes.shipment_id

### ReturnReceiptPreviousAttributes.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ReturnReceiptPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptPreviousAttributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus).

### ReturnReceiptPreviousAttributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnReceiptPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptPreviousAttributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion).

