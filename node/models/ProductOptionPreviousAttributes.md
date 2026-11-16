[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductOptionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When this resource was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned metadata stored on this resource. `metadata`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Option name, such as Size or Color. `name`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesname). |
| `option_id` | Optional | string or null | Stable identifier of the product option. `option_id`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesoption_id). |
| `position` | Optional | integer or null | Display order among the product's options, starting at zero. `position`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product this option belongs to. `product_id`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesproduct_id). |
| `status` | Optional | string or null | Option lifecycle status. Every active variant must select an active value for each active option. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesstatus). |
| `updated_at` | Optional | string or null | When this resource last changed, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at). |
| `values` | Optional | Array of [ProductOptionValuePreviousAttributes](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributes) or null | Values offered for this option, such as Small, Medium, and Large for Size. `values`: [declared alternatives](../models/ProductOptionPreviousAttributes.md#productoptionpreviousattributesvalues). |

### ProductOptionPreviousAttributes.created_at

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributescreated_at).

### ProductOptionPreviousAttributes.metadata

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesmetadata).

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

- Value shape: string. Stable identifier of the product option. Stable identifier of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. 

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

- Value shape: string. Identifier of the product this option belongs to. Identifier of the product this option belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

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

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesupdated_at).

### ProductOptionPreviousAttributes.values

### ProductOptionPreviousAttributes.values variant 1

anyOf variant 1: Values offered for this option, such as Small, Medium, and Large for Size..

- Value shape: Array of [ProductOptionValuePreviousAttributes](../models/ProductOptionValuePreviousAttributes.md#productoptionvaluepreviousattributes). Values offered for this option, such as Small, Medium, and Large for Size. 

### ProductOptionPreviousAttributes.values variant 2

anyOf variant 2.

- Value shape: null. Values offered for this option, such as Small, Medium, and Large for Size. 

