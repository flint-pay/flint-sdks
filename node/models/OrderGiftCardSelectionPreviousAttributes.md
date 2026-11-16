[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSelectionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The card's available balance. `available_money`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesavailable_money). |
| `gift_card_id` | Optional | string or null | ID of the gift card selected for the order. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesgift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributeslast4). |
| `requires_authorization` | Optional | boolean or null | Whether the card's current code must be applied again before the order can use it. `requires_authorization`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization). |

### OrderGiftCardSelectionPreviousAttributes.available_money

The card's available balance.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardSelectionPreviousAttributes.available_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardSelectionPreviousAttributes.available_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The card's available balance. 

### OrderGiftCardSelectionPreviousAttributes.available_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderGiftCardSelectionPreviousAttributes.available_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderGiftCardSelectionPreviousAttributes.gift_card_id

### OrderGiftCardSelectionPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card selected for the order..

- Value shape: string. ID of the gift card selected for the order. ID of the gift card selected for the order. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardSelectionPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card selected for the order. 

### OrderGiftCardSelectionPreviousAttributes.last4

### OrderGiftCardSelectionPreviousAttributes.last4 variant 1

anyOf variant 1: Last four characters of the card's current code..

- Value shape: string. Last four characters of the card's current code. 

### OrderGiftCardSelectionPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the card's current code. 

### OrderGiftCardSelectionPreviousAttributes.requires_authorization

### OrderGiftCardSelectionPreviousAttributes.requires_authorization variant 1

anyOf variant 1: Whether the card's current code must be applied again before the order can use it..

- Value shape: boolean. Whether the card's current code must be applied again before the order can use it. 

### OrderGiftCardSelectionPreviousAttributes.requires_authorization variant 2

anyOf variant 2.

- Value shape: null. Whether the card's current code must be applied again before the order can use it. 

