[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCombinesWithPatch







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item` | Optional | boolean | Allow line item promotions, subject to the evaluation order on Promotion. |
| `order` | Optional | boolean | Allow order promotions, subject to the evaluation order on Promotion. |
| `service_charge` | Optional | boolean | Allow service charge promotions, subject to the evaluation order on Promotion. |

### PromotionCombinesWithPatch variant 1

anyOf variant 1: Declared schema PromotionCombinesWithPatch. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values..

No additional constraints.

### PromotionCombinesWithPatch variant 2

anyOf variant 2: Declared schema PromotionCombinesWithRequest. Which promotion discount classes this promotion can combine with. Omitted classes default to true..

No additional constraints.

