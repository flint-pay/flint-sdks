[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlementPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount the redemption paid toward the order, not counting the tip. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the redemption spent. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributesInput.md#ordergiftcardsettlementpreviousattributesinputgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that posted the spend. `gift_card_redemption_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributesInput.md#ordergiftcardsettlementpreviousattributesinputgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. `last4`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributesInput.md#ordergiftcardsettlementpreviousattributesinputlast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the redemption that paid a tip. |

### OrderGiftCardSettlementPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_id

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card the redemption spent..

- Value shape: string. ID of the gift card the redemption spent. ID of the gift card the redemption spent. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the redemption spent. 

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_redemption_id

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that posted the spend..

- Value shape: string. ID of the redemption that posted the spend. ID of the redemption that posted the spend. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### OrderGiftCardSettlementPreviousAttributesInput.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that posted the spend. 

### OrderGiftCardSettlementPreviousAttributesInput.last4

### OrderGiftCardSettlementPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four characters of the code that paid. It stays the same if the gift card's code is later replaced..

- Value shape: string. Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. 

### OrderGiftCardSettlementPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. 

