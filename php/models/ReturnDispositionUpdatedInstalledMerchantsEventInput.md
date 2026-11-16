[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionUpdatedInstalledMerchantsEventInput

The `return_disposition.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_disposition.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributes). |

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [ReturnDispositionCreatedInstalledMerchantsEventInput.data.object](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdataobject).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who canceled the disposition. Merchant reads only. |
| `cancellation_reason` | Optional | string or null | Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) or null | Who created the disposition. |
| `disposition_type` | Optional | string or null | What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`. `disposition_type`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesdisposition_type). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`. `failure_code`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed merchandise disposition, when available. `failure_message`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesfailure_message). |
| `inventory_location_id` | Optional | string or null | ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. `inventory_location_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesinventory_location_id). |
| `inventory_movement_ids` | Optional | Array of string or null | IDs of the inventory movements the disposition wrote. Empty when it moved no stock. `inventory_movement_ids`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesinventory_movement_ids). |
| `inventory_receipt_id` | Optional | string or null | ID of the inventory receipt the disposition recorded. Absent when it recorded none. `inventory_receipt_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesinventory_receipt_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `occurred_at` | Optional | string or null | RFC3339 timestamp. `occurred_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesquantity). |
| `reason` | Optional | string or null | Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`. `reason`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreason). |
| `reason_message` | Optional | string or null | Optional detail about `reason`, kept with the record. `reason_message`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreason_message). |
| `replaced_by_return_disposition_id` | Optional | string or null | ID of the disposition that took over this one. Present when a replacement canceled it. `replaced_by_return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreplaced_by_return_disposition_id). |
| `replaces_return_disposition_id` | Optional | string or null | ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. `replaces_return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreplaces_return_disposition_id). |
| `return_disposition_id` | Optional | string or null | Unique identifier for this return disposition, prefixed `retdsp_`. `return_disposition_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_disposition_id). |
| `return_id` | Optional | string or null | ID of the Return the disposition belongs to. `return_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_inspection_id` | Optional | string or null or null | Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. `return_inspection_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_inspection_id). |
| `return_inspection_line_item_id` | Optional | string or null | ID of the inspection line the disposition covers. Absent when it covers a receipt line. `return_inspection_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_inspection_line_item_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the units belong to. `return_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_line_item_id). |
| `return_receipt_id` | Optional | string or null or null | Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. `return_receipt_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_receipt_id). |
| `return_receipt_line_item_id` | Optional | string or null | ID of the receipt line the disposition covers. Absent when it covers an inspection line. `return_receipt_line_item_id`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesreturn_receipt_line_item_id). |
| `status` | Optional | string or null | Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Why the disposition was canceled..

- Value shape: string. Why the disposition was canceled. Values: `"created_in_error"`, `"changed_disposition"`, `"duplicate"`, `"other"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was canceled. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.disposition_type

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.disposition_type variant 1

anyOf variant 1: What happens to the received units..

- Value shape: string. What happens to the received units. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`, `"repair"`, `"refurbish"`, `"liquidate"`, `"donate"`, `"discard"`, `"return_to_buyer"`, `"lost"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.disposition_type variant 2

anyOf variant 2.

- Value shape: null. What happens to the received units. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code variant 1

anyOf variant 1: Reason code for a failed merchandise disposition, when available..

- Value shape: string. Reason code for a failed merchandise disposition, when available. Values: `"inventory_effect_failed"`, `"inventory_item_unmapped"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code variant 2

anyOf variant 2.

- Value shape: null. Reason code for a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message variant 1

anyOf variant 1: Explanation of a failed merchandise disposition, when available..

- Value shape: string. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message variant 2

anyOf variant 2.

- Value shape: null. Explanation of a failed merchandise disposition, when available. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_location_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_location_id variant 1

anyOf variant 1: ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types..

- Value shape: string. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_movement_ids

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_movement_ids variant 1

anyOf variant 1: IDs of the inventory movements the disposition wrote. Empty when it moved no stock..

- Value shape: Array of string. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. Items: Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_movement_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the inventory movements the disposition wrote. Empty when it moved no stock. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_receipt_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_receipt_id variant 1

anyOf variant 1: ID of the inventory receipt the disposition recorded. Absent when it recorded none..

- Value shape: string. ID of the inventory receipt the disposition recorded. Absent when it recorded none. ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example: `"invrec_01KEZF7C00JXXCYA06SH8RCM2N"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory receipt the disposition recorded. Absent when it recorded none. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.occurred_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.quantity

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason variant 1

anyOf variant 1: Why the disposition was made..

- Value shape: string. Why the disposition was made. Values: `"inspection_result"`, `"return_policy"`, `"warehouse_override"`, `"safety_requirement"`, `"other"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the disposition was made. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason_message

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason_message variant 1

anyOf variant 1: Optional detail about `reason`, kept with the record..

- Value shape: string. Optional detail about `reason`, kept with the record. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Optional detail about `reason`, kept with the record. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaced_by_return_disposition_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaced_by_return_disposition_id variant 1

anyOf variant 1: ID of the disposition that took over this one. Present when a replacement canceled it..

- Value shape: string. ID of the disposition that took over this one. Present when a replacement canceled it. ID of the disposition that took over this one. Present when a replacement canceled it. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaced_by_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the disposition that took over this one. Present when a replacement canceled it. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaces_return_disposition_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaces_return_disposition_id variant 1

anyOf variant 1: ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity..

- Value shape: string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaces_return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. ID of the `failed` or `canceled` disposition this one replaces. It takes over that disposition's unused capacity. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_disposition_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_disposition_id variant 1

anyOf variant 1: Unique identifier for this return disposition, prefixed `retdsp_`..

- Value shape: string. Unique identifier for this return disposition, prefixed `retdsp_`. Unique identifier for this return disposition, prefixed `retdsp_`. Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_disposition_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return disposition, prefixed `retdsp_`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: ID of the Return the disposition belongs to..

- Value shape: string. ID of the Return the disposition belongs to. ID of the Return the disposition belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the disposition belongs to. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id variant 1

anyOf variant 1: Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null..

- Value shape: (string or null). Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Inspection that owns return_inspection_line_item_id. `null` when return_inspection_line_item_id is null. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_line_item_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_line_item_id variant 1

anyOf variant 1: ID of the inspection line the disposition covers. Absent when it covers a receipt line..

- Value shape: string. ID of the inspection line the disposition covers. Absent when it covers a receipt line. ID of the inspection line the disposition covers. Absent when it covers a receipt line. Example: `"retinli_01KEZF7C0039VC3XNJ3ZTX8PV4"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection line the disposition covers. Absent when it covers a receipt line. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_item_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the units belong to..

- Value shape: string. ID of the Return line the units belong to. ID of the Return line the units belong to. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the units belong to. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id variant 1

anyOf variant 1: Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null..

- Value shape: (string or null). Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is null. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_line_item_id

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_line_item_id variant 1

anyOf variant 1: ID of the receipt line the disposition covers. Absent when it covers an inspection line..

- Value shape: string. ID of the receipt line the disposition covers. Absent when it covers an inspection line. ID of the receipt line the disposition covers. Absent when it covers an inspection line. Example: `"retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE"`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt line the disposition covers. Absent when it covers an inspection line. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether inventory has applied the disposition..

- Value shape: string. Whether inventory has applied the disposition. Values: `"pending"`, `"succeeded"`, `"failed"`, `"canceled"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether inventory has applied the disposition. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts..

- Value shape: Array of string. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. Items values: `"cancel"`, `"retry"`.

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only before the inventory effect starts. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

### ReturnDispositionUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

