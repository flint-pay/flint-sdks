[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedInstalledMerchantsEvent

The `modifier_set.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"modifier_set.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ModifierSetArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object and [ModifierSetPreviousAttributes](../models/ModifierSetPreviousAttributes.md#modifiersetpreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataprevious_attributes). |

### ModifierSetArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ModifierSet.md#modifierset).

### ModifierSetArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ModifierSetPreviousAttributes.md#modifiersetpreviousattributes).

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the modifier set was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier set was created, as an RFC3339 timestamp. When the modifier set was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set was created, as an RFC3339 timestamp. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier set..

- Value shape: string. Identifier of the merchant that owns this modifier set. Identifier of the merchant that owns this modifier set. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier set. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributesmetadata).

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_groups

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_groups variant 1

anyOf variant 1: Ordered group entries in this set, including the full content of reusable groups and groups owned by the set..

- Value shape: Array of [ModifierSetGroupPreviousAttributes](../models/ModifierSetGroupPreviousAttributes.md#modifiersetgrouppreviousattributes). Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_groups variant 2

anyOf variant 2.

- Value shape: null. Ordered group entries in this set, including the full content of reusable groups and groups owned by the set. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: Stable identifier of the modifier set assigned to catalog items..

- Value shape: string. Stable identifier of the modifier set assigned to catalog items. Stable identifier of the modifier set assigned to catalog items. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier set assigned to catalog items. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.name

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Name used to identify this modifier set..

- Value shape: string. Name used to identify this modifier set. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name used to identify this modifier set. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.status

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited..

- Value shape: string. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived sets remain readable and cannot be edited. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the modifier set or any group it contains last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier set or any group it contains last changed, as an RFC3339 timestamp. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.version

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Version of the modifier set, including the groups it contains..

- Value shape: integer. Version of the modifier set, including the groups it contains. Version of the modifier set, including the groups it contains. Format: `uint64`. minimum: `1`. 

### ModifierSetArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the modifier set, including the groups it contains. 

### ModifierSetArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

