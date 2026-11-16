[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned metadata stored on this resource. |
| `name` | Optional | string or null | Option name, such as Size or Color. `name`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputname). |
| `option_id` | Optional | string or null | Stable identifier of the product option. `option_id`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputoption_id). |
| `position` | Optional | integer or null | Display order among the product's options, starting at zero. `position`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputposition). |
| `product_id` | Optional | string or null | Identifier of the product this option belongs to. `product_id`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputproduct_id). |
| `status` | Optional | string or null | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `values` | Optional | Array of [ProductOptionValuePreviousAttributesInput](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinput) or null | Values offered for this option, such as Small, Medium, and Large for Size. `values`: [declared alternatives](../models/ProductOptionPreviousAttributesInput.md#productoptionpreviousattributesinputvalues). |

### ProductOptionPreviousAttributesInput.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributescreated_at).

### ProductOptionPreviousAttributesInput.name

### ProductOptionPreviousAttributesInput.name variant 1

anyOf variant 1: Option name, such as Size or Color..

- Value shape: string. Option name, such as Size or Color. 

### ProductOptionPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Option name, such as Size or Color. 

### ProductOptionPreviousAttributesInput.option_id

### ProductOptionPreviousAttributesInput.option_id variant 1

anyOf variant 1: Stable identifier of the product option..

- Value shape: string. Stable identifier of the product option. Stable identifier of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. 

### ProductOptionPreviousAttributesInput.option_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the product option. 

### ProductOptionPreviousAttributesInput.position

### ProductOptionPreviousAttributesInput.position variant 1

anyOf variant 1: Display order among the product's options, starting at zero..

- Value shape: integer. Display order among the product's options, starting at zero. Display order among the product's options, starting at zero. Format: `int32`. 

### ProductOptionPreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the product's options, starting at zero. 

### ProductOptionPreviousAttributesInput.product_id

### ProductOptionPreviousAttributesInput.product_id variant 1

anyOf variant 1: Identifier of the product this option belongs to..

- Value shape: string. Identifier of the product this option belongs to. Identifier of the product this option belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ProductOptionPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this option belongs to. 

### ProductOptionPreviousAttributesInput.status

### ProductOptionPreviousAttributesInput.status variant 1

anyOf variant 1: Option lifecycle status. Every active variant must select an active value for each active option..

- Value shape: string. Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`.

### ProductOptionPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Option lifecycle status. Every active variant must select an active value for each active option. 

### ProductOptionPreviousAttributesInput.updated_at

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesupdated_at).

### ProductOptionPreviousAttributesInput.values

### ProductOptionPreviousAttributesInput.values variant 1

anyOf variant 1: Values offered for this option, such as Small, Medium, and Large for Size..

- Value shape: Array of [ProductOptionValuePreviousAttributesInput](../models/ProductOptionValuePreviousAttributesInput.md#productoptionvaluepreviousattributesinput). Values offered for this option, such as Small, Medium, and Large for Size. 

### ProductOptionPreviousAttributesInput.values variant 2

anyOf variant 2.

- Value shape: null. Values offered for this option, such as Small, Medium, and Large for Size. 

