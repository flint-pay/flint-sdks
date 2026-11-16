[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundRecoveryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `destination` | Optional | string or null | Where the restored value went. Values: `"original"`, `"replacement"`. `destination`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributesInput.md#giftcardpurchaserefundrecoverypreviousattributesinputdestination). |
| `destinations` | Optional | Array of [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.md#giftcardpurchaserefundrecoverydestinationpreviousattributesinput) or null | The cards and loads that received the restored value. `destinations`: [declared alternatives](../models/GiftCardPurchaseRefundRecoveryPreviousAttributesInput.md#giftcardpurchaserefundrecoverypreviousattributesinputdestinations). |

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destination

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destination variant 1

anyOf variant 1: Where the restored value went..

- Value shape: string. Where the restored value went. Values: `"original"`, `"replacement"`.

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destination variant 2

anyOf variant 2.

- Value shape: null. Where the restored value went. 

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destinations

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destinations variant 1

anyOf variant 1: The cards and loads that received the restored value..

- Value shape: Array of [GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput](../models/GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput.md#giftcardpurchaserefundrecoverydestinationpreviousattributesinput). The cards and loads that received the restored value. 

### GiftCardPurchaseRefundRecoveryPreviousAttributesInput.destinations variant 2

anyOf variant 2.

- Value shape: null. The cards and loads that received the restored value. 

