[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCombinesWithPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item` | Optional | boolean or null | Allow line item promotions, subject to the evaluation order on Promotion. `line_item`: [declared alternatives](../models/PromotionCombinesWithPreviousAttributesInput.md#promotioncombineswithpreviousattributesinputline_item). |
| `order` | Optional | boolean or null | Allow order promotions, subject to the evaluation order on Promotion. `order`: [declared alternatives](../models/PromotionCombinesWithPreviousAttributesInput.md#promotioncombineswithpreviousattributesinputorder). |
| `service_charge` | Optional | boolean or null | Allow service charge promotions, subject to the evaluation order on Promotion. `service_charge`: [declared alternatives](../models/PromotionCombinesWithPreviousAttributesInput.md#promotioncombineswithpreviousattributesinputservice_charge). |

### PromotionCombinesWithPreviousAttributesInput.line_item

### PromotionCombinesWithPreviousAttributesInput.line_item variant 1

anyOf variant 1: Allow line item promotions, subject to the evaluation order on Promotion..

- Value shape: boolean. Allow line item promotions, subject to the evaluation order on Promotion. 

### PromotionCombinesWithPreviousAttributesInput.line_item variant 2

anyOf variant 2.

- Value shape: null. Allow line item promotions, subject to the evaluation order on Promotion. 

### PromotionCombinesWithPreviousAttributesInput.order

### PromotionCombinesWithPreviousAttributesInput.order variant 1

anyOf variant 1: Allow order promotions, subject to the evaluation order on Promotion..

- Value shape: boolean. Allow order promotions, subject to the evaluation order on Promotion. 

### PromotionCombinesWithPreviousAttributesInput.order variant 2

anyOf variant 2.

- Value shape: null. Allow order promotions, subject to the evaluation order on Promotion. 

### PromotionCombinesWithPreviousAttributesInput.service_charge

### PromotionCombinesWithPreviousAttributesInput.service_charge variant 1

anyOf variant 1: Allow service charge promotions, subject to the evaluation order on Promotion..

- Value shape: boolean. Allow service charge promotions, subject to the evaluation order on Promotion. 

### PromotionCombinesWithPreviousAttributesInput.service_charge variant 2

anyOf variant 2.

- Value shape: null. Allow service charge promotions, subject to the evaluation order on Promotion. 

