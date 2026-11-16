[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CategoryUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_bundle_count` | Optional | integer or null | Number of bundles currently assigned to the category. `assigned_bundle_count`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesassigned_bundle_count). |
| `assigned_product_count` | Optional | integer or null | Number of products currently assigned to the category. `assigned_product_count`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesassigned_product_count). |
| `category_id` | Optional | string or null | Stable identifier of the category. `category_id`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributescategory_id). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `description` | Optional | string or null | Description of the category. `description`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `handle` | Optional | string or null | Immutable handle used to assign this category to products and bundles. `handle`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributeshandle). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Category name shown to buyers. `name`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesname). |
| `status` | Optional | string or null | Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Values: `"active"`, `"deleted"`. `status`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesstatus). |
| `targeting_reference_count` | Optional | integer or null | Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. `targeting_reference_count`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributestargeting_reference_count). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion). |

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_bundle_count

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_bundle_count variant 1

anyOf variant 1: Number of bundles currently assigned to the category..

- Value shape: integer. Number of bundles currently assigned to the category. Number of bundles currently assigned to the category. Format: `int64`. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_bundle_count variant 2

anyOf variant 2.

- Value shape: null. Number of bundles currently assigned to the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_product_count

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_product_count variant 1

anyOf variant 1: Number of products currently assigned to the category..

- Value shape: integer. Number of products currently assigned to the category. Number of products currently assigned to the category. Format: `int64`. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.assigned_product_count variant 2

anyOf variant 2.

- Value shape: null. Number of products currently assigned to the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.category_id

### CategoryUpdatedMerchantEventDataPreviousAttributes.category_id variant 1

anyOf variant 1: Stable identifier of the category..

- Value shape: string. Stable identifier of the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.category_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### CategoryUpdatedMerchantEventDataPreviousAttributes.description

### CategoryUpdatedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Description of the category..

- Value shape: string. Description of the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the category. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### CategoryUpdatedMerchantEventDataPreviousAttributes.handle

### CategoryUpdatedMerchantEventDataPreviousAttributes.handle variant 1

anyOf variant 1: Immutable handle used to assign this category to products and bundles..

- Value shape: string. Immutable handle used to assign this category to products and bundles. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.handle variant 2

anyOf variant 2.

- Value shape: null. Immutable handle used to assign this category to products and bundles. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### CategoryUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### CategoryUpdatedMerchantEventDataPreviousAttributes.name

### CategoryUpdatedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Category name shown to buyers..

- Value shape: string. Category name shown to buyers. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Category name shown to buyers. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.status

### CategoryUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE..

- Value shape: string. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Values: `"active"`, `"deleted"`.

### CategoryUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.targeting_reference_count

### CategoryUpdatedMerchantEventDataPreviousAttributes.targeting_reference_count variant 1

anyOf variant 1: Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero..

- Value shape: integer. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Format: `int64`. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.targeting_reference_count variant 2

anyOf variant 2.

- Value shape: null. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### CategoryUpdatedMerchantEventDataPreviousAttributes.version

### CategoryUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter..

- Value shape: integer. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. 

### CategoryUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. 

