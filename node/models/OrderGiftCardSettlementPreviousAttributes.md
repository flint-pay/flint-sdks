[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlementPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the redemption paid toward the order, not counting the tip. `amount_money`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributesamount_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the redemption spent. `gift_card_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that posted the spend. `gift_card_redemption_id`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributesgift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. `last4`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the redemption that paid a tip. `tip_money`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributestip_money). |

### OrderGiftCardSettlementPreviousAttributes.amount_money

The amount the redemption paid toward the order, not counting the tip.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardSettlementPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardSettlementPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount the redemption paid toward the order, not counting the tip. 

### OrderGiftCardSettlementPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderGiftCardSettlementPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### OrderGiftCardSettlementPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### OrderGiftCardSettlementPreviousAttributes.gift_card_id

### OrderGiftCardSettlementPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the redemption spent..

- Value shape: string. ID of the gift card the redemption spent. ID of the gift card the redemption spent. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderGiftCardSettlementPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the redemption spent. 

### OrderGiftCardSettlementPreviousAttributes.gift_card_redemption_id

### OrderGiftCardSettlementPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that posted the spend..

- Value shape: string. ID of the redemption that posted the spend. ID of the redemption that posted the spend. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

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

### OrderGiftCardSettlementPreviousAttributes.tip_money

The part of the redemption that paid a tip.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderGiftCardSettlementPreviousAttributes.tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderGiftCardSettlementPreviousAttributes.tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of the redemption that paid a tip. 

### OrderGiftCardSettlementPreviousAttributes.tip_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### OrderGiftCardSettlementPreviousAttributes.tip_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

