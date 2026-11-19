[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key). |
| `line_items` | Optional | Array of [ReturnReceiptLineItemPreviousAttributes](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributes) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreceiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreturn_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesshipment_id). |
| `source_system` | Optional | [ReturnSourceSystemPreviousAttributes](../models/ReturnSourceSystemPreviousAttributes.md#returnsourcesystempreviousattributes) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system). |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessuperseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessupersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion). |

### ReturnReceiptPreviousAttributes.correction_reason

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason).

### ReturnReceiptPreviousAttributes.correction_reason_message

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason_message](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message).

### ReturnReceiptPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptPreviousAttributes.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributes.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id).

### ReturnReceiptPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnReceiptPreviousAttributes.generated_dispositions

Declared alternatives: [ReturnInspectionPreviousAttributes.generated_dispositions](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions).

### ReturnReceiptPreviousAttributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### ReturnReceiptPreviousAttributes.line_items

### ReturnReceiptPreviousAttributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnReceiptLineItemPreviousAttributes](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributes). The lines recorded. 

### ReturnReceiptPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_disposition_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `available_disposition_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units were matched to. Absent for unverified units. `return_line_item_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items-variant-1-fields-1return_line_item_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt the line belongs to. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items-variant-1-fields-1return_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | Unique identifier for this return receipt line item, prefixed `retrcli_`. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items-variant-1-fields-1return_receipt_line_item_id). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. Items values: `"verify"`. `supported_actions`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributessupported_actions). |
| `unverified_item` | Optional | [ReturnUnverifiedItemPreviousAttributes](../models/ReturnUnverifiedItemPreviousAttributes.md#returnunverifieditempreviousattributes) or null | What the operator recorded for units that match no line. Present on `unverified` lines. |
| `verification_reason` | Optional | string or null | Why the units were verified against the line. Values: `"order_match_confirmed"`, `"sku_match_confirmed"`, `"inspection_confirmed"`, `"merchant_review"`, `"other"`. `verification_reason`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason). |
| `verification_reason_message` | Optional | string or null | Detail about `verification_reason`. `verification_reason_message`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason_message). |
| `verification_status` | Optional | string or null | Whether the units are matched to a line. Values: `"matched"`, `"unverified"`, `"excess"`. `verification_status`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_status). |
| `verified_at` | Optional | string or null | RFC3339 timestamp. `verified_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `verified_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who verified the line. `verified_by`: [declared alternatives](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverified_by). |

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.available_disposition_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units were matched to. Absent for unverified units..

- Value shape: string. ID of the Return line the units were matched to. Absent for unverified units. ID of the Return line the units were matched to. Absent for unverified units. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units were matched to. Absent for unverified units. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: ID of the receipt the line belongs to..

- Value shape: string. ID of the receipt the line belongs to. ID of the receipt the line belongs to. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt the line belongs to. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id variant 1

anyOf variant 1: Unique identifier for this return receipt line item, prefixed `retrcli_`..

- Value shape: string. Unique identifier for this return receipt line item, prefixed `retrcli_`. Unique identifier for this return receipt line item, prefixed `retrcli_`. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt line item, prefixed `retrcli_`. 

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.supported_actions

Declared alternatives: [ReturnReceiptLineItemPreviousAttributes.supported_actions](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributessupported_actions).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.verification_reason

Declared alternatives: [ReturnReceiptLineItemPreviousAttributes.verification_reason](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.verification_reason_message

Declared alternatives: [ReturnReceiptLineItemPreviousAttributes.verification_reason_message](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_reason_message).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.verification_status

Declared alternatives: [ReturnReceiptLineItemPreviousAttributes.verification_status](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverification_status).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.verified_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnReceiptPreviousAttributes.line_items variant 1.[] fields 1.verified_by

Declared alternatives: [ReturnReceiptLineItemPreviousAttributes.verified_by](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributesverified_by).

### ReturnReceiptPreviousAttributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptPreviousAttributes.receiving_location_id

### ReturnReceiptPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. 

### ReturnReceiptPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnReceiptPreviousAttributes.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesreturn_id).

### ReturnReceiptPreviousAttributes.return_receipt_id

### ReturnReceiptPreviousAttributes.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptPreviousAttributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptPreviousAttributes.shipment_id

### ReturnReceiptPreviousAttributes.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptPreviousAttributes.source_system

Declared alternatives: [ReturnInspectionPreviousAttributes.source_system](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system).

### ReturnReceiptPreviousAttributes.status

Declared alternatives: [ReturnInspectionPreviousAttributes.status](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus).

### ReturnReceiptPreviousAttributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. 

### ReturnReceiptPreviousAttributes.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnReceiptPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnReceiptPreviousAttributes.version

Declared alternatives: [ReturnInspectionPreviousAttributes.version](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion).

