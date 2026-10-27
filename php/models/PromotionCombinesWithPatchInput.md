[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCombinesWithPatchInput

Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item` | Optional | boolean | Allow line item promotions, subject to the evaluation order on Promotion. |
| `order` | Optional | boolean | Allow order promotions, subject to the evaluation order on Promotion. |
| `service_charge` | Optional | boolean | Allow service charge promotions, subject to the evaluation order on Promotion. |

