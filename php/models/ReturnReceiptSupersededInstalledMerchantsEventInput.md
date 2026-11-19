[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReceiptSupersededInstalledMerchantsEventInput

The `return_receipt.superseded` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnReceiptSupersededInstalledMerchantsEventInput.md#returnreceiptsupersededinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_receipt.superseded"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnReceiptSupersededInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnReceiptCreatedInstalledMerchantsEventInput.md#returnreceiptcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [ReturnReceiptPreviousAttributesInput](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnReceiptSupersededInstalledMerchantsEventInput.md#returnreceiptsupersededinstalledmerchantseventinputdataprevious_attributes). |

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.object

Field definitions: [ReturnReceiptCreatedInstalledMerchantsEventInput.data.object](../models/ReturnReceiptCreatedInstalledMerchantsEventInput.md#returnreceiptcreatedinstalledmerchantseventinputdataobject).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinput).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.correction_reason

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.correction_reason_message](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributescorrection_reason_message).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.external_actor_id

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributesInput.external_actor_id](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinputexternal_actor_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.generated_dispositions](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesgenerated_dispositions).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.line_items

Declared alternatives: [ReturnReceiptPreviousAttributesInput.line_items](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputline_items).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.receiving_location_id

Declared alternatives: [ReturnReceiptPreviousAttributesInput.receiving_location_id](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputreceiving_location_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.return_id

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.return_id](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesreturn_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributesInput.return_receipt_id](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputreturn_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.shipment_id

Declared alternatives: [ReturnReceiptPreviousAttributesInput.shipment_id](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputshipment_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.status](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesstatus).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.superseded_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.superseded_by_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributesInput.superseded_by_return_receipt_id](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputsuperseded_by_return_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.supersedes_return_receipt_id

Declared alternatives: [ReturnReceiptPreviousAttributesInput.supersedes_return_receipt_id](../models/ReturnReceiptPreviousAttributesInput.md#returnreceiptpreviousattributesinputsupersedes_return_receipt_id).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnReceiptSupersededInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.data.previous_attributes.version](../models/ReturnInspectionAcceptanceDecidedInstalledMerchantsEventInput.md#returninspectionacceptancedecidedinstalledmerchantseventinputdataprevious_attributesversion).

### ReturnReceiptSupersededInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

