[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHoldPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the pending purchase refund entry that holds the value. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributespurchase_refund_allocation_id). |
| `refund_id` | Optional | string or null | ID of the pending refund that holds the value. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesrefund_id). |
| `root_gift_card_id` | Optional | string or null | ID of the original card whose purchase is being refunded. `root_gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesroot_gift_card_id). |
| `root_gift_card_load_id` | Optional | string or null | ID of the original funding load that is being refunded. `root_gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesroot_gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent value held. `value_money`: [declared alternatives](../models/GiftCardPurchaseRefundValueHoldPreviousAttributes.md#giftcardpurchaserefundvalueholdpreviousattributesvalue_money). |

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the pending purchase refund entry that holds the value..

- Value shape: string. ID of the pending purchase refund entry that holds the value. ID of the pending purchase refund entry that holds the value. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending purchase refund entry that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id variant 1

anyOf variant 1: ID of the pending refund that holds the value..

- Value shape: string. ID of the pending refund that holds the value. ID of the pending refund that holds the value. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pending refund that holds the value. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id variant 1

anyOf variant 1: ID of the original card whose purchase is being refunded..

- Value shape: string. ID of the original card whose purchase is being refunded. ID of the original card whose purchase is being refunded. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original card whose purchase is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id variant 1

anyOf variant 1: ID of the original funding load that is being refunded..

- Value shape: string. ID of the original funding load that is being refunded. ID of the original funding load that is being refunded. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.root_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original funding load that is being refunded. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.value_money

The unspent value held.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardPurchaseRefundValueHoldPreviousAttributes.value_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardPurchaseRefundValueHoldPreviousAttributes.value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The unspent value held. 

### GiftCardPurchaseRefundValueHoldPreviousAttributes.value_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardPurchaseRefundValueHoldPreviousAttributes.value_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

