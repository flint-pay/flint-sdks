[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedInstalledMerchantsEventInput

The `modifier_set.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"modifier_set.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ModifierSetArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [ModifierSetPreviousAttributesInput](../models/ModifierSetPreviousAttributesInput.md#modifiersetpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEventInput.md#modifiersetarchivedinstalledmerchantseventinputdataprevious_attributes). |

### ModifierSetArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ModifierSetInput.md#modifiersetinput).

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ModifierSetPreviousAttributesInput.md#modifiersetpreviousattributesinput).

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the modifier set was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier set was created, as an RFC3339 timestamp. When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set was created, as an RFC3339 timestamp. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier set..

- Value shape: string. Identifier of the merchant that owns this modifier set. Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier set. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_groups

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_groups variant 1

anyOf variant 1: Ordered group entries in this set, including the full content of reusable groups and groups owned by the set..

- Value shape: Array of [ModifierSetGroupPreviousAttributesInput](../models/ModifierSetGroupPreviousAttributesInput.md#modifiersetgrouppreviousattributesinput). Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_groups variant 2

anyOf variant 2.

- Value shape: null. Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: Stable identifier of the modifier set assigned to catalog items..

- Value shape: string. Stable identifier of the modifier set assigned to catalog items. Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier set assigned to catalog items. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Name used to identify this modifier set..

- Value shape: string. Name used to identify this modifier set. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name used to identify this modifier set. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited..

- Value shape: string. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the modifier set or any group it contains last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Version of the modifier set, including the groups it contains..

- Value shape: integer. Version of the modifier set, including the groups it contains. Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. 

### ModifierSetArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the modifier set, including the groups it contains. 

### ModifierSetArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

