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
| `previous_attributes` | Optional | object and [ReturnReceiptPreviousAttributes](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnReceiptSupersededInstalledMerchantsEvent.md#returnreceiptsupersededinstalledmerchantseventdataprevious_attributes). |

### ReturnReceiptSupersededInstalledMerchantsEvent.data.object

Field definitions: [ReturnReceiptCreatedInstalledMerchantsEvent.data.object](../models/ReturnReceiptCreatedInstalledMerchantsEvent.md#returnreceiptcreatedinstalledmerchantseventdataobject).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributescorrection_reason_message).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributes.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributesexternal_actor_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesgenerated_dispositions).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.line_items

Declared alternatives: [ReturnReceiptPreviousAttributes.line_items](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.receiving_location_id

Declared alternatives: [ReturnReceiptPreviousAttributes.receiving_location_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreceiving_location_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesreturn_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesreturn_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.shipment_id

Declared alternatives: [ReturnReceiptPreviousAttributes.shipment_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesshipment_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesstatus).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.superseded_by_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.superseded_by_return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessuperseded_by_return_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.supersedes_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributes.supersedes_return_receipt_id](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributessupersedes_return_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent.md#returninspectionacceptancedecidedinstalledmerchantseventdataprevious_attributesversion).

### ReturnReceiptSupersededInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

