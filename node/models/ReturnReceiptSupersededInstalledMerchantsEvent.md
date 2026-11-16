[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptSupersededInstalledMerchantsEvent

The `return_receipt.superseded` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_receipt.superseded"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnReceiptSupersededInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnReceiptCreatedInstalledMerchantsEvent.md#returnreceiptcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributes). |

### ReturnReceiptSupersededInstalledMerchantsEvent.data.object

Field definitions: [ReturnReceiptCreatedInstalledMerchantsEvent.data.object](../models/ReturnReceiptCreatedInstalledMerchantsEvent.md#returnreceiptcreatedinstalledmerchantseventdataobject).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesexternal_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions). |
| `line_items` | Optional | Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributesline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributesreceiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributesreturn_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributesshipment_id). |
| `source_system` | Optional | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null or null | System that recorded the observation. `null` when no source system was recorded. |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributessuperseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributessupersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion). |

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.external_actor_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.external_actor_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesexternal_actor_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.line_items

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.line_items variant 1

anyOf variant 1: The lines recorded..

- Value shape: Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem). The lines recorded. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines recorded. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.receiving_location_id

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_receipt_id

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.shipment_id

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_receipt_id

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.supersedes_return_receipt_id

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion).

### ReturnReceiptSupersededInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

