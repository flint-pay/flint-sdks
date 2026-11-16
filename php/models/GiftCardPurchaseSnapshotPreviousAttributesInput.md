[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseSnapshotPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [GiftCardProductConfigurationPreviousAttributesInput](../models/GiftCardProductConfigurationPreviousAttributesInput.md#giftcardproductconfigurationpreviousattributesinput) or null | The gift card offer's terms as they were when the line was added: price mode, face value, and any custom amount bounds. |
| `consideration_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price paid per unit for this gift card purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `face_value_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Gift card value issued per unit for this purchase. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |
| `recipient` | Optional | [GiftCardPurchaseRecipientPreviousAttributesInput](../models/GiftCardPurchaseRecipientPreviousAttributesInput.md#giftcardpurchaserecipientpreviousattributesinput) or null | Who receives the gift card. `null` when no recipient was set. |
| `reference_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Reference price per unit from the frozen gift card offer. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. |

