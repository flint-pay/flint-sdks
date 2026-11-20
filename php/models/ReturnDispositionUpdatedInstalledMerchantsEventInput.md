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
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [ReturnDispositionPreviousAttributesInput](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnDispositionUpdatedInstalledMerchantsEventInput.md#returndispositionupdatedinstalledmerchantseventinputdataprevious_attributes). |

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [ReturnDispositionCreatedInstalledMerchantsEventInput.data.object](../models/ReturnDispositionCreatedInstalledMerchantsEventInput.md#returndispositioncreatedinstalledmerchantseventinputdataobject).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinput).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

Declared alternatives: [ReturnDispositionPreviousAttributesInput.cancellation_reason](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputcancellation_reason).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.disposition_type

Declared alternatives: [ReturnDispositionPreviousAttributesInput.disposition_type](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputdisposition_type).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code

Declared alternatives: [ReturnDispositionPreviousAttributesInput.failure_code](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputfailure_code).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message

Declared alternatives: [ReturnDispositionPreviousAttributesInput.failure_message](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputfailure_message).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_location_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.inventory_location_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_location_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_movement_ids

Declared alternatives: [ReturnDispositionPreviousAttributesInput.inventory_movement_ids](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_movement_ids).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.inventory_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.inventory_receipt_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputinventory_receipt_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.occurred_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason

Declared alternatives: [ReturnDispositionPreviousAttributesInput.reason](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributesInput.reason_message](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreason_message).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaced_by_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.replaced_by_return_disposition_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreplaced_by_return_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replaces_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.replaces_return_disposition_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreplaces_return_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_disposition_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_inspection_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_inspection_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_inspection_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_inspection_line_item_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_inspection_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_line_item_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_receipt_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_receipt_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_receipt_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributesInput.return_receipt_line_item_id](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputreturn_receipt_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [ReturnDispositionPreviousAttributesInput.status](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputstatus).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

Declared alternatives: [ReturnDispositionPreviousAttributesInput.supported_actions](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputsupported_actions).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributesInput.version](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputversion).

### ReturnDispositionUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

