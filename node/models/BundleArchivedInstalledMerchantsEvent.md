[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedInstalledMerchantsEvent

The `bundle.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"bundle.archived"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### BundleArchivedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookBundle](../models/WebhookBundle.md#webhookbundle) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`. `object`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributes). |

### BundleArchivedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.

Field definitions: [shared fields](WebhookBundle.md#webhookbundle).

### BundleArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

### BundleArchivedInstalledMerchantsEvent.data.object.unit_price_money

Field definitions: [Bundle.unit_price_money](../models/Bundle.md#bundleunit_price_money).

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbarcode). |
| `bundle_id` | Optional | string or null | Stable identifier of the bundle. `bundle_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescategories). |
| `component_count` | Optional | integer or null | Number of components in the bundle. `component_count`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescomponent_count). |
| `components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. `components`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescomponents). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the bundle shown to buyers. `description`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. `is_available_for_sale`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `modifier_set_id` | Optional | string or null | ID of the modifier set attached to the bundle. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmodifier_set_id). |
| `name` | Optional | string or null | Bundle name shown to buyers. `name`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesname). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributessku). |
| `status` | Optional | string or null | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesstatus). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price charged for one unit, in the currency's smallest unit. `unit_price_money`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesunit_price_money). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesversion). |

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.barcode

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.barcode variant 1

anyOf variant 1: Barcode assigned to this sellable item..

- Value shape: string. Barcode assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.barcode variant 2

anyOf variant 2.

- Value shape: null. Barcode assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.bundle_id

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.bundle_id variant 1

anyOf variant 1: Stable identifier of the bundle..

- Value shape: string. Stable identifier of the bundle. Stable identifier of the bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the bundle. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.categories

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.categories variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Always present. Empty collections are returned as []. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.categories variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.component_count

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.component_count variant 1

anyOf variant 1: Number of components in the bundle..

- Value shape: integer. Number of components in the bundle. Number of components in the bundle. Format: `int32`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.component_count variant 2

anyOf variant 2.

- Value shape: null. Number of components in the bundle. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.components

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.components variant 1

anyOf variant 1: The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.components variant 2

anyOf variant 2.

- Value shape: null. The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When this resource was created, as an RFC3339 timestamp..

- Value shape: string. When this resource was created, as an RFC3339 timestamp. When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When this resource was created, as an RFC3339 timestamp. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`..

- Value shape: string. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.description

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Description of the bundle shown to buyers..

- Value shape: string. Description of the bundle shown to buyers. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the bundle shown to buyers. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system..

- Value shape: string. Caller-owned identifier for this resource in an external system. Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.images

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.images variant 1

anyOf variant 1: Images attached to this resource, in display order. The first image is primary..

- Value shape: Array of [ImageAttachmentPreviousAttributes](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributes). Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.images variant 2

anyOf variant 2.

- Value shape: null. Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale variant 1

anyOf variant 1: Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered..

- Value shape: boolean. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this resource..

- Value shape: string. Identifier of the merchant that owns this resource. Identifier of the merchant that owns this resource. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this resource. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned metadata stored on this resource. Map values: maxLength: `4096`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata stored on this resource. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the bundle. `null` when no modifier set is attached..

- Value shape: string. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. Example: `"ms_01KEZF7C007EWZVVFAWVJJM8NR"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.name

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Bundle name shown to buyers..

- Value shape: string. Bundle name shown to buyers. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Bundle name shown to buyers. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.sku

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.sku variant 1

anyOf variant 1: Stock keeping unit assigned to this sellable item..

- Value shape: string. Stock keeping unit assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit assigned to this sellable item. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.status

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Bundle lifecycle status. Archived bundles remain readable and cannot be edited..

- Value shape: string. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money

Price charged for one unit, in the currency's smallest unit.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Price charged for one unit, in the currency's smallest unit. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When this resource last changed, as an RFC3339 timestamp..

- Value shape: string. When this resource last changed, as an RFC3339 timestamp. When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this resource last changed, as an RFC3339 timestamp. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.version

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Current resource version. Send it as expected_version to reject a write if the resource has changed..

- Value shape: integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. 

### BundleArchivedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current resource version. Send it as expected_version to reject a write if the resource has changed. 

### BundleArchivedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

