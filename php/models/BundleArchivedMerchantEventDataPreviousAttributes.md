[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string or null | Barcode assigned to this sellable item. `barcode`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbarcode). |
| `bundle_id` | Optional | string or null | Stable identifier of the bundle. `bundle_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesbundle_id). |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories). |
| `component_count` | Optional | integer or null | Number of components in the bundle. `component_count`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponent_count). |
| `components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) or null | The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. `components`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the bundle shown to buyers. `description`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. `is_available_for_sale`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the bundle. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Bundle name shown to buyers. `name`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesname). |
| `sku` | Optional | string or null | Stock keeping unit assigned to this sellable item. `sku`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributessku). |
| `status` | Optional | string or null | Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesstatus). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Price charged for one unit, in the currency's smallest unit. |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion). |

### BundleArchivedMerchantEventDataPreviousAttributes.barcode

### BundleArchivedMerchantEventDataPreviousAttributes.barcode variant 1

anyOf variant 1: Barcode assigned to this sellable item..

- Value shape: string. Barcode assigned to this sellable item. 

### BundleArchivedMerchantEventDataPreviousAttributes.barcode variant 2

anyOf variant 2.

- Value shape: null. Barcode assigned to this sellable item. 

### BundleArchivedMerchantEventDataPreviousAttributes.bundle_id

### BundleArchivedMerchantEventDataPreviousAttributes.bundle_id variant 1

anyOf variant 1: Stable identifier of the bundle..

- Value shape: string. Stable identifier of the bundle. 

### BundleArchivedMerchantEventDataPreviousAttributes.bundle_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the bundle. 

### BundleArchivedMerchantEventDataPreviousAttributes.categories

### BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1

anyOf variant 1: Always present. Empty collections are returned as []..

- Value shape: Array of [CategoryReference](../models/CategoryReference.md#categoryreference). Always present. Empty collections are returned as []. 

### BundleArchivedMerchantEventDataPreviousAttributes.categories variant 2

anyOf variant 2.

- Value shape: null. Always present. Empty collections are returned as []. 

### BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BundleArchivedMerchantEventDataPreviousAttributes.component_count

### BundleArchivedMerchantEventDataPreviousAttributes.component_count variant 1

anyOf variant 1: Number of components in the bundle..

- Value shape: integer. Number of components in the bundle. Number of components in the bundle. Format: `int32`. 

### BundleArchivedMerchantEventDataPreviousAttributes.component_count variant 2

anyOf variant 2.

- Value shape: null. Number of components in the bundle. 

### BundleArchivedMerchantEventDataPreviousAttributes.components

### BundleArchivedMerchantEventDataPreviousAttributes.components variant 1

anyOf variant 1: The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components..

- Value shape: Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent). The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedMerchantEventDataPreviousAttributes.components variant 2

anyOf variant 2.

- Value shape: null. The bundle's components in position order, on every bundle response including list rows. [] only when the bundle has no components. 

### BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BundleArchivedMerchantEventDataPreviousAttributes.created_at

### BundleArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When this resource was created, as an RFC3339 timestamp..

- Value shape: string. When this resource was created, as an RFC3339 timestamp. When this resource was created, as an RFC3339 timestamp. Format: `date-time`. 

### BundleArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When this resource was created, as an RFC3339 timestamp. 

### BundleArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

### BundleArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`..

- Value shape: string. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### BundleArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the bundle's components. A bundle with no components reports `not_applicable`. 

### BundleArchivedMerchantEventDataPreviousAttributes.description

### BundleArchivedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Description of the bundle shown to buyers..

- Value shape: string. Description of the bundle shown to buyers. 

### BundleArchivedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the bundle shown to buyers. 

### BundleArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### BundleArchivedMerchantEventDataPreviousAttributes.images

### BundleArchivedMerchantEventDataPreviousAttributes.images variant 1

anyOf variant 1: Images attached to this resource, in display order. The first image is primary..

- Value shape: Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment). Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedMerchantEventDataPreviousAttributes.images variant 2

anyOf variant 2.

- Value shape: null. Images attached to this resource, in display order. The first image is primary. 

### BundleArchivedMerchantEventDataPreviousAttributes.images variant 1.[] fields 1

Field definitions: [BundleResponse.data.images[]](../models/BundleResponse.md#bundleresponsedataimages).

### BundleArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

### BundleArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered..

- Value shape: boolean. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the bundle can be sold now: it is `active`, has at least one component, every component's variant and product are `active`, and `delivery_configuration_status` isn't `action_required`. Stock isn't considered. 

### BundleArchivedMerchantEventDataPreviousAttributes.merchant_id

### BundleArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns this resource..

- Value shape: string. Identifier of the merchant that owns this resource. 

### BundleArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns this resource. 

### BundleArchivedMerchantEventDataPreviousAttributes.metadata

### BundleArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Caller-owned metadata stored on this resource..

- Value shape: Map of string. Caller-owned metadata stored on this resource. Map values: maxLength: `4096`. 

### BundleArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned metadata stored on this resource. 

### BundleArchivedMerchantEventDataPreviousAttributes.modifier_set_id

### BundleArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the bundle. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the bundle. `null` when no modifier set is attached. 

### BundleArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the bundle. `null` when no modifier set is attached. 

### BundleArchivedMerchantEventDataPreviousAttributes.name

### BundleArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Bundle name shown to buyers..

- Value shape: string. Bundle name shown to buyers. 

### BundleArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Bundle name shown to buyers. 

### BundleArchivedMerchantEventDataPreviousAttributes.sku

### BundleArchivedMerchantEventDataPreviousAttributes.sku variant 1

anyOf variant 1: Stock keeping unit assigned to this sellable item..

- Value shape: string. Stock keeping unit assigned to this sellable item. 

### BundleArchivedMerchantEventDataPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit assigned to this sellable item. 

### BundleArchivedMerchantEventDataPreviousAttributes.status

### BundleArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Bundle lifecycle status. Archived bundles remain readable and cannot be edited..

- Value shape: string. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### BundleArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Bundle lifecycle status. Archived bundles remain readable and cannot be edited. 

### BundleArchivedMerchantEventDataPreviousAttributes.updated_at

### BundleArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When this resource last changed, as an RFC3339 timestamp..

- Value shape: string. When this resource last changed, as an RFC3339 timestamp. When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. 

### BundleArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this resource last changed, as an RFC3339 timestamp. 

### BundleArchivedMerchantEventDataPreviousAttributes.version

### BundleArchivedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Current resource version. Send it as expected_version to reject a write if the resource has changed..

- Value shape: integer. Current resource version. Send it as expected_version to reject a write if the resource has changed. Current resource version. Send it as expected_version to reject a write if the resource has changed. Format: `uint64`. minimum: `0`. 

### BundleArchivedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Current resource version. Send it as expected_version to reject a write if the resource has changed. 

