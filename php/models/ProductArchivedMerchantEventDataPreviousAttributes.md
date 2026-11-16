[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_variant_count` | Optional | integer or null | Number of active variants belonging to the product. `active_variant_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesactive_variant_count). |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) or null | Always present. Empty collections are returned as []. `categories`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories). |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `default_variant` | Optional | [ProductVariant](../models/ProductVariant.md#productvariant) or null | The product's default variant, when one is set. |
| `default_variant_id` | Optional | string or null | Identifier of the variant chosen as this product's default, when one is set. `default_variant_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdefault_variant_id). |
| `delivery_configuration_status` | Optional | string or null | Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdelivery_configuration_status). |
| `description` | Optional | string or null | Description of the product shown to buyers. `description`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesdescription). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `images` | Optional | Array of [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Images attached to this resource, in display order. The first image is primary. `images`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages). |
| `is_available_for_sale` | Optional | boolean or null | Whether the product is active and has at least one active variant. `is_available_for_sale`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesis_available_for_sale). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns this resource. `merchant_id`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `modifier_set_id` | Optional | string or null or null | ID of the modifier set attached to the product. `null` when no modifier set is attached. `modifier_set_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesmodifier_set_id). |
| `name` | Optional | string or null | Product name shown to buyers. `name`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesname). |
| `option_count` | Optional | integer or null | Number of active options belonging to the product. `option_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoption_count). |
| `options` | Optional | Array of [ProductOption](../models/ProductOption.md#productoption) or null | Product options and their non-archived values. Empty when the product has no options. `options`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesoptions). |
| `price_range` | Optional | [ProductPriceRange](../models/ProductPriceRange.md#productpricerange) or null | Lowest and highest base unit prices among active variants, before any quantity price breaks. Omitted when there are no active variants or their currencies differ. |
| `product_id` | Optional | string or null | Stable identifier of the product. `product_id`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_id). |
| `product_type` | Optional | string or null | Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`. `product_type`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesproduct_type). |
| `status` | Optional | string or null | Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `variant_count` | Optional | integer or null | Number of non-archived variants belonging to the product. `variant_count`: [declared alternatives](../models/ProductArchivedMerchantEventDataPreviousAttributes.md#productarchivedmerchanteventdatapreviousattributesvariant_count). |
| `version` | Optional | integer or null | Current resource version. Send it as expected_version to reject a write if the resource has changed. `version`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion). |

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count variant 1

anyOf variant 1: Number of active variants belonging to the product..

- Value shape: integer. Number of active variants belonging to the product. Number of active variants belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.active_variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of active variants belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.categories

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.categories](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories).

### ProductArchivedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id variant 1

anyOf variant 1: Identifier of the variant chosen as this product's default, when one is set..

- Value shape: string. Identifier of the variant chosen as this product's default, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.default_variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the variant chosen as this product's default, when one is set. 

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Delivery readiness aggregated across the product's non-archived variants..

- Value shape: string. Delivery readiness aggregated across the product's non-archived variants. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### ProductArchivedMerchantEventDataPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Delivery readiness aggregated across the product's non-archived variants. 

### ProductArchivedMerchantEventDataPreviousAttributes.description

### ProductArchivedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Description of the product shown to buyers..

- Value shape: string. Description of the product shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Description of the product shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ProductArchivedMerchantEventDataPreviousAttributes.images

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.images](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesimages).

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the product is active and has at least one active variant..

- Value shape: boolean. Whether the product is active and has at least one active variant. 

### ProductArchivedMerchantEventDataPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the product is active and has at least one active variant. 

### ProductArchivedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.merchant_id](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmerchant_id).

### ProductArchivedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 1

anyOf variant 1: ID of the modifier set attached to the product. `null` when no modifier set is attached..

- Value shape: (string or null). ID of the modifier set attached to the product. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.modifier_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the modifier set attached to the product. `null` when no modifier set is attached. 

### ProductArchivedMerchantEventDataPreviousAttributes.name

### ProductArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Product name shown to buyers..

- Value shape: string. Product name shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Product name shown to buyers. 

### ProductArchivedMerchantEventDataPreviousAttributes.option_count

### ProductArchivedMerchantEventDataPreviousAttributes.option_count variant 1

anyOf variant 1: Number of active options belonging to the product..

- Value shape: integer. Number of active options belonging to the product. Number of active options belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.option_count variant 2

anyOf variant 2.

- Value shape: null. Number of active options belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.options

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1

anyOf variant 1: Product options and their non-archived values. Empty when the product has no options..

- Value shape: Array of [ProductOption](../models/ProductOption.md#productoption). Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 2

anyOf variant 2.

- Value shape: null. Product options and their non-archived values. Empty when the product has no options. 

### ProductArchivedMerchantEventDataPreviousAttributes.options variant 1.[] fields 1

Field definitions: [ProductResponse.data.options[]](../models/ProductResponse.md#productresponsedataoptions).

### ProductArchivedMerchantEventDataPreviousAttributes.product_id

### ProductArchivedMerchantEventDataPreviousAttributes.product_id variant 1

anyOf variant 1: Stable identifier of the product..

- Value shape: string. Stable identifier of the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.product_type

### ProductArchivedMerchantEventDataPreviousAttributes.product_type variant 1

anyOf variant 1: Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved..

- Value shape: string. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`.

### ProductArchivedMerchantEventDataPreviousAttributes.product_type variant 2

anyOf variant 2.

- Value shape: null. Kind of goods or service this product represents. New variants of digital products store digital_goods when line_item_tax_category is omitted; explicit categories are preserved. 

### ProductArchivedMerchantEventDataPreviousAttributes.status

### ProductArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Product lifecycle status. Archived products remain readable and cannot be edited..

- Value shape: string. Product lifecycle status. Archived products remain readable and cannot be edited. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Product lifecycle status. Archived products remain readable and cannot be edited. 

### ProductArchivedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count variant 1

anyOf variant 1: Number of non-archived variants belonging to the product..

- Value shape: integer. Number of non-archived variants belonging to the product. Number of non-archived variants belonging to the product. Format: `int32`. 

### ProductArchivedMerchantEventDataPreviousAttributes.variant_count variant 2

anyOf variant 2.

- Value shape: null. Number of non-archived variants belonging to the product. 

### ProductArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.version](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesversion).

