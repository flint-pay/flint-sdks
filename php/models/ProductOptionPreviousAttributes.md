[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Option name, such as Size or Color. `name`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesname). |
| `option_id` | Optional | string or null | Stable identifier of the product option. `option_id`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesoption_id). |
| `position` | Optional | integer or null | Display order among the product's options, starting at zero. `position`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this option belongs to. `product_id`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesproduct_id). |
| `status` | Optional | string or null | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `values` | Optional | Array of [ProductOptionValuePreviousAttributes](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributes) or null | Values offered for this option, such as Small, Medium, and Large for Size. `values`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues). |

### ProductOptionPreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductOptionPreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductOptionPreviousAttributes.name

### ProductOptionPreviousAttributes.name variant 1

anyOf variant 1: Option name, such as Size or Color..

- Value shape: string. Option name, such as Size or Color. 

### ProductOptionPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Option name, such as Size or Color. 

### ProductOptionPreviousAttributes.option_id

### ProductOptionPreviousAttributes.option_id variant 1

anyOf variant 1: Stable identifier of the product option..

- Value shape: string. Stable identifier of the product option. 

### ProductOptionPreviousAttributes.option_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product option. 

### ProductOptionPreviousAttributes.position

### ProductOptionPreviousAttributes.position variant 1

anyOf variant 1: Display order among the product's options, starting at zero..

- Value shape: integer. Display order among the product's options, starting at zero. Display order among the product's options, starting at zero. Format: `int32`. 

### ProductOptionPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's options, starting at zero. 

### ProductOptionPreviousAttributes.product_id

### ProductOptionPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product this option belongs to..

- Value shape: string. Identifier of the product this option belongs to. 

### ProductOptionPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this option belongs to. 

### ProductOptionPreviousAttributes.status

### ProductOptionPreviousAttributes.status variant 1

anyOf variant 1: Option lifecycle status. Every active variant must select an active value for each active option..

- Value shape: string. Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductOptionPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Option lifecycle status. Every active variant must select an active value for each active option. 

### ProductOptionPreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductOptionPreviousAttributes.values

### ProductOptionPreviousAttributes.values variant 1

anyOf variant 1: Values offered for this option, such as Small, Medium, and Large for Size..

- Value shape: Array of [ProductOptionValuePreviousAttributes](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributes). Values offered for this option, such as Small, Medium, and Large for Size. 

### ProductOptionPreviousAttributes.values variant 2

anyOf variant 2.

- Value shape: null. Values offered for this option, such as Small, Medium, and Large for Size. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1created_at). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `option_value_id` | Optional | string or null | Stable identifier of the option value. `option_value_id`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1option_value_id). |
| `position` | Optional | integer or null | Display order among the option's values, starting at zero. `position`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesposition). |
| `status` | Optional | string or null | Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues-variant-1-fields-1updated_at). |
| `value` | Optional | string or null | Option value shown to buyers, such as Medium. `value`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesvalue). |

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When this resource was created, as an RFC3339 timestamp..

- Value shape: string. When this resource was created, as an RFC3339 timestamp. When this resource was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When this resource was created, as an RFC3339 timestamp. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.option_value_id

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.option_value_id variant 1

anyOf variant 1: Stable identifier of the option value..

- Value shape: string. Stable identifier of the option value. Stable identifier of the option value. Example: `"optv_01KEZF7C0078SVZ1T7PVRXQK7F"`. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.option_value_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the option value. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.position

Declared alternatives: [ProductOptionValuePreviousAttributes.position](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesposition).

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.status

Declared alternatives: [ProductOptionValuePreviousAttributes.status](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesstatus).

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.updated_at

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When this resource last changed, as an RFC3339 timestamp..

- Value shape: string. When this resource last changed, as an RFC3339 timestamp. When this resource last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this resource last changed, as an RFC3339 timestamp. 

### ProductOptionPreviousAttributes.values variant 1.[] fields 1.value

Declared alternatives: [ProductOptionValuePreviousAttributes.value](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesvalue).

