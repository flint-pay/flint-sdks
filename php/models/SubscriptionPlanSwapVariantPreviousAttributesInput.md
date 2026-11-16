[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariantPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Primary image of the variant or its product. Omitted when there is none. |
| `name` | Optional | string or null | Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. `name`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinputname). |
| `product_id` | Optional | string or null | Identifier of the product the offered swap variant belongs to. `product_id`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinputproduct_id). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Option values that identify the variant, such as size and color. `selected_options`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the variant. Omitted when it has none. `sku`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinputsku). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. |
| `variant_id` | Optional | string or null | ID of the variant a subscriber can swap to. `variant_id`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributesInput.md#subscriptionplanswapvariantpreviousattributesinputvariant_id). |

### SubscriptionPlanSwapVariantPreviousAttributesInput.name

### SubscriptionPlanSwapVariantPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options..

- Value shape: string. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.product_id

### SubscriptionPlanSwapVariantPreviousAttributesInput.product_id variant 1

anyOf variant 1: Identifier of the product the offered swap variant belongs to..

- Value shape: string. Identifier of the product the offered swap variant belongs to. Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the offered swap variant belongs to. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.selected_options

### SubscriptionPlanSwapVariantPreviousAttributesInput.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput). Option values that identify the variant, such as size and color. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.sku

### SubscriptionPlanSwapVariantPreviousAttributesInput.sku variant 1

anyOf variant 1: SKU of the variant. Omitted when it has none..

- Value shape: string. SKU of the variant. Omitted when it has none. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant. Omitted when it has none. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.variant_id

### SubscriptionPlanSwapVariantPreviousAttributesInput.variant_id variant 1

anyOf variant 1: ID of the variant a subscriber can swap to..

- Value shape: string. ID of the variant a subscriber can swap to. ID of the variant a subscriber can swap to. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanSwapVariantPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant a subscriber can swap to. 

