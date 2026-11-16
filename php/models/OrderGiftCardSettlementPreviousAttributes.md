[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlementPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the redemption paid toward the order, not counting the tip. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the redemption spent. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that posted the spend. `gift_card_redemption_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributesgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. `last4`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the redemption that paid a tip. |

### OrderGiftCardSettlementPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderGiftCardSettlementPreviousAttributes.gift_card_id

### OrderGiftCardSettlementPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the redemption spent..

- Value shape: string. ID of the gift card the redemption spent. 

### OrderGiftCardSettlementPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the redemption spent. 

### OrderGiftCardSettlementPreviousAttributes.gift_card_redemption_id

### OrderGiftCardSettlementPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that posted the spend..

- Value shape: string. ID of the redemption that posted the spend. 

### OrderGiftCardSettlementPreviousAttributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that posted the spend. 

### OrderGiftCardSettlementPreviousAttributes.last4

### OrderGiftCardSettlementPreviousAttributes.last4 variant 1

anyOf variant 1: Last four characters of the code that paid. It stays the same if the gift card's code is later replaced..

- Value shape: string. Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. 

### OrderGiftCardSettlementPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. 

