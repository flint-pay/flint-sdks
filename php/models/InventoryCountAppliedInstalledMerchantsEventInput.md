[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedInstalledMerchantsEventInput

The `inventory_count.applied` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_count.applied"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InventoryCountAppliedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributes). |

### InventoryCountAppliedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](WebhookSnapshotInventoryCountInput.md#webhooksnapshotinventorycountinput).

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string or null | RFC3339 timestamp. `applied_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `inventory_count_id` | Optional | string or null | Unique identifier for this inventory count, prefixed `invc_`. `inventory_count_id`: [declared alternatives](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributesinventory_count_id). |
| `lines` | Optional | Array of [InventoryCountLinePreviousAttributesInput](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinput) or null | Count lines, one for each inventory item being counted. `lines`: [declared alternatives](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributeslines). |
| `location_id` | Optional | string or null | ID of the Location whose stock is counted. `location_id`: [declared alternatives](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributeslocation_id). |
| `observation_provenance` | Optional | [InventoryCountObservationProvenancePreviousAttributesInput](../models/InventoryCountObservationProvenancePreviousAttributesInput.md#inventorycountobservationprovenancepreviousattributesinput) or null | Source system, actor, and time reported with the count's observations. |
| `status` | Optional | string or null | Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`. `status`: [declared alternatives](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryCountAppliedInstalledMerchantsEventInput.md#inventorycountappliedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesversion). |

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.applied_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEventInput.md#creditnoteallocationreversedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.inventory_count_id

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.inventory_count_id variant 1

anyOf variant 1: Unique identifier for this inventory count, prefixed `invc_`..

- Value shape: string. Unique identifier for this inventory count, prefixed `invc_`. Unique identifier for this inventory count, prefixed `invc_`. Example: `"invc_01KEZF7C00B47NXRE3ET37QQ59"`. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.inventory_count_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count, prefixed `invc_`. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.lines

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.lines variant 1

anyOf variant 1: Count lines, one for each inventory item being counted..

- Value shape: Array of [InventoryCountLinePreviousAttributesInput](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinput). Count lines, one for each inventory item being counted. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.lines variant 2

anyOf variant 2.

- Value shape: null. Count lines, one for each inventory item being counted. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.location_id

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.location_id variant 1

anyOf variant 1: ID of the Location whose stock is counted..

- Value shape: string. ID of the Location whose stock is counted. ID of the Location whose stock is counted. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock is counted. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.status

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Whether the count is still open. Applying or canceling a `draft` count ends it..

- Value shape: string. Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`.

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the count is still open. Applying or canceling a `draft` count ends it. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled..

- Value shape: Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`.

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. 

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### InventoryCountAppliedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.version](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesversion).

### InventoryCountAppliedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

