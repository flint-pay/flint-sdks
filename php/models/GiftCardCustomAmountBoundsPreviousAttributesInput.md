[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Largest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `minimum_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Smallest gift card value buyers can choose, in the face value currency. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |

