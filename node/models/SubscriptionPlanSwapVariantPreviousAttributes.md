[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanSwapVariantPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Primary image of the variant or its product. Omitted when there is none. |
| `name` | Optional | string or null | Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. `name`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributesname). |
| `product_id` | Optional | string or null | Identifier of the product the offered swap variant belongs to. `product_id`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributesproduct_id). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color. `selected_options`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the variant. Omitted when it has none. `sku`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributessku). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. `unit_price_money`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributesunit_price_money). |
| `variant_id` | Optional | string or null | ID of the variant a subscriber can swap to. `variant_id`: [declared alternatives](../models/SubscriptionPlanSwapVariantPreviousAttributes.md#subscriptionplanswapvariantpreviousattributesvariant_id). |

### SubscriptionPlanSwapVariantPreviousAttributes.name

### SubscriptionPlanSwapVariantPreviousAttributes.name variant 1

anyOf variant 1: Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options..

- Value shape: string. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### SubscriptionPlanSwapVariantPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### SubscriptionPlanSwapVariantPreviousAttributes.product_id

### SubscriptionPlanSwapVariantPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product the offered swap variant belongs to..

- Value shape: string. Identifier of the product the offered swap variant belongs to. Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### SubscriptionPlanSwapVariantPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the offered swap variant belongs to. 

### SubscriptionPlanSwapVariantPreviousAttributes.selected_options

### SubscriptionPlanSwapVariantPreviousAttributes.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color. 

### SubscriptionPlanSwapVariantPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color. 

### SubscriptionPlanSwapVariantPreviousAttributes.sku

### SubscriptionPlanSwapVariantPreviousAttributes.sku variant 1

anyOf variant 1: SKU of the variant. Omitted when it has none..

- Value shape: string. SKU of the variant. Omitted when it has none. 

### SubscriptionPlanSwapVariantPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant. Omitted when it has none. 

### SubscriptionPlanSwapVariantPreviousAttributes.unit_price_money

Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SubscriptionPlanSwapVariantPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SubscriptionPlanSwapVariantPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. 

### SubscriptionPlanSwapVariantPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### SubscriptionPlanSwapVariantPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### SubscriptionPlanSwapVariantPreviousAttributes.variant_id

### SubscriptionPlanSwapVariantPreviousAttributes.variant_id variant 1

anyOf variant 1: ID of the variant a subscriber can swap to..

- Value shape: string. ID of the variant a subscriber can swap to. ID of the variant a subscriber can swap to. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### SubscriptionPlanSwapVariantPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant a subscriber can swap to. 

