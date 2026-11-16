[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `destination` | Optional | string or null | Where the restored value went. Values: `"original"`, `"replacement"`. `destination`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributesdestination). |
| `destinations` | Optional | Array of [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes.md#giftcardpurchaserefundrecoverydestinationpreviousattributes) or null | The cards and loads that received the restored value. `destinations`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributes.md#giftcardpurchaserefundrecoverypreviousattributesdestinations). |

### GiftCardPurchaseRefundRecoveryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

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

