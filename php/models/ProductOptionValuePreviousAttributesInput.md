[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionValuePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this resource. |
| `option_value_id` | Optional | string or null | Stable identifier of the option value. `option_value_id`: [declared alternatives](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinputoption_value_id). |
| `position` | Optional | integer or null | Display order among the option's values, starting at zero. `position`: [declared alternatives](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinputposition). |
| `status` | Optional | string or null | Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `value` | Optional | string or null | Option value shown to buyers, such as Medium. `value`: [declared alternatives](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinputvalue). |

### ProductOptionValuePreviousAttributesInput.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ProductOptionValuePreviousAttributesInput.option_value_id

### ProductOptionValuePreviousAttributesInput.option_value_id variant 1

anyOf variant 1: Stable identifier of the option value..

- Value shape: string. Stable identifier of the option value. Stable identifier of the option value. Example: `"optv_01KEZF7C0078SVZ1T7PVRXQK7F"`. 

### ProductOptionValuePreviousAttributesInput.option_value_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the option value. 

### ProductOptionValuePreviousAttributesInput.position

### ProductOptionValuePreviousAttributesInput.position variant 1

anyOf variant 1: Display order among the option's values, starting at zero..

- Value shape: integer. Display order among the option's values, starting at zero. Display order among the option's values, starting at zero. Format: `int32`. 

### ProductOptionValuePreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the option's values, starting at zero. 

### ProductOptionValuePreviousAttributesInput.status

### ProductOptionValuePreviousAttributesInput.status variant 1

anyOf variant 1: Option value lifecycle status. Only active values can be newly selected by active variants..

- Value shape: string. Option value lifecycle status. Only active values can be newly selected by active variants. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductOptionValuePreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Option value lifecycle status. Only active values can be newly selected by active variants. 

### ProductOptionValuePreviousAttributesInput.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ProductOptionValuePreviousAttributesInput.value

### ProductOptionValuePreviousAttributesInput.value variant 1

anyOf variant 1: Option value shown to buyers, such as Medium..

- Value shape: string. Option value shown to buyers, such as Medium. 

### ProductOptionValuePreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. Option value shown to buyers, such as Medium. 

