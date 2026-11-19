[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionUpdatedInstalledMerchantsEvent

The `return_disposition.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnDispositionUpdatedInstalledMerchantsEvent.md#returndispositionupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_disposition.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnDispositionUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnDispositionCreatedInstalledMerchantsEvent.md#returndispositioncreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object and [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnDispositionUpdatedInstalledMerchantsEvent.md#returndispositionupdatedinstalledmerchantseventdataprevious_attributes). |

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.object

Field definitions: [ReturnDispositionCreatedInstalledMerchantsEvent.data.object](../models/ReturnDispositionCreatedInstalledMerchantsEvent.md#returndispositioncreatedinstalledmerchantseventdataobject).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.cancellation_reason

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason_message).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.disposition_type

Declared alternatives: [ReturnDispositionPreviousAttributes.disposition_type](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesdisposition_type).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.failure_code

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_code](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_code).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.failure_message

Declared alternatives: [ReturnDispositionPreviousAttributes.failure_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesfailure_message).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.inventory_location_id

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_location_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_location_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.inventory_movement_ids

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_movement_ids](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_movement_ids).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.inventory_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributes.inventory_receipt_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesinventory_receipt_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.occurred_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.reason

Declared alternatives: [ReturnDispositionPreviousAttributes.reason](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreason_message).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.replaced_by_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.replaced_by_return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaced_by_return_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.replaces_return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.replaces_return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreplaces_return_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_disposition_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_disposition_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_disposition_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_inspection_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_inspection_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_inspection_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_inspection_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_inspection_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_receipt_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_receipt_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_receipt_line_item_id

Declared alternatives: [ReturnDispositionPreviousAttributes.return_receipt_line_item_id](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesreturn_receipt_line_item_id).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ReturnDispositionPreviousAttributes.status](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesstatus).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

Declared alternatives: [ReturnDispositionPreviousAttributes.supported_actions](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributessupported_actions).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnDispositionUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

### ReturnDispositionUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

