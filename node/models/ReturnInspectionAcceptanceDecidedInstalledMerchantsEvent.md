[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent

The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_inspection.acceptance_decided"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributes). |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ReturnInspection.md#returninspection).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesinspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_receipt_id). |
| `source_system` | Optional | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributessuperseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributessupersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion). |

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason variant 1

anyOf variant 1: Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`..

- Value shape: string. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`.

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason variant 2

anyOf variant 2.

- Value shape: null. Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message variant 1

anyOf variant 1: Detail about `correction_reason`..

- Value shape: string. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail about `correction_reason`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.external_actor_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions variant 1

anyOf variant 1: Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`..

- Value shape: Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition). Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions variant 2

anyOf variant 2.

- Value shape: null. Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.inspected_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.inspection_location_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.inspection_location_id variant 1

anyOf variant 1: Location where the returned merchandise was inspected. Must match the receipt receiving_location_id..

- Value shape: string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.inspection_location_id variant 2

anyOf variant 2.

- Value shape: null. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.line_items

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem). The lines recorded. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id variant 1

anyOf variant 1: ID of the Return the goods belong to..

- Value shape: string. ID of the Return the goods belong to. ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the goods belong to. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_inspection_id variant 1

anyOf variant 1: Unique identifier for this return inspection, prefixed `retins_`..

- Value shape: string. Unique identifier for this return inspection, prefixed `retins_`. Unique identifier for this return inspection, prefixed `retins_`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_receipt_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_receipt_id variant 1

anyOf variant 1: ID of the receipt being inspected..

- Value shape: string. ID of the receipt being inspected. ID of the receipt being inspected. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt being inspected. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether this is the current observation of these units or a correction replaced it..

- Value shape: string. Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`.

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this is the current observation of these units or a correction replaced it. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_inspection_id variant 1

anyOf variant 1: ID of the inspection that corrected this one. Absent while it is current..

- Value shape: string. ID of the inspection that corrected this one. Absent while it is current. ID of the inspection that corrected this one. Absent while it is current. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.supersedes_return_inspection_id

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.supersedes_return_inspection_id variant 1

anyOf variant 1: ID of the inspection this one corrects..

- Value shape: string. ID of the inspection this one corrects. ID of the inspection this one corrects. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.supersedes_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection this one corrects. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

### ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

