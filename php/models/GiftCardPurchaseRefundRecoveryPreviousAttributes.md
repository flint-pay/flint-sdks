[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `destination` | Optional | string or null | Where the restored value went. Values: `"original"`, `"replacement"`. `destination`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributesdestination). |
| `destinations` | Optional | Array of [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributes) or null | The cards and loads that received the restored value. `destinations`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributesdestinations). |

### GiftCardPurchaseRefundRecoveryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destination

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destination variant 1

anyOf variant 1: Where the restored value went..

- Value shape: string. Where the restored value went. Values: `"original"`, `"replacement"`.

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destination variant 2

anyOf variant 2.

- Value shape: null. Where the restored value went. 

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1

anyOf variant 1: The cards and loads that received the restored value..

- Value shape: Array of [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributes). The cards and loads that received the restored value. 

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 2

anyOf variant 2.

- Value shape: null. The cards and loads that received the restored value. 

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributesdestinations-variant-1-fields-1gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value restored to the card. |

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1.[] fields 1.gift_card_id

Declared alternatives: [RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1.gift_card_id](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id).

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1.[] fields 1.gift_card_load_id

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1.[] fields 1.gift_card_load_id variant 1

anyOf variant 1: ID of the load that holds the value..

- Value shape: string. ID of the load that holds the value. ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundRecoveryPreviousAttributes.destinations variant 1.[] fields 1.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load that holds the value. 

