[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupArchivedInstalledMerchantsEvent

The `modifier_group.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"modifier_group.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ModifierGroupArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object and [ModifierGroupPreviousAttributes](../models/ModifierGroupPreviousAttributes.md#modifiergrouppreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataprevious_attributes). |

### ModifierGroupArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](ModifierGroup.md#modifiergroup).

### ModifierGroupArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem.metadata](../models/CreateOrderLineItem.md#createorderlineitemmetadata).

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ModifierGroupPreviousAttributes.md#modifiergrouppreviousattributes).

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.allow_quantities

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.allow_quantities variant 1

anyOf variant 1: Whether buyers can select more than one unit of a list modifier..

- Value shape: boolean. Whether buyers can select more than one unit of a list modifier. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.allow_quantities variant 2

anyOf variant 2.

- Value shape: null. Whether buyers can select more than one unit of a list modifier. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the modifier group was created, as an RFC3339 timestamp..

- Value shape: string. When the modifier group was created, as an RFC3339 timestamp. When the modifier group was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group was created, as an RFC3339 timestamp. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_quantity

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_quantity variant 1

anyOf variant 1: Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported..

- Value shape: integer. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_selected

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_selected variant 1

anyOf variant 1: Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value..

- Value shape: integer. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. Format: `int32`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_selected variant 2

anyOf variant 2.

- Value shape: null. Maximum number of distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set can override this value. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_total_quantity

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_total_quantity variant 1

anyOf variant 1: Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported..

- Value shape: integer. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum combined whole-number quantity across selected list modifiers; fractional quantities are not supported. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this modifier group..

- Value shape: string. Identifier of the merchant that owns this modifier group. Identifier of the merchant that owns this modifier group. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this modifier group. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: maxLength: `4096`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_quantity

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_quantity variant 1

anyOf variant 1: Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported..

- Value shape: integer. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. Format: `int64`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum whole-number quantity for each selected list modifier when allow_quantities is true; fractional quantities are not supported. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_selected

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_selected variant 1

anyOf variant 1: Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value..

- Value shape: integer. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. Format: `int32`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.min_selected variant 2

anyOf variant 2.

- Value shape: null. Minimum number of distinct modifiers buyers must select from a list group. Omit it to require no selections. A modifier set can override this value. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_id

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_id variant 1

anyOf variant 1: Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it..

- Value shape: string. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't return it. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_type

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_type variant 1

anyOf variant 1: Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list..

- Value shape: string. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. Values: `"list"`, `"text"`.

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_group_type variant 2

anyOf variant 2.

- Value shape: null. Whether buyers choose from a list of modifiers or enter text. On create, inferred as text when text configuration is supplied, otherwise list. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifiers

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifiers variant 1

anyOf variant 1: Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices..

- Value shape: Array of [ModifierPreviousAttributes](../models/ModifierPreviousAttributes.md#modifierpreviousattributes). Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Choices in a list group. Only active modifiers whose set override's available is not false are offered to buyers. Text groups do not have choices. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.name

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Name of the modifier group shown to buyers..

- Value shape: string. Name of the modifier group shown to buyers. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the modifier group shown to buyers. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_fulfillment

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_fulfillment variant 1

anyOf variant 1: Whether selections from this group appear in fulfillment details unless overridden for a modifier set..

- Value shape: boolean. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_fulfillment variant 2

anyOf variant 2.

- Value shape: null. Whether selections from this group appear in fulfillment details unless overridden for a modifier set. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_receipt

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_receipt variant 1

anyOf variant 1: Whether selections from this group appear on buyer receipts unless overridden for a modifier set..

- Value shape: boolean. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.show_on_receipt variant 2

anyOf variant 2.

- Value shape: null. Whether selections from this group appear on buyer receipts unless overridden for a modifier set. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.status

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited..

- Value shape: string. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the modifier group or its modifiers last changed, as an RFC3339 timestamp..

- Value shape: string. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the modifier group or its modifiers last changed, as an RFC3339 timestamp. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.version

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Version of the modifier group and its modifiers..

- Value shape: integer. Version of the modifier group and its modifiers. Version of the modifier group and its modifiers. Format: `uint64`. minimum: `1`. 

### ModifierGroupArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Version of the modifier group and its modifiers. 

### ModifierGroupArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

