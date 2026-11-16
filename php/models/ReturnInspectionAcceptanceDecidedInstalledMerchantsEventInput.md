[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput

The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_inspection.acceptance_decided"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributes). |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ReturnInspectionInput.md#returninspectioninput).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesinspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItemInput](../models/ReturnInspectionLineItemInput.md#returninspectionlineiteminput) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_receipt_id). |
| `source_system` | Optional | [ReturnSourceSystemInput](../models/ReturnSourceSystemInput.md#returnsourcesysteminput) or null or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessuperseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributessupersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion). |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason variant 1

anyOf variant 1: Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`..

- Value shape: string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`.

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason variant 2

anyOf variant 2.

- Value shape: null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message variant 1

anyOf variant 1: Detail about `correction_reason`..

- Value shape: string. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.external_actor_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions variant 1

anyOf variant 1: Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`..

- Value shape: Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput). Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions variant 2

anyOf variant 2.

- Value shape: null. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.inspected_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.inspection_location_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.inspection_location_id variant 1

anyOf variant 1: Location where the returned merchandise was inspected. Must match the receipt receiving_location_id..

- Value shape: string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.inspection_location_id variant 2

anyOf variant 2.

- Value shape: null. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.line_items

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnInspectionLineItemInput](../models/ReturnInspectionLineItemInput.md#returninspectionlineiteminput). The lines recorded. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: ID of the Return the goods belong to..

- Value shape: string. ID of the Return the goods belong to. ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the goods belong to. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id variant 1

anyOf variant 1: Unique identifier for this return inspection, prefixed `retins_`..

- Value shape: string. Unique identifier for this return inspection, prefixed `retins_`. Unique identifier for this return inspection, prefixed `retins_`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt being inspected..

- Value shape: string. ID of the receipt being inspected. ID of the receipt being inspected. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt being inspected. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether this is the current observation of these units or a correction replaced it..

- Value shape: string. Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`.

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this is the current observation of these units or a correction replaced it. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.superseded_by_return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.superseded_by_return_inspection_id variant 1

anyOf variant 1: ID of the inspection that corrected this one. Absent while it is current..

- Value shape: string. ID of the inspection that corrected this one. Absent while it is current. ID of the inspection that corrected this one. Absent while it is current. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.superseded_by_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.supersedes_return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.supersedes_return_inspection_id variant 1

anyOf variant 1: ID of the inspection this one corrects..

- Value shape: string. ID of the inspection this one corrects. ID of the inspection this one corrects. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.supersedes_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection this one corrects. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

