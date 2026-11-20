[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryUpdatedInstalledMerchantsEvent

The `category.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"category.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CategoryUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CategoryCreatedInstalledMerchantsEvent.md#categorycreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributes). |

### CategoryUpdatedInstalledMerchantsEvent.data.object

Field definitions: [CategoryCreatedInstalledMerchantsEvent.data.object](../models/CategoryCreatedInstalledMerchantsEvent.md#categorycreatedinstalledmerchantseventdataobject).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_bundle_count` | Optional | integer or null | Number of bundles currently assigned to the category. `assigned_bundle_count`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesassigned_bundle_count). |
| `assigned_product_count` | Optional | integer or null | Number of products currently assigned to the category. `assigned_product_count`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesassigned_product_count). |
| `category_id` | Optional | string or null | Stable identifier of the category. `category_id`: [declared alternatives](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributescategory_id). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Description of the category. `description`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Immutable handle used to assign this category to products and bundles. `handle`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributeshandle). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Category name shown to buyers. `name`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesname). |
| `status` | Optional | string or null | Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Values: `"active"`, `"deleted"`. `status`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `targeting_reference_count` | Optional | integer or null | Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. `targeting_reference_count`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributestargeting_reference_count). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedInstalledMerchantsEvent.md#categoryupdatedinstalledmerchantseventdataprevious_attributesversion). |

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_bundle_count

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_bundle_count variant 1

anyOf variant 1: Number of bundles currently assigned to the category..

- Value shape: integer. Number of bundles currently assigned to the category. Number of bundles currently assigned to the category. Format: `int64`. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_bundle_count variant 2

anyOf variant 2.

- Value shape: null. Number of bundles currently assigned to the category. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_product_count

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_product_count variant 1

anyOf variant 1: Number of products currently assigned to the category..

- Value shape: integer. Number of products currently assigned to the category. Number of products currently assigned to the category. Format: `int64`. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.assigned_product_count variant 2

anyOf variant 2.

- Value shape: null. Number of products currently assigned to the category. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.category_id

Declared alternatives: [CategoryReferencePreviousAttributes.category_id](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributescategory_id).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.description

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Description of the category..

- Value shape: string. Description of the category. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the category. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.handle

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.handle variant 1

anyOf variant 1: Immutable handle used to assign this category to products and bundles..

- Value shape: string. Immutable handle used to assign this category to products and bundles. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.handle variant 2

anyOf variant 2.

- Value shape: null. Immutable handle used to assign this category to products and bundles. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.name

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Category name shown to buyers..

- Value shape: string. Category name shown to buyers. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Category name shown to buyers. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE..

- Value shape: string. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Values: `"active"`, `"deleted"`.

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.targeting_reference_count

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.targeting_reference_count variant 1

anyOf variant 1: Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero..

- Value shape: integer. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Format: `int64`. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.targeting_reference_count variant 2

anyOf variant 2.

- Value shape: null. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at).

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.version

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter..

- Value shape: integer. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. 

### CategoryUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. 

### CategoryUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

