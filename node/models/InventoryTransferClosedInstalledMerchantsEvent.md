[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferClosedInstalledMerchantsEvent

The `inventory_transfer.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_transfer.closed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InventoryTransferClosedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributes). |

### InventoryTransferClosedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](WebhookSnapshotInventoryTransfer.md#webhooksnapshotinventorytransfer).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null | RFC3339 timestamp. `closed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `closed_reason` | Optional | string or null | How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`. `closed_reason`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesclosed_reason). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `departed_at` | Optional | string or null | RFC3339 timestamp. `departed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `destination_location_id` | Optional | string or null | ID of the Location the stock goes to. `destination_location_id`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesdestination_location_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `inventory_transfer_id` | Optional | string or null | Unique identifier for this inventory transfer, prefixed `invtr_`. `inventory_transfer_id`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesinventory_transfer_id). |
| `lines` | Optional | Array of [InventoryTransferLinePreviousAttributes](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributes) or null | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. `lines`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributeslines). |
| `note` | Optional | string or null | Free-text note about the transfer. `note`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesnote). |
| `origin_location_id` | Optional | string or null | ID of the Location the stock leaves. `origin_location_id`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesorigin_location_id). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. `status`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryTransferClosedInstalledMerchantsEvent.md#inventorytransferclosedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesversion). |

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.closed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 1

anyOf variant 1: How the transfer ended. `null` when the transfer isn't closed..

- Value shape: string. How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`.

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the transfer ended. `null` when the transfer isn't closed. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.departed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.destination_location_id

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.destination_location_id variant 1

anyOf variant 1: ID of the Location the stock goes to..

- Value shape: string. ID of the Location the stock goes to. ID of the Location the stock goes to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.destination_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock goes to. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.inventory_transfer_id

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.inventory_transfer_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer, prefixed `invtr_`..

- Value shape: string. Unique identifier for this inventory transfer, prefixed `invtr_`. Unique identifier for this inventory transfer, prefixed `invtr_`. Example: `"invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP"`. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.inventory_transfer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer, prefixed `invtr_`. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.lines

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.lines variant 1

anyOf variant 1: Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection..

- Value shape: Array of [InventoryTransferLinePreviousAttributes](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributes). Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.lines variant 2

anyOf variant 2.

- Value shape: null. Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.note

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.note variant 1

anyOf variant 1: Free-text note about the transfer..

- Value shape: string. Free-text note about the transfer. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.note variant 2

anyOf variant 2.

- Value shape: null. Free-text note about the transfer. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.origin_location_id

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.origin_location_id variant 1

anyOf variant 1: ID of the Location the stock leaves..

- Value shape: string. ID of the Location the stock leaves. ID of the Location the stock leaves. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.origin_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock leaves. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.status

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost..

- Value shape: string. Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`.

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed..

- Value shape: Array of string. Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`.

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. 

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryTransferClosedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesversion).

### InventoryTransferClosedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

