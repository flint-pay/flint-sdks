[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CatalogPricingPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `minimum_quantity` | Optional | integer or null or null | Minimum quantity of the applied break. Null when the base price applies. `minimum_quantity`: [declared alternatives](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributesminimum_quantity). |
| `price_list_id` | Optional | string or null or null | Price list providing the selected schedule. Null when the variant's default schedule applies. `price_list_id`: [declared alternatives](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributesprice_list_id). |
| `source` | Optional | string or null | Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`. `source`: [declared alternatives](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributessource). |

### CatalogPricingPreviousAttributes.minimum_quantity

### CatalogPricingPreviousAttributes.minimum_quantity variant 1

anyOf variant 1: Minimum quantity of the applied break. Null when the base price applies..

- Value shape: (integer or null). Minimum quantity of the applied break. Null when the base price applies. Minimum quantity of the applied break. Null when the base price applies. Format: `int64`. 

### CatalogPricingPreviousAttributes.minimum_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum quantity of the applied break. Null when the base price applies. 

### CatalogPricingPreviousAttributes.price_list_id

### CatalogPricingPreviousAttributes.price_list_id variant 1

anyOf variant 1: Price list providing the selected schedule. Null when the variant's default schedule applies..

- Value shape: (string or null). Price list providing the selected schedule. Null when the variant's default schedule applies. Price list providing the selected schedule. Null when the variant's default schedule applies. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. 

### CatalogPricingPreviousAttributes.price_list_id variant 2

anyOf variant 2.

- Value shape: null. Price list providing the selected schedule. Null when the variant's default schedule applies. 

### CatalogPricingPreviousAttributes.source

### CatalogPricingPreviousAttributes.source variant 1

anyOf variant 1: Source of the selected schedule. New source values may be added..

- Value shape: string. Source of the selected schedule. New source values may be added. Values: `"variant"`, `"price_list"`.

### CatalogPricingPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Source of the selected schedule. New source values may be added. 

