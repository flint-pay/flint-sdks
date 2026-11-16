[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the amount the buyer paid that this refund or reversal returns. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `order_manual_reversal_id` | Optional | string or null | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. `order_manual_reversal_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesorder_manual_reversal_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of this entry in the load's purchase refunds. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributespurchase_refund_allocation_id). |
| `recovery` | Optional | Alternative shapes (see declared variants) | How the value was restored after the refund failed. `null` when no recovery happened. `recovery`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery). |
| `refund_id` | Optional | string or null or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. `refund_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrefund_id). |
| `status` | Optional | string or null | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. `status`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributes](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributes) or null | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesvalue_allocations). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unspent face value this entry removes from the load. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardPurchaseRefundAllocationPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id variant 1

anyOf variant 1: ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment..

- Value shape: string. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.order_manual_reversal_id variant 2

anyOf variant 2.

- Value shape: null. ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of this entry in the load's purchase refunds..

- Value shape: string. ID of this entry in the load's purchase refunds. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of this entry in the load's purchase refunds. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery

How the value was restored after the refund failed. `null` when no recovery happened.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `destination` | Conditional | string or null | Where the restored value went. Values: `"original"`, `"replacement"`. `destination`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery-variant-1destination). |
| `destinations` | Conditional | Array of object or null | The cards and loads that received the restored value. `destinations`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery-variant-1destinations). |

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1

anyOf GiftCardPurchaseRefundRecoveryPreviousAttributes.

- Optional: `created_at`, `destination`, `destinations`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 2

anyOf variant 2.

- Undeclared: `created_at`, `destination`, `destinations`.
- Value shape: null. How the value was restored after the refund failed. `null` when no recovery happened. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destination

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destination variant 1

anyOf variant 1: Where the restored value went..

- Value shape: string. Where the restored value went. Values: `"original"`, `"replacement"`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destination variant 2

anyOf variant 2.

- Value shape: null. Where the restored value went. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1

anyOf variant 1: The cards and loads that received the restored value..

- Value shape: Array of object. The cards and loads that received the restored value. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 2

anyOf variant 2.

- Value shape: null. The cards and loads that received the restored value. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery-variant-1destinations-variant-1-fields-1gift_card_load_id). |
| `value_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value restored to the card. |

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1.gift_card_id

Declared alternatives: [RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1.gift_card_id](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id).

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1.gift_card_load_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1.gift_card_load_id variant 1

anyOf variant 1: ID of the load that holds the value..

- Value shape: string. ID of the load that holds the value. ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load that holds the value. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id variant 1

anyOf variant 1: ID of the refund. `null` when the entry reverses a manual payment, which has no refund..

- Value shape: (string or null). ID of the refund. `null` when the entry reverses a manual payment, which has no refund. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. ID of the refund. `null` when the entry reverses a manual payment, which has no refund. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.status

### GiftCardPurchaseRefundAllocationPreviousAttributes.status variant 1

anyOf variant 1: Whether the refund has succeeded, failed, or is still pending..

- Value shape: string. Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`.

### GiftCardPurchaseRefundAllocationPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the refund has succeeded, failed, or is still pending. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 1

anyOf variant 1: Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load..

- Value shape: Array of [GiftCardPurchaseRefundValueAllocationPreviousAttributes](../models/GiftCardPurchaseRefundValueAllocationPreviousAttributes.md#giftcardpurchaserefundvalueallocationpreviousattributes). Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 2

anyOf variant 2.

- Value shape: null. Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. 

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value allocated to the card. |
| `gift_card_id` | Optional | string or null | ID of the gift card that received the value. `gift_card_id`: [declared alternatives](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id). |
| `gift_card_load_id` | Optional | string or null | ID of the load that holds the value. `gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery-variant-1destinations-variant-1-fields-1gift_card_load_id). |

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 1.[] fields 1.gift_card_id

Declared alternatives: [RefundTenderAllocationPreviousAttributes.destination_cards variant 1.[] fields 1.gift_card_id](../models/RefundTenderAllocationPreviousAttributes.md#refundtenderallocationpreviousattributesdestination_cards-variant-1-fields-1gift_card_id).

### GiftCardPurchaseRefundAllocationPreviousAttributes.value_allocations variant 1.[] fields 1.gift_card_load_id

Declared alternatives: [GiftCardPurchaseRefundAllocationPreviousAttributes.recovery variant 1.destinations variant 1.[] fields 1.gift_card_load_id](../models/GiftCardPurchaseRefundAllocationPreviousAttributes.md#giftcardpurchaserefundallocationpreviousattributesrecovery-variant-1destinations-variant-1-fields-1gift_card_load_id).

### GiftCardPurchaseRefundAllocationPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

