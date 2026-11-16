[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionValuePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata). |
| `option_value_id` | Optional | string or null | Stable identifier of the option value. `option_value_id`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesoption_value_id). |
| `position` | Optional | integer or null | Display order among the option's values, starting at zero. `position`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesposition). |
| `status` | Optional | string or null | Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at). |
| `value` | Optional | string or null | Option value shown to buyers, such as Medium. `value`: [declared alternatives](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributesvalue). |

### ProductOptionValuePreviousAttributes.created_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.created_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescreated_at).

### ProductOptionValuePreviousAttributes.metadata

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.metadata](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesmetadata).

### ProductOptionValuePreviousAttributes.option_value_id

### ProductOptionValuePreviousAttributes.option_value_id variant 1

anyOf variant 1: Stable identifier of the option value..

- Value shape: string. Stable identifier of the option value. 

### ProductOptionValuePreviousAttributes.option_value_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the option value. 

### ProductOptionValuePreviousAttributes.position

### ProductOptionValuePreviousAttributes.position variant 1

anyOf variant 1: Display order among the option's values, starting at zero..

- Value shape: integer. Display order among the option's values, starting at zero. Display order among the option's values, starting at zero. Format: `int32`. 

### ProductOptionValuePreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the option's values, starting at zero. 

### ProductOptionValuePreviousAttributes.status

### ProductOptionValuePreviousAttributes.status variant 1

anyOf variant 1: Option value lifecycle status. Only active values can be newly selected by active variants..

- Value shape: string. Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductOptionValuePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Option value lifecycle status. Only active values can be newly selected by active variants. 

### ProductOptionValuePreviousAttributes.updated_at

Declared alternatives: [BundleArchivedMerchantEventDataPreviousAttributes.updated_at](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributesupdated_at).

### ProductOptionValuePreviousAttributes.value

### ProductOptionValuePreviousAttributes.value variant 1

anyOf variant 1: Option value shown to buyers, such as Medium..

- Value shape: string. Option value shown to buyers, such as Medium. 

### ProductOptionValuePreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. Option value shown to buyers, such as Medium. 

