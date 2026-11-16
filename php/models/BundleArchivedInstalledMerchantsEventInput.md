[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedInstalledMerchantsEventInput

The `bundle.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"bundle.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### BundleArchivedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookBundleInput](../models/WebhookBundleInput.md#webhookbundleinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. `object`: [field definitions](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributes). |

### BundleArchivedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.

Field definitions: [shared fields](WebhookBundleInput.md#webhookbundleinput).

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbarcode). |
| `bundle_id` | Optional | string or null | Stable identifier of the bundle. `bundle_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescategories). |
| `component_count` | Optional | integer or null | Number of components in the bundle. `component_count`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescomponent_count). |
| `components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. `components`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescomponents). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the bundle shown to buyers. `description`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. `is_available_for_sale`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this resource. |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the bundle. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Bundle name shown to buyers. `name`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesname). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributessku). |
| `status` | Optional | string or null | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price charged for one unit, in the currency's smallest unit. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesversion). |

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode variant 1

anyOf variant 1: Barcode assigned to this sellable item..

- Value shape: string. Barcode assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.barcode variant 2

anyOf variant 2.

- Value shape: null. Barcode assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.bundle_id

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.bundle_id variant 1

anyOf variant 1: Stable identifier of the bundle..

- Value shape: string. Stable identifier of the bundle. Stable identifier of the bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the bundle. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.categories

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.categories variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput). Always present. Empty collections are returned as []. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.categories variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.component_count

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.component_count variant 1

anyOf variant 1: Number of components in the bundle..

- Value shape: integer. Number of components in the bundle. Number of components in the bundle. Format: `int32`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.component_count variant 2

anyOf variant 2.

- Value shape: null. Number of components in the bundle. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.components

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.components variant 1

anyOf variant 1: The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.components variant 2

anyOf variant 2.

- Value shape: null. The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When this resource was created, as an RFC3339 timestamp..

- Value shape: string. When this resource was created, as an RFC3339 timestamp. When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When this resource was created, as an RFC3339 timestamp. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`..

- Value shape: string. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.description

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 1

anyOf variant 1: Description of the bundle shown to buyers..

- Value shape: string. Description of the bundle shown to buyers. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the bundle shown to buyers. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system..

- Value shape: string. Caller-owned identifier for this resource in an external system. Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.images

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.images variant 1

anyOf variant 1: Images attached to this resource, in display order. The first image is primary..

- Value shape: Array of [ImageAttachmentPreviousAttributesInput](../models/ImageAttachmentPreviousAttributesInput.md#imageattachmentpreviousattributesinput). Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.images variant 2

anyOf variant 2.

- Value shape: null. Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 1

anyOf variant 1: Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered..

- Value shape: boolean. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this resource..

- Value shape: string. Identifier of the merchant that owns this resource. Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this resource. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the bundle. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the bundle. `null` when no modifier set is attached. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.name

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 1

anyOf variant 1: Bundle name shown to buyers..

- Value shape: string. Bundle name shown to buyers. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Bundle name shown to buyers. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.sku

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.sku variant 1

anyOf variant 1: Stock keeping unit assigned to this sellable item..

- Value shape: string. Stock keeping unit assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.status

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Bundle lifecycle status. Archived bundles remain readable and cannot be edited..

- Value shape: string. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When this resource last changed, as an RFC3339 timestamp..

- Value shape: string. When this resource last changed, as an RFC3339 timestamp. When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this resource last changed, as an RFC3339 timestamp. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Current resource version. Send it as expected_version to reject a write if the resource has changed..

- Value shape: integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. 

### BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current resource version. Send it as expected_version to reject a write if the resource has changed. 

### BundleArchivedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

